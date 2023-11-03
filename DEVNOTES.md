# Uploading to SiteGround How-to
Note:  Siteground uses an Apache server.  Since this site is a SPA with client-side navigation via React-Router, there are no pages other than index.html supported by static JS/CSS files.  There is a .htaccess file that tells the Apache server to point to index.html, even as the URL changes with site navigation.  Don't touch this file!

* In local directory:  If there is a build directory in the project root, delete it.  In terminal, 
```
npm run build
```
* Using FTP client (Filezilla), navigate to the site's public_html directory.  Delete the following files/directories:
  - asset-manifest.json
  - index.html
  - manifest.json
  - static/css
  - static/js
  - static/media

* Confirm changes show up in browser.  If not:
  - Login to Siteground
  - Navigate to site tools for EspyWebDesigns.com
  - Navigate to Speed > Caching > Dynamic Cache
  - Click the broom icon for "espywebdesign.com" (flush cache)

* Changes should now appear in your browser