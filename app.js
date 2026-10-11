(() => {
  'use strict';

  const categories = {
    all: 'সব লেখা',
    ai: 'কৃত্রিম বুদ্ধিমত্তা',
    gadgets: 'গ্যাজেট',
    development: 'ডেভেলপমেন্ট',
    security: 'সাইবার নিরাপত্তা',
    science: 'বিজ্ঞান ও ভবিষ্যৎ'
  };

  const articles = [
    {
      slug: 'ai-everyday', category: 'ai', date: '2026-10-09', minutes: 6,
      title: 'এআই এখন আপনার প্রতিদিনের সঙ্গী',
      excerpt: 'কাজের পরিকল্পনা থেকে নতুন কিছু শেখা—দৈনন্দিন জীবনে এআইকে কাজে লাগানোর সহজ, বাস্তব কিছু উপায়।',
      image: 'assets/editorial.svg', imageAlt: 'গাঢ় টিল পটভূমিতে লাইম রঙের সার্কিটসহ এআই চিপ',
      intro: 'একসময় কৃত্রিম বুদ্ধিমত্তা শুনলে মনে হতো দূরের কোনো গবেষণাগারের কথা। এখন ফোন, ব্রাউজার আর পরিচিত কাজের সফটওয়্যারেই এর দেখা মেলে। সঠিক প্রশ্ন করতে পারলে এই সরঞ্জামগুলো ভাবনা গুছিয়ে নিতে বেশ সাহায্য করে।',
      sections: [
        { title: 'ছোট একটি কাজ দিয়ে শুরু করুন', paragraphs: ['সকালের করণীয় তালিকা সাজানো, একটি ইমেইলের খসড়া তৈরি বা বড় লেখার মূল বক্তব্য বের করা—এই কাজগুলো দিয়ে শুরু করা যায়। প্রথমেই পুরো দায়িত্ব ছেড়ে দেওয়ার প্রয়োজন নেই। নিজের তৈরি খসড়া দিন, তারপর আরও পরিষ্কার ভাষায় লেখার পরামর্শ চান।', 'আপনার লক্ষ্য, পাঠক এবং সীমাবদ্ধতা যত স্পষ্ট হবে, উত্তরের মান তত ভালো হওয়ার সম্ভাবনা বাড়বে। যেমন, “একটি পরিকল্পনা বানাও” বলার বদলে সময়, বাজেট আর প্রত্যাশিত ফল লিখে দিন।'] },
        { title: 'শেখার সহকারী হিসেবে ব্যবহার', paragraphs: ['অপরিচিত কোনো বিষয় বুঝতে এআইকে তিনটি স্তরে ব্যাখ্যা করতে বলতে পারেন: একদম সহজ ভাষায়, বাস্তব উদাহরণে এবং পরে একটু গভীরভাবে। উত্তরের শেষে ছোট কুইজ চাইলে নিজের বোঝাপড়াও যাচাই করা যায়।', 'তবে সুন্দর করে লেখা মানেই নির্ভুল নয়। বিশেষ করে সংখ্যা, উদ্ধৃতি ও সাম্প্রতিক তথ্যের ক্ষেত্রে মূল উৎস খুলে দেখুন। কোনো বিষয়ে নিশ্চিত না হলে মডেলকেই উৎস দিতে বলুন এবং সেই উৎস আলাদা করে যাচাই করুন।'] },
        { title: 'ব্যক্তিগত তথ্যের সীমা ঠিক রাখুন', paragraphs: ['পাসওয়ার্ড, পরিচয়পত্র, ব্যাংকের তথ্য বা অন্যের ব্যক্তিগত কথোপকথন সাধারণ এআই চ্যাটে পাঠানো থেকে বিরত থাকুন। অফিসের কাজ হলে প্রতিষ্ঠানের অনুমোদিত সরঞ্জাম এবং তথ্য ব্যবহারের নীতিমালা অনুসরণ করুন।', 'সবচেয়ে কার্যকর অভ্যাস হলো: খসড়া এআই তৈরি করবে, সিদ্ধান্ত আপনি নেবেন। নিজের বিচার, অভিজ্ঞতা ও যাচাই করার অভ্যাসের সঙ্গে ব্যবহার করলেই এআই প্রতিদিনের কাজে মূল্য যোগ করতে পারে।'] }
      ]
    },
    {
      slug: 'nothing-phone-3', category: 'gadgets', date: '2026-10-08', minutes: 5,
      title: 'Nothing Phone (3): ডিজাইনের বাইরেও কী দেখবেন?',
      excerpt: 'আলাদা চেহারা ভালো লাগে। কিন্তু একটি ফোন কেনার আগে সফটওয়্যার, ক্যামেরা আর দীর্ঘমেয়াদি ব্যবহারও জরুরি।',
      image: 'assets/chip.svg', imageAlt: 'হালকা পটভূমিতে স্মার্টফোন ও ইয়ারবাডের ইলাস্ট্রেশন',
      intro: 'একটি আকর্ষণীয় ফোনের নকশা আমাদের নজর কেড়ে নেয়। Nothing-এর স্বতন্ত্র ডিজাইনও সেই আলোচনার অংশ। কিন্তু কেনার সিদ্ধান্তে শুধু দেখতে কেমন, সেটুকু যথেষ্ট নয়। এই লেখায় কোনো বেঞ্চমার্ক দাবি না করে একটি ফোন মূল্যায়নের ব্যবহারিক দিকগুলো দেখছি।',
      sections: [
        { title: 'আপনার ব্যবহারটাই প্রথম শর্ত', paragraphs: ['দিনের বড় অংশ ভিডিও কল, ছবি তোলা নাকি গেম খেলে কাটে? এই উত্তরেই আপনার অগ্রাধিকার বোঝা যাবে। ক্যামেরার ক্ষেত্রে শুধু মেগাপিক্সেল দেখবেন না; দোকানে সম্ভব হলে ঘরের আলোতে ছবি তুলে রঙ, ত্বকের টোন এবং শাটারের সাড়া দেখুন।', 'হাতে নিয়ে ওজন, গ্রিপ এবং এক হাতে ব্যবহারের সুবিধা পরীক্ষা করুন। কাগজে বড় ব্যাটারি ভালো শোনালেও বাস্তব চার্জ স্থায়িত্ব নির্ভর করে স্ক্রিন, নেটওয়ার্ক আর ব্যবহারভেদে।'] },
        { title: 'সফটওয়্যার ও আপডেট যাচাই', paragraphs: ['ফোন কতদিন অপারেটিং সিস্টেম ও নিরাপত্তা আপডেট পাবে, তা প্রস্তুতকারকের বর্তমান নীতিমালা থেকে যাচাই করুন। পরিষ্কার ইন্টারফেস, কম অপ্রয়োজনীয় অ্যাপ এবং সহজ নোটিফিকেশন নিয়ন্ত্রণ প্রতিদিনের অভিজ্ঞতায় বড় পার্থক্য তৈরি করে।', 'বাংলাদেশে কিনলে স্থানীয় ওয়ারেন্টি, সেবাকেন্দ্র এবং যন্ত্রাংশের প্রাপ্যতা জানুন। আমদানি করা ফোনের দাম কম হলেও সেবার শর্ত ভিন্ন হতে পারে।'] },
        { title: 'মূল্যের সঙ্গে তুলনা করুন', paragraphs: ['একই বাজেটে অন্তত দুইটি বিকল্প রাখুন। আপনার সবচেয়ে জরুরি তিনটি চাহিদা লিখে প্রতিটি ফোনের সুবিধা তুলনা করুন। আকর্ষণীয় নকশার জন্য কিছু বাড়তি মূল্য দেওয়া ব্যক্তিগত পছন্দ হতে পারে, তবে সেই সিদ্ধান্ত সচেতন হওয়া উচিত।', 'এই নমুনা লেখাটি কেনার নির্দেশিকা; এখানে সরাসরি হাতে নিয়ে পরীক্ষা করা রিভিউ বা পরীক্ষাগারের ফল প্রকাশ করা হয়নি। কেনার আগে সর্বশেষ দাম ও আনুষ্ঠানিক স্পেসিফিকেশন মিলিয়ে নিন।'] }
      ]
    },
    {
      slug: 'web-development-2026', category: 'development', date: '2026-10-07', minutes: 7,
      title: 'ওয়েব ডেভেলপমেন্ট শেখা: শুরুটা হোক সহজ',
      excerpt: 'নতুন ফ্রেমওয়ার্কের ভিড়ে হারিয়ে না গিয়ে HTML, CSS আর JavaScript-এর মজবুত ভিত্তি তৈরি করুন।',
      image: 'assets/code.svg', imageAlt: 'সবুজ ও কালো রঙে ব্রাউজার এবং কোডের বিমূর্ত ইলাস্ট্রেশন',
      intro: 'ওয়েব ডেভেলপমেন্ট শেখার পথে প্রথম বাধা অনেক সময় কোড নয়, বরং কোথা থেকে শুরু করতে হবে সেই সিদ্ধান্ত। প্রতিদিন নতুন টুলের খবর আসে। তবু একটি ভালো ওয়েবসাইটের ভিত এখনো একই: অর্থপূর্ণ কাঠামো, সুন্দর উপস্থাপনা এবং প্রয়োজনীয় ইন্টারঅ্যাকশন।',
      sections: [
        { title: 'ব্রাউজারের ভাষাগুলো আগে', paragraphs: ['HTML দিয়ে পেজের অর্থপূর্ণ কাঠামো তৈরি করুন। শিরোনাম, অনুচ্ছেদ, লিংক আর ফর্মের উপযুক্ত ট্যাগ ব্যবহার শিখুন। তারপর CSS দিয়ে লেআউট, টাইপোগ্রাফি এবং ছোট স্ক্রিনে মানিয়ে নেওয়া অনুশীলন করুন।', 'JavaScript শেখার সময় DOM, ইভেন্ট, অ্যারে এবং অ্যাসিঙ্ক্রোনাস কাজের ধারণায় সময় দিন। একটি বোতাম কীভাবে পেজের অবস্থা বদলায়, তা বোঝা বড় লাইব্রেরির নাম মুখস্থ করার চেয়ে কার্যকর।'] },
        { title: 'ছোট কিন্তু সম্পূর্ণ একটি প্রজেক্ট', paragraphs: ['একটি ব্যক্তিগত ব্লগ বানান। হোমপেজ, নিবন্ধ, খোঁজার ব্যবস্থা এবং মোবাইল নেভিগেশন যোগ করুন। নিজের বানানো সাইট কিবোর্ড দিয়ে ব্যবহার করে দেখুন; বোতামে ফোকাস দেখা যায় কি না, ছবির বিকল্প বর্ণনা আছে কি না, সেগুলোও যাচাই করুন।', 'ব্রাউজারের ডেভেলপার টুল দিয়ে নেটওয়ার্ক, কনসোল এবং লেআউট পরীক্ষা করুন। সমস্যা নিজে খুঁজে ঠিক করার এই অভ্যাস ভবিষ্যতের প্রতিটি প্রজেক্টে কাজে আসবে।'] },
        { title: 'তারপর প্রয়োজনমতো টুল', paragraphs: ['পুনরাবৃত্ত কম্পোনেন্ট, অনেক পেজ বা জটিল অবস্থা সামলাতে হলে ফ্রেমওয়ার্ক শেখার ভালো সময় আসে। আগে নিজের প্রকল্পের সমস্যাটি বুঝুন, তারপর সেই সমস্যা সমাধানের টুল বেছে নিন।', 'Git, প্রাথমিক পরীক্ষা এবং ডেপ্লয়মেন্টও শেখার অংশ। নিখুঁত কোর্স শেষ করার অপেক্ষা না করে ছোট প্রজেক্ট প্রকাশ করুন, প্রতিক্রিয়া নিন এবং একটু একটু করে উন্নতি করুন।'] }
      ]
    },
    {
      slug: 'passwordless-future', category: 'security', date: '2026-10-06', minutes: 5,
      title: 'পাসওয়ার্ডের পরের অধ্যায়: পাসকি',
      excerpt: 'বারবার পাসওয়ার্ড মনে রাখার বদলে ফোন বা কম্পিউটার দিয়ে নিরাপদে সাইন ইন করার ধারণা বুঝে নিন।',
      image: 'assets/security.svg', imageAlt: 'নীল ঢাল এবং নিরাপত্তা কী-এর বিমূর্ত ইলাস্ট্রেশন',
      intro: 'অনেক অ্যাকাউন্টে আলাদা পাসওয়ার্ড রাখা কঠিন। আবার একই পাসওয়ার্ড বারবার ব্যবহার করাও ঝুঁকিপূর্ণ। পাসকি এই সমস্যার একটি আধুনিক সমাধান, যেখানে সাইন ইন করার জন্য আপনার ডিভাইসের নিরাপত্তা ব্যবস্থাই কাজে লাগে।',
      sections: [
        { title: 'পাসকি কীভাবে কাজ করে?', paragraphs: ['পাসকি একটি জোড়া ক্রিপ্টোগ্রাফিক কী ব্যবহার করে। একটি অংশ সেবাদাতার কাছে থাকে, অন্যটি আপনার ডিভাইস বা অনুমোদিত পাসকি ব্যবস্থায় সুরক্ষিত থাকে। সাইন ইনের সময় ডিভাইসের পিন, আঙুলের ছাপ বা মুখ শনাক্তকরণ দিয়ে অনুমতি দেন।', 'ফিঙ্গারপ্রিন্টের ছবি বা আপনার মুখের তথ্য ওয়েবসাইটে পাঠানো হয় না। ডিভাইস সেই যাচাই করে, তারপর প্রয়োজনীয় সাইন ইন প্রমাণ তৈরি করে।'] },
        { title: 'ফিশিংয়ের বিরুদ্ধে সুবিধা', paragraphs: ['পাসকি নির্দিষ্ট ওয়েবসাইটের সঙ্গে যুক্ত থাকে। দেখতে একই রকম হলেও অন্য ডোমেইনের ভুয়া সাইট সাধারণত সেই পাসকি ব্যবহার করতে পারে না। এই বৈশিষ্ট্য প্রচলিত পাসওয়ার্ডের একটি বড় দুর্বলতা কমায়।', 'তবু পাসকি সব ধরনের প্রতারণা ঠেকায় না। কাউকে অ্যাকাউন্টে প্রবেশের অনুমতি দেওয়া, ক্ষতিকর সফটওয়্যার চালানো বা পুনরুদ্ধারের তথ্য শেয়ার করা এখনো বিপজ্জনক হতে পারে।'] },
        { title: 'হারানো ডিভাইসের প্রস্তুতি', paragraphs: ['পাসকি চালু করার আগে সেবাটির অ্যাকাউন্ট পুনরুদ্ধারের পদ্ধতি দেখুন। সমর্থিত হলে অতিরিক্ত ডিভাইস বা হার্ডওয়্যার কী যোগ করতে পারেন। সিঙ্ক করা পাসকি ব্যবহার করলে সংশ্লিষ্ট অ্যাকাউন্টটিও ভালোভাবে সুরক্ষিত রাখুন।', 'সব সাইট এখনো পাসকি সমর্থন করে না। যেখানে পাসওয়ার্ড দরকার, সেখানে আলাদা শক্তিশালী পাসওয়ার্ড, পাসওয়ার্ড ম্যানেজার এবং দুই ধাপের যাচাই ব্যবহার করুন।'] }
      ]
    },
    {
      slug: 'space-next-chapter', category: 'science', date: '2026-10-05', minutes: 6,
      title: 'মহাকাশের নতুন অধ্যায়, আমাদের নতুন প্রশ্ন',
      excerpt: 'চাঁদ, উপগ্রহ আর দূরের গ্রহ—মহাকাশ গবেষণা কীভাবে পৃথিবীর জীবনকেও বদলে দেয়?',
      image: 'assets/orbit.svg', imageAlt: 'হালকা পটভূমিতে লাইম রঙের গ্রহ ও তার কক্ষপথের ইলাস্ট্রেশন',
      intro: 'মহাকাশের খবর শুধু রকেট উৎক্ষেপণ বা দূরের কোনো গ্রহে পৌঁছানোর গল্প নয়। আবহাওয়ার পূর্বাভাস, দুর্যোগ ব্যবস্থাপনা, কৃষি ও যোগাযোগের সঙ্গে মহাকাশ প্রযুক্তির সরাসরি সম্পর্ক আছে। দূরের দিকে তাকাতে গিয়েই আমরা পৃথিবীকে নতুনভাবে দেখতে শিখি।',
      sections: [
        { title: 'পৃথিবীকে দেখার নতুন চোখ', paragraphs: ['পৃথিবী পর্যবেক্ষণকারী উপগ্রহ ভূমির পরিবর্তন, সমুদ্রের তাপমাত্রা এবং মেঘের অবস্থার তথ্য সংগ্রহ করে। দীর্ঘ সময়ের তথ্য তুলনা করে গবেষকেরা বন্যা, বন উজাড় বা নগর বৃদ্ধির পরিবর্তন বুঝতে পারেন।', 'এসব তথ্যের উপযোগিতা নির্ভর করে বিশ্লেষণ এবং সঠিক মানুষের কাছে পৌঁছানোর ওপর। কৃষক, স্থানীয় প্রশাসন ও গবেষকের চাহিদা আলাদা; কাঁচা ছবিকে ব্যবহারযোগ্য সিদ্ধান্তে রূপান্তর করাই বড় কাজ।'] },
        { title: 'চাঁদে যাওয়ার বৈজ্ঞানিক কারণ', paragraphs: ['চাঁদের শিলা ও ভূগঠন সৌরজগতের ইতিহাস বোঝার সূত্র দেয়। সেখানে দীর্ঘমেয়াদি কাজ করতে হলে শক্তি, যোগাযোগ, তাপমাত্রা এবং সরঞ্জামের স্থায়িত্ব নিয়ে নতুন সমাধান দরকার।', 'এই গবেষণায় তৈরি পদ্ধতি পৃথিবীর কঠিন পরিবেশেও কাজে লাগতে পারে। তবে প্রতিটি মহাকাশ প্রকল্পের সুবিধা, ব্যয় এবং পরিবেশগত প্রভাব আলাদা করে বিচার করা জরুরি।'] },
        { title: 'কৌতূহল থেকে শুরু', paragraphs: ['মহাকাশ সম্পর্কে জানতে টেলিস্কোপ কেনা জরুরি নয়। খালি চোখে চাঁদের পর্যায় দেখা, আকাশের মানচিত্র ব্যবহার করা এবং মহাকাশ সংস্থার প্রকাশিত ছবি পড়া দিয়ে শুরু করতে পারেন।', 'কোনো চমকপ্রদ খবর দেখলে তার মূল গবেষণা বা আনুষ্ঠানিক ঘোষণার তারিখ দেখুন। মহাকাশ গবেষণায় পরিকল্পনা, পরীক্ষা এবং সফল ফল—এই তিনটি আলাদা ধাপ।'] }
      ]
    },
    {
      slug: 'local-ai', category: 'ai', date: '2026-10-04', minutes: 5,
      title: 'নিজের কম্পিউটারে এআই: সম্ভাবনা ও সীমাবদ্ধতা',
      excerpt: 'লোকাল মডেল চালাতে কী লাগে, কোথায় সুবিধা মেলে আর কোন ক্ষেত্রে ক্লাউডের সাহায্য প্রয়োজন?',
      image: 'assets/editorial.svg', imageAlt: 'ব্যক্তিগত কম্পিউটারে এআই প্রসেসিংয়ের বিমূর্ত চিত্র',
      intro: 'অনেক এআই সরঞ্জাম ইন্টারনেটের সার্ভারে কাজ করে। তবে কিছু মডেল নিজের কম্পিউটারেও চালানো যায়। স্থানীয়ভাবে চালালে তথ্যের ওপর নিয়ন্ত্রণ বাড়তে পারে এবং নির্দিষ্ট কাজ ইন্টারনেট ছাড়াও করা সম্ভব হতে পারে।',
      sections: [
        { title: 'হার্ডওয়্যার ও মডেলের মিল', paragraphs: ['মডেলের আকার, মেমরির চাহিদা এবং আপনার কম্পিউটারের সক্ষমতা মিলিয়ে শুরু করুন। ছোট মডেল তুলনামূলক কম রিসোর্সে চললেও জটিল কাজের মানে সীমাবদ্ধতা থাকতে পারে। কোয়ান্টাইজড সংস্করণ মেমরির চাহিদা কমায়, তবে ফল পরীক্ষা করে দেখা দরকার।', 'যে সফটওয়্যার ব্যবহার করবেন, তার আনুষ্ঠানিক উৎস থেকে ইনস্টল করুন। মডেল ফাইলের লাইসেন্স, প্রকাশক এবং প্রয়োজনীয় রিসোর্স সম্পর্কে পড়ুন।'] },
        { title: 'নিজের তথ্যের ওপর নিয়ন্ত্রণ', paragraphs: ['স্থানীয়ভাবে কাজ করলেও সব অ্যাপ পুরোপুরি অফলাইন নয়। টেলিমেট্রি, আপডেট বা বাইরের সার্ভিস ব্যবহারের সেটিংস দেখুন। সংবেদনশীল তথ্য নিয়ে কাজ করার আগে সরঞ্জামটি কোথায় তথ্য পাঠায়, তা যাচাই করুন।', 'নিজের নোট খোঁজা, খসড়া লেখা বা কোড সম্পর্কে প্রশ্ন করার মতো নির্দিষ্ট কাজে শুরু করুন। পরিচিত কিছু প্রশ্ন দিয়ে উত্তর যাচাই করলে মডেলের সীমা বুঝতে সুবিধা হয়।'] },
        { title: 'সুবিধার সঙ্গে বাস্তবতা', paragraphs: ['লোকাল মডেলে ডাউনলোডের জায়গা, বিদ্যুৎ, তাপ এবং সেটআপের সময় বিবেচনায় আসে। ক্লাউড মডেল কখনো বেশি শক্তিশালী হতে পারে, আবার স্থানীয় মডেলে তথ্য নিয়ন্ত্রণের সুবিধা থাকতে পারে।', 'কোনটি সব সময় ভালো—এমন একক উত্তর নেই। কাজের ধরন, খরচ এবং গোপনীয়তার চাহিদা অনুযায়ী সিদ্ধান্ত নিন।'] }
      ]
    },
    {
      slug: 'better-browser', category: 'development', date: '2026-10-03', minutes: 4,
      title: 'দ্রুত ওয়েবসাইট বানানোর পাঁচটি অভ্যাস',
      excerpt: 'ছোট ছবি, কম JavaScript আর পরিষ্কার লেআউট—ওয়েব পারফরম্যান্স উন্নত করার ব্যবহারিক শুরু।',
      image: 'assets/code.svg', imageAlt: 'ওয়েবসাইটের গতি ও কোড বোঝানো সবুজ বিমূর্ত চিত্র',
      intro: 'দ্রুত ওয়েবসাইট শুধু ভালো স্কোরের জন্য নয়। ধীর সংযোগ, পুরোনো ফোন এবং সীমিত ডেটা ব্যবহারকারীও যেন সহজে আপনার লেখা পড়তে পারেন, সেটাই লক্ষ্য। ছোট কিছু অভ্যাস পেজের অভিজ্ঞতা অনেক উন্নত করতে পারে।',
      sections: [
        { title: 'প্রথমে সবচেয়ে বড় উপাদান', paragraphs: ['ছবির সঠিক মাপ এবং উপযুক্ত ফরম্যাট বেছে নিন। ডেস্কটপের জন্য বিশাল ছবি সব ফোনে পাঠাবেন না। ছবির width ও height নির্ধারণ করলে লোড হওয়ার সময় লেআউটের হঠাৎ নড়াচড়া কমে।', 'প্রথম স্ক্রিনের মূল ছবিটি দ্রুত লোড হওয়া উচিত। নিচের ছবিগুলোতে প্রয়োজনে lazy loading ব্যবহার করতে পারেন।'] },
        { title: 'যতটুকু দরকার, ততটুকু কোড', paragraphs: ['একটি ছোট ইন্টারঅ্যাকশনের জন্য বড় লাইব্রেরি যোগ করার আগে ব্রাউজারের নিজস্ব সুবিধা দেখুন। অব্যবহৃত স্ক্রিপ্ট সরান এবং অপ্রয়োজনীয় তৃতীয় পক্ষের উইজেটের খরচ বুঝুন।', 'ফন্টের সংখ্যা ও ওজন সীমিত রাখুন। ফন্ট আসার আগেও যেন লেখা পড়া যায়, সেই ব্যবস্থা করুন।'] },
        { title: 'বাস্তব অবস্থায় পরীক্ষা', paragraphs: ['ব্রাউজারের ডেভেলপার টুলে ধীর নেটওয়ার্ক এবং সীমিত প্রসেসরের অবস্থা অনুকরণ করে দেখুন। পেজ কখন দৃশ্যমান হয়, কখন ব্যবহার করা যায় এবং কোথায় লেআউট নড়ে—এই তিনটি বিষয় খেয়াল করুন।', 'পরিবর্তনের আগে ও পরে একই পরিস্থিতিতে মাপুন। স্কোরের পাশাপাশি বাস্তব ডিভাইসে পড়া, খোঁজা এবং নেভিগেশন পরীক্ষা করলে উন্নতি সত্যিই কাজে লাগছে কি না বোঝা যায়।'] }
      ]
    },
    {
      slug: 'digital-privacy', category: 'security', date: '2026-10-02', minutes: 5,
      title: 'ডিজিটাল জীবনে গোপনীয়তার ছোট অভ্যাস',
      excerpt: 'অ্যাপের অনুমতি, অ্যাকাউন্টের নিরাপত্তা আর অনলাইনে শেয়ার করার অভ্যাস—একটু খেয়ালেই বড় পরিবর্তন।',
      image: 'assets/security.svg', imageAlt: 'ব্যক্তিগত তথ্য রক্ষার প্রতীক হিসেবে নীল নিরাপত্তা ঢাল',
      intro: 'অনলাইনে গোপনীয়তা বজায় রাখা একবারের কাজ নয়। এটি নিয়মিত কিছু ছোট সিদ্ধান্তের সমষ্টি। কোন অ্যাপ কী তথ্য দেখছে, কোন অ্যাকাউন্টে পুরোনো ডিভাইস যুক্ত আছে এবং আমরা কী প্রকাশ করছি—এসব বিষয়েই ভালো শুরু করা যায়।',
      sections: [
        { title: 'অ্যাপের অনুমতি দেখুন', paragraphs: ['ফোনের সেটিংস থেকে ক্যামেরা, মাইক্রোফোন, কন্টাক্ট এবং লোকেশনের অনুমতি পর্যালোচনা করুন। একটি অ্যাপের মূল কাজের জন্য কোন অনুমতি প্রয়োজন, সেটি ভেবে দেখুন। সমর্থিত হলে “ব্যবহারের সময়” অনুমতি বেছে নিতে পারেন।', 'অনেকদিন ব্যবহার না করা অ্যাপ সরিয়ে ফেলুন। ব্রাউজারের এক্সটেনশনও একইভাবে যাচাই করুন; একটি এক্সটেনশন কী কী সাইটের তথ্য পড়তে পারে, তা জানা জরুরি।'] },
        { title: 'অ্যাকাউন্টের দরজা সুরক্ষিত করুন', paragraphs: ['প্রতিটি গুরুত্বপূর্ণ অ্যাকাউন্টে আলাদা পাসওয়ার্ড ব্যবহার করুন। সমর্থিত হলে পাসকি বা দুই ধাপের যাচাই চালু করুন। পুনরুদ্ধারের ইমেইল এবং নিরাপত্তা তথ্য হালনাগাদ রাখুন।', 'অ্যাকাউন্টে যুক্ত ডিভাইসের তালিকা দেখুন। চেনা যায় না এমন সেশন থাকলে সাইন আউট করুন এবং প্রয়োজনমতো নিরাপত্তা সেটিংস বদলান।'] },
        { title: 'শেয়ার করার আগে একবার ভাবুন', paragraphs: ['ছবির পেছনে পরিচয়পত্র, বাড়ির ঠিকানা বা ব্যক্তিগত নথি দেখা যাচ্ছে কি না খেয়াল করুন। অন্যের ছবি বা কথোপকথন প্রকাশের আগে তাদের সম্মতি নিন।', 'সব তথ্য লুকিয়ে রাখাই লক্ষ্য নয়। কোন তথ্য কার সঙ্গে এবং কোন উদ্দেশ্যে শেয়ার করছেন—এই সিদ্ধান্ত নিজের হাতে রাখাই গোপনীয়তার মূল কথা।'] }
      ]
    },
    {
      slug: 'desk-essentials', category: 'gadgets', date: '2026-10-01', minutes: 4,
      title: 'আরামদায়ক ডেস্ক সেটআপ: কমেই ভালো',
      excerpt: 'নতুন গ্যাজেটের আগে মনিটরের উচ্চতা, আলো আর কাজের অভ্যাসে একটু নজর দিন।',
      image: 'assets/chip.svg', imageAlt: 'হালকা পটভূমিতে আধুনিক স্মার্টফোন ও ইয়ারবাডের ইলাস্ট্রেশন',
      intro: 'সুন্দর ডেস্কের ছবি দেখে অনেক সরঞ্জাম কেনার ইচ্ছে হতে পারে। কিন্তু আরামদায়ক কাজের জায়গা তৈরি করতে প্রথমে বোঝা দরকার, আপনার শরীর ও কাজের ধরন আসলে কী চায়। বিদ্যমান জিনিসের অবস্থান বদলেই অনেক উন্নতি সম্ভব।',
      sections: [
        { title: 'বসার অবস্থান ও স্ক্রিন', paragraphs: ['মনিটর এমনভাবে রাখুন যেন ঘাড় দীর্ঘ সময় অস্বস্তিকরভাবে বাঁকিয়ে রাখতে না হয়। চেয়ার ও টেবিলের অবস্থান মিলিয়ে হাত স্বাভাবিকভাবে রাখতে চেষ্টা করুন। ল্যাপটপ উঁচু করলে আলাদা কিবোর্ড ও মাউস সুবিধাজনক হতে পারে।', 'একটি নির্দিষ্ট ভঙ্গিতে দীর্ঘ সময় বসে থাকার বদলে নিয়মিত ছোট বিরতি নিন। ব্যথা বা অস্বস্তি থাকলে উপযুক্ত স্বাস্থ্য পেশাজীবীর পরামর্শ নিন।'] },
        { title: 'আলো ও শব্দের পরিবেশ', paragraphs: ['স্ক্রিনে সরাসরি আলো বা জানালার প্রতিফলন পড়ছে কি না দেখুন। ঘরের আলো এবং স্ক্রিনের উজ্জ্বলতা এমন রাখুন যেন পড়তে স্বস্তি লাগে। শুধু সাজানোর জন্য বাড়তি আলো সবসময় দরকার হয় না।', 'কলে কাজ করলে শান্ত জায়গা, একটি পরিষ্কার মাইক্রোফোন এবং আরামদায়ক হেডফোন কাজে লাগতে পারে। দীর্ঘ সময় ব্যবহারে হেডফোনের ওজনও বিবেচনা করুন।'] },
        { title: 'কেনার আগে সমস্যাটি লিখুন', paragraphs: ['ডেস্কে কী সমস্যায় পড়ছেন, সেটি এক বাক্যে লিখুন। তার সমাধান যদি জিনিসের অবস্থান বদলে হয়, আগে সেটি করুন। পরে প্রয়োজন অনুযায়ী একটি একটি করে সরঞ্জাম যোগ করুন।', 'ভালো সেটআপের মানে বেশি জিনিস নয়। যে পরিবেশে মনোযোগ ধরে রেখে স্বাচ্ছন্দ্যে কাজ করতে পারেন, সেটিই আপনার জন্য উপযুক্ত।'] }
      ]
    }
  ];

  const grid = document.getElementById('articles-grid');
  const resultsLabel = document.getElementById('results-label');
  const loadMore = document.getElementById('load-more');
  const searchDialog = document.getElementById('search-dialog');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  const articleDialog = document.getElementById('article-dialog');
  const articleContent = document.getElementById('article-content');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const themeToggle = document.getElementById('theme-toggle');
  const readingProgress = document.getElementById('reading-progress');
  const themeMedia = window.matchMedia('(prefers-color-scheme: dark)');
  const number = value => new Intl.NumberFormat('bn-BD').format(value);
  const date = value => new Intl.DateTimeFormat('bn-BD', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${value}T12:00:00Z`));
  const escape = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const icon = name => {
    const paths = {
      arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
      bookmark: '<path d="M6 4h12v17l-6-4-6 4z"/>',
      share: '<path d="M12 16V3m-5 5 5-5 5 5M5 13v7h14v-7"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/>'
    };
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
  };

  let selectedCategory = 'all';
  let visibleCount = 6;
  let activeArticle = null;
  let previousHash = '';
  let savedTheme = readStorage('onlytech-theme');
  let bookmarks = new Set();
  try {
    const stored = JSON.parse(readStorage('onlytech-bookmarks') || '[]');
    if (Array.isArray(stored)) bookmarks = new Set(stored.filter(slug => articles.some(article => article.slug === slug)));
  } catch { /* Browsing remains available if saved preferences are unavailable. */ }

  function readStorage(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, value); } catch { /* In-memory state remains usable. */ }
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeToggle) {
      const dark = theme === 'dark';
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', dark ? 'লাইট মোড চালু করুন' : 'ডার্ক মোড চালু করুন');
      themeToggle.setAttribute('title', dark ? 'লাইট মোড' : 'ডার্ক মোড');
    }
  }

  applyTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : themeMedia.matches ? 'dark' : 'light');
  themeToggle?.addEventListener('click', () => {
    savedTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    writeStorage('onlytech-theme', savedTheme);
    applyTheme(savedTheme);
  });
  themeMedia.addEventListener('change', event => {
    if (savedTheme !== 'light' && savedTheme !== 'dark') applyTheme(event.matches ? 'dark' : 'light');
  });

  function card(article) {
    return `<article class="article-card">
      <button class="article-image-button" type="button" data-article="${article.slug}" aria-label="${escape(article.title)} পড়ুন">
        <img class="article-image" src="${article.image}" alt="${escape(article.imageAlt)}" width="800" height="600" loading="lazy" decoding="async">
        <span class="image-category">${categories[article.category]}</span>
      </button>
      <div class="article-card-body">
        <div class="article-meta"><span>${categories[article.category]}</span><span class="meta-dot" aria-hidden="true">·</span><time datetime="${article.date}">${date(article.date)}</time></div>
        <h3><button class="article-title" type="button" data-article="${article.slug}">${escape(article.title)}</button></h3>
        <p class="article-excerpt">${escape(article.excerpt)}</p>
        <div class="article-footer"><span class="author-avatar" aria-hidden="true">F</span><span class="author-name">ফাহাদ</span><span class="read-time">${number(article.minutes)} মিনিট পড়া</span></div>
      </div>
    </article>`;
  }

  function renderArticles() {
    const filtered = articles.filter(article => selectedCategory === 'all' || article.category === selectedCategory);
    if (grid) grid.innerHTML = filtered.slice(0, visibleCount).map(card).join('');
    if (resultsLabel) resultsLabel.textContent = selectedCategory === 'all' ? `${number(filtered.length)}টি লেখা · নতুন ভাবনার খোঁজে` : `${categories[selectedCategory]} · ${number(filtered.length)}টি লেখা`;
    if (loadMore) loadMore.hidden = visibleCount >= filtered.length;
    document.querySelectorAll('[data-filter]').forEach(button => {
      const active = button.dataset.filter === selectedCategory;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function closeMenu() {
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (mobileNav) mobileNav.hidden = true;
    document.body.classList.remove('menu-open');
  }

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    if (mobileNav) mobileNav.hidden = !open;
    document.body.classList.toggle('menu-open', open);
  });
  mobileNav?.addEventListener('click', event => {
    if (event.target.closest('a, [data-filter], [data-open-search]')) closeMenu();
  });
  window.matchMedia('(min-width: 681px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  loadMore?.addEventListener('click', () => {
    const previousCount = grid?.children.length || 0;
    visibleCount += 6;
    renderArticles();
    grid?.children[previousCount]?.querySelector('button')?.focus();
  });

  function syncDialogState() {
    document.body.classList.toggle('dialog-open', Boolean(document.querySelector('dialog[open]')));
  }

  function openSearch() {
    if (!searchDialog) return;
    closeMenu();
    if (articleDialog?.open) articleDialog.close();
    if (!searchDialog.open) searchDialog.showModal();
    syncDialogState();
    renderSearch();
    requestAnimationFrame(() => searchInput?.focus());
  }

  function normalized(value) {
    return value.normalize('NFKC').toLocaleLowerCase('bn-BD').replace(/\s+/g, ' ').trim();
  }

  function renderSearch() {
    if (!searchResults) return;
    const query = normalized(searchInput?.value || '');
    const terms = query.split(' ').filter(Boolean);
    const found = query ? articles.filter(article => {
      const aliases = { ai: 'AI artificial intelligence', gadgets: 'gadget gadgets phone', development: 'development web code coding', security: 'security privacy cybersecurity', science: 'science space' };
      const content = normalized(`${article.title} ${article.excerpt} ${categories[article.category]} ${aliases[article.category]} ${article.slug.replace(/-/g, ' ')} ${article.sections.map(section => section.title + ' ' + section.paragraphs.join(' ')).join(' ')}`);
      return terms.every(term => content.includes(term));
    }) : articles.slice(0, 5);
    const description = document.createElement('p');
    description.className = 'search-results-label';
    description.textContent = query ? `${number(found.length)}টি লেখা পাওয়া গেছে` : 'পড়া শুরু করুন';
    searchResults.replaceChildren(description);
    if (!found.length) {
      const empty = document.createElement('div');
      empty.className = 'search-empty';
      empty.innerHTML = `${icon('search')}<h3>কোনো লেখা পাওয়া যায়নি</h3><p>অন্য শব্দ বা ছোট একটি বাক্য দিয়ে আবার খুঁজুন।</p>`;
      searchResults.append(empty);
      return;
    }
    found.forEach(article => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'search-result';
      button.dataset.article = article.slug;
      button.innerHTML = `<img src="${article.image}" alt="" width="72" height="72"><span class="search-result-copy"><span class="search-result-category search-result-meta">${categories[article.category]} · ${number(article.minutes)} মিনিট</span><strong class="search-result-title">${escape(article.title)}</strong><span class="search-result-excerpt">${escape(article.excerpt)}</span></span>${icon('arrow')}`;
      searchResults.append(button);
    });
  }

  searchInput?.addEventListener('input', renderSearch);
  searchInput?.closest('form')?.addEventListener('submit', event => event.preventDefault());

  function updateBookmarkButton() {
    if (!activeArticle) return;
    document.querySelectorAll(`[data-bookmark="${activeArticle.slug}"]`).forEach(button => {
      const saved = bookmarks.has(activeArticle.slug);
      button.setAttribute('aria-pressed', String(saved));
      button.classList.toggle('is-saved', saved);
      button.innerHTML = `${icon(saved ? 'check' : 'bookmark')}<span>${saved ? 'সংরক্ষিত' : 'পরে পড়ুন'}</span>`;
      button.setAttribute('aria-label', saved ? 'সংরক্ষিত তালিকা থেকে সরান' : 'এই ব্রাউজারে পরে পড়ার জন্য সংরক্ষণ করুন');
    });
  }

  function articleHash(slug) {
    return `#article/${encodeURIComponent(slug)}`;
  }

  function openArticle(slug, updateUrl = true) {
    const article = articles.find(item => item.slug === slug);
    if (!article || !articleDialog || !articleContent) return;
    if (!activeArticle) previousHash = location.hash.startsWith('#article/') ? '' : location.hash;
    activeArticle = article;
    closeMenu();
    if (searchDialog?.open) searchDialog.close();
    articleContent.innerHTML = `<article class="article-reading">
      <header class="article-reading-header">
        <button type="button" class="article-reading-category" data-filter="${article.category}">${categories[article.category]}</button>
        <h1 class="article-reading-title" id="article-title" tabindex="-1">${escape(article.title)}</h1>
        <p class="article-reading-summary">${escape(article.excerpt)}</p>
        <div class="article-reading-meta"><span class="author-avatar" aria-hidden="true">F</span><span>ফাহাদ</span><span aria-hidden="true">·</span><time datetime="${article.date}">${date(article.date)}</time><span aria-hidden="true">·</span><span>${number(article.minutes)} মিনিট পড়া</span></div>
        <div class="article-reading-actions"><button type="button" class="article-action" data-bookmark="${article.slug}"></button><button type="button" class="article-action" id="share-article">${icon('share')}<span>শেয়ার করুন</span></button><span class="article-action-status" id="article-action-status" role="status"></span></div>
      </header>
      <img class="article-reading-cover" src="${article.image}" alt="${escape(article.imageAlt)}" width="800" height="600">
      <div class="article-reading-body"><p class="article-lead">${escape(article.intro)}</p>${article.sections.map(section => `<section><h2>${escape(section.title)}</h2>${section.paragraphs.map(paragraph => `<p>${escape(paragraph)}</p>`).join('')}</section>`).join('')}<p class="article-reading-notice">এটি OnlyTech থিমের একটি নমুনা লেখা। প্রকাশের আগে নিজের লেখা ও যাচাইকৃত তথ্য যোগ করুন।</p></div>
      <aside class="article-related"><span class="eyebrow">আরও পড়ুন</span><h2>আপনার পরের ভাবনা</h2>${articles.filter(item => item.slug !== article.slug).sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).slice(0, 2).map(item => `<button class="related-article" type="button" data-article="${item.slug}"><span>${escape(item.title)}</span>${icon('arrow')}</button>`).join('')}</aside>
    </article>`;
    articleDialog.setAttribute('aria-labelledby', 'article-title');
    updateBookmarkButton();
    if (!articleDialog.open) articleDialog.showModal();
    syncDialogState();
    articleDialog.scrollTop = 0;
    articleContent.scrollTop = 0;
    if (updateUrl) history.replaceState(null, '', `${location.pathname}${location.search}${articleHash(article.slug)}`);
    requestAnimationFrame(() => {
      articleContent.querySelector('h1')?.focus({ preventScroll: true });
      updateReadingProgress();
    });
  }

  function updateReadingProgress() {
    if (!readingProgress) return;
    if (!articleDialog?.open) {
      readingProgress.style.width = '0%';
      return;
    }
    const scroller = articleContent.scrollHeight > articleContent.clientHeight + 1 ? articleContent : articleDialog;
    const range = scroller.scrollHeight - scroller.clientHeight;
    const progress = range > 0 ? Math.min(100, Math.max(0, scroller.scrollTop / range * 100)) : 100;
    readingProgress.style.width = `${progress}%`;
    readingProgress.setAttribute('aria-valuenow', String(Math.round(progress)));
  }

  articleDialog?.addEventListener('scroll', updateReadingProgress, { passive: true });
  articleContent?.addEventListener('scroll', updateReadingProgress, { passive: true });
  window.addEventListener('resize', updateReadingProgress, { passive: true });

  async function shareArticle(button) {
    if (!activeArticle) return;
    const article = activeArticle;
    const url = new URL(`${location.pathname}${location.search}${articleHash(article.slug)}`, location.origin).href;
    const status = document.getElementById('article-action-status');
    button.disabled = true;
    try {
      if (typeof navigator.share === 'function') {
        await navigator.share({ title: `${article.title} — OnlyTech`, text: article.excerpt, url });
        if (status) status.textContent = 'শেয়ার করা হয়েছে';
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        if (status) status.textContent = 'লিংক কপি হয়েছে';
      } else {
        if (status) status.textContent = 'শেয়ার করতে নিচের লিংকটি কপি করুন';
        showShareLink(url);
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        if (status) status.textContent = 'শেয়ার করতে নিচের লিংকটি কপি করুন';
        showShareLink(url);
      }
    } finally {
      button.disabled = false;
    }
  }

  function showShareLink(url) {
    let input = document.getElementById('article-share-link');
    if (!input) {
      input = document.createElement('input');
      input.id = 'article-share-link';
      input.className = 'article-share-link';
      input.type = 'url';
      input.readOnly = true;
      input.setAttribute('aria-label', 'এই লেখার লিংক');
      articleContent.querySelector('.article-reading-actions')?.after(input);
    }
    input.value = url;
    input.focus();
    input.select();
  }

  document.addEventListener('click', event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const searchButton = target.closest('[data-open-search]');
    if (searchButton) { event.preventDefault(); openSearch(); return; }
    const closeButton = target.closest('[data-close-dialog]');
    if (closeButton) { closeButton.closest('dialog')?.close(); return; }
    const articleButton = target.closest('[data-article]');
    if (articleButton) { event.preventDefault(); openArticle(articleButton.dataset.article); return; }
    const categoryButton = target.closest('[data-filter]');
    if (categoryButton && Object.hasOwn(categories, categoryButton.dataset.filter)) {
      if (categoryButton.tagName === 'A') event.preventDefault();
      selectedCategory = categoryButton.dataset.filter;
      visibleCount = 6;
      renderArticles();
      closeMenu();
      if (articleDialog?.open) articleDialog.close();
      if (categoryButton.closest('header, footer, #mobile-nav, .article-reading')) {
        document.getElementById('latest')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      }
      return;
    }
    const bookmarkButton = target.closest('[data-bookmark]');
    if (bookmarkButton && activeArticle) {
      const slug = bookmarkButton.dataset.bookmark;
      if (bookmarks.has(slug)) bookmarks.delete(slug); else bookmarks.add(slug);
      writeStorage('onlytech-bookmarks', JSON.stringify([...bookmarks]));
      updateBookmarkButton();
      const status = document.getElementById('article-action-status');
      if (status) status.textContent = bookmarks.has(slug) ? 'এই ব্রাউজারে সংরক্ষিত হয়েছে' : 'সংরক্ষিত তালিকা থেকে সরানো হয়েছে';
      return;
    }
    const shareButton = target.closest('#share-article');
    if (shareButton) shareArticle(shareButton);
  });

  [searchDialog, articleDialog].filter(Boolean).forEach(dialog => {
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      syncDialogState();
      if (dialog === articleDialog) {
        activeArticle = null;
        if (location.hash.startsWith('#article/')) history.replaceState(null, '', `${location.pathname}${location.search}${previousHash}`);
        updateReadingProgress();
      }
    });
  });

  document.addEventListener('keydown', event => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
      event.preventDefault();
      openSearch();
    }
    const target = event.target;
    const editing = target instanceof Element && (target.matches('input, textarea, select') || target.closest('[contenteditable="true"]'));
    if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !editing && !document.querySelector('dialog[open]')) {
      event.preventDefault();
      openSearch();
    }
    if (event.key === 'Escape') {
      if (searchDialog?.open) { event.preventDefault(); searchDialog.close(); }
      else if (articleDialog?.open) { event.preventDefault(); articleDialog.close(); }
      closeMenu();
    }
  });

  function openHashArticle() {
    if (location.hash.startsWith('#article/')) {
      let slug;
      try { slug = decodeURIComponent(location.hash.slice(9)); } catch { return; }
      openArticle(slug, false);
    } else if (articleDialog?.open) articleDialog.close();
  }

  window.addEventListener('hashchange', openHashArticle);
  renderArticles();
  openHashArticle();
})();
