/**
 * 
 * input:
 * www.eargo.com/blog/engineering/software/ios
 * 
 * output:
 * www.ear.go/8X2F3N
 * 
 * 
 */

 /**
  * 
  * hashing function: "/blog/..." => "XXXXXX"
  * 
  * domain name:
  * 
  * eargo.com -> ear.go
  * 
  * convert original domain -> my shortened registered domain, i.e ear.go
  */


  function shortenURL(url) {


    const originalDomainName = url.substring(0, url.firstIndexOf('/')); // output: www.eargo.com
    const urlPath = url.substring(url.firstIndexOf('/'), url.length - 1); // blog/engineering/software/ios

    const shortenedDomainName = getShortenedDomain(originalDomainName); // assume that getShortenedDomain() is provided

    function hash(urlPath) {



      return hashedCode; // 6-digit heximal characters
    }

    /**
     * XXXXXX both numeric and alphabet
     * 
     * numeric: 0 - 9 -> 10 values
     * alphabet: a - z -> 26 values
     * 
     * 64
     * 
     * 3600 * 24 * 30 ~ 2.5 mil
     * 
     * 500 mil => 2.5 mil seconds
     * 
     * 500 / 2.5 = 200 queries / sec
     * 
     * 
     * 
     */




  }