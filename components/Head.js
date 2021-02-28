import Head from 'next/head'
//Todo:
//make these tags dynamic, changing content related to the current page
const HeadTags = () => {
  return (
    <Head>
      <meta charSet='UTF-8'></meta>
      <meta
        name='viewport'
        content='width=device-width, height=device-height, initial-scale=1, minimum-scale=1'
      ></meta>
      <meta name='Description' content="Leo Polanco's portfolio page"></meta>
      <meta name='language' content='en'></meta>
      <meta name='robots' content='index, follow'></meta>
      <meta property='og:site_name' content='Leo Polanco'></meta>
      <meta property='og:type' content='website'></meta>
      <meta
        property='og:description'
        content={`Leo Polanco is Fullstack Developer from Venezuela who has been 
        working with people from all over the world, solving tech related problems and creating fully functional web sites`}
      ></meta>
      <meta name='twitter:title' content='Leo Polanco'></meta>
      <meta
        name='twitter:description'
        content="Leo Polanco's portfolio page"
      ></meta>
      <title>Leo Polanco</title>
      <link rel='icon' href='/assets/images/favicon.png' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
    </Head>
  )
}

export default HeadTags
