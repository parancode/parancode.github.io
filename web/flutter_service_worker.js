'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b4f8aac1a35ecfd636c314273dc85bf4",
"assets/assets/images/btn_del_attendee.png": "fb58b63cba3ff1c4ed350cc0d725a97e",
"assets/assets/images/btn_mic_off.png": "f9e43418489e6ad939b4d515dbcd387c",
"assets/assets/images/btn_mic_on.png": "db91fc0a710997537433c27056a80b38",
"assets/assets/images/btn_reset.png": "7769c8eb5396d013c22098fe600061f5",
"assets/assets/images/conf/brn_ant_dashedfreeline.png": "6378c37cf9947a62b7dae779f32ad2c5",
"assets/assets/images/conf/btn_annotation.png": "145aa92175b34a184c5e3880b6518f39",
"assets/assets/images/conf/btn_ant_dashedline.png": "cbc9ad45a506f7de2ab9d833cee419ba",
"assets/assets/images/conf/btn_ant_erase.png": "6ce6d468c5fb3009dbda1580329691f1",
"assets/assets/images/conf/btn_ant_eraser.png": "ade8bd20d3b86b9cf42322fc94345b46",
"assets/assets/images/conf/btn_ant_highlighter.png": "7a8e3501b6eb85e05ac607c92b2cf908",
"assets/assets/images/conf/btn_ant_obj_check.png": "073b31670f1948a74bd7ec1b10cd7257",
"assets/assets/images/conf/btn_ant_obj_custom.png": "a987ff663dc58873e520b85750741863",
"assets/assets/images/conf/btn_ant_obj_ellipse.png": "c03f8d0e2b978e0a2097acb3c71d8a62",
"assets/assets/images/conf/btn_ant_obj_ellipse_filled.png": "8625cacd81c630f5bb6c618246adcb99",
"assets/assets/images/conf/btn_ant_obj_freeline.png": "e6b193a319119ae6ffd44ff46ff1e2fa",
"assets/assets/images/conf/btn_ant_obj_laser.png": "143ec11b22cfff0fc582f1f722cb3412",
"assets/assets/images/conf/btn_ant_obj_line.png": "7e676459ab68cad48714b67428a72e03",
"assets/assets/images/conf/btn_ant_obj_pointer_arrow.png": "65d774e3f23f0b6700b2bb92bfceccee",
"assets/assets/images/conf/btn_ant_obj_rectangle.png": "56bf5f87c6633272eab3f0f65a95e153",
"assets/assets/images/conf/btn_ant_obj_rectangle_filled.png": "81ad27c916db6af852363bcd524abf80",
"assets/assets/images/conf/btn_ant_obj_stamp_arrow.png": "442c90c9205f52a7cee69c01cb82f883",
"assets/assets/images/conf/btn_ant_redo.png": "5f432c3e0f5f1ae697ab458fc7e09511",
"assets/assets/images/conf/btn_ant_thickness.png": "1b96ddef8ed0bb368cf76fae0f4d8918",
"assets/assets/images/conf/btn_ant_thick_1.png": "233ac49ebfd4bc537665fbc3148fa669",
"assets/assets/images/conf/btn_ant_thick_12.png": "b702a51685bedf9fe6fb4d64db50534d",
"assets/assets/images/conf/btn_ant_thick_16.png": "2bb327a5ed35b0e7657e4d7cb1323597",
"assets/assets/images/conf/btn_ant_thick_2.png": "ddc56209f21d2ac0e84bb496c09bb63b",
"assets/assets/images/conf/btn_ant_thick_3.png": "c22fa050d6854ec4d2b9508fce34e39b",
"assets/assets/images/conf/btn_ant_thick_4.png": "b6efda0b2f78c3151e1f2a1faa385099",
"assets/assets/images/conf/btn_ant_thick_8.png": "7255c05e75d7f0ec2cfd705127f07cb8",
"assets/assets/images/conf/btn_ant_undo.png": "beb068bb6945d4ab055fca85f919466f",
"assets/assets/images/conf/btn_chat_channel_list.png": "70dd0000ced3e978d7446fb14c89d229",
"assets/assets/images/conf/btn_chat_menu.png": "e17841f4a87722c37fd4798fccdeda19",
"assets/assets/images/conf/btn_chat_send.png": "4f81df0e0ae29bc7b1777d315a2ddcc5",
"assets/assets/images/conf/btn_chat_syslog.png": "ec1dc991136f581fb689d0445b9b99b9",
"assets/assets/images/conf/btn_layout.png": "621e5f1fde9d77168c56065396f349be",
"assets/assets/images/conf/btn_menu_camera_off.png": "726da0b9bbaf4c84005ae7b267ef43c7",
"assets/assets/images/conf/btn_menu_camera_on.png": "0e53e781cf579163759ed0495797bd16",
"assets/assets/images/conf/btn_page_next.png": "e63fce29ea80cf936c1c965be6a09270",
"assets/assets/images/conf/btn_page_prev.png": "ed59cd4ab7239662f2043b08c287a54e",
"assets/assets/images/conf/btn_pip.png": "42da595722986d97c849918d0f2bcfc3",
"assets/assets/images/conf/btn_sync.png": "08d2cf570237c899a5ec3517f090a047",
"assets/assets/images/conf/btn_tabbar_share.png": "0ffd0170721290c5a856406a7c0a66b8",
"assets/assets/images/conf/btn_tab_attendees.png": "e3351b17360d66612520b3859661c592",
"assets/assets/images/conf/cxconfmobile_btn_resolution_auto.png": "d0e058ff4a39498f8056e29bd2ba4d97",
"assets/assets/images/conf/cxconfmobile_btn_resolution_fullhd.png": "d7d1045fea0c5e9773c21f4da10256cf",
"assets/assets/images/conf/cxconfmobile_btn_resolution_hd.png": "30c160c6564ea53bbf91239bcbf895b1",
"assets/assets/images/conf/cxconfmobile_btn_resolution_high.png": "1840896f7ee2696d4aa9f62d2903cc59",
"assets/assets/images/conf/cxconfmobile_btn_resolution_low.png": "a463e576e62be9fee7a6c73954322252",
"assets/assets/images/conf/cxconfmobile_btn_resolution_normal.png": "e6f2f6325ca76513efa984b550431e96",
"assets/assets/images/conf/cxconfmobile_btn_speaker_off.png": "9ce0427477407397200091a5c512f0a6",
"assets/assets/images/conf/cxconfmobile_btn_speaker_on.png": "def89fc4f529e99b801236698d8e922d",
"assets/assets/images/conf/cxconfmobile_icon_doc.png": "9862c8b49d97bcf58ead0133b7cc5d2d",
"assets/assets/images/conf/cxconfmobile_icon_excel.png": "27c7eba2c9159ca06ea0429993daca30",
"assets/assets/images/conf/cxconfmobile_icon_pdf.png": "7f4c459fd8ce0425de23ccc03710cf0a",
"assets/assets/images/conf/cxconfmobile_icon_powerpoint.png": "0655a3af13bb7044a8515c1d0cfd5c8b",
"assets/assets/images/conf/cxconfmobile_icon_word.png": "e284fa6a93d04ae743adeee54f9dcd62",
"assets/assets/images/conf/cxconfmobile_tabbar_more.png": "b2eaa3218882ccea131bf2c65c2eda8b",
"assets/assets/images/conf/cxel_ico_add_background.png": "e9b1cee16532cf07aab49e3d3aa7c55b",
"assets/assets/images/conf/cxel_ico_ask_unmute.png": "ee174f1cff28ec2eb147e541b6d7d9c6",
"assets/assets/images/conf/ico_arrow_bottom.png": "26dc20be03df57b0f1fba9bcc0565b07",
"assets/assets/images/conf/ico_arrow_top.png": "6ecc7a48bcfb61fd2c421acf71832e51",
"assets/assets/images/conf/ico_attendeelist_speak.png": "5b6a4130d7ccc68751f3be5e0e2ff617",
"assets/assets/images/conf/ico_attendee_android.png": "51362443abca2e8b79d94aed68523b89",
"assets/assets/images/conf/ico_attendee_apple.png": "9d5119cb67bb17e7428b25194a262ee0",
"assets/assets/images/conf/ico_attendee_device.png": "70e09aa5ccf7c7ca4d94ec13bb76f2b6",
"assets/assets/images/conf/ico_attendee_host.png": "d11324de890b146d3cb43b5b5336a488",
"assets/assets/images/conf/ico_attendee_pc.png": "5948642de0c7eb5f9621bc2b8503f163",
"assets/assets/images/conf/ico_attendee_presenter.png": "5925a01fa27a46b041296196d55651aa",
"assets/assets/images/conf/ico_intro_exit.png": "c27ff2e301b4b89f60f60f65e451eb13",
"assets/assets/images/conf/ico_log_msg.png": "587635951d8b5e913164843ab0dcb1e6",
"assets/assets/images/conf/ico_menu.png": "8ea4c92d811ae4407da82b980b7e1592",
"assets/assets/images/conf/ico_menu_album.png": "d7b1f74de87cb17f0b1b1eb28aa3bbd5",
"assets/assets/images/conf/ico_menu_ask_help.png": "ea36d16fa286ccb1f01b8b4e58dfea8d",
"assets/assets/images/conf/ico_menu_attendance.png": "411c1cae40a1669a33cfcb6d35d4b356",
"assets/assets/images/conf/ico_menu_bugreport.png": "427ab8c501e4c68a477d29365d87263b",
"assets/assets/images/conf/ico_menu_camera.png": "1bebd30139d6b6b72e37d364ec21f786",
"assets/assets/images/conf/ico_menu_chat.png": "ebce83590c1a14a3ef53ff9388a53f5c",
"assets/assets/images/conf/ico_menu_document.png": "d85632244e0e75adbf50d26e6c19a4f6",
"assets/assets/images/conf/ico_menu_dot.png": "db365cf694625efc85f3d78c53126d7d",
"assets/assets/images/conf/ico_menu_download.png": "b0f5c892b591b914e099e9f2d0d87351",
"assets/assets/images/conf/ico_menu_expel.png": "28cb6a0d85108d5897788a22602bdbad",
"assets/assets/images/conf/ico_menu_flip_camera.png": "b95da88489caecb9f3ddabe4a74d6baa",
"assets/assets/images/conf/ico_menu_group_room.png": "c1d2ee9d4b5204abe16be9c717eefa23",
"assets/assets/images/conf/ico_menu_interpreter.png": "aaf8e40b0b9f25d750345c26d2d56fd1",
"assets/assets/images/conf/ico_menu_link.png": "c906ff66021749dfa07f77d414b044ac",
"assets/assets/images/conf/ico_menu_lock.png": "b4b5cac60a3457f8aae0612a1996db15",
"assets/assets/images/conf/ico_menu_mic_off.png": "91c07efde5779e000e1858d5caa5b9e8",
"assets/assets/images/conf/ico_menu_mic_on.png": "fe19880455394e33641f028149c050a4",
"assets/assets/images/conf/ico_menu_mydoc.png": "d85632244e0e75adbf50d26e6c19a4f6",
"assets/assets/images/conf/ico_menu_pasword.png": "c7b062ab0d89fbdb6646b5ca9a05bae8",
"assets/assets/images/conf/ico_menu_presenter.png": "1c48f7941b711323ca03bc82aa5a8c98",
"assets/assets/images/conf/ico_menu_preview.png": "12227e8494281ed54bc4965c6f2b732d",
"assets/assets/images/conf/ico_menu_profile.png": "11842bc5a23d5aa65457b03d3d447f73",
"assets/assets/images/conf/ico_menu_setting.png": "845266e9cae57ba39eaddab54049ca6f",
"assets/assets/images/conf/ico_menu_share.png": "9109a7b4d6c62b65b2322f3a18299c2b",
"assets/assets/images/conf/ico_menu_speakerphone.png": "48f1eff32b7b2a82df6ec665d1e496f3",
"assets/assets/images/conf/ico_menu_stt.png": "893a5c351ea443b4e849c7c44a2c6465",
"assets/assets/images/conf/ico_menu_whiteboard.png": "f10e9f4e0c55500da2f9e08f316cbf8b",
"assets/assets/images/conf/ico_raise_hand_clicked.png": "6cc17e0938867aae7b8ef9a85555b7ef",
"assets/assets/images/conf/ico_secured.png": "a0ac68204c55336485c27f06797b4367",
"assets/assets/images/conf/ico_timer.png": "df1e386cec835e9476455af528fafa36",
"assets/assets/images/conf/ico_update.png": "9e05c264c8c3e02c11fd2ff37e8b4f19",
"assets/assets/images/conf/ico_virtual_background.png": "f1b2c335cfcb59e8e003f7fc1b698340",
"assets/assets/images/conf/img_emptyfiles.png": "c71b8dfb994b29cb6349906aad0b6a11",
"assets/assets/images/gray_logo_image.png": "331d0e083e8b8ece866776644446212a",
"assets/assets/images/ico_2fa_email.png": "60b391ad39a45c255e08c77e84bd9f63",
"assets/assets/images/ico_2fa_otp.png": "15ffdf709f6a38a29acb8d2d725b7613",
"assets/assets/images/ico_block.png": "f9b89b4b2360b3ddaee84057b333ff44",
"assets/assets/images/ico_bluetooth.png": "ab8453b20194650ec02a584d469da443",
"assets/assets/images/ico_bluetooth_mic.png": "7fc4ca7b4f824a3304d3bca6edc20097",
"assets/assets/images/ico_checked.png": "bcce7c283eb6c3d8c48418c8afbcb58b",
"assets/assets/images/ico_link.png": "eee7a3215548956138aa8ed2ef982419",
"assets/assets/images/ico_menu_album.png": "d7b1f74de87cb17f0b1b1eb28aa3bbd5",
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
"assets/assets/translations/en.json": "f73fbccf71373c2410d22f8ce8b02fc9",
"assets/assets/translations/ko.json": "921e62253ee444ac79d6eb9a8638eda5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "35f677d29ac6b463d5ec261e30fcb9b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/cxl/assets/cxl_ico_attendee_host.png": "d11324de890b146d3cb43b5b5336a488",
"assets/packages/cxl/assets/cxl_ico_attendee_presenter.png": "5925a01fa27a46b041296196d55651aa",
"assets/packages/cxl/assets/cxl_ico_survey_1.png": "6aaf7252ebab29530ca0e9911b0f0321",
"assets/packages/cxl/assets/cxl_ico_survey_10.png": "ea33c4a4ab8b166335a7a98130476826",
"assets/packages/cxl/assets/cxl_ico_survey_2.png": "aa0b7052a9ea50b8c43ba2d3a902a3d2",
"assets/packages/cxl/assets/cxl_ico_survey_3.png": "b4053892e0df38f06b27d39f16d1b996",
"assets/packages/cxl/assets/cxl_ico_survey_4.png": "ef93feaca8075dc32d55a27e7498089e",
"assets/packages/cxl/assets/cxl_ico_survey_5.png": "d94029342c96d84bfb28112011047e77",
"assets/packages/cxl/assets/cxl_ico_survey_6.png": "afbbce981327a2c2a8a7deed7adfec2d",
"assets/packages/cxl/assets/cxl_ico_survey_7.png": "5a6bed1462336fb86f1e246d41264283",
"assets/packages/cxl/assets/cxl_ico_survey_8.png": "1d4652d6abda0ededb0a16c9664cbffc",
"assets/packages/cxl/assets/cxl_ico_survey_9.png": "3b25caf0c6938dc9885005866e53a092",
"assets/packages/cxl/assets/cxl_ico_survey_completed.png": "d8aeca73c98a97f1cbdaf14c3633690d",
"assets/packages/cxl/assets/cxl_ico_survey_o.png": "b1d94cb70465e5adf8c9abbbe346d1c4",
"assets/packages/cxl/assets/cxl_ico_survey_x.png": "1d8ab6ef36345047e6cd47ece8e260bd",
"assets/packages/cxl/assets/cxl_ico_videocell_mute.png": "0f6729c2a94930118268adf8ea9e10d7",
"assets/packages/cxl/assets/cxl_ico_videocell_nospeak.png": "ca60f084f4f915be56c3ca0799b367bc",
"assets/packages/cxl/assets/cxl_img_empty_profile.png": "6ef3223a514673ebf4a32042b5302ee1",
"assets/packages/cxl/assets/cxl_img_empty_video_cell.png": "f29a3214173dfaecf043f9f5bf9744ef",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "89ff6b164921220cc4ca6fdd755bdbaf",
"assets/shaders/ink_sparkle.frag": "d073695f17547f733f5dd82c89b4d4d1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54ccf419025ed9892f378433356baacc",
"/": "54ccf419025ed9892f378433356baacc",
"main.dart.js": "6fd7f30d9e700e540cc465962b5dc226",
"manifest.json": "40e204fe7e16c18102bdcc9347b82c85",
"version.json": "7b761b597b52d57305052e6c5e353244"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
