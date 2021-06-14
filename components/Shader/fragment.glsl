uniform float time;
uniform vec4 resolution;
uniform vec2 mouse;

varying vec2 vUv;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}

float sphere(vec3 p) {
    return length(p) - 0.5;
}

float SineCrazy(vec3 p) {
    return 1. - (sin(p.x) + sin(p.y) + sin(p.z))/3.;
}

float scene(vec3 p) {
    vec3 p1 = rotate(p, vec3(1.,1.,1.), time/10.);
    float scale = 10. + 20.*sin(time/12.);
    return max( sphere(p1), (0.85 - SineCrazy(p1*scale))/scale);
}
vec3 getNormal(vec3 p){
	
	vec2 o = vec2(0.001,0.);
	// 0.001,0,0
	return normalize(
		vec3(
			scene(p + o.xyy) - scene(p - o.xyy),
			scene(p + o.yxy) - scene(p - o.yxy),
			scene(p + o.yyx) - scene(p - o.yyx)
		)
	);
}


vec3 GetColor(float amount) {
    vec3 col = 0.5 + 0.5 * cos(6.28319 * (vec3(0.2,0.0,0.0) + amount * vec3(1.0, 1.0, 0.5)));
    return col * amount;
}

vec3 GetColorAmount(vec3 p) {
    float amount = clamp((1.5-length(p))/2.,0.,1.);
    vec3 col = 0.5 + 0.5 * cos(6.28319 * (vec3(0.2,0.0,0.0) + amount * vec3(1.0, 1.0, 0.5)));
    return col * amount;
}

void main() {    
    vec2 p = vUv - vec2(0.5);

    p.x+=mouse.x*0.1;
    p.y+=mouse.y*0.1;

    vec3 camPos = vec3(0.,0.,2.+0.5*sin(time/4.));

    vec3 ray = normalize(vec3(p,-1.));

    vec3 rayPos = camPos;

    float curDist = 0.;
    float rayLen = 0.;

    vec3 light = vec3(-1.,1.,1.);
    
    vec3 color = vec3(0.);

    for(int i = 0;i<=64;i++) {
        curDist = scene(rayPos);
        rayLen += 0.6*curDist;
        rayPos = camPos + ray*rayLen;

        if(abs(curDist)<0.001 || rayLen>10.){
            vec3 n = getNormal(rayPos);

            float diff = dot(n, light);

            break;
        }
        color += 0.04*GetColorAmount(rayPos);
    }

    gl_FragColor = vec4(color,1.);
    gl_FragColor.r -= abs(mouse.x)*0.1;
}