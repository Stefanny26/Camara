
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/noticiasfacebook"
  },
  {
    "renderMode": 2,
    "route": "/networking-y-eventos"
  },
  {
    "renderMode": 2,
    "route": "/servicios"
  },
  {
    "renderMode": 2,
    "route": "/bolsa-empleo"
  },
  {
    "renderMode": 2,
    "route": "/afiliacion"
  },
  {
    "renderMode": 2,
    "route": "/contacto"
  },
  {
    "renderMode": 2,
    "route": "/eventos"
  },
  {
    "renderMode": 2,
    "route": "/tef"
  },
  {
    "renderMode": 2,
    "route": "/tbc"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 29369, hash: '0641ae250eb22eb2ae75ecbc4e04e1d6bf8904a220145b2d57c017bfc6414ed9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17594, hash: 'f0dba35e9df2b881c96b4de60600279e42d7e6f763cabf82076195b9dace7f6f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'noticiasfacebook/index.html': {size: 72454, hash: '89ff88ba099f94cbde316d1bec41a6db149d2e30d5c8b816832ff9a851c87d7f', text: () => import('./assets-chunks/noticiasfacebook_index_html.mjs').then(m => m.default)},
    'networking-y-eventos/index.html': {size: 90172, hash: 'f7ea594e80d44aeba7c8f26b440f4cd015a8b47686f2d347c83871f637a66b27', text: () => import('./assets-chunks/networking-y-eventos_index_html.mjs').then(m => m.default)},
    'bolsa-empleo/index.html': {size: 84266, hash: '82c164628c690c61913ec4da90cef83f2afb8f9e0da8e87119a6b1d2ebdb3158', text: () => import('./assets-chunks/bolsa-empleo_index_html.mjs').then(m => m.default)},
    'afiliacion/index.html': {size: 88576, hash: '6688d4b8b594f6a6c23a293f840696a735245dd647fc010f02644613f30bbb8d', text: () => import('./assets-chunks/afiliacion_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 93283, hash: 'f43ebc00e4da23c835a41307a79767f74e460a3bcd1bd3d377392af10071edd8', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'index.html': {size: 89124, hash: '4d0a5cda8ff2a0046c837c09938ba02db5295ae503a625f18379b1a9a4c9ac7c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'eventos/index.html': {size: 80496, hash: '1a69582c2ecd95480a4d9b5f97b6cd7710b4f1be86a09cb9156183cf55ea1679', text: () => import('./assets-chunks/eventos_index_html.mjs').then(m => m.default)},
    'tef/index.html': {size: 81316, hash: 'e93aa0048a6802128cd84768b09667c3f7c27517f16fef06b82e029a132f5ab7', text: () => import('./assets-chunks/tef_index_html.mjs').then(m => m.default)},
    'tbc/index.html': {size: 78761, hash: '24218bb5cced270f5f50141c993d747b32e9c8b0006db903dbdf76f0f5562dbe', text: () => import('./assets-chunks/tbc_index_html.mjs').then(m => m.default)},
    'servicios/index.html': {size: 98208, hash: '28043cb5262d2dc2cc6e096542b71e5ece789f8e86b2e3312d41b8858262cdf5', text: () => import('./assets-chunks/servicios_index_html.mjs').then(m => m.default)},
    'styles-AAYSJUMI.css': {size: 312412, hash: 'OMSZhk86gq0', text: () => import('./assets-chunks/styles-AAYSJUMI_css.mjs').then(m => m.default)}
  },
};
