const listOfMenu = [
    {
        menuName: "Təlimlər",
        menuLink: "profession.html"
    },
    {
        menuName: "Məqalələr",
        menuLink: "article.html"
    },
    {
        menuName: "İndi Al",
        menuLink: "shoping.html"
    },
    {
        menuName: "Haqqımızda",
        menuLink: "about.html"
    },
    {
        menuName: "Əlaqə",
        menuLink: "https://wa.me/+994552575765"
    },
    {
        menuName: "Fline.az",
        menuLink: "https://fline.az"
    }
];


//ListOFCurse ilə ListOfCorosel adlarda ortaq gedir

const listOfCorosel = [
    {
        coroselCover: "profil/vitraj.jpeg",
        coroselHead: "Vitraj: Saxsı qablar üstündə dizayn",
        coroselParagraf: "Daha Ətraflı məlumat əldə et"
    },
    {
        coroselCover: "profil/florist.jpg",
        coroselHead: "Florist: Çiçək dizaynı",
        coroselParagraf: "Daha Ətraflı məlumat əldə et"
    },
    {
        coroselCover: "profil/xalcaciliq.jpg",
        coroselHead: "Xalçaçılıq: Qədim Azərbaycan kültürü",
        coroselParagraf: "Daha Ətraflı məlumat əldə et"
    },
    {
        coroselCover: "profil/derzilik.webp",
        coroselHead: "Dərzi: Müasir və Milli geyimlərin birgə təzahürü",
        coroselParagraf: "Daha Ətraflı məlumat əldə et"
    }
];


//qısa müddətli kurslar

