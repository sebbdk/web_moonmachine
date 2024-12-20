export interface Step {
    text: string;
    voice?: string;
    speechOffset?: string;
}

export interface SceneConfig {
    id: string;
    _bg?: string;
    _overlay?: string;
    music?: string;
    _swf?: string;
    compositionId: string;
    sceneSrc: string;
    assetsPath: string
    rootFunctionName: string;
    actions: Step[];
}

export interface BookConfig {
    debug: boolean;
    disableSound: boolean;
    scenes: SceneConfig[]
}

export const BOOK_CONFIG: BookConfig = {
    debug: window.location.hostname === "localhost" ? true : false,
    disableSound: window.location.hostname === "localhost" ? true : false,
    scenes: [
        {
            id: "logo",
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [],
            "_swf": "logovideo.swf"
        },
        {
            sceneSrc: "raw_scenes/sc00/Sc00_HTML5_Canvas.js",
            assetsPath: "raw_scenes/sc00/",
            compositionId: "3A9186C986474A73ACA4A389153EA561",
            rootFunctionName: "Sc00_HTML5_Canvas",
            actions: [
                {
                    "text": "",
                    "voice": "sofus og maanemaskinen.mp3",
                    "speechOffset": "3000"
                }
            ],
            id: "0",
            "_bg": "Sc00.jpg",
            "_overlay": "overlay1",
            "_swf": "Sc00.swf",
            music: "00 - Main Theme.mp3"
        },
        {
            id: "chapter01",
            sceneSrc: "raw_scenes/chapter01/Chapter_01_HTML5_Canvas.js",
            assetsPath: "raw_scenes/chapter01/",
            compositionId: "915EC3CCF88D4CA48A7D0A90825BB364",
            rootFunctionName: "Chapter_01_HTML5_Canvas",
            actions: [
                {
                    "text": "",
                    "voice": "kap01.mp3"
                }
            ],
            "_swf": "chapter01.swf"
        },
        {
            sceneSrc: "raw_scenes/sc01/Sc01_HTML5_Canvas.js",
            assetsPath: "raw_scenes/sc01/",
            compositionId: "D4CA7E67CC254C98B8B3D402F3C36311",
            rootFunctionName: "Sc01_HTML5_Canvas",
            actions: [
                {
                    "text": "Ikke langt borte på skovplaneten Goya\\nfandtes tusindvis af dyr og søer af soja.\\nKinsipister, raflbølter, munse og æsner.\\nListen ku’ fortsætte med mange små væsner.",
                    "voice": "sc01.1.mp3"
                },
                {
                    "text": "Det væsen, vi skal følge, er ingen mus,\\nhan er en skovgnof, og hans navn er Sofus.\\nEn skovgnof er et lille, sjovt og krøllet dyr,\\nsom bor i Rimdalen under himlens skyer",
                    "voice": "sc01.2.mp3"
                },
                {
                    "text": "Gnofer som Sofus spiser tordenkorn og bimbær\\nog går ture på sukkerstien i bare tæer.\\nOm lidt banker vi på og ser hans hule,\\nmen eventyret starter med en svævende kugle.",
                    "voice": "sc01.3.mp3"
                },
                {
                    "text": "Langt oppe på himlen snurrede en sol,\\nder skød planterne frem som skud fra en pistol.\\nDen fik alle dyr til at danse og grine,\\nfor solen var minsandten en stor maskine.",
                    "voice": "sc01.4.mp3"
                },
                {
                    "text": "Om natten blev solen til en måne,\\nda den ikke ville holde dyrene vågne.\\nHov.. Se! Der er lys i skovgnofens hytte.\\nBank på og se, om vi kan være til nytte.",
                    "voice": "sc01.5.mp3"
                }
            ],
            id: "1",
            "_bg": "01_PRESENTATION_OF_THE_WORLD_DAY.jpg",
            "_swf": "Sc01.swf",
            "_overlay": "overlay1",
            music: "01 - Goya.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc02/Sc02_HTML5_Canvas.js",
            compositionId: "F67B9604FC919F489D182E47F2203F03",
            rootFunctionName: "Sc02_canvas_demo",
            assetsPath: "raw_scenes/sc02/",
            actions: [
                {
                    "text": "”Hej med dig”, sagde Sofus, ”har jeg set dig før?” \\n”Vil du ikke være sød at åbne min dør?”",
                    "voice": "sc02.1.mp3"
                },
                {
                    "text": "”Tak”, sagde den lille gnof og tøffede ind \\n på sit lille værksted, hvor han byggede ting.",
                    "voice": "sc02.2.mp3"
                },
                {
                    "text": "Han ku’ både bygge biler, bat og båthorn,\\nalt sammen mens han tyggede tordenkorn.\\nDet, vi ser i hulen, har Sofus selv bygget,\\nså tusindvis af tordenkorn har han tygget.",
                    "voice": "sc02.3.mp3"
                },
                {
                    "text": "Som byggemateriale brugte han nedfalden skrot,\\nsom var skudt ud af månemaskinen som snot.\\nSofus var igang med at bygge et lokum,\\nda der pludselig lød et gigantisk KA-BUM!",
                    "voice": "sc02.4.mp3"
                },
                {
                    "text": "Sofus skreg: ”Hvad er dog det for et spektakel?\\nBare det ikke er Ild-skovens Tentakel.\\nMen det er det nok ikke..”, sagde den lille fyr.\\nTentaklen må vente til et andet eventyr.",
                    "voice": "sc02.5.mp3"
                },
                {
                    "text": "”Men hvad var det så?” sagde gnofen forundret.\\nVar det mon en kæmpeprut? tænkte han muntert.\\n”Hvad i alverden har sådanne kræfter?\\nEj, jeg må hellere gå ud og kigge efter.”",
                    "voice": "sc02.6.mp3"
                }
            ],
            id: "2",
            "_bg": "02_PRESENTATION_OF_GNOME.jpg",
            "_swf": "Sc02.swf",
            "_overlay": "overlay1",
            music: "02 - Sofus.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc03/Sc03_HTML5_Canvas.js",
            compositionId: "91C9D186569C48D8862566F3C94A4310",
            rootFunctionName: "Sc03_HTML5_Canvas",
            assetsPath: "raw_scenes/sc03/",
            actions: [
                {
                    "text": "”Wow!”, udbrød Sofus, da han så, hvad der var sket.\\n”Det er nok det største stykke skrot, jeg har set!”\\nI et dybt dybt hul lå årsagen til braget,\\nvar der mon nogen gemt inde i vraget?",
                    "voice": "sc03.1.mp3"
                },
                {
                    "text": "Lydene fra vraget gjorde Sofus bange.\\n”Hvad nu hvis det er en kæmpemæssig slange!?\\nHvad gør jeg? Jeg kan ikke la' det ligge.\\nVil du skubbe til det? Jeg tør altså ikke.”",
                    "voice": "sc03.2.mp3",
                    "speechOffset": "1000"
                },
                {
                    "text": "Ud af vraget pilede et sjovt lille dyr,\\n”Pyha.. det var heldigvis kun en rumpefyr.”\\nSofus grinede lettet, men det blev hurtigt glemt,\\nfor pludselig skete der noget rigtig slemt.”",
                    "voice": "sc03.3.mp3"
                },
                {
                    "text": "Med et klank, et klonk og et brag, som gjorde ondt,\\nstoppede månemaskinen med at dreje rundt.\\n”NEJ NEJ NEJ! Hvad nu?” råbte Sofus uroligt.\\nMånen stod bumstille. Det var dog utroligt!",
                    "voice": "sc03.4.mp3"
                },
                {
                    "text": "\"Når månen står stille, kan solen ikke lyse,\\nog alle Goyas dyr og planter vil fryse.\\nHvis jeg dog bare ku’ sige: tænd måne, tænd!”\\nSofus sukkede, ”Det blir’ aldrig dag igen...\"",
                    "voice": "sc03.5.mp3",
                    "speechOffset": "300"
                },
                {
                    "text": "Flere stykker skrot begyndte da at falde.\\n”Vi må hellere gå ud og samle dem alle!”\\n",
                    "voice": "sc03.6.mp3"
                }
            ],
            id: "3",
            "_bg": "03_THE_CRASH_SITE.jpg",
            "_swf": "Sc03.swf",
            "_overlay": "overlay1",
            music: "03 - Crash Site.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc04/Sc04_HTML5_Canvas.js",
            compositionId: "EB4E8C1AF6C444D49FDEAF447DC5F53C",
            rootFunctionName: "Sc04_HTML5_Canvas",
            assetsPath: "raw_scenes/sc04/",
            actions: [
                {
                    "text": "Det var bælgmørkt, selvom det var morgen,\\n og måneskrottet lå spredt ud over hele skoven.\\n”Sikke noget rod”, sukkede den lille prop\\n”Vil du hjælpe mig med at samle skrottet op?”",
                    "voice": "sc04.1.mp3"
                }
            ],
            id: "4",
            "_bg": "04_GATHERING_PARTS_IN_FOREST.jpg",
            "_swf": "Sc04.swf",
            "_overlay": "overlay1",
            music: "04 - Gathering Scrap In The Forest.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc05/Sc05_HTML5_Canvas.js",
            compositionId: "1BB7CFE78D23456B9157781BC715F089",
            rootFunctionName: "Sc05_HTML5_Canvas",
            assetsPath: "raw_scenes/sc05/",
            actions: [
                {
                    "text": "Dagene gik og stadig ingen sol.\\nSofus var bekymret for hver en blå viol.\\nUden lys var skoven langsomt ved at dø.\\nIntet kunne overleve dette mørke miljø.",
                    "voice": "sc05.1.mp3"
                },
                {
                    "text": "”Hvis bare jeg op til månen kunne hoppe\\nog vandre rundt og rundt omkring deroppe.\\nSå ville jeg finde den del, der var itu,\\nog reparere månen lige nu.”",
                    "voice": "sc05.2.mp3"
                },
                {
                    "text": "Månen var dog alt for langt væk, ku’ Sofus se.\\nMen så skete der noget, som gav ham en idé.\\nEn fed flue fløj forbi, fjumrende sikkert,\\n”brums”, sagde den og landede på hans kikkert.",
                    "voice": "sc05.3.mp3"
                },
                {
                    "text": "Sofus fik øje på fluen. ”Hej min lille ven.”\\nHvis bare Sofus ku’ flyve ligesom den.\\nSå slog det ham: ”Du lange baguette!\\nVi bygger da bare en rumraket!!”",
                    "voice": "sc05.5.mp3"
                }
            ],
            id: "5",
            "_bg": "05_BUILDING_ROCKET.jpg",
            "_swf": "Sc05.swf",
            "_overlay": "overlay1",
            music: "05 - Building The Rocket.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc06/Sc06_HTML5_Canvas.js",
            compositionId: "3F148D306DB244DFA71FEC68C5B46699",
            rootFunctionName: "Sc06_HTML5_Canvas",
            assetsPath: "raw_scenes/sc06/",
            actions: [
                {
                    "text": "Alt var pakket, og Sofus var parat,\\nmed god fart ville han være der snart.\\nRaketten var den flotteste, han havde set,\\ni alle hans år på den lille planet.",
                    "voice": "sc06.1.mp3"
                },
                {
                    "text": "”Er du klar derude?”, spurgte den lille fyr.\\n”Snart vil vi flyve over træer og skyer.\\nJeg glæder mig! Vil du åbne rakettens dør?\\n Og tænd for raketlunten, hvis du altså tør?”",
                    "voice": "sc06.2.mp3"
                },
                {
                    "text": "Nedtællingen var begyndt, og lunten var tændt.\\nTi, ni, otte, syv. Nu var Sofus rigtig spændt.\\nSeks, fem, fire. Månemaskinen ventede ham\\nTre, to, en, nul. På med selen og fuld fart frem!",
                    "voice": "sc06.3.mp3"
                },
                {
                    "text": "Med et brag, et højt hvæs og et svimlende sus\\nblev Sofus skudt af sted som rød sodavandsbrus.\\nHvad mon der sker? Møder han en rum-grittel?\\nDet finder vi ud af i næste kapitel.",
                    "voice": "sc06.4.mp3"
                }
            ],
            id: "6",
            "_bg": "06_BLAST_OFF.jpg",
            "_swf": "Sc06.swf",
            "_overlay": "overlay1",
            music: "06 - Blast Off.mp3"
        },
        {
            id: "chapter02",
            sceneSrc: "raw_scenes/chapter02/Chapter_02_HTML5_Canvas.js",
            assetsPath: "raw_scenes/chapter02/",
            compositionId: "17D36802482F41C88471F78594E60BB5",
            rootFunctionName: "Chapter_02_HTML5_Canvas",
            actions: [
                {
                    "text": "",
                    "voice": "kap02.mp3"
                }
            ],
            "_swf": "chapter02.swf"
        },
        {
            sceneSrc:"raw_scenes/sc07/Sc07_HTML5_Canvas.js",
            compositionId: "8923539F51144C5881B4F85F02552646",
            rootFunctionName: "Sc07_HTML5_Canvas",
            assetsPath: "raw_scenes/sc07/",
            actions: [
                {
                    "text": "I ti døgn havde Sofus fløjet i rummet.\\nHan havde heldigvis medbragt lokummet.\\nAt styre raketten var let som en leg.\\n\"Se der!”, råbte Sofus. ”Månen den nærmer sig.\"",
                    "voice": "sc07.1.mp3"
                },
                {
                    "text": "Men så stødte han pludselig på et stykke skrot,\\n”Åh nej dog, rumskrot! Det her ender ikke godt.”\\nHjælp Sofus med at styre udenom stykkerne.\\nMåske kan vi nå at undgå ulykkerne.",
                    "voice": "sc07.2.mp3"
                },
                {
                    "text": "Flere stykker skrot dukkede da op\\nog omringede rumrakettens krop.",
                    "voice": "sc07.3.mp3"
                },
                {
                    "text": "\"For mange!\", skreg Sofus, \"vi har ingen chance!\"\\nRaketten styrtede ud af balance.",
                    "voice": "sc07.4.mp3"
                }
            ],
            id: "7",
            "_bg": "07_JOURNEY_THROUGH_SPACE.jpg",
            "_swf": "Sc07.swf",
            "_overlay": "overlay1",
            music: "07 - Journey Through Space.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc08/Sc08_HTML5_Canvas.js",
            compositionId: "8A649D29F2C4496FA8A297B456137B2F",
            rootFunctionName: "Sc08_HTML5_Canvas",
            assetsPath: "raw_scenes/sc08/",
            actions: [
                {
                    "text": "Raketten ramte månen med meget høj fart.\\nSofus lå på jorden, det var ikke rart.\\nDe fem raketstykker blev spredt til hver side,\\nhvor længe skulle Sofus ligge og lide?",
                    "voice": "sc08.1.mp3"
                },
                {
                    "text": "Ilden omkring Sofus brændte rædsomt endnu.\\nHjælp skovgnofen og vift ilden ud med omhu.",
                    "voice": "sc08.2.mp3"
                },
                {
                    "text": "En robot kom forbi og så den lille stump.\\nDen nærmede sig Sofus og gav ham et bump.",
                    "voice": "sc08.3.mp3"
                },
                {
                    "text": "Robotten så nervøst på den lille stakkel.\\nMen så rejste Sofus sig! Sikke et mirakel!\\nSofus overså robotten og fik øje på byen.\\nMånemaskinen var et fabelagtigt syn.",
                    "voice": "sc08.4.mp3"
                },
                {
                    "text": "Nøj hvor er det vildt. En hel by af måneskrot.\\nFørst nu fik han øje på den lille robot.\\n”Hov.. hej med dig. Hvad hedder du..? Er du stum?”\\nDen løftede sin snabel og sagde ”ZUM-ZUM”.",
                    "voice": "sc08.5.mp3"
                },
                {
                    "text": "”Zum-Zum”, spøjst navn. Kan man virkelig hedde det?\\nMit navn er Sofus.” Zum-Zum gav sig til at le.\\nSofus lo med. ”Du ved nok ikke, hvorfor jeg er her.\\nMånen skal fikses, så vi igen dagen ser.”",
                    "voice": "sc08.6.mp3"
                },
                {
                    "text": "Så forklarede han Zum-Zum det hele.\\nom skovplaneten og rakettens fem dele.\\n”Hvordan kommer jeg hjem uden min rumraket?\\nDe fem dele skal findes, men det bli’r ikke let.”",
                    "voice": "sc08.7.mp3"
                },
                {
                    "text": "Zum-Zum lyste straks op og for afsted.\\nSofus råbte op, ”Hov, vent lige! Jeg vil med!”",
                    "voice": "sc08.8.mp3"
                }
            ],
            id: "8",
            "_bg": "08_CRASHING_INTO_MOONMACHINE.jpg",
            "_swf": "Sc08.swf",
            "_overlay": "overlay1",
            music: "08 - Crashing On The Moonmachine.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc09/Sc09_HTML5_Canvas.js",
            compositionId: "310F394C1253410FBCE9E6913A555C0A",
            rootFunctionName: "Sc09_HTML5_Canvas",
            assetsPath: "raw_scenes/sc09/",
            actions: [
                {
                    text: ""
                },
                {
                    "text": "\"Jamen Zum-Zum. Du har fundet en raketdel.” \\nMed dette tempo var rumraketten snart hel.\\n”Hvordan, vi får fat i den, er noget, jeg ikke ved.\\nMåske vi skulle prøve at ryste den ned?\"",
                    "voice": "sc09.1.mp3"
                },
                {
                    "text": "De rystede masten, så godt de havde lært.\\n\"Vi kan ikke Zum-Zum! Det er simpelthen for svært.\\nVil du hjælpe os med at ryste derude?\\nRyst alt det du kan, ellers er historien ude!\"",
                    "voice": "sc09.2.mp3",
                    "speechOffset": "2000"
                },
                {
                    "text": "\"Ja, det virker. Bliv ved med at ryste. Bliv ved!\"",
                    "voice": "sc09.3.mp3"
                },
                {
                    "text": "Nu blev raketdelen rystet fri og faldt ned.\\n”Så mangler vi kun at finde fire dele.\\nFem stykker raket og så har vi det hele.”",
                    "voice": "sc09.4.mp3"
                },
                {
                    "text": "Nu blev raketdelen rystet fri og faldt ned.\\n”Så mangler vi kun at finde fire dele.\\nFem stykker raket og så har vi det hele.”",
                    "voice": "sc09.4.mp3"
                }
            ],
            id: "9",
            "_bg": "09_THE_POLE.jpg",
            "_swf": "Sc09.swf",
            "_overlay": "overlay1",
            music: "09 - The Pole.mp3"
        },
        {
            sceneSrc:"raw_scenes/sc10/Sc10_HTML5_Canvas.js",
            compositionId: "B210CA321575427493147D8C7647731D",
            rootFunctionName: "Sc10_HTML5_Canvas",
            assetsPath: "raw_scenes/sc10/",
            actions: [
                {
                    "text": "De to havde gået i timevis mod nord.\\nDet tog lang tid, men de var på helt rette spor.\\nDe var nået frem ved trappen til kongens slot.\\nVed foden af trappen så de en skør robot.",
                    "voice": "sc10.1.mp3"
                },
                {
                    "text": "Robotten sang højt: ”Hat-hat-hat. Jeg fandt en hat.\\nSe lige mig. Hat-hat-hat. Jeg er helt besat.”\\nHatterobotten var enten tosset eller gal,\\nbare han ikke også var robotkannibal!",
                    "voice": "sc10.2.mp3"
                },
                {
                    "text": "”Zum-Zum! Det er hverken hat eller kasket.”\\n”Det er spidsen af min rumraket!”\\nGanske rigtigt var det en del af rumskibet,\\nog robotfjolset havde malet den stribet!",
                    "voice": "sc10.3.mp3"
                },
                {
                    "text": "”Undskyld hr. Robot, men den hat tilhører mig.”\\nRobotten svarede: ”Nej nikke nej, nej-nej-nej.”\\nSofus fortsatte: ”Hatten er nu altså min,\\nog det er ikke en hat, selvom den er fin.”",
                    "voice": "sc10.4.mp3"
                },
                {
                    "text": "”Ikke en hat-hat-hat? Hvad er det så min lodne ven?”\\n”Det er toppen af min raket, og jeg mangler den.”\\n”Raket-raket-raket? Du får den stadig ik’.\\nJeg vil kun byt-byt-byt med ti ton robotslik!”",
                    "voice": "sc10.5.mp3"
                },
                {
                    "text": "”Hør her”, forklarede Sofus, ”jeg skal flyve hjem.\\nMin raket er i stykker og opdelt i fem.\\nAlle fem stykker skal jeg finde i din by\\nfor at samle min rumraket sammen på ny.”",
                    "voice": "sc10.6.mp3"
                },
                {
                    "text": "”Vent-vent-vent. Hør så her fister.”\\nKan du reparere? Klippe-klippe-klistre?\\nSå skal du fikse min flyvende fræser”\\nSofus så sig om. Der lå en smadret racer.",
                    "voice": "sc10.7.mp3"
                },
                {
                    "text": "”Får jeg din hat, hvis jeg fikser dit fartøj?”\\n”Tja..”, tøvede robotten, ”jeg savner motorstøj” \\nSå tog Sofus et par tordenkorn at tygge.\\nSkal vi ikke hjælpe Sofus med at bygge?",
                    "voice": "sc10.8.mp3"
                },
                {
                    "text": "”Så”, sagde Sofus, ”din fræser er god som ny.”\\n”Robotten sagde blot, ”Bytte hat med fly.”",
                    "voice": "sc10.9.mp3"
                },
                {
                    "text": "Sofus var stolt over, hvad han ku' med lapperne.\\nNæste mål var kongens slot på toppen af trapperne. \\n”Kongen må vide, hvor vi skal gå hen\\nfor at fikse månen og sige ”tænd sol, tænd!”",
                    "voice": "sc10.10.mp3"
                }
            ],
            id: "10",
            "_bg": "10_THE_HAT_ROBOT.jpg",
            "_swf": "Sc10.swf",
            "_overlay": "overlay1",
            music: "10 - The Hat Robot.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "Syv tusinde trappetrin gik Sofus og Zum-Zum,\\nog de var nu kommet til kongens soverum.\\nDe forventede, at kongen var stærk og tapper\\nefter at have gået på alle de trapper.",
                    "voice": "sc11.1.mp3"
                },
                {
                    "text": "Det var et andet syn, der kom dem i møde.\\nKongen sov og var tyk som fløde.\\nSofus udbrød: ”Hold op hvor er han stor!\\nJeg tror, han er større end min bedstemor!”",
                    "voice": "sc11.2.mp3"
                },
                {
                    "text": "”Se lige hvad dovendidrikken ligger på:\\nEn del af raketten fra top til tå.\\nVi bliver altså nødt til at vække ham.\\nBare rolig, han er nok blid som et lam”",
                    "voice": "sc11.3.mp3"
                },
                {
                    "text": "”Har du nogle gode ideer derude?\\nVi må jo helst ikke få ham til at tude.\\nNu ikke noget med et godmorgenkys.\\nHvad nu hvis vi tænder lidt morgenlys?”",
                    "voice": "sc11.4.mp3",
                    "speechOffset": "1200"
                },
                {
                    "text": "”Så er der morgenolie og rustne skruer!”\\nMen Kongen blev ved med at snorke og knurre.\\n”Vi kan pumpe en ballon op, så den sprænger? \\nHvor stort et godmorgenbrag mon den bringer?”",
                    "voice": "sc11.5.mp3"
                },
                {
                    "text": "”Sikke en sovetryne. Hvad skal vi dog gøre?\\nDen dovne konge kan jo intet høre.”",
                    "voice": "sc11.6.mp3"
                },
                {
                    "text": "\"Har du fundet noget Zum-Zum? Hvad er det dér?\\nEt håndtag? Træk i det, og se hvad der sker.”",
                    "voice": "sc11.7.mp3"
                },
                {
                    "text": "Det skulle de to venner aldrig have gjort,\\ndet var faktisk noget rigtig lort.\\nKongen vågnede og var rasende gal,\\n”HVEM VOVER AT VÆKKE MIG? TAL BÆSTER, TAL!!”",
                    "voice": "sc11.8.mp3"
                },
                {
                    "text": "”Øhm.. Sofus og Zum-Zum, Deres Højhed.\\nJeg rejste fra Goya, da solen gik i ged.\\nSer De, jeg er mekaniker, og jeg agter..”\\nMen kongen afbrød Sofus og råbte: ”VAGTER VAGTER!”",
                    "voice": "sc11.9.mp3"
                },
                {
                    "text": "Da blev Sofus ivrig, ”Nej vent. Stop. Hør nu på mig.\\nJeg er jo kommet her op for at hjælpe dig.\\nOg tilfældigvis er din seng en raketdel,\\nsom min raket mangler for at blive hel.”",
                    "voice": "sc11.10.mp3"
                },
                {
                    "text": "Kongen råbte og skældte og bandede i flæng:\\n”VAGTER! VAGTER! DE HAR VÆKKET MIG OG VIL STJÆLE MIN SENG!”\\nSofus ku' hverken forklare eller fortælle,\\nfør de blev hentet og smidt i en fængselscelle.",
                    "voice": "sc11.11.mp3"
                }
            ],
            id: "11",
            "_swf": "Sc11.swf",
            "_overlay": "overlay1",
            music: "11 - The Robot King.mp3"
        },
        {
            id: "chapter03",
            sceneSrc: "raw_scenes/chapter03/Chapter_03_HTML5_Canvas.js",
            assetsPath: "raw_scenes/chapter03/",
            compositionId: "F2D26A86DB8B45A68FF95D23D7BDBD2C",
            rootFunctionName: "Chapter_03_HTML5_Canvas",
            actions: [
                {
                    "text": "",
                    "voice": "kap03.mp3"
                }
            ],
            "_swf": "chapter03.swf"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "Ude på Rusthavet fra et flydende fængsel\\nkunne Sofus kigge på sin planet i længsel.\\nDen lille fængselscelle var mørk og kold.\\nHvordan sku’ det gå Zum-Zum og den lille knold?",
                    "voice": "sc12.1.mp3"
                },
                {
                    "text": "”Zum-Zum, hvad laver vi dog her på Rusthavet?”\\nNu bliver månenmaskinen aldrig lavet.\\nOg så dør alle Goyas dyr og planter.\\nHvordan slipper vi dog væk fra disse kanter?”",
                    "voice": "sc12.2.mp3"
                },
                {
                    "text": "At fængsle dem i mørke ku’ kongen ik vær’ bekendt.\\nKan du mon hjælpe med at få lyset tændt?",
                    "voice": "sc12.3.mp3"
                },
                {
                    "text": "”Var det dig, som tændte pæren? Tusind tak for det.\\nDet er dejligt med lidt lys, for nu kan vi se.”",
                    "voice": "sc12.4.mp3"
                },
                {
                    "text": "Men de to venner var jo stadig i knibe,\\nog Sofus savnede sin hule og pibe.\\nMen nu så Zum-Zum noget han ikke så før.\\nI den højre side af fængslet var der et rør.",
                    "voice": "sc12.5.mp3"
                },
                {
                    "text": "For at de ik’ sku’ flygte gennem den dybe skakt,\\nvar det rustne rør lukket til med magt.\\nEt genkendeligt dæksel var skruet helt fast,\\n”Det er rakettens vindue!”, udbrød Sofus i hast.",
                    "voice": "sc12.6.mp3"
                },
                {
                    "text": "”Mærkeligt. Hvordan er vinduet havnet her?\\nHvis du skruer det løs, så har vi én del mer’.”\\nKan du hjælpe Zum-Zum med at skrue?",
                    "voice": "sc12.7.mp3"
                },
                {
                    "text": "Med ét begyndte røret at suge.",
                    "voice": "sc12.8.mp3"
                }
            ],
            id: "12",
            "_swf": "Sc12.swf",
            "_overlay": "overlay1",
            music: "12 - Prison Cell.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "”Øh..”, sagde Sofus, ”Jeg tror, vi har et problem.\\nVil du hjælpe os ud af det her rørsystem?”\\nDe to venner sad fast langt under vandkanten.\\nFør dem sikkert igennem rørlabyrinten.",
                    "voice": "sc13.1.mp3"
                }
            ],
            id: "13",
            "_swf": "Sc13.swf",
            "_overlay": "overlay1",
            music: "13 - The Pipe Labyrinth.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "På rusthavets bund lå én million skruer\\nsamt mange rustne søm og tandhjul fra ure.\\nJa nu var der også en gnof og en robot,\\nmen de var sluppet ud af fængslet, så det var jo godt.",
                    "voice": "sc14.1.mp3"
                },
                {
                    "text": "”Se engang!”, boblede Sofus med sin mund.\\nRumrakettens førehus lå på havets bund.\\n”Hvordan får vi den nogensinde op på land?\\nHvor er det træls og besværligt med alt det vand.”",
                    "voice": "sc14.2.mp3"
                },
                {
                    "text": "Over skroget hang en krog på en lang lænke,\\ndette så Sofus og fik ham til at tænke.\\n”Hvis vi på raketdelen sætter krogen fast,\\nkunne du derude hejse den op som last?",
                    "voice": "sc14.3.mp3"
                },
                {
                    "text": "”Men hvordan får vi fat i den? Den hænger jo så højt.”\\nDa hørte de begge et underligt fløjt.\\n”Zum-Zum”, hviskede Sofus stille, ”hørte du det?\\nDet kom fra kisten. Skal vi åbne og se?”",
                    "voice": "sc14.4.mp3"
                },
                {
                    "text": "”Den er låst. Der må være en nøgle et sted.”\\nFind den nøgle, som de kan åbne kisten med.",
                    "voice": "sc14.5.mp3",
                    "speechOffset": "1000"
                },
                {
                    "text": "”Sådan, godt fundet! Lås kisten op, og lad os se.”",
                    "voice": "sc14.6.mp3"
                },
                {
                    "text": "Kisten åbnede langsomt. Hvad ville der ske?",
                    "voice": "sc14.7.mp3"
                },
                {
                    "text": "”JAA! Jeg er fri. Åh tusind tusind tusind tak,”\\nråbte den søde fisk, som nok var lidt gak.\\n”Ja jeg hedder Fisk, og jeg er en løve.\\nHvem er I?”, fortsatte Fisk uden at tøve.",
                    "voice": "sc14.8.mp3"
                },
                {
                    "text": "Sofus undrede sig. Fisk var tydeligvis en fisk.\\nHun lignede slet ikke en løve, men hun var frisk!\\n”Jeg har været fanget i kisten i laaaaaaaaaaaaang tid.\\nMen hvad hedder I, og hvad bringer jer hid?”",
                    "voice": "sc14.9.mp3"
                },
                {
                    "text": "”Det her er Zum-Zum, og Sofus er mit navn.”\\n”Hej”, sagde Fisk, ”Hvordan kan jeg være til gavn?”\\n”Vi er kommet hertil for at få solen tilbage,\\nså der ikke kun er nætter, men også dage.”",
                    "voice": "sc14.10.mp3"
                },
                {
                    "text": "”Kan du hjælpe os med at komme op på land?”\\n”Jeg vil gerne hjælpe”, sagde Fisk, ”hvis jeg kan.”\\n”Kan du se den krog forbundet til en lænke?\\nDen kan vi bruge til at hæve og sænke.”",
                    "voice": "sc14.11.mp3"
                },
                {
                    "text": "\"Krogen skal sættes fast på skroget nedenunder.\\nHvis du gør det Fisk, er du et sandt vidunder.”\\n”Det er lige et job for en løve som jeg!\\nOg jeg er sindssygt hurtig, se lige mig!\"",
                    "voice": "sc14.12.mp3"
                },
                {
                    "text": "\"Jeg ved det, jeg ved det, jeg er vant til at blive prist.\\nNå, skynd jer nu op, så I ikke bliver spist.”\\n”Sp..Spist?!”, stammede Sofus nervøst, ”men hvordan?”\\n ”Tygget og slugt, for eksempel. Af hr. Hugtand.”",
                    "voice": "sc14.13.mp3",
                    "speechOffset": "3000"
                },
                {
                    "text": "\"Hernede i dybet skal man være lidt rå,\\nher er jo også STORE løver, så pas på!\\nNå, hyggeligt at møde jer!”, og så var Fisk væk.\\n”Zum-Zum, afsted!”, Sofus var ved at dø af skræk.",
                    "voice": "sc14.14.mp3"
                },
                {
                    "text": "Gnofen og den runde robot hoppede ind.\\n”Er du klar derude? Så drej på den pind.”",
                    "voice": "sc14.15.mp3",
                    "speechOffset": "3000"
                },
                {
                    "text": "”Zum-Zum, det virker! Det er let som en leg.”\\nMen så begyndte murene at give sig.",
                    "voice": "sc14.16.mp3"
                },
                {
                    "text": "Gigantiske stålplader gled fra hinanden,\\nde to helte var endnu engang på spanden.\\n”ZUM-ZUM! DET ER ET KÆMPE UNDERVANDSBÆST!!!”\\nMonsteret kiggede på dem og knurrede hæst.",
                    "voice": "sc14.17.mp3"
                },
                {
                    "text": "Han var morgensur og meget misfornøjet.\\nSofus skreg: ”Hjælp os hurtigt. Prik ham i øjet!”",
                    "voice": "sc14.18.mp3"
                },
                {
                    "text": "Monsterfisken lukkede øjet i smerte,\\nog man kunne høre hans bankende hjerte.\\n”Sådan, godt gået! Det var vist en god ide.\\nHejs os op, før Hr. Hugtand igen kan se.”",
                    "voice": "sc14.19.mp3"
                }
            ],
            id: "14",
            "_swf": "Sc14.swf",
            "_overlay": "overlay1",
            music: "14 - The Sea Of Rust.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "”Pyha.. det var godt, vi fik gjort kål på den ål.\\nSe Zum-Zum, jeg tror, vi har nået vores mål.\\nJeg vil gerne vædde en hel bimbærtærte,\\nat det dér er månens mekaniske hjerte.”",
                    "voice": "sc15.1.mp3",
                    "speechOffset": "3400"
                },
                {
                    "text": "”Jeg ku’ ik’ ha’ fundet den uden dig, min ven,\\nog når vi den fikser, bliver det lyst igen.\\nJeg kan se, der er en ledning løs hernede.\\nStik den i maskinen, så den strøm kan lede”",
                    "voice": "sc15.2.mp3"
                },
                {
                    "text": "”Tænd for maskinen på den stribede kontakt\\nog se de sjove bælter rulle i takt!”",
                    "voice": "sc15.3.mp3"
                },
                {
                    "text": "Zum-Zum var målløs og fattede ikke et klap,\\nmen så lagde han mærke til den røde knap.",
                    "voice": "sc15.4.mp3"
                },
                {
                    "text": "”Godt set Zum-Zum. Begynd så at pumpe.\"",
                    "voice": "sc15.5.mp3"
                },
                {
                    "text": "\"Det lysner. Bliv ved! Nu må vi ikke dumpe.”",
                    "voice": "sc15.6.mp3"
                },
                {
                    "text": "Månen lyste gyldent op, og himlen blev blå.\\nSolen var tilbage! Det ku’ man stole på!",
                    "voice": "sc15.7.mp3"
                }
            ],
            id: "15",
            "_swf": "Sc15.swf",
            "_overlay": "overlay1",
            music: "15 - The Big Machine.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "Alle planter og dyr på Goya var reddet,\\nog solmaskinen var nu fuldt opladet.\\n”Vi gjorde det Zum-Zum, vi gjorde det.”\\nSofus smilede men havde svært ved at le.",
                    "voice": "sc16.1.mp3"
                },
                {
                    "text": "”Jeg kommer aldrig hjem igen.”, snøftede han.\\n”Jeg MÅ skaffe den sidste del, men hvordan?\\nKongen ligger jo og snorker oven på den.\\nOg jeg vil ikke tages til fange igen.”",
                    "voice": "sc16.2.mp3",
                    "speechOffset": "0500"
                },
                {
                    "text": "Zum-Zum trøstede gnofen med et lille trut.\\nKu’ det virkelig passe, at rejsen var slut?\\nMen så begyndte det at buldre rundt om dem.\\n”Nogen er på vej herop Zum-Zum, men hvem?”",
                    "voice": "sc16.3.mp3"
                },
                {
                    "text": "Zum-Zum blev bange og skyndte at gemme sig.\\n”Hov.. Zum-Zum? Du må ikke forlade mig.”\\nBagved Sofus stod en stor og tung robot.\\nSofus vendte sig og så det store læs skrot.",
                    "voice": "sc16.4.mp3"
                },
                {
                    "text": "”D..Deres Højhed”, gispede Sofus bange.\\nKongen talte: ”Jeg har sovet nætter lange,\\ndog aldrig en nat så lang som denne,\\nmen så kom du Sofus og lod solen tænde.",
                    "voice": "sc16.5.mp3"
                },
                {
                    "text": "”Undskyld”, beklagede Sofus, ”jeg kan forklare.\\nUden sol så.. så er min planet i fare.”\\n”Sofus”, grinede kongen, ”jeg vil takke dig.”\\nGnofen blev forvirret og sagde: ”Takke mig?”",
                    "voice": "sc16.6.mp3"
                },
                {
                    "text": "”Præcis”, sagde kongen, ”Solen er tilbage.\\nDu og din ven har gjort jer meget umage.\\nTak fordi I har reddet mit kongerige.”\\nSofus vidste ikke, hvad han skulle sige.",
                    "voice": "sc16.7.mp3"
                },
                {
                    "text": "”Hør”, sagde kongen, ”hvor ER din rullende ven?”\\n”Zum-Zum?”, kaldte Sofus, ”Kom frit frem igen.”\\nZum-Zum trillede frem, langsomt og forsigtigt.\\nOm kongen talte sandt, vidste han ikke rigtigt.",
                    "voice": "sc16.8.mp3"
                },
                {
                    "text": "Som tak havde Kongen medbragt en gave.\\nGaven var det, Sofus helst ville have.\\n”Den sidste raketdel. Nu har vi alle fem.\\nTusind tak hr. Konge, nu kan jeg komme hjem.”",
                    "voice": "sc16.9.mp3"
                },
                {
                    "text": "Zum-Zum var henrykt og blæste i sit horn,\\nså skulle der virkelig tygges tordenkorn. \\nSofus vil gerne have hjælp, når han bygger.\\nKan I samle raketten med de fem stykker?",
                    "voice": "sc16.10.mp3"
                },
                {
                    "text": "Sofus var tilfreds: ”Så er jeg klar til rejsen.\\nDet bliver skønt at komme hjem foran pejsen.”\\n”Du godeste!”, sagde Sofus. ”Hvad med benzin?”\\nUden brændstof er raketten jo en ruin.”",
                    "voice": "sc16.11.mp3"
                },
                {
                    "text": "”Rolig”, sagde kongen, ”kablet er elastisk,\\nsom slangebøsse virker det fantastisk.”\\nKongen trak raketten ned på det lange kabel,\\nog Zum-Zum vinkede med sin snabel.",
                    "voice": "sc16.12.mp3"
                },
                {
                    "text": "Sofus var lidt rørt: ”Snøft.. her skiller vores vej.\\nZum-Zum, jeg kommer altså til at savne dig.\\nJeg kommer og besøger jer en anden gang,\\nogså selvom rejsen er hård og lang.”",
                    "voice": "sc16.13.mp3"
                },
                {
                    "text": "”Du er til en hver tid velkommen i mit rige”,\\nsagde Kongen, ”det har du fortjent, må man sige.”\\nSofus var forvirret. ”Zum-Zum? Hvor gik han hen?”\\nZum-Zum ville ikke skilles fra sin gode ven.",
                    "voice": "sc16.14.mp3"
                },
                {
                    "text": "Lige meget hvor fjernt og ukendt et sted.\\nNord, syd, øst eller vest, så ville Zum-Zum med!\\nSofus lo: ”Vil du med din skøre robot?\\nDet bli'r hyggeligt!”, smilede den lille hårtot.",
                    "voice": "sc16.15.mp3"
                },
                {
                    "text": "”Så skal jeg vise dig Rimdalen, hvor jeg bor,\\nog skyggestrædets lygtedyr nær Nebels fjord.\\nJeg får travlt med at vise dig, alt det som gror.”\\nSofus vinkede farvel og gik så ombord.",
                    "voice": "sc16.16.mp3"
                },
                {
                    "text": "”Parat til nedtælling. Ti-ni-otte-syv-seks\\nfem-fire-tre-to-én! Flyv! Flyv som en heks.”",
                    "voice": "sc16.17.mp3"
                },
                {
                    "text": "Og med et højt ”SHUMP” blev rumskibet sendt af sted.\\nDet var bare så fedt, at Zum-Zum var med.",
                    "voice": "sc16.18.mp3"
                }
            ],
            id: "16",
            "_swf": "Sc16.swf",
            "_overlay": "overlay1",
            music: "16 - Ambience.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "Solmaskinen var rødgylden og flot.\\nRejsen gennem rummet var gået ganske godt.\\nSofus fandt en landingsplads gennem sin kikkert\\nog landede rumraketten blødt og sikkert.",
                    "voice": "sc17.1.mp3"
                }
            ],
            id: "17",
            "_swf": "Sc17.swf",
            "_overlay": "overlay1",
            music: "17 - Safe Landing.mp3"
        },
        {
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": "Rejsen var ovre, og eventyret var slut.\\nZum-Zum snorkede saligt gennem sin tut.\\nHan lå ved fodenden af Sofus’ seng\\ni varme blade fra ildskovens eng.",
                    "voice": "sc18.1.mp3"
                },
                {
                    "text": "”Godnat”, sagde Sofus træt, ”kan du sove godt?”\\nStearinlysene oplyste hulen så flot.\\nMen nu skulle de slukkes hver og én,\\nså Sofus kunne sove som en snorkesten.",
                    "voice": "sc18.2.mp3"
                },
                {
                    "text": "Sofus lå og tænkte på alt, hvad der var sket,\\npå de robotter og steder han havde set.\\nMånelyset ramte ham køligt, blåt og mat.\\nSolen var gået ud, og det var blevet nat.",
                    "voice": "sc18.3.mp3"
                },
                {
                    "text": "En pludselig tanke fik ham til at gyse.\\nHvad hvis næste dag, solen ikke ville lyse?\\nHan slog tanken væk. Lad os nu se i morgen,\\nmon ikke solen skinner igen fra oven?",
                    "voice": "sc18.4.mp3"
                }
            ],
            id: "18",
            "_swf": "Sc18.swf",
            "_overlay": "overlay1",
            music: "18 - Home Again.mp3"
        },
        {
            id: "19",
            sceneSrc: "",
            assetsPath: "",
            compositionId: "",
            rootFunctionName: "",
            actions: [
                {
                    "text": ""
                }
            ],
            "_swf": "credit.swf",
            music: "18 - Home Again.mp3"
        }
    ]
}
