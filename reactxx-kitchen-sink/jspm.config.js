SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/"
    }
  },
  packages: {
    "": {
      "defaultExtension": "js"
    }
  },
  map: {
    "reactxx-stateman": "npm:reactxx-stateman@0.1.73"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "reactxx-primitives": "npm:reactxx-primitives@0.1.1",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "core-js": "npm:core-js@2.5.3",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fela": "npm:fela@6.1.7",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "jss": "npm:jss@9.8.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "react": "npm:react@16.3.2",
    "react-dom": "npm:react-dom@16.3.2",
    "reactxx": "npm:reactxx@0.1.59",
    "reactxx-activable": "npm:reactxx-activable@0.1.6",
    "reactxx-animation": "npm:reactxx-animation@0.1.7",
    "reactxx-basic": "npm:reactxx-basic@0.1.18",
    "reactxx-fela": "npm:reactxx-fela@0.1.17",
    "reactxx-mdi": "npm:reactxx-mdi@0.1.67",
    "reactxx-mediaq": "npm:reactxx-mediaq@0.1.7",
    "reactxx-mui": "npm:reactxx-mui@0.1.17",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "tslib": "npm:tslib@1.9.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:prop-types@15.6.1": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:fbjs@0.8.16": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "core-js": "npm:core-js@1.2.7",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.18",
        "setimmediate": "npm:setimmediate@1.0.5",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "node-fetch": "npm:node-fetch@1.7.3",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.1.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.2"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.23"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.6",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:buffer@5.1.0": {
      "map": {
        "base64-js": "npm:base64-js@1.3.0",
        "ieee754": "npm:ieee754@1.1.11"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "public-encrypt": "npm:public-encrypt@4.0.2",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "randombytes": "npm:randombytes@2.0.6",
        "diffie-hellman": "npm:diffie-hellman@5.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "randomfill": "npm:randomfill@1.0.4"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:randombytes@2.0.6": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.6"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:fela-plugin-unit@5.0.16": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:fela-plugin-lvha@5.0.15": {
      "map": {
        "fast-loops": "npm:fast-loops@1.0.0"
      }
    },
    "npm:css-in-js-utils@2.0.0": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
      }
    },
    "npm:fela-plugin-prefixer@5.0.18": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "isobject": "npm:isobject@3.0.1",
        "fast-loops": "npm:fast-loops@1.0.0",
        "fela-plugin-fallback-value": "npm:fela-plugin-fallback-value@5.0.17",
        "inline-style-prefixer": "npm:inline-style-prefixer@4.0.2"
      }
    },
    "npm:fela-plugin-fallback-value@5.0.17": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:fela-plugin-remove-undefined@5.0.19": {
      "map": {
        "fela-utils": "npm:fela-utils@8.0.6",
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:fela-plugin-rtl@1.0.6": {
      "map": {
        "rtl-css-js": "npm:rtl-css-js@1.10.0"
      }
    },
    "npm:react-dom@16.3.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:react@16.3.2": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "loose-envify": "npm:loose-envify@1.3.1",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.6.1"
      }
    },
    "npm:fela-dom@7.0.7": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "fela-utils": "npm:fela-utils@8.0.6",
        "fast-loops": "npm:fast-loops@1.0.0"
      }
    },
    "npm:fela-plugin-extend@6.0.5": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "isobject": "npm:isobject@3.0.1",
        "fela-plugin-remove-undefined": "npm:fela-plugin-remove-undefined@5.0.19",
        "fast-loops": "npm:fast-loops@1.0.0"
      }
    },
    "npm:fela@6.1.7": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "fela-utils": "npm:fela-utils@8.0.6",
        "isobject": "npm:isobject@3.0.1",
        "fast-loops": "npm:fast-loops@1.0.0"
      }
    },
    "npm:fela-utils@8.0.6": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "fast-loops": "npm:fast-loops@1.0.0",
        "string-hash": "npm:string-hash@1.1.3"
      }
    },
    "npm:react-transition-group@2.3.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1",
        "prop-types": "npm:prop-types@15.6.1",
        "dom-helpers": "npm:dom-helpers@3.3.1"
      }
    },
    "npm:react-jss@8.4.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "jss": "npm:jss@9.8.1",
        "jss-preset-default": "npm:jss-preset-default@4.5.0",
        "theming": "npm:theming@1.3.0"
      }
    },
    "npm:jss-camel-case@6.1.0": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2"
      }
    },
    "npm:jss@9.8.1": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:react-scrollbar-size@2.1.0": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "react-event-listener": "npm:react-event-listener@0.5.3",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "stifle": "npm:stifle@1.0.4"
      }
    },
    "npm:react-event-listener@0.5.3": {
      "map": {
        "fbjs": "npm:fbjs@0.8.16",
        "prop-types": "npm:prop-types@15.6.1",
        "warning": "npm:warning@3.0.0",
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:jss-nested@6.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.5.3",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
      }
    },
    "npm:jss-vendor-prefixer@7.0.0": {
      "map": {
        "css-vendor": "npm:css-vendor@0.3.8"
      }
    },
    "npm:scroll@2.0.3": {
      "map": {
        "rafl": "npm:rafl@1.2.2"
      }
    },
    "npm:theming@1.3.0": {
      "map": {
        "brcast": "npm:brcast@3.0.1",
        "prop-types": "npm:prop-types@15.6.1",
        "is-function": "npm:is-function@1.0.1",
        "is-plain-object": "npm:is-plain-object@2.0.4"
      }
    },
    "npm:css-vendor@0.3.8": {
      "map": {
        "is-in-browser": "npm:is-in-browser@1.1.3"
      }
    },
    "npm:readable-stream@2.3.6": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@1.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@2.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:rafl@1.2.2": {
      "map": {
        "global": "npm:global@4.3.2"
      }
    },
    "npm:indefinite-observable@1.0.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:jss-compose@5.0.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:jss-template@1.0.1": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:jss-extend@6.2.0": {
      "map": {
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:global@4.3.2": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "create-hash": "npm:create-hash@1.2.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "md5.js": "npm:md5.js@1.3.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:public-encrypt@4.0.2": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "randombytes": "npm:randombytes@2.0.6",
        "parse-asn1": "npm:parse-asn1@5.1.1",
        "bn.js": "npm:bn.js@4.11.8",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.0.6",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-des": "npm:browserify-des@1.0.1",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-aes": "npm:browserify-aes@1.2.0"
      }
    },
    "npm:browserify-des@1.0.1": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:parse-asn1@5.1.1": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.16",
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:reactxx-stateman@0.1.73": {
      "map": {
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.1",
        "tslib": "npm:tslib@1.9.1"
      }
    },
    "npm:reactxx-activable@0.1.6": {
      "map": {
        "reactxx-basic": "npm:reactxx-basic@0.1.18",
        "warning": "npm:warning@3.0.0",
        "tslib": "npm:tslib@1.9.1"
      }
    },
    "npm:reactxx-mui@0.1.17": {
      "map": {
        "reactxx": "npm:reactxx@0.1.59",
        "material-ui": "npm:material-ui@1.0.0-beta.46"
      }
    },
    "npm:react-popper@0.10.4": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "popper.js": "npm:popper.js@1.14.3"
      }
    },
    "npm:recompose@0.27.0": {
      "map": {
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "fbjs": "npm:fbjs@0.8.16",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "change-emitter": "npm:change-emitter@0.1.6"
      }
    },
    "npm:@types/react-transition-group@2.0.9": {
      "map": {
        "@types/react": "npm:@types/react@16.3.14"
      }
    },
    "npm:pbkdf2@3.0.16": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "create-hmac": "npm:create-hmac@1.1.7",
        "sha.js": "npm:sha.js@2.4.11",
        "ripemd160": "npm:ripemd160@2.0.2"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@3.0.4"
      }
    },
    "npm:reactxx-mediaq@0.1.7": {
      "map": {
        "reactxx-fela": "npm:reactxx-fela@0.1.17",
        "reactxx-basic": "npm:reactxx-basic@0.1.18",
        "warning": "npm:warning@3.0.0",
        "tslib": "npm:tslib@1.9.1"
      }
    },
    "npm:reactxx-animation@0.1.7": {
      "map": {
        "reactxx-fela": "npm:reactxx-fela@0.1.17",
        "reactxx-basic": "npm:reactxx-basic@0.1.18",
        "warning": "npm:warning@3.0.0",
        "tslib": "npm:tslib@1.9.1"
      }
    },
    "npm:reactxx@0.1.59": {
      "map": {
        "reactxx-animation": "npm:reactxx-animation@0.1.7",
        "reactxx-mediaq": "npm:reactxx-mediaq@0.1.7",
        "reactxx-mdi": "npm:reactxx-mdi@0.1.67",
        "reactxx-basic": "npm:reactxx-basic@0.1.18",
        "warning": "npm:warning@3.0.0",
        "prop-types": "npm:prop-types@15.6.1",
        "tslib": "npm:tslib@1.9.1",
        "reactxx-stateman": "npm:reactxx-stateman@0.1.73"
      }
    },
    "npm:reactxx-primitives@0.1.1": {
      "map": {
        "reactxx-fela": "npm:reactxx-fela@0.1.17",
        "reactxx-basic": "npm:reactxx-basic@0.1.18",
        "warning": "npm:warning@3.0.0",
        "tslib": "npm:tslib@1.9.1"
      }
    },
    "npm:reactxx-basic@0.1.18": {
      "map": {
        "react-dom": "npm:react-dom@16.3.2",
        "csstype": "npm:csstype@2.5.2",
        "warning": "npm:warning@3.0.0",
        "tslib": "npm:tslib@1.9.1"
      }
    },
    "npm:reactxx-fela@0.1.17": {
      "map": {
        "fela-plugin-fallback-value": "npm:fela-plugin-fallback-value@5.0.17",
        "tslib": "npm:tslib@1.9.1",
        "fela-dom": "npm:fela-dom@7.0.7",
        "fela-plugin-prefixer": "npm:fela-plugin-prefixer@5.0.18",
        "fela-plugin-lvha": "npm:fela-plugin-lvha@5.0.15",
        "fela-plugin-extend": "npm:fela-plugin-extend@6.0.5",
        "fela-plugin-unit": "npm:fela-plugin-unit@5.0.16",
        "fela-plugin-rtl": "npm:fela-plugin-rtl@1.0.6",
        "fela": "npm:fela@6.1.7"
      }
    },
    "npm:material-ui@1.0.0-beta.46": {
      "map": {
        "prop-types": "npm:prop-types@15.6.1",
        "warning": "npm:warning@3.0.0",
        "normalize-scroll-left": "npm:normalize-scroll-left@0.1.2",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.0",
        "lodash": "npm:lodash@4.17.10",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "react-event-listener": "npm:react-event-listener@0.5.3",
        "recompose": "npm:recompose@0.27.0",
        "brcast": "npm:brcast@3.0.1",
        "react-jss": "npm:react-jss@8.4.0",
        "react-transition-group": "npm:react-transition-group@2.3.1",
        "jss-nested": "npm:jss-nested@6.0.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "dom-helpers": "npm:dom-helpers@3.3.1",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "keycode": "npm:keycode@2.2.0",
        "react-scrollbar-size": "npm:react-scrollbar-size@2.1.0",
        "jss": "npm:jss@9.8.1",
        "jss-global": "npm:jss-global@3.0.0",
        "deepmerge": "npm:deepmerge@2.1.0",
        "classnames": "npm:classnames@2.2.5",
        "scroll": "npm:scroll@2.0.3",
        "react-popper": "npm:react-popper@0.10.4",
        "@types/jss": "npm:@types/jss@9.5.3",
        "@types/react-transition-group": "npm:@types/react-transition-group@2.0.9"
      }
    },
    "npm:inline-style-prefixer@4.0.2": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.0",
        "bowser": "npm:bowser@1.9.3"
      }
    },
    "npm:@types/jss@9.5.3": {
      "map": {
        "csstype": "npm:csstype@2.5.2",
        "indefinite-observable": "npm:indefinite-observable@1.0.1"
      }
    },
    "npm:jss-preset-default@4.5.0": {
      "map": {
        "jss-camel-case": "npm:jss-camel-case@6.1.0",
        "jss-default-unit": "npm:jss-default-unit@8.0.2",
        "jss-global": "npm:jss-global@3.0.0",
        "jss-nested": "npm:jss-nested@6.0.1",
        "jss-props-sort": "npm:jss-props-sort@6.0.0",
        "jss-vendor-prefixer": "npm:jss-vendor-prefixer@7.0.0",
        "jss-template": "npm:jss-template@1.0.1",
        "jss-extend": "npm:jss-extend@6.2.0",
        "jss-expand": "npm:jss-expand@5.3.0",
        "jss-compose": "npm:jss-compose@5.0.0"
      }
    },
    "npm:@types/react@16.3.14": {
      "map": {
        "csstype": "npm:csstype@2.5.2"
      }
    },
    "npm:stream-http@2.8.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.6",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:iconv-lite@0.4.23": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "elliptic": "npm:elliptic@6.4.0"
      }
    }
  }
});