const listOfCourse = [
    {
        nameOfCourse: listOfCorosel[0].coroselHead,
        littleInformAboutCourse: `Şüşə və saxsı qablar üzərində ornament və süjetli dekorativ 
        kompazisiya ilə bəzədilmə sənəti`,
        durationOfCourse: "3 ay",
        coverOfCourse: "profil/vitrajForProfession1.png",
        question1: "Vitraj nədir?",
        answer1: `Vitraj material kimi rəngli şüşə və ya ondan yaradılmış əsərlərdir. Min illik tarixi boyunca bu 
        termin demək olar ki, yalnız kilsələrin və digər əhəmiyyətli dini binaların pəncərələrinə tətbiq edilmişdir. 
        Çox sayda müxtəlif növ və üslubda vitrajlar var, lakin bütün şüşələr əsasən az miqdarda soda külü və əhəng 
        olan silisium qumundan ibarətdir. Bəziləri tərəfindən super soyudulmuş maye hesab edilən şüşə, sərt 
        vəziyyətdə olduqda bərk cisim kimi görünür, lakin bərk maddələrin daxili kristal quruluşuna malik deyil.
        Vitraj təbəqələri ümumiyyətlə "Art Glass" adlanır və əsasən Avropa və ABŞ-da istehsal olunur.
        Art Glass, vitraj layihənizlə yaradıcı baxışınıza nail olmağınızı təmin etmək üçün saysız-hesabsız rəng 
        və faktura birləşmələri ilə gəlir`,
        question2: "SMM nəyi həll edir?",
        answer2: [
            "Təklif olunan malın və ya xidmətin tanıtımı (Brendləşməsi)",
            "Qanun dairəsində onu tanıtmaq və məşhurlaşdırmaq",
            "PR-cəmiyyətlə əlaqə quran piarın təşkil edilməsi",
            "Şirkət saytlarına daxil olanların sayının artırılması"
        ],
        question3: "SMM-in ənənəvi iş qaydaları:",
        answer3: [
            "Yaradılması, sənədləşdirilməsi, materilalların doldurulması, müxtəlif platformalarda paylaşılması",
            "Bloqun irəli aparılması",
            "Mövzu barədə məlumatların paylaşması, diskusiyaların aparılması.",
            "Məşhur forumlarla iş , diskusiyaların davamlı olaraq aparılması, gizli marketinq (agentin müdaxiləsi)",
            "Məşhur şəbəkələrdə birbaşa reklamların aparılması.",
            "Virus marketinq",
            "Pozitiv manitorinq və neqativ məlumatların təşkil edilməsi. Bu müsbət məlumatlandırılma yolu ilə təşkil edilməlidir.",
            "Sosial media resursları ilə şirkət məhsullarının təqdim edilməsi"
        ],
        mainIdea: [
            "İlk olaraq yeni başlayan biznesmenlər hazır səhifələr almalıdırlar ki start üçün auditoriyaları olsun.",
            "Müştərilərinizlə birbaşa təmasda olun.",
            "Daima trend dizayn və üslubda çalışın.",
            "Müxtəlif video çarxlardan istifadə edin (doodle,animasiya,slaydşou)",
            "Daima Sponsorlu reklamlardan istifadə edin.",
            "Ayda ən azından bir dəfə müsabiqə edin.",
            "Effekti 1-3 ay ərzində gözləməyin.",
            "Müxtəlif böyük səhifələrdə reklam verin.",
            "Sosial Şəbəkələrin qadağan etdiyi medianı öz saytınızdan müştərilərə göstərin.",
            "Mobil Əlavəniz vardırsa onu sosial mediada müntəzəm paylaşım edin."
        ],
        coverOfIdea: "profil/vitrajForProfession2.png"
    },

    {
        nameOfCourse: listOfCorosel[1].coroselHead,
        littleInformAboutCourse: "Web dizayn gözəl sənətdir",
        durationOfCourse: "5 ay",
        coverOfCourse: "profil/floristForProfession1.png",
        question1: "Web dizayn kimdir?",
        answer1: `Bu sosial şəbəkələrdə marketinqlə məşğul olaraq malların satışının təşkil olunmasıdır. 
        Sosial media marketinq bütün marketinq növlərinin içərisində ən çox effektivli vasitədir. 
        Onun köməyi ilə istifadəçilər müştərinin saytına daxil olaraq bloqlar, hər gün baş verən yeniliklər, 
        forumlar və təklif edilən məntəqələr barədə məlumat toplaya bilir. Sosial Media Marketinqdə 
        reklam paylaşaraq istənilən qədər müştəri toplamaq mümkündür. Sosial şəbəkələrdə auditoriyanı pulla ələ 
        almaq mümkün deyil, onların inamını qazanaraq sayını artıqmaq lazımdır. Sosial media platforması auditoriya 
        ilə əlaqə saxlamaq üçün ən müasir üsuldur.`,
        question2: "SMM nəyi həll edir?",
        answer2: [
            "Təklif olunan malın və ya xidmətin tanıtımı (Brendləşməsi)",
            "Qanun dairəsində onu tanıtmaq və məşhurlaşdırmaq",
            "PR-cəmiyyətlə əlaqə quran piarın təşkil edilməsi",
            "Şirkət saytlarına daxil olanların sayının artırılması"
        ],
        question3: "SMM-in ənənəvi iş qaydaları:",
        answer3: [
            "Yaradılması, sənədləşdirilməsi, materilalların doldurulması, müxtəlif platformalarda paylaşılması",
            "Bloqun irəli aparılması",
            "Mövzu barədə məlumatların paylaşması, diskusiyaların aparılması.",
            "Məşhur forumlarla iş , diskusiyaların davamlı olaraq aparılması, gizli marketinq (agentin müdaxiləsi)",
            "Məşhur şəbəkələrdə birbaşa reklamların aparılması.",
            "Virus marketinq",
            "Pozitiv manitorinq və neqativ məlumatların təşkil edilməsi. Bu müsbət məlumatlandırılma yolu ilə təşkil edilməlidir.",
            "Sosial media resursları ilə şirkət məhsullarının təqdim edilməsi"
        ],
        mainIdea: [
            "İlk olaraq yeni başlayan biznesmenlər hazır səhifələr almalıdırlar ki start üçün auditoriyaları olsun.",
            "Müştərilərinizlə birbaşa təmasda olun.",
            "Daima trend dizayn və üslubda çalışın.",
            "Müxtəlif video çarxlardan istifadə edin (doodle,animasiya,slaydşou)",
            "Daima Sponsorlu reklamlardan istifadə edin.",
            "Ayda ən azından bir dəfə müsabiqə edin.",
            "Effekti 1-3 ay ərzində gözləməyin.",
            "Müxtəlif böyük səhifələrdə reklam verin.",
            "Sosial Şəbəkələrin qadağan etdiyi medianı öz saytınızdan müştərilərə göstərin.",
            "Mobil Əlavəniz vardırsa onu sosial mediada müntəzəm paylaşım edin."
        ],
        coverOfIdea: "profil/floristForProfession2.png"
    },

    {
        nameOfCourse: listOfCorosel[2].coroselHead,
        littleInformAboutCourse: "Web dizayn gözəl sənətdir",
        durationOfCourse: "5 ay",
        coverOfCourse: "profil/xalcaForProfession1.png",
        question1: "Web dizayn kimdir?",
        answer1: `Bu sosial şəbəkələrdə marketinqlə məşğul olaraq malların satışının təşkil olunmasıdır. 
        Sosial media marketinq bütün marketinq növlərinin içərisində ən çox effektivli vasitədir. 
        Onun köməyi ilə istifadəçilər müştərinin saytına daxil olaraq bloqlar, hər gün baş verən yeniliklər, 
        forumlar və təklif edilən məntəqələr barədə məlumat toplaya bilir. Sosial Media Marketinqdə 
        reklam paylaşaraq istənilən qədər müştəri toplamaq mümkündür. Sosial şəbəkələrdə auditoriyanı pulla ələ 
        almaq mümkün deyil, onların inamını qazanaraq sayını artıqmaq lazımdır. Sosial media platforması auditoriya 
        ilə əlaqə saxlamaq üçün ən müasir üsuldur.`,
        question2: "SMM nəyi həll edir?",
        answer2: [
            "Təklif olunan malın və ya xidmətin tanıtımı (Brendləşməsi)",
            "Qanun dairəsində onu tanıtmaq və məşhurlaşdırmaq",
            "PR-cəmiyyətlə əlaqə quran piarın təşkil edilməsi",
            "Şirkət saytlarına daxil olanların sayının artırılması"
        ],
        question3: "SMM-in ənənəvi iş qaydaları:",
        answer3: [
            "Yaradılması, sənədləşdirilməsi, materilalların doldurulması, müxtəlif platformalarda paylaşılması",
            "Bloqun irəli aparılması",
            "Mövzu barədə məlumatların paylaşması, diskusiyaların aparılması.",
            "Məşhur forumlarla iş , diskusiyaların davamlı olaraq aparılması, gizli marketinq (agentin müdaxiləsi)",
            "Məşhur şəbəkələrdə birbaşa reklamların aparılması.",
            "Virus marketinq",
            "Pozitiv manitorinq və neqativ məlumatların təşkil edilməsi. Bu müsbət məlumatlandırılma yolu ilə təşkil edilməlidir.",
            "Sosial media resursları ilə şirkət məhsullarının təqdim edilməsi"
        ],
        mainIdea: [
            "İlk olaraq yeni başlayan biznesmenlər hazır səhifələr almalıdırlar ki start üçün auditoriyaları olsun.",
            "Müştərilərinizlə birbaşa təmasda olun.",
            "Daima trend dizayn və üslubda çalışın.",
            "Müxtəlif video çarxlardan istifadə edin (doodle,animasiya,slaydşou)",
            "Daima Sponsorlu reklamlardan istifadə edin.",
            "Ayda ən azından bir dəfə müsabiqə edin.",
            "Effekti 1-3 ay ərzində gözləməyin.",
            "Müxtəlif böyük səhifələrdə reklam verin.",
            "Sosial Şəbəkələrin qadağan etdiyi medianı öz saytınızdan müştərilərə göstərin.",
            "Mobil Əlavəniz vardırsa onu sosial mediada müntəzəm paylaşım edin."
        ],
        coverOfIdea: "profil/xalcaForProfession2.png"
    },

    {
        nameOfCourse: listOfCorosel[3].coroselHead,
        littleInformAboutCourse: "Web dizayn gözəl sənətdir",
        durationOfCourse: "5 ay",
        coverOfCourse: "profil/derzilikForProfession1.png",
        question1: "Web dizayn kimdir?",
        answer1: `Bu sosial şəbəkələrdə marketinqlə məşğul olaraq malların satışının təşkil olunmasıdır. 
        Sosial media marketinq bütün marketinq növlərinin içərisində ən çox effektivli vasitədir. 
        Onun köməyi ilə istifadəçilər müştərinin saytına daxil olaraq bloqlar, hər gün baş verən yeniliklər, 
        forumlar və təklif edilən məntəqələr barədə məlumat toplaya bilir. Sosial Media Marketinqdə 
        reklam paylaşaraq istənilən qədər müştəri toplamaq mümkündür. Sosial şəbəkələrdə auditoriyanı pulla ələ 
        almaq mümkün deyil, onların inamını qazanaraq sayını artıqmaq lazımdır. Sosial media platforması auditoriya 
        ilə əlaqə saxlamaq üçün ən müasir üsuldur.`,
        question2: "SMM nəyi həll edir?",
        answer2: [
            "Təklif olunan malın və ya xidmətin tanıtımı (Brendləşməsi)",
            "Qanun dairəsində onu tanıtmaq və məşhurlaşdırmaq",
            "PR-cəmiyyətlə əlaqə quran piarın təşkil edilməsi",
            "Şirkət saytlarına daxil olanların sayının artırılması"
        ],
        question3: "SMM-in ənənəvi iş qaydaları:",
        answer3: [
            "Yaradılması, sənədləşdirilməsi, materilalların doldurulması, müxtəlif platformalarda paylaşılması",
            "Bloqun irəli aparılması",
            "Mövzu barədə məlumatların paylaşması, diskusiyaların aparılması.",
            "Məşhur forumlarla iş , diskusiyaların davamlı olaraq aparılması, gizli marketinq (agentin müdaxiləsi)",
            "Məşhur şəbəkələrdə birbaşa reklamların aparılması.",
            "Virus marketinq",
            "Pozitiv manitorinq və neqativ məlumatların təşkil edilməsi. Bu müsbət məlumatlandırılma yolu ilə təşkil edilməlidir.",
            "Sosial media resursları ilə şirkət məhsullarının təqdim edilməsi"
        ],
        mainIdea: [
            "İlk olaraq yeni başlayan biznesmenlər hazır səhifələr almalıdırlar ki start üçün auditoriyaları olsun.",
            "Müştərilərinizlə birbaşa təmasda olun.",
            "Daima trend dizayn və üslubda çalışın.",
            "Müxtəlif video çarxlardan istifadə edin (doodle,animasiya,slaydşou)",
            "Daima Sponsorlu reklamlardan istifadə edin.",
            "Ayda ən azından bir dəfə müsabiqə edin.",
            "Effekti 1-3 ay ərzində gözləməyin.",
            "Müxtəlif böyük səhifələrdə reklam verin.",
            "Sosial Şəbəkələrin qadağan etdiyi medianı öz saytınızdan müştərilərə göstərin.",
            "Mobil Əlavəniz vardırsa onu sosial mediada müntəzəm paylaşım edin."
        ],
        coverOfIdea: "profil/derzilikForProfession2.png"
    }
];



