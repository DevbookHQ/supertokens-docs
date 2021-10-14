module.exports = {
  sidebar: [
    "installation",
    "init",
    "getusercount",
    "getusersnewestfirst",
    "getusersoldestfirst",
    {
      type: 'category',
      label: 'Emailpassword',
      items: [
        "emailpassword/init",
        "emailpassword/signup",
        "emailpassword/signin",
        "emailpassword/getuserbyid",
        "emailpassword/getuserbyemail",
        "emailpassword/createresetpasswordtoken",
        "emailpassword/resetpasswordusingtoken",
        "emailpassword/updateemailorpassword",
        {
          type: 'category',
          label: 'Override',
          items: [
            "emailpassword/override/apis",
            "emailpassword/override/functions"
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Email verification',
      items: [
        "emailverification/createemailverificationtoken",
        "emailverification/verifyemailusingtoken",
        "emailverification/isemailverified",
        "emailverification/revokeemailverificationtokens",
        "emailverification/unverifyemail",
        {
          type: 'category',
          label: 'Override',
          items: [
            "emailverification/override/apis",
            "emailverification/override/functions"
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Session',
      items: [
        "session/init",
        "session/createnewsession",
        "session/getsession",
        "session/refreshsession",
        "session/revokeallsessionsforuser",
        "session/getallsessionhandlesforuser",
        "session/revokesesion",
        "session/revokemultiplesessions",
        "session/getsessiondata",
        "session/updatesessiondata",
        "session/getjwtpayload",
        "session/updatejwtpayload",
        "session/getSessionInformation",
        {
          type: 'category',
          label: 'SessionContainer',
          items: [
            "session/sessioncontainer/getuserid",
            "session/sessioncontainer/getsessiondata",
            "session/sessioncontainer/updatesessiondata",
            "session/sessioncontainer/getjwtpayload",
            "session/sessioncontainer/updatejwtpayload",
            "session/sessioncontainer/revokesession",
            "session/sessioncontainer/getTimeCreated",
            "session/sessioncontainer/getExpiry",
          ],
        },
        {
          type: 'category',
          label: 'Override',
          items: [
            "session/override/apis",
            "session/override/functions"
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Thirdparty',
      items: [
        "thirdparty/init",
        {
          type: 'category',
          label: 'Providers',
          items: [
            "thirdparty/providers/google",
            "thirdparty/providers/facebook",
            "thirdparty/providers/github",
            "thirdparty/providers/apple",
            "thirdparty/providers/custom"
          ],
        },
        "thirdparty/signinup",
        "thirdparty/getuserbyid",
        "thirdparty/getusersbyemail",
        "thirdparty/getuserbythirdpartyinfo",
        {
          type: 'category',
          label: 'Override',
          items: [
            "thirdparty/override/apis",
            "thirdparty/override/functions"
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'ThirdPartyEmailPassword',
      items: [
        "thirdpartyemailpassword/about",
        "thirdpartyemailpassword/init",
        {
          type: 'category',
          label: 'Providers',
          items: [
            "thirdpartyemailpassword/providers/about"
          ],
        },
        {
          type: 'category',
          label: 'Override',
          items: [
            "thirdpartyemailpassword/override/apis",
            "thirdpartyemailpassword/override/functions"
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'JWT',
      items: [
        "jwt/init",
        "jwt/createJWT",
        "jwt/getJWKS",
        {
          type: 'category',
          label: 'Override',
          items: [
            "jwt/override/apis",
            "jwt/override/functions"
          ],
        },
      ]
    }
  ],
};
