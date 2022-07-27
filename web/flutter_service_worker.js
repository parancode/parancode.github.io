'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1d6bc005123ade1337ef928a7ab8f0fd",
"assets/assets/images/btn_del_attendee.png": "fb58b63cba3ff1c4ed350cc0d725a97e",
"assets/assets/images/btn_mic_off.png": "f6eb580e5018a083008b101e48c57ade",
"assets/assets/images/btn_mic_on.png": "ac8218ebbeda89a55155c01505d19e20",
"assets/assets/images/conf/btn_chat_send.png": "4f81df0e0ae29bc7b1777d315a2ddcc5",
"assets/assets/images/conf/btn_chat_syslog.png": "ec1dc991136f581fb689d0445b9b99b9",
"assets/assets/images/conf/btn_menu_camera_off.png": "0e53e781cf579163759ed0495797bd16",
"assets/assets/images/conf/btn_menu_camera_on.png": "726da0b9bbaf4c84005ae7b267ef43c7",
"assets/assets/images/conf/btn_page_next.png": "e63fce29ea80cf936c1c965be6a09270",
"assets/assets/images/conf/btn_page_prev.png": "ed59cd4ab7239662f2043b08c287a54e",
"assets/assets/images/conf/btn_tab_attendees.png": "e3351b17360d66612520b3859661c592",
"assets/assets/images/conf/cxconfmobile_btn_speaker_off.png": "9ce0427477407397200091a5c512f0a6",
"assets/assets/images/conf/cxconfmobile_btn_speaker_on.png": "def89fc4f529e99b801236698d8e922d",
"assets/assets/images/conf/cxconfmobile_tabbar_more.png": "b2eaa3218882ccea131bf2c65c2eda8b",
"assets/assets/images/conf/cxel_ico_add_background.png": "e9b1cee16532cf07aab49e3d3aa7c55b",
"assets/assets/images/conf/ico_arrow_bottom.png": "26dc20be03df57b0f1fba9bcc0565b07",
"assets/assets/images/conf/ico_arrow_top.png": "6ecc7a48bcfb61fd2c421acf71832e51",
"assets/assets/images/conf/ico_attendee_android.png": "51362443abca2e8b79d94aed68523b89",
"assets/assets/images/conf/ico_attendee_apple.png": "9d5119cb67bb17e7428b25194a262ee0",
"assets/assets/images/conf/ico_log_msg.png": "587635951d8b5e913164843ab0dcb1e6",
"assets/assets/images/conf/ico_menu.png": "8ea4c92d811ae4407da82b980b7e1592",
"assets/assets/images/conf/ico_menu_attendeelist.png": "634dbc441b791fd7fd54eb8815478c67",
"assets/assets/images/conf/ico_menu_chat.png": "ebce83590c1a14a3ef53ff9388a53f5c",
"assets/assets/images/conf/ico_menu_document.png": "d85632244e0e75adbf50d26e6c19a4f6",
"assets/assets/images/conf/ico_menu_dot.png": "db365cf694625efc85f3d78c53126d7d",
"assets/assets/images/conf/ico_menu_flip_camera.png": "b95da88489caecb9f3ddabe4a74d6baa",
"assets/assets/images/conf/ico_menu_hang_up.png": "5e9824219664f8cbad879f2a87c5df12",
"assets/assets/images/conf/ico_menu_link.png": "c906ff66021749dfa07f77d414b044ac",
"assets/assets/images/conf/ico_menu_lock.png": "b4b5cac60a3457f8aae0612a1996db15",
"assets/assets/images/conf/ico_menu_mic_off.png": "91c07efde5779e000e1858d5caa5b9e8",
"assets/assets/images/conf/ico_menu_mic_on.png": "fe19880455394e33641f028149c050a4",
"assets/assets/images/conf/ico_menu_pasword.png": "c7b062ab0d89fbdb6646b5ca9a05bae8",
"assets/assets/images/conf/ico_menu_presenter.png": "1c48f7941b711323ca03bc82aa5a8c98",
"assets/assets/images/conf/ico_menu_share.png": "9109a7b4d6c62b65b2322f3a18299c2b",
"assets/assets/images/conf/ico_menu_speaker_mode_off.png": "9d9c904926ef4656329764e42467f4d1",
"assets/assets/images/conf/ico_menu_speaker_mode_on.png": "09f3830b208566d72098e9d7d89eecdb",
"assets/assets/images/conf/ico_secured.png": "a0ac68204c55336485c27f06797b4367",
"assets/assets/images/conf/img_emptyfiles.png": "c71b8dfb994b29cb6349906aad0b6a11",
"assets/assets/images/gray_logo_image.png": "331d0e083e8b8ece866776644446212a",
"assets/assets/images/ico_2fa_email.png": "60b391ad39a45c255e08c77e84bd9f63",
"assets/assets/images/ico_2fa_otp.png": "15ffdf709f6a38a29acb8d2d725b7613",
"assets/assets/images/ico_block.png": "f9b89b4b2360b3ddaee84057b333ff44",
"assets/assets/images/ico_checked.png": "bcce7c283eb6c3d8c48418c8afbcb58b",
"assets/assets/images/ico_gallery.png": "6e36da7651b4736291847eab851c0296",
"assets/assets/images/ico_link.png": "eee7a3215548956138aa8ed2ef982419",
"assets/assets/images/ico_menu_camera_on.png": "0e53e781cf579163759ed0495797bd16",
"assets/assets/images/ico_menu_check_blue.png": "87381d50690ca27ea6b62066af478795",
"assets/assets/images/ico_menu_check_red.png": "b643e08647282355aa4b2ee2fd47baae",
"assets/assets/images/ico_menu_mic_on.png": "fe19880455394e33641f028149c050a4",
"assets/assets/images/ico_menu_pasword.png": "c7b062ab0d89fbdb6646b5ca9a05bae8",
"assets/assets/images/ico_std_err.png": "b04ac170aad1ed674ec9ea147a3ee569",
"assets/assets/images/ico_std_info.png": "f0b62837b3a61103227230205640a431",
"assets/assets/images/ico_std_question.png": "c88c4f6595a8f265e43e69204092e9c6",
"assets/assets/images/ico_std_warn.png": "b1d8a449e017e217ac9c4903b92cf7b4",
"assets/assets/images/ico_std_warn2.png": "492300555d91b71c65e6614516356abf",
"assets/assets/images/ico_unchecked.png": "3c4897ac61195f92aec8fd15a34b17a0",
"assets/assets/images/ico_waiting.png": "a07199ab0de0920b0d8a8e238348dbf9",
"assets/assets/images/logo_image.png": "5a3b3883937693a7d01528c43415ed89",
"assets/assets/images/meetings_btn_cancel.png": "a49df442b36d05ebf8f7a9709fb73e32",
"assets/assets/images/meetings_btn_close_popover_bk.png": "cbe14c776826b9d8526feca48ca4028e",
"assets/assets/images/meetings_btn_float_meeting.png": "571b0339c2bb5c00a4dc3221075c2294",
"assets/assets/images/meetings_btn_host.png": "67907e7725412b10f05df7c95f7e6e36",
"assets/assets/images/meetings_btn_join.png": "b25f6f99054e9dfc70f59d28911c6b72",
"assets/assets/images/meetings_btn_login_google.png": "d08707690454823651c48d4edb27cf30",
"assets/assets/images/meetings_btn_login_naver.png": "54f805c01f4f7bf3f4dafb65f8773af3",
"assets/assets/images/meetings_btn_meetnow.png": "3d58d6a5cfae38625b9fe8e5c099717f",
"assets/assets/images/meetings_btn_menu.png": "355d82e44272e6ca5f5521d51320fbc4",
"assets/assets/images/meetings_grey_logo_gne.png": "ef117bc06ffb89daed8fb1fe65f462d0",
"assets/assets/images/meetings_ico_edit_photo.png": "e6e089e73e98cc8ef90f2feb831ea877",
"assets/assets/images/meetings_ico_free_blue.png": "d08ea783c6f683a46df7ce774668e1ff",
"assets/assets/images/meetings_ico_free_grey.png": "c442fd7767bd323bfb2c9ff672620349",
"assets/assets/images/meetings_ico_gne.png": "bf3eca42377adbf65d390751dee5bcbb",
"assets/assets/images/meetings_ico_host.png": "da1f79b0fd40dfec26556b3d943d2883",
"assets/assets/images/meetings_ico_info.png": "e911c95208027af6a8301ebe7c8e2aea",
"assets/assets/images/meetings_ico_invitee.png": "a31e339fcc981d53f88f1246451fe0d2",
"assets/assets/images/meetings_ico_key.png": "43528dcfd470758013a1ce6e48c1491d",
"assets/assets/images/meetings_ico_lock.png": "3effff41e3cb4cb9e18feb5cf175777e",
"assets/assets/images/meetings_ico_logout.png": "7eebb2228fea83325122968785a522c2",
"assets/assets/images/meetings_ico_menu_agency.png": "e6038530e13b38f578bb50b781639644",
"assets/assets/images/meetings_ico_menu_cloudserver.png": "8e5eb8d5f7900397e4eabcc1d9d61fee",
"assets/assets/images/meetings_ico_menu_opensrc.png": "99f9da1ab192cc845c14b018b10622d7",
"assets/assets/images/meetings_ico_menu_settings.png": "43cf466781c6c98abe09c40e8d6b80e3",
"assets/assets/images/meetings_ico_participants.png": "7e51ef99b86fd821f6d7a08496566d08",
"assets/assets/images/meetings_ico_privacy.png": "cecea9ba1fbf17effad0bcbe903ef62f",
"assets/assets/images/meetings_ico_tag_beta.png": "f693fb5f088d6c48b856de5634e34955",
"assets/assets/images/meetings_ico_user.png": "e1a5d245b45015c867e7fbbe7a0158be",
"assets/assets/images/meetings_img_empty_video_cell.png": "f29a3214173dfaecf043f9f5bf9744ef",
"assets/assets/images/meetings_img_empty_video_cell_mfds.png": "9b1da0f1ee14ecdbb3e834c97bb8768a",
"assets/assets/images/meetings_img_emtpty.png": "298c30f9c4b658aecf6d8d34e1b5db10",
"assets/assets/images/meetings_logo_img_gne.png": "16c89f1a325d15015e71cbac7e88b18d",
"assets/assets/lottie/test.json": "803734f35ca361921e23f651966a4a90",
"assets/assets/translations/en.json": "6922200a71641197931943804a583d1d",
"assets/assets/translations/ko.json": "bd637fb5f7d9c0ed7257ef1c2f1a4589",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "b761681f496e30e059c835cab7bd2c44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cxl/assets/meetings_img_empty_video_cell.png": "f29a3214173dfaecf043f9f5bf9744ef",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "873545e43cafd7c477de8986c3038497",
"/": "873545e43cafd7c477de8986c3038497",
"main.dart.js": "f5ba9721f59b8fa0d4563a7277c4f5f2",
"manifest.json": "8da38844d8efd4c0f49389c19e8e6701",
"version.json": "7b761b597b52d57305052e6c5e353244"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