const listOfMasterClass = [
    {
        masterClassCover: "profil/vitraj.jpeg",
        masterClassHead: "Vitraj: Saxsı qablar üstündə dizayn",
        masterClassParagraf: `Şüşə və saxsı qablar üzərində ornament və süjetli dekorativ 
        kompazisiya ilə bəzədilmə sənəti`,
        dateOfMasterClass: "Tezliklə",
        photosOfMasterClass: ['qablar/q21.JPG', 'qablar/q19.JPG', 'qablar/q7.JPG', 'qablar/q13.JPG', 'qablar/q14.JPG', 'qablar/q35.JPG', 'qablar/q34.JPG', 'qablar/q30.JPG', 'qablar/q29.JPG'],
        videosOfMasterClass: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    },
    {
        masterClassCover: "profil/florist.jpg",
        masterClassHead: "Florist: Çiçək dizaynı",
        masterClassParagraf: `Çiçəklərin növ və çeşidlərindın, təbiətin bütün qanuna 
        uyğunluqlarından məzmun dolu çələnglərin hazırlanması, həmçinin çiçəklər ilə 
        interyer və eksteryer dekorasiyaların hazırlanmasından bəhs edən sənət`,
        dateOfMasterClass: "Tezliklə",
        photosOfMasterClass: ['profil/florist.jpg'],
        videosOfMasterClass: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    },
    {
        masterClassCover: "profil/xalcaciliq.jpg",
        masterClassHead: "Xalçaçılıq: Qədim Azərbaycan kültürü",
        masterClassParagraf: `Xalq arasında yaranan və zaman ötdükcə incəsənətin ən mühim
        növlərindən birinə çevrilən qədim Azərbaycan sənəti`,
        dateOfMasterClass: "Tezliklə",
        photosOfMasterClass: ['xalcalar/x1.JPG', 'xalcalar/x7.JPG', 'xalcalar/x13.jpg', 'xalcalar/x18.JPG', 'xalcalar/x19.JPG', 'xalcalar/x29.JPG', 'xalcalar/x31.jpg', 'xalcalar/x38.JPG', 'xalcalar/x37.JPG', 'xalcalar/x41.jpg'],
        videosOfMasterClass: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    },
    {
        masterClassCover: "profil/derzilik.webp",
        masterClassHead: "Dərzi: Müasir və Milli geyimlərin birgə təzahürü",
        masterClassParagraf: `Toxuculuq məhsullarını emal edərək geyim və ev toxuculuq 
        məhsullarına çevirən sənət`,
        dateOfMasterClass: "Tezliklə",
        photosOfMasterClass: ['geyim/g1.JPG', 'geyim/g21.JPG', 'geyim/g22.jpg', 'geyim/g30.jpg', 'geyim/g46.JPG', 'geyim/g3.JPG', 'geyim/g17.JPG'],
        videosOfMasterClass: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    }
];

