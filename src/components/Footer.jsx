function Footer() {
  return (
    <footer>
      <div>
        <div className='footerImagesRoot'>
          <img className='youtubeIconRoot' alt='YouTube icon' src={'/static/images/youtube.svg'} />
          <img alt='TikTok icon' src={'/static/images/tiktok.svg'} />
          <img alt='Instagram icon' src={'/static/images/instagram.svg'} />
          <img alt='X/Twitter icon' src={'/static/images/x.svg'} />
        </div>
        <div className='footerLogoRoot'>
          <img alt='Scrollarship logo' src={'/static/images/logoName.svg'} />
        </div>
        <div className='footerIncRoot'>
          <p>© 2026 Scrollarship, Inc. All rights reserved. </p>
        </div>
      </div>
      <div className='footernavigationRoot'>
        <p><b>Navigation</b></p>
        <p>Home</p>
        <p>Account</p>
        <p>Explore</p>
      </div>
      <div className='footercomplianceRoot'>
        <p><b>Compliance</b></p>
        <p>Privacy Policy</p>
        <p>Terms & conditions</p>
      </div>
    </footer>
  )
}

export default Footer