const listOfStudents = [
    {
        studentsName: "Vaqif Məhərrəmov",
        studentsJob: "Dizayner",
        studentsProfil: "profil/art-arxa.png",
        studentsSosail: "#"
    },
    {
        studentsName: "Vaqif Məhərrəmov",
        studentsJob: "Dizayner",
        studentsProfil: "profil/art-arxa.png",
        studentsSosail: "#"
    },
    {
        studentsName: "Vaqif Məhərrəmov",
        studentsJob: "Dizayner",
        studentsProfil: "profil/art-arxa.png",
        studentsSosail: "#"
    },
    {
        studentsName: "Vaqif Məhərrəmov",
        studentsJob: "Dizayner",
        studentsProfil: "profil/art-arxa.png",
        studentsSosail: "#"
    },
    {
        studentsName: "Vaqif Məhərrəmov",
        studentsJob: "Dizayner",
        studentsProfil: "profil/art-arxa.png",
        studentsSosail: "#"
    },
    {
        studentsName: "Vaqif Məhərrəmov",
        studentsJob: "Dizayner",
        studentsProfil: "profil/art-arxa.png",
        studentsSosail: "#"
    }
];

//ixtisasın adı və haqqında;
const listOfSpecialty = [
    {
        specialtyHead: listOfCorosel[0].coroselHead,
        specialtyInform: `Şüşə və saxsı qablar üzərində ornament və süjetli dekorativ 
        kompazisiya ilə bəzədilmə sənəti`
    },
    {
        specialtyHead: listOfCorosel[1].coroselHead,
        specialtyInform: `Floristika bir neçə sahəni özündə birləşdirir.
        Çiçəklərin növ və çeşidlərindın,oların təbiətindən, rənglərin bütün qanuna 
        uyğunluqlarından məzmun dolu çiçək çələnglərin hazırlanması, həmçinin çiçəklər ilə 
        interyer və eksteryer dekorasiyaların hazırlanmasından bəhs edən sənət`
    },
    {
        specialtyHead: listOfCorosel[2].coroselHead,
        specialtyInform: `Xalq arasında yaranan və zaman ötdükcə incəsənətin ən mühim
        növlərindən birinə çevrilən qədim Azərbaycan sənəti. Azərbaycanda xalça toxuculuğu 
        tətbiqi sənət növünün ən qədim sahələrindən biri hesab edilir.`
    },
    {
        specialtyHead: listOfCorosel[3].coroselHead,
        specialtyInform: `Toxuculuq məhsullarını emal edərək geyim və ev toxuculuq 
        məhsullarına çevirən sənət`
    }
];


const listOfArticle = [
    {
        nameOfArticle: 'Computer Networking',
        nameOfWriter: 'Oruc Məlikov',
        linkOfArticle: 'Article/Komp_network.docx',
        coverOfArticle: 'Article/Komp_network.PNG',
        informOfArticle: 'Inform about Article'
    }
]


const listOfMeeting = [
    {
        nameOfMeeting: "Azərbaycan müəllimlərinin XVI qurultayı",
        coverOfMeeeting: 'tedbir/t1.jpg',
        paragrafOfMeeting: `15-16 dekabr tarixində Bakı Konqres Mərkəzində keçirilən ümummilli lider Heydər Əliyevin 100 illik yubileyinə həsr 
        olunmuş Azərbaycan müəllimlərinin XVI qurultayı başa çatıb. Qurultayda Mədəniyyət və Sənətkarlıq üzrə Bakı Dövlət Peşə Təhsil Mərkəzindən 
        direktor cənab Pərviz Həmzəyev, müəllimlər;   Elşad Rəhimov, Gülnar Əliyeva və Məlahət Məmmədova iştirak etdi. `,
        dateOfMeeting: "Tezliklə",
        photosOfMeeting: ['tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg'],
        videosOfMeeting: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    },
    {
        nameOfMeeting: "Digeri 1",
        coverOfMeeeting: 'tedbir/t1.jpg',
        paragrafOfMeeting: `15-16 dekabr tarixində Bakı Konqres Mərkəzində keçirilən ümummilli lider Heydər Əliyevin 100 illik yubileyinə həsr 
        olunmuş Azərbaycan müəllimlərinin XVI qurultayı başa çatıb. Qurultayda Mədəniyyət və Sənətkarlıq üzrə Bakı Dövlət Peşə Təhsil Mərkəzindən 
        direktor cənab Pərviz Həmzəyev, müəllimlər;   Elşad Rəhimov, Gülnar Əliyeva və Məlahət Məmmədova iştirak etdi. `,
        dateOfMeeting: "Tezliklə",
        photosOfMeeting: ['tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg'],
        videosOfMeeting: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    },
    {
        nameOfMeeting: "Digerinin digeri 2",
        coverOfMeeeting: 'tedbir/t1.jpg',
        paragrafOfMeeting: `15-16 dekabr tarixində Bakı Konqres Mərkəzində keçirilən ümummilli lider Heydər Əliyevin 100 illik yubileyinə həsr 
        olunmuş Azərbaycan müəllimlərinin XVI qurultayı başa çatıb. Qurultayda Mədəniyyət və Sənətkarlıq üzrə Bakı Dövlət Peşə Təhsil Mərkəzindən 
        direktor cənab Pərviz Həmzəyev, müəllimlər;   Elşad Rəhimov, Gülnar Əliyeva və Məlahət Məmmədova iştirak etdi. `,
        dateOfMeeting: "Tezliklə",
        photosOfMeeting: ['tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg'],
        videosOfMeeting: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    },
    {
        nameOfMeeting: "Digerinin digerinin digeri 3",
        coverOfMeeeting: 'tedbir/t1.jpg',
        paragrafOfMeeting: `15-16 dekabr tarixində Bakı Konqres Mərkəzində keçirilən ümummilli lider Heydər Əliyevin 100 illik yubileyinə həsr 
        olunmuş Azərbaycan müəllimlərinin XVI qurultayı başa çatıb. Qurultayda Mədəniyyət və Sənətkarlıq üzrə Bakı Dövlət Peşə Təhsil Mərkəzindən 
        direktor cənab Pərviz Həmzəyev, müəllimlər;   Elşad Rəhimov, Gülnar Əliyeva və Məlahət Məmmədova iştirak etdi. `,
        dateOfMeeting: "Tezliklə",
        photosOfMeeting: ['tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg', 'tedbir/t1.jpg'],
        videosOfMeeting: ['tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4', 'tedbir/t1.mp4']
    }
];





// SHOPING

const listOfShoping = [

    // QABLAR

    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Diametri 24sm`,
        coverOfElement: "qablar/q1.jpg",
        indexOfElement: "q01",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Qara minalı, nəbati naxışlı nimçə dəsti. <br> Çap 21sm`,
        coverOfElement: "qablar/q2.JPG",
        indexOfElement: "q02",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Diametri 24sm`,
        coverOfElement: "qablar/q3.JPG",
        indexOfElement: "q03",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Diametri 24sm`,
        coverOfElement: "qablar/q4.jpg",
        indexOfElement: "q04",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Nar təsvirli incə naxışlı nimçə. <br> Çap 21sm`,
        coverOfElement: "qablar/q5.JPG",
        indexOfElement: "q05",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Tovuz quşu rəsmi olaraq bəzədilmiş nimçə. <br> Diametri 24sm`,
        coverOfElement: "qablar/q6.JPG",
        indexOfElement: "q06",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Qızıl güllərlə bəzədilmiş nimçə. <br> Çap 21sm`,
        coverOfElement: "qablar/q7.JPG",
        indexOfElement: "q07",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Çap 21sm.`,
        coverOfElement: "qablar/q8.jpg",
        indexOfElement: "q08",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Çap 21sm.`,
        coverOfElement: "qablar/q9.jpg",
        indexOfElement: "q09",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Çap 21sm.`,
        coverOfElement: "qablar/q10.JPG",
        indexOfElement: "q10",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Buta naxışlı armudu stəkanlı çay dəsti.`,
        coverOfElement: "qablar/q11.jpg",
        indexOfElement: "q11",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Buta naxışlı armudu stəkanlı çay dəsti.`,
        coverOfElement: "qablar/q12.JPG",
        indexOfElement: "q12",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Buta naxışlı armudu stəkanlı çay dəsti.`,
        coverOfElement: "qablar/q13.JPG",
        indexOfElement: "q13",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli naxışlarla bəzədilmiş çay dəsti.`,
        coverOfElement: "qablar/q14.JPG",
        indexOfElement: "q14",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Xüsusi dekor edilmiş bakal`,
        coverOfElement: "qablar/q15.JPG",
        indexOfElement: "q15",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Güllərlə bəzədilmiş nimçə. <br> Diametri 24sm.`,
        coverOfElement: "qablar/q16.JPG",
        indexOfElement: "q16",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q17.JPG",
        indexOfElement: "q17",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q18.JPG",
        indexOfElement: "q18",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q19.JPG",
        indexOfElement: "q19",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q20.JPG",
        indexOfElement: "q20",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q21.JPG",
        indexOfElement: "q21",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q22.JPG",
        indexOfElement: "q22",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q23.JPG",
        indexOfElement: "q23",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q24.JPG",
        indexOfElement: "q24",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q25.JPG",
        indexOfElement: "q25",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q26.JPG",
        indexOfElement: "q26",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Nar dekorlu güldan`,
        coverOfElement: "qablar/q27.JPG",
        indexOfElement: "q27",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Qızıl gül dekorlu armudu stəkan`,
        coverOfElement: "qablar/q28.JPG",
        indexOfElement: "q28",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli armudu stəkan`,
        coverOfElement: "qablar/q29.JPG",
        indexOfElement: "q29",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q30.JPG",
        indexOfElement: "q30",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Buta naxışlı nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q31.JPG",
        indexOfElement: "q31",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli nimçə. <br> Dimateri 24sm.`,
        coverOfElement: "qablar/q32.JPG",
        indexOfElement: "q32",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli armudu stəkan`,
        coverOfElement: "qablar/q33.JPG",
        indexOfElement: "q33",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Çiçək dekorasiyalı gül qabı.`,
        coverOfElement: "qablar/q34.JPG",
        indexOfElement: "q34",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Dekor vitraj qab",
        paragrafOfElement: `Milli ornamentli armudu stəkan.`,
        coverOfElement: "qablar/q35.JPG",
        indexOfElement: "q35",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },


    //  XALÇALAR


    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x1.JPG",
        indexOfElement: "x01",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x2.JPG",
        indexOfElement: "x02",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x3.jpg",
        indexOfElement: "x03",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x4.jpg",
        indexOfElement: "x04",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x5.JPG",
        indexOfElement: "x05",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x6.JPG",
        indexOfElement: "x06",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x7.JPG",
        indexOfElement: "x07",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x8.JPG",
        indexOfElement: "x08",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x9.JPG",
        indexOfElement: "x09",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x10.JPG",
        indexOfElement: "x10",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x12.jpg",
        indexOfElement: "x12",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x13.jpg",
        indexOfElement: "x13",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x14.jpg",
        indexOfElement: "x14",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x15.jpg",
        indexOfElement: "x15",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x16.JPG",
        indexOfElement: "x16",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x18.JPG",
        indexOfElement: "x18",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x19.JPG",
        indexOfElement: "x19",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x20.JPG",
        indexOfElement: "x20",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x21.JPG",
        indexOfElement: "x21",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x23.JPG",
        indexOfElement: "x23",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x25.jpg",
        indexOfElement: "x25",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x27.jpg",
        indexOfElement: "x27",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x28.JPG",
        indexOfElement: "x28",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x29.JPG",
        indexOfElement: "x29",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x30.jpg",
        indexOfElement: "x30",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x31.jpg",
        indexOfElement: "x31",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x32.JPG",
        indexOfElement: "x32",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x33.JPG",
        indexOfElement: "x33",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x34.JPG",
        indexOfElement: "x34",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x37.JPG",
        indexOfElement: "x37",
        amountOfElement: 11.20,
        discountOfElement: "1"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x38.JPG",
        indexOfElement: "x38",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x39.JPG",
        indexOfElement: "x39",
        amountOfElement: 11.20,
        discountOfElement: "1.2"
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x40.JPG",
        indexOfElement: "x40",
        amountOfElement: 11.20,
        discountOfElement: ""
    },
    {
        nameOfElement: "Əl işi xalça",
        paragrafOfElement: ``,
        coverOfElement: "xalcalar/x41.jpg",
        indexOfElement: "x41",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },



    // geyim


    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g2.JPG",
        indexOfElement: "g02",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g3.JPG",
        indexOfElement: "g03",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g4.JPG",
        indexOfElement: "g04",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g5.JPG",
        indexOfElement: "g05",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g6.JPG",
        indexOfElement: "g06",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g7.JPG",
        indexOfElement: "g07",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g8.JPG",
        indexOfElement: "g08",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g9.JPG",
        indexOfElement: "g09",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g10.JPG",
        indexOfElement: "g10",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g11.JPG",
        indexOfElement: "g11",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g12.JPG",
        indexOfElement: "g12",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g14.JPG",
        indexOfElement: "g14",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g15.JPG",
        indexOfElement: "g15",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g16.JPG",
        indexOfElement: "g16",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g17.JPG",
        indexOfElement: "g17",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g18.JPG",
        indexOfElement: "g18",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g19.JPG",
        indexOfElement: "g19",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g20.JPG",
        indexOfElement: "g20",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g21.JPG",
        indexOfElement: "g21",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g22.jpg",
        indexOfElement: "g22",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g23.JPG",
        indexOfElement: "g23",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g24.JPG",
        indexOfElement: "g24",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g25.JPG",
        indexOfElement: "g25",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g26.JPG",
        indexOfElement: "g26",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g27.JPG",
        indexOfElement: "g27",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g28.JPG",
        indexOfElement: "g28",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g29.JPG",
        indexOfElement: "g29",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g30.jpg",
        indexOfElement: "g30",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g31.jpg",
        indexOfElement: "g31",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g32.JPG",
        indexOfElement: "g32",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g33.JPG",
        indexOfElement: "g33",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g34.JPG",
        indexOfElement: "g34",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g35.JPG",
        indexOfElement: "g35",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g36.JPG",
        indexOfElement: "g36",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g37.JPG",
        indexOfElement: "g37",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g38.JPG",
        indexOfElement: "g38",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g39.JPG",
        indexOfElement: "g39",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g40.JPG",
        indexOfElement: "g40",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g41.JPG",
        indexOfElement: "g41",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g42.JPG",
        indexOfElement: "g42",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g43.JPG",
        indexOfElement: "g43",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g44.JPG",
        indexOfElement: "g44",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g45.JPG",
        indexOfElement: "g45",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g46.JPG",
        indexOfElement: "g46",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g47.JPG",
        indexOfElement: "g47",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g48.jpg",
        indexOfElement: "g48",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g49.JPG",
        indexOfElement: "g49",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g50.jpg",
        indexOfElement: "g50",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g51.JPG",
        indexOfElement: "g51",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g52.JPG",
        indexOfElement: "g52",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g53.jpg",
        indexOfElement: "g53",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g54.jpg",
        indexOfElement: "g54",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g55.JPG",
        indexOfElement: "g55",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g56.jpg",
        indexOfElement: "g56",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Milli və tarixi geyim",
        paragrafOfElement: ``,
        coverOfElement: "geyim/g57.JPG",
        indexOfElement: "g57",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },


    // araqçınlar


    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a1.JPG",
        indexOfElement: "a01",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a2.JPG",
        indexOfElement: "a02",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a3.JPG",
        indexOfElement: "a03",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a4.JPG",
        indexOfElement: "a04",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a5.JPG",
        indexOfElement: "a05",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a6.JPG",
        indexOfElement: "a06",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a7.JPG",
        indexOfElement: "a07",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a9.JPG",
        indexOfElement: "a09",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a11.JPG",
        indexOfElement: "a11",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a12.JPG",
        indexOfElement: "a12",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a13.JPG",
        indexOfElement: "a13",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a14.JPG",
        indexOfElement: "a14",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a15.JPG",
        indexOfElement: "a15",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a16.JPG",
        indexOfElement: "a16",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a17.JPG",
        indexOfElement: "a17",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a18.JPG",
        indexOfElement: "a18",
        amountOfElement: 11.20,
        discountOfElement: "5"
    },
    {
        nameOfElement: "Araqçın",
        paragrafOfElement: ``,
        coverOfElement: "araqchin/a19.JPG",
        indexOfElement: "a19",
        amountOfElement: 11.20,
        discountOfElement: "5"
    }
]