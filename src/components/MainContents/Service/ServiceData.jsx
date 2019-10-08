import {
    retailNamespace,
    essentialNamespace,
    transportNamespace,
    miningNamespace
} from "../../../Constants";
import BankIcon from "../icons/Services_Icons-Bank.svg";
import EmbassyIcon from "../icons/Services_Icons-Embassy.svg";
import CommissionsIcon from "../icons/Services_Icons-Embassy.svg";
import MedicalIcon from "../icons/Services_Icons-Medical.svg";
import SecurityIcon from "../icons/Services_Icons-Security.svg";

import FreightIcon from "../icons/Services_Icons-Freight.svg";
import CarHireIcon from "../icons/Services_Icons-CarHire.svg";
import AirTransportIcon from "../icons/Services_Icons-AirTransport-05.svg";

import MinesIcon from "../icons/Services Icons-Mines.svg";
import OfficialDepartmentsIcon from "../icons/Services Icons-OfficialDepartments.svg";
import AricultureIcon from "../icons/Services_Icons-Agriculture.svg";
import PetroleumIcon from "../icons/Services_Icons-Petroleum.svg";

import ESSENTIAL_ICON from "./icons//ESSENTIAL_ICON.png"
import MINING_ICON from "./icons//MINING_ICON.png"
import RETAIL_ICON from "./icons//RETAIL_ICON.png"
import ServiceTypesIcon from "./icons//ServiceTypesIcon.png"
import TRANSPORT_ICON from "./icons//TRANSPORT_ICON.png"


export const serviceInfoData = [
    {
        id: 1,
        service_type_id: "Banks",
        title: "Bank of South Pacific",
        address: "Various Locations PO Box 78 Port Moresby NCD",
        phone: "+675 320 1212",
        website: "www.bsp.com.pg",
        email: "servicebsp@bsp.com.pg",
        description: `BSP is the leading bank in Papua New Guinea and the Pacific region with branches also in Fiji, Solomon Islands, Samoa, Tong, Cook Islands and Vanuatu. BSP PNG operates 42 full service branches,  13 Premium Service Centres, 42 sub branches, 239 Agencies, 301 ATM’s and over 9,700 EFTPOS terminals nationwide. BSP offers state-of-the-art mobile and internet banking services, providing access to business and personal banking anytime, anywhere – 24/7.`,
        img_url: "/imgs/service/S1-Essential-Services/S1A-Banks/S1-IMAGES.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1A-Header-Images_P.jpg' }
        ]

    },
    {
        id: 2,
        service_type_id: "Banks",
        title: "ANZ Bank",
        address: "ANZ Papua New Guinea PO Box 1152, Port Moresby Harbour City, Poreporena Freeway",
        phone: "+675 321 1079",
        website: "www.anz.com/papuanewguinea/en/personal/",
        email: "cshdpg@anz.com",
        description: `Spanning 28 markets across the Asia Pacific, ANZ provides a range of banking solutions. Talk to ANZ about your banking needs today.`,
        img_url: "/imgs/service/S1-Essential-Services/S1A-Banks/S1-IMAGES2.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1A-Header-Images_P.jpg' }
        ]

    },
    {
        id: 3,
        service_type_id: "Banks",
        title: "Westpac Bank",
        address: "PO Box 706 Port Moresby, NCD",
        phone: "+675 322 0888",
        website: "https://www.westpac.com.pg",
        email: "N/A",
        description: `Westpac Bank provides a range of banking solutions. Talk to Westpac Bank about your banking needs today.`,
        img_url: "/imgs/service/S1-Essential-Services/S1A-Banks/S1-IMAGES3.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1A-Header-Images_P.jpg' }
        ]

    },
    {
        id: 4,
        service_type_id: "Embassies",
        title: "Chinese Embassy",
        address: "Section 216, Lot 5, Sir John Guise Drive, Waigani, NCD, Papua New Guinea",
        phone: "+675 325 9827",
        website: "pg.china-embassy.org",
        email: "chineemb_pg@mfa.gov.cn",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES4.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 5,
        service_type_id: "Embassies",
        title: "French Embassy",
        address: "Defens Haus - 6th Floor - Corner Champion Parade & Hunter Street",
        phone: "+675 321 5550",
        website: "www.ambafrance-pg.org",
        email: "cad.port-moresby-amba@diplomatie.gouv.fr",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES5.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 6,
        service_type_id: "Embassies",
        title: "Indonesian Emabassy",
        address: "Sir John Giuse Drive Lot 1&2, Section 410, Kiroki Street Gordons 5, NCD",
        phone: "+675 325 3116",
        website: "www.kemlu.go.id/portmoresby",
        email: "kbripom@daltron.com.pg",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES6.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 7,
        service_type_id: "Embassies",
        title: "Japanese Embassy",
        address: "1st & 2nd Floor, Cuthbertson House, Cuthbertson St. , Port Moresby, NCD, Papua New Guinea",
        phone: "+675 321 1800",
        website: "www.png.emb-japan.go.jp",
        email: "sceoj@pm.mofa.go.jp, infeoj@pm.mofa.go.jp",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES7.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 8,
        service_type_id: "Embassies",
        title: "United States Embassy",
        address: "Douglas Street P. O. Box 1492 Port Moresby Papua New Guinea",
        phone: "+675 321 1455",
        website: "pg.usembassy.gov",
        email: "N/A",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES8.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 9,
        service_type_id: "Embassies",
        title: "Thai Honorary Consulate General",
        address: "Suites 1 & 2, IEPNG Haus Section 56, Allotment 10 Mabi Street, Gordon P. O. Box 1659 Port Moresby Papua New Guinea",
        phone: "+675 323 8330",
        website: "www.thaiconsulate.org.pg",
        email: "enquiries@thaiconsulate.org.pg",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES9.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 10,
        service_type_id: "Embassies",
        title: "Embassy of the Philippines",
        address: "Lot 1, Section 440 Islander Village, Hohola P.O. Box 5916, Boroko Port Moresby Papua New Guinea",
        phone: "+675 325 6577",
        website: "N/A",
        email: "portmoresby.pe@dfa.gov.ph",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES10.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 11,
        service_type_id: "Embassies",
        title: "South Korean Embassy",
        address: "Fourth Floor, Pacific MMI Building Section 21, Allotments 2 & 3, Champion Parade P.O. Box 381 Port Moresby Papua New Guinea",
        phone: "+675 321 5822",
        website: "png.mofa.go.kr",
        email: "embpng@mofa.go.kr",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1B-Embassies/S1-IMAGES11.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 12,
        service_type_id: "HighCommissions",
        title: "Australian High Commision",
        address: "Godwit Road (Waigani) Port Moresby NCD Papua New Guinea",
        phone: "+675 7090 0100 (24 Hours)",
        website: "www.png.embassy.gov.au",
        email: "consular.portmoresby@dfat.gov.au",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES12.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 13,
        service_type_id: "HighCommissions",
        title: "British High Commision",
        address: "Sec 411 Lot 1 & 2 Kiroki Street, Waigani Port Moresby",
        phone: "+675 303 7600",
        website: "ukinpng.fco.gov.uk",
        email: "uk.inpng@fco.gov.uk",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES13.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 14,
        service_type_id: "HighCommissions",
        title: "Fijian High Commision",
        address: "Defence House, Champion Parade, Boroko, Port Moresby",
        phone: "+675 321 1914",
        website: "png.foreignaffairs.gov.fj",
        email: "rakaie@fijihighcom.org.pg",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES14.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 15,
        service_type_id: "HighCommissions",
        title: "New Zealand High Commision",
        address: "Magani Crescent P. O. Box 1051 Waigani, NCD Port Moresby Papua New Guinea",
        phone: "+675 325 9444",
        website: "www.nzembassy.com/papua-new-guinea",
        email: "nzhcpmy@mfat.govt.nz",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES15.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 16,
        service_type_id: "HighCommissions",
        title: "Solomon Island High Commission",
        address: "Unit 1, GB House Poreporena Freeway P. O. Box 8922, Boroko Port Moresby Papua New Guinea",
        phone: "+675 323 4333",
        website: "N/A",
        email: "sihicomm@daltron.com.pg",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES16.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 17,
        service_type_id: "HighCommissions",
        title: "High Commission of India",
        address: "Lot 30, Sec 7, Lawes Road, Granville, NCD, Port Moresby",
        phone: "+675 321 4291",
        website: "http://www.hcipom.in/",
        email: "hc.pmoresby@mea.gov.in",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES17.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 18,
        service_type_id: "HighCommissions",
        title: "Malaysian High Commission",
        address: "Lot 16, Section 531 Rosewood Executive Residence Savannah Heights P.O. Box 1400 Port Moresby Papua New Guinea",
        phone: "+675 325 2076",
        website: "www.kln.gov.my/web/png_port-moresby/",
        email: "mwportmoresby@kln.gov.my",
        description: `Call or visit your embassy if you experience any travel issues.`,
        img_url: "/imgs/service/S1-Essential-Services/S1C-High-Commissions/S1-IMAGES18.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1BC-Header-Images_P2.jpg' }
        ]

    },
    {
        id: 19,
        service_type_id: "EmergencyMedicalServices",
        title: "Medevac Pacific (Medivac Service)",
        address: "P O Box 4997 Boroko, NCD.",
        phone: "+675 323 5626",
        website: "www.medevac.com.pg",
        email: "operations@medevac.com.au",
        description: `Medevac Pacific Services offers first-rate medical evacuation and medical assistance. The organisation also  offers aero-medical services throughout the PNG region.`,
        img_url: "/imgs/service/S1-Essential-Services/S1D-Medical-Services/S1-IMAGES19.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1D-Header-Images_P3.jpg' }
        ]

    },
    {
        id: 20,
        service_type_id: "EmergencyMedicalServices",
        title: "EMS Assist (Medivac Service)",
        address: "Cnr Lawes & Le Hunt St, Ela Beach Road",
        phone: "+675 1567",
        website: "www.emspng.com",
        email: "emspng@emspng.com",
        description: `EMS Assist delivers specialised pre-hospital care in a mobile environment. It has 3 core focus areas in its medical care program are: • Emergency care in the community • Emergency care during transportation • Emergency care on arrival at the health care facility`,
        img_url: "/imgs/service/S1-Essential-Services/S1D-Medical-Services/S1-IMAGES20.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1D-Header-Images_P3.jpg' }
        ]

    },
    {
        id: 21,
        service_type_id: "EmergencyMedicalServices",
        title: "PNG Chiropractic",
        address: "Ruta Pl, Port Moresby, Papua New Guinea",
        phone: "+675 325 8466",
        website: "N/A",
        email: "N/A",
        description: `Located in Port Moresby, PNG Chiropractic is there to help with any chiropractic needs.`,
        img_url: "/imgs/service/S1-Essential-Services/S1D-Medical-Services/S1-IMAGES21.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1D-Header-Images_P3.jpg' }
        ]

    },
    {
        id: 22,
        service_type_id: "Security",
        title: "The Corps Security",
        address: "N/A",
        phone: "+675 323 4473",
        website: "www.the-corps.com.pg",
        email: "coachofficemanager@gdsspng.com",
        description: `Corps Security has been providing security solutions in PNG since 1996 to some of the most high profile entities in the country. Corps Security has successfully provided its services to a range of sectors including finance, construction, diplomatic, commercial, retail and industrial. `,
        img_url: "/imgs/service/S1-Essential-Services/S1E-Security/S1-IMAGES22.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1E-Header-Images_P4.jpg' }
        ]

    },
    {
        id: 23,
        service_type_id: "Security",
        title: "Guard Dog Security",
        address: "PO Box 648 Port Moresby, NCD",
        phone: "+675 323 1811",
        website: "guarddogpng.com",
        email: "enquires@gdsspng.com",
        description: `Guard Dog Security / NADZAB Airport Coach Service offers: • Executive personal protection/body guard • V.I.P. executive car available • Armed security personnel • Air-conditioning • Drop off to your home or hotel • Guaranteed pick up no matter how late your flight is delayed • Tours by arrangement`,
        img_url: "/imgs/service/S1-Essential-Services/S1E-Security/S1-IMAGES23.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1E-Header-Images_P4.jpg' }
        ]

    },
    {
        id: 24,
        service_type_id: "Security",
        title: "G4S Secure Solutions PNG",
        address: "N/A",
        phone: "+675 305 8300",
        website: "www.g4s.com.pg",
        email: "ENQUIRIES@PG.G4S.COM",
        description: `G4S is an international security solutions organisation which offers a range of security services and systems.`,
        img_url: "/imgs/service/S1-Essential-Services/S1E-Security/S1-IMAGES24.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1E-Header-Images_P4.jpg' }
        ]

    },
    {
        id: 25,
        service_type_id: "Security",
        title: "Black Swan Security ",
        address: "Kanage Street, 6 Mile, Port Moresby",
        phone: "+675 752 00200",
        website: "www.blackswanss.com",
        email: "bookings@blackswanss.com",
        description: `Black Swan VIP Services transports travellers in and around PNG safely, in comfort, and on time. Download the app or call us directly to secure your transport or book in advance and your VIP car will be waiting for you when you arrive. From meeting to meeting, day and night, Black Swan will securely transport you wherever you need to go. Find us in the app store or call us on 75200200. You can also book via email on bookings@blackswanss.com`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S1-Essential-Services/S1E-Header-Images_P4.jpg' }
        ]

    },
    {
        id: 26,
        service_type_id: "AirTransportService",
        title: "Air Niugini",
        address: "ANG Haus 7 Mile PO BOX 7186 Boroko , NCD",
        phone: "+675 327 3444",
        website: "airniugini.com.pg",
        email: "telephonesales@airniugini.com.pg",
        description: `Air Niugini offers daily services to Cairns and Brisbane, twice weekly services to Sydney and direct services to Singapore, Hong Kong, Manila, Cebu, Bali, Tokyo, Honiara and Fiji.`,
        img_url: "/imgs/service/S2-Car-Hire/S2A-Air-Transport/S2LOGOS.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P.jpg' }
        ]

    },
    {
        id: 27,
        service_type_id: "AirTransportService",
        title: "PNG Air",
        address: "Jacksons Airport, PO 170 Boroko, NCD",
        phone: "+675 7373 7100 ",
        website: "www.pngair.com.pg",
        email: "pngair@pngair.com.pg",
        description: `PNG Air proudly connects people throughout PNG with its air service. Everything PNG Air does, is for your security and comfort.`,
        img_url: "/imgs/service/S2-Car-Hire/S2A-Air-Transport/S2LOGOS4.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P.jpg' }
        ]

    },
    {
        id: 28,
        service_type_id: "AirTransportService",
        title: "Helifix",
        address: "N/A",
        phone: "+675 323 3968",
        website: "www.helifix.com.pg",
        email: "info@helifix.com.pg",
        description: `Helifix is an aviation operator that provides helicopter and aircraft charters along with maintenance services throughout PNG.`,
        img_url: "/imgs/service/S2-Car-Hire/S2A-Air-Transport/S2LOGOS6.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P.jpg' }
        ]

    },
    {
        id: 29,
        service_type_id: "AirTransportService",
        title: "HeliScope",
        address: "HeliScope Terminal Portion 2437 Jacksons Parade POM Airport",
        phone: "+675 323 0662",
        website: "heliscope.net",
        email: "info@heliscope.net",
        description: `HeliScope is a reliable and safe helicopter charter operator which specialises in construction, gas and oil exploration, and aeromedical and passenger services.`,
        img_url: "/imgs/service/S2-Car-Hire/S2A-Air-Transport/S2LOGOS7.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P.jpg' }
        ]

    },
    {
        id: 30,
        service_type_id: "AirTransportService",
        title: "Mission Aviation Fellowship",
        address: "Kagamuga Airport, Mt Hagen, WHP, Papua New Guinea",
        phone: "+675 545 1477",
        website: "https://maf.org.au/countries/png/",
        email: "MAF-PapuaNewGuinea@maf.org",
        description: `The Mission Aviation Fellowship provides vital aeromedical and charter services for much of PNG's remote, rural regions. `,
        img_url: "/imgs/service/S2-Car-Hire/S2A-Air-Transport/S2LOGOS8.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P.jpg' }
        ]

    },
    {
        id: 31,
        service_type_id: "AirTransportService",
        title: "Tropicair",
        address: "Boroko NCD Papua New Guinea",
        phone: "+675 311 2673",
        website: "http://www.tropicair.com.pg",
        email: "info@tropicair.com.pg",
        description: `Tropicair is a safe and reliable charter operator offering an efficient, affordable charter service with modern safe aircrafts for private and commercial use. `,
        img_url: "/imgs/service/S2-Car-Hire/S2A-Air-Transport/S2LOGOS10.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P.jpg' }
        ]

    },
    {
        id: 32,
        service_type_id: "FreightServices",
        title: "DHL",
        address: "Kitty Hawk Street Six Mile, N.C.D Port Moresby",
        phone: "+675 302 6555",
        website: "www.dhl.com",
        email: "N/A",
        description: `DHL offers domestic and international freight services as well as logistical and facilitation services for e-commerce businesses. Open Monday to Friday 8am-5pm, and Saturday 8am-12pm.`,
        img_url: "/imgs/service/S2-Car-Hire/S2B-Freight-Services/S2LOGOS11.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P2.jpg' }
        ]

    },
    {
        id: 33,
        service_type_id: "FreightServices",
        title: "GFS Limited",
        address: "P.O Box 2091  Port Moresby Kabua Cres Papua New Guinea",
        phone: "+675 320 1040",
        website: "www.gfspng.com",
        email: "",
        description: `GFS offers transport and logistics services to the gas and petroleum industry in PNG. Professional, efficient and expedient.`,
        img_url: "/imgs/service/S2-Car-Hire/S2B-Freight-Services/S2LOGOS12.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P2.jpg' }
        ]

    },
    {
        id: 34,
        service_type_id: "FreightServices",
        title: "IPI Group",
        address: "PO Box 795, Lae, Morobe Province, Papua New Guinea",
        phone: "+675 475 1400",
        website: "www.ipigroup.com.pg",
        email: "IPIGROUP@ipigroup.com.pg",
        description: `With its many clients in mind, the iPi Group offers tailor-made logistics solutions for transport, warehousing and catering. Call today!`,
        img_url: "/imgs/service/S2-Car-Hire/S2B-Freight-Services/S2LOGOS13.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P2.jpg' }
        ]

    },
    {
        id: 35,
        service_type_id: "FreightServices",
        title: "PNG Air Freight",
        address: "Head Office: Port Moresby Jackson’s Parade Saraga, PO Box 6645, Boroko",
        phone: "+675 325 2411",
        website: "www.tnt.kenmore.com.pg",
        email: "sales@pngaf.com.pg",
        description: `TNT Air Cargo offers PNG businesses express delivery services both domestically and internationally. Domestic routes include Port Moresby, Lae, Goroka, Mt Hagen, Tabubil, Lihir Island, Rabaul, Madang, Wewak, Kavieng, Buka, Alotau, Popondetta, Kimbe, Manus, Vanimo and Kiunga.`,
        img_url: "/imgs/service/S2-Car-Hire/S2B-Freight-Services/S2LOGOS14.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P2.jpg' }
        ]

    },
    {
        id: 36,
        service_type_id: "FreightServices",
        title: "Michaels & Michaels Hauliers",
        address: "Cassowary Road, Section 101, Lot 001, Lae, MP",
        phone: "+675 4723482 / 4727502",
        website: "http://www.michaelshauliers.net",
        email: "michaelshauliers777@gmail.com.au",
        description: `Over-dimensional & Heavy Haulage Specialists! Safe delivery on time! - Kenworth Heavy Duty Freight Trucks - Largest stockists of 30 floats/low loaders - Mercedes Benz (6x6) off-road heavy duty freight trucks - Largest stockists of diesel fuel tanker trucks For all your heavy haulage logistic requirements in PNG`,
        img_url: "/imgs/service/S2-Car-Hire/S2B-Freight-Services/",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P2.jpg' }
        ]

    },
    {
        id: 37,
        service_type_id: "VehicleHire",
        title: "AVIS - Nationwide Rent-A-Car",
        address: "Headoffice: P.O Box 1533 Port Moresby, 111 NCD, Papua New Guinea Jacksons Parade 7 Mile, NCD",
        phone: "+675 324 9400 ",
        website: "www.avis.com.pg",
        email: "reservations@avis.com.pg",
        description: `Avis makes travelling in PNG an easy and pleasurable experience. Offering the latest Toyota models, Avis offers great customer service and competitive rates. After hours emergency service also available. `,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS15.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 38,
        service_type_id: "VehicleHire",
        title: "Budget Rent A Car",
        address: "Port Moresby, Lae, Goroka, Mt. Hagen and Tabubil locations",
        phone: "+675 323 6244",
        website: "www.budget.com.pg",
        email: "reservations@budget.com.pg",
        description: `Regardless of whether you're in PNG for leisure or business, Budget has all your car rental needs covered. “New Cars ... Old Fashioned Service.”`,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS16.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 39,
        service_type_id: "VehicleHire",
        title: "Europcar",
        address: "Port Moresby Jacksons Intl Airport, Arrival Hall, 7 Mile Jacksons Road, Port Moresby, Papua New Guinea.",
        phone: "+675 342 2273",
        website: "www.europcar.com.au/places/papua-new-guinea",
        email: "N/A",
        description: `Europcar offers affordable and reliable car rentals for visitors to PNG. Explore more of the incredible landscapes and culture of this fascinating nation with Europcar.`,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS17.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 40,
        service_type_id: "VehicleHire",
        title: "Frangipani (Kokopo)",
        address: "P.O Box 133  Kokopo",
        phone: "+675 982 9311",
        website: "www.facebook.com/pg/Frangipani-Car-Hires",
        email: "N/A",
        description: `Frangipani car hire provides a pleasurable and reliable experience when exploring the stunning and fascinating region of East New Britain. Customer service and satisfaction guaranteed. `,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS18.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 41,
        service_type_id: "VehicleHire",
        title: "Hertz (Port Moresby Airport)",
        address: "Section 37, Lot 10, Jackson Rd",
        phone: "+675 7363 0995",
        website: "www.hertz.com.au/p/hire-a-car/papua-new-guinea",
        email: "N/A",
        description: `Enjoy a day trip to the beautiful Variata National Park or a week-long getaway to explore more of this wonderful nation. Whatever your transport needs, Hertz car rentals has you covered.`,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS19.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 42,
        service_type_id: "VehicleHire",
        title: "Izarhlamborn Hire Cars (MADANG)",
        address: "PO Box 739 Madang, Modilon Rd, Madang. ",
        phone: "+675 422 0433",
        website: "N/A",
        email: "N/A",
        description: `A Rental car service located in Madang`,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS20.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 43,
        service_type_id: "VehicleHire",
        title: "Travellers Rent-a-Car",
        address: "Madang, Lae & Port Moresby Locations",
        phone: "+675 422 3412",
        website: "travellersrentacar.com",
        email: "travellersrentacar@reservations.com",
        description: `Travellers Rent-a-Car is a locally owned car rental company offering transport services to both leisure and executive travellers. Delivering the best rentals for PNG's road and climate conditions.`,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS21.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 44,
        service_type_id: "VehicleHire",
        title: "City Cab (MOUNT HAGEN)",
        address: "Mount Hagen",
        phone: "+675 690 4431",
        website: "N/A",
        email: "N/A",
        description: `City Cab is Mt Hagen's sole taxi service.`,
        img_url: "/imgs/service/S2-Car-Hire/S2C-Vehicle-Hire/S2LOGOS22.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/S2-Car-Hire/S2-MAINLISTIMAGES_P3.jpg' }
        ]

    },
    {
        id: 45,
        service_type_id: "Mines",
        title: "Newcrest Mining",
        address: "Level 4, Port Tower Building, Hunter Street, Port Moresby, NCD Papua New Guinea",
        phone: "+675 321 7711",
        website: "www.newcrest.com.au",
        email: "corporateaffairs@newcrest.com.au",
        description: `Located within the New Ireland Province, Newcrest's Lihir operation has produced over 10 million ounces of gold since its inception back in 1997. It remains one of the most prolific gold mines in PNG today.  `,
        img_url: "/imgs/service/Mining/Mines/S3A1-NewcrestMining.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 46,
        service_type_id: "Mines",
        title: "St Barbara Ltd. (Simberi Operations)",
        address: "Simberi Gold Company Limited Simberi Island, New Ireland Province, PNG PO Box 624, Kavieng NIP PNG",
        phone: "+675 276 2010",
        website: "www.stbarbara.com.au",
        email: "info@stbarbara.com.au",
        description: `Simberi Gold Company Limited is located in the New Ireland Province on an island within the Tabar Group. Due to its volcanic composition, the island elevates dramatically around the shoreline and attracts high rain falls. The mining operations currently centres around the eastern part of the island which extends 2,560 hectares in total. `,
        img_url: "/imgs/service/Mining/Mines/S3A2-StBarbaraLtd.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 47,
        service_type_id: "Mines",
        title: "Porgera Joint Venture",
        address: "PO box 484 Mt Hagen Papua New Guinea",
        phone: "+675 547 9500",
        website: "www.barrick.com",
        email: "N/A",
        description: `Located in the Enga Province, approximately 130 kilometres from the township of Mount Hagen, the Porgera Joint Venture is an operational gold mine 95% owned by Barrick (Niugini) Limited.`,
        img_url: "/imgs/service/Mining/Mines/S3A3-PorgeraJointVenture.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 48,
        service_type_id: "Mines",
        title: "OK Tedi Mining Ltd",
        address: "Ok Tedi Mining Limited PO Box 1 1 Dakon Road, Tabubil Western Province 332 Papua New Guinea",
        phone: "+675 321 3522",
        website: "www.oktedi.com",
        email: "enquiry.tabubil@oktedi.com",
        description: `Ok Tedi Mining Limited is one of the most proliferate copper, gold and silver mines in PNG. Located in the Star Mountains in the Western Province, the company ships ore from the township of Kiunga down the Fly River to the coast.`,
        img_url: "/imgs/service/Mining/Mines/S3A4-OKTediMiningLtd.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 49,
        service_type_id: "Mines",
        title: "Tolukuma Gold Mines Ltd (Petromin Ltd)",
        address: "Petromin Haus Section 45, Allotment 4, Hubert Murray Highway, Port Moresby, National Capital District Papua New Guinea",
        phone: "+675 329 9277",
        website: "www.petrominpng.com.pg",
        email: "contact@petrominpng.com.pg",
        description: `Petromin PNG Holdings Limited is an independent business created to oversee the mineral and petroleum industry and ensure that state and indigenous interests are maximised.`,
        img_url: "/imgs/service/Mining/Mines/",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 50,
        service_type_id: "Mines",
        title: "Morobe Mining Joint Ventures (Hidden Valley)",
        address: "PO Box 40165 Morobe Province Papua New Guinea",
        phone: "+675 478 5000",
        website: "www.morobejv.com",
        email: "mmj.media@morobejv.com",
        description: `Morobe Mining Joint Ventures was established back in 2008 and operates in the Morobe Province.  `,
        img_url: "/imgs/service/Mining/Mines/S3A6-MorobeMiningJointVentures.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 51,
        service_type_id: "Mines",
        title: "MCC Ramu Nico Ltd (RAMU)",
        address: "Port Moresby Office: Level 3, Pacific Place, Port Moresby, Papua New Guinea",
        phone: "+675 422 2888",
        website: "www.ramunico.com",
        email: "info@mccgrd.com",
        description: `Established back in 2005, Ramu NiCo Management oversees the Ramu Nickel Joint Venture which focuses on nickel mining in the Madang Province. `,
        img_url: "/imgs/service/Mining/Mines/S3A7-MCCRamuNicoLtd(RAMU).jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 52,
        service_type_id: "Mines",
        title: "Kula Gold (Woodlark Island Gold Project)",
        address: "Woodlark Island Papua New Guinea",
        phone: "+61 8 6144 0588",
        website: "www.kulagold.com.au",
        email: "info@kulagold.com.au",
        description: `Woodlark Island Gold Project is a gold mine located on Woodlark Island located in the Milne Bay Province.`,
        img_url: "/imgs/service/Mining/Mines/S3A8-KulaGold.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 53,
        service_type_id: "Mines",
        title: "K92 Mining Inc.",
        address: "PO Box 1290 Morobe Province Papua new Guinea",
        phone: "+675 7100 2451",
        website: "www.k92mining.com",
        email: "site@k92mining.com",
        description: `K92 Mining is a gold mine operation located in the Eastern Highlands Province of PNG.`,
        img_url: "/imgs/service/Mining/Mines/S3A9-K92MiningInc.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 54,
        service_type_id: "Mines",
        title: "Crater Gold Mining",
        address: "Crater Mountain, East highlands Papua New Guinea",
        phone: "+61 2 9241 4224 ",
        website: "www.cratergold.com.au",
        email: "info@cratergold.com.au",
        description: `Crater Gold Mining manages two gold mining projects in PNG, one at Fergusson Island and the other at Crater Mountain. `,
        img_url: "/imgs/service/Mining/Mines/S3A10-CraterGoldMining.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3A-HeaderImage.jpg' }
        ]

    },
    {
        id: 55,
        service_type_id: "OfficialDepartments",
        title: "Papua New Guinea Chamber of Trade & Industry (PNGCTI)",
        address: "N/A",
        phone: "+675 321 3057",
        website: "www.pngcci.org.pg",
        email: "N/A",
        description: `The Papua New Guinea Chamber of Commerce and Industry Inc. (PNGCCI) is an government body that is committed to the development of trade and commerce in PNG.`,
        img_url: "/imgs/service/Mining/Official departments/S3B1-PNGCTI.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 56,
        service_type_id: "OfficialDepartments",
        title: "Department of Labour & Industrial Relations",
        address: "P.O Box 5644, Boroko, National Capital District Port Moresby, Papua New Guinea",
        phone: "+675 321 2817",
        website: "www.facebook.com/pg/PngDepartmentOfLabourIndustrialRelation",
        email: "N/A",
        description: `Department of Labour and Industrial Relations is a PNG body that strives to create positive industrial relations and support work opportunities throughout the region. `,
        img_url: "/imgs/service/Mining/Official departments/S3B2-DepartmentOfLabour&IndustrialRelations.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 57,
        service_type_id: "OfficialDepartments",
        title: "Department of Mineral Policy & Geohazards Management",
        address: "Private Mail Bag of Port Moresby NCD Papua New Guinea",
        phone: "+675 322 7664",
        website: "N/A",
        email: "N/A",
        description: `The Department of Mineral Policy and Geohazards Management is a government body that oversees mining legislation and the management of geohazards.`,
        img_url: "/imgs/service/Mining/Official departments/S3B3-DMPGM.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 58,
        service_type_id: "OfficialDepartments",
        title: "Mineral Resources Authority",
        address: "PO Box 1906 Port Moresby NCD Papua New Guinea",
        phone: "+675 321 3511",
        website: "www.mra.gov.pg",
        email: "info@mra.gov.pg",
        description: `The Mineral Resources Authority is a government body formed to assist and approve exploration applications for the benefit of PNG and business operators undertaking exploration.  `,
        img_url: "/imgs/service/Mining/Official departments/S3B4-MineralResourcesAuthority.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 59,
        service_type_id: "OfficialDepartments",
        title: "Investment Promotion Authority",
        address: "First Floor, IPA Haus, Munidubu Street, Lawes Road, Konedobu",
        phone: "+675 321 7311",
        website: "www.ipa.gov.pg",
        email: "ispd@ipa.gov.pg/clarence@ipa.gov.pg",
        description: `The Investment Promotion Authority is a government body that incentivises exploration in PNG. The organisation also oversees the Intellectual Property Office, Securities Commission and Companies Office.`,
        img_url: "/imgs/service/Mining/Official departments/S3B5-InvestmentPromotionAuthority.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 60,
        service_type_id: "OfficialDepartments",
        title: "PNG Chamber of Mines and Petroleum",
        address: "The Lodge, First Floor, Brampton St, Port Moresby, Papua New Guinea",
        phone: "+675 321 2988",
        website: "www.pngchamberminpet.com.pg",
        email: "info@pngchamberminpet.com.pg",
        description: `The PNG Chamber of Mines and Petroleum is an official body overseeing the interests of those within the mining and petroleum sector.`,
        img_url: "/imgs/service/Mining/Official departments/S3B6-PNGChamberOfMinesAndPetroleum.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 61,
        service_type_id: "OfficialDepartments",
        title: "Department of Petroleum and Energy",
        address: "Po Box 1993 Port Moresby NCD Papua New Guinea",
        phone: "+675 322 4200",
        website: "www.petroleum.gov.pg",
        email: "N/A",
        description: `The Department of Petroleum is a government body that provides current information about the petroleum and energy industries in PNG as well as conducts research and sets policies to manage activities.`,
        img_url: "/imgs/service/Mining/Official departments/S3B7-DepartmentOfPetroleumAndEnergy.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3B-HeaderImage.jpg' }
        ]

    },
    {
        id: 62,
        service_type_id: "Petroleum",
        title: "Oil Search Ltd",
        address: "PNG Registered Office Oil Search (PNG) Limited Ground Floor Harbourside East Building Stanley Esplanade Port Moresby Papua New Guinea PO Box 842 Port Moresby NCD 121 Papua New Guinea",
        phone: "+675 322 5599",
        website: "www.oilsearch.com",
        email: "N/A",
        description: `Oil Search was established in back in 1929 and manages the operation of all of PNG’s established oil fields.`,
        img_url: "/imgs/service/Mining/Petroleum Gas/S3C1-OilSearchLtd.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3C-HeaderImage.jpg' }
        ]

    },
    {
        id: 63,
        service_type_id: "Petroleum",
        title: "Esso highlands Ltd (Subsidiary of ExxonMobil)",
        address: "GPO Box 118 Port Moresby NCD Papua New Guinea",
        phone: "+675 309 711",
        website: "pnglng.com",
        email: "N/A",
        description: `ExxonMobile PNG manages the PNG LNG project which is developing a commercial industry for gas resources in the region. `,
        img_url: "/imgs/service/Mining/Petroleum Gas/S3C2-EssoHighlandsLtd.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3C-HeaderImage.jpg' }
        ]

    },
    {
        id: 64,
        service_type_id: "Argiculture",
        title: "Ramu Agri Industries Ltd",
        address: "Gusap Downs PO Box 2183 Lae,  411 Papua New Guinea",
        phone: "+675 4743299",
        website: "www.nbpol.com.pg",
        email: "rbeerwald@rai.com.pg",
        description: `Ramu Sugar, PNG's only locally grown and manufactured sugar, is operated by Ramu Agri Industries Ltd (RAIL). Aside from sugar, the company also produces Ramu Premium Beef, Ramu Palm Oil and Ramu Ethanol.`,
        img_url: "/imgs/service/Mining/Agriculture/S3D1-RamuAgriIndustriesLtd.jpg",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Mining/S3D-HeaderImage.jpg' }
        ]

    },
    {
        id: 65,
        service_type_id: "BrianBell",
        title: "BB Kokopo",
        address: "William Road, Rabaul, ENBP",
        phone: "+675 982 9027",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 66,
        service_type_id: "BrianBell",
        title: "BB Mount Hagen",
        address: "Paraka Place, Mt. Hagen, WHP",
        phone: "+675 5421999",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 67,
        service_type_id: "BrianBell",
        title: "BB Lae",
        address: "Mangola Street, Lae",
        phone: "+675 472 3200",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 68,
        service_type_id: "BrianBell",
        title: "Homecentre Gordons",
        address: "Kennedy Road, Gordons",
        phone: "+675 325 8469",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 69,
        service_type_id: "BrianBell",
        title: "BB Plaza",
        address: "Turumu Street, Boroko, NCD",
        phone: "+675 325 5411",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 70,
        service_type_id: "BrianBell",
        title: "BB Madang",
        address: "Modilon Road, Madang, MP",
        phone: "+675 422 1899",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 71,
        service_type_id: "BrianBell",
        title: "BB Goroka",
        address: "Edward Street, Goroka, EHP",
        phone: "+675 532 1622",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 72,
        service_type_id: "BrianBell",
        title: "Vision City",
        address: "Waigani Drive",
        phone: "+675 325 5411",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 73,
        service_type_id: "BrianBell",
        title: "POM",
        address: "PO BOX 1228",
        phone: "+675 325 5411",
        website: "www.brianbellonline.com",
        email: "bbsales@brianbell.com.pg",
        description: `Everything for your home and outdoors! Retail Wholesale Everything for your home`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 74,
        service_type_id: "KeynoteMusic",
        title: "Keynote Music",
        address: "Port Moresby, Kokopo & Lae",
        phone: "+675 325 8049",
        website: "www.keynote.com.pg",
        email: "sales@keynote.com.pg",
        description: `Keynote Music is your one stop music stop: • Piano & digital keyboards • Guitars, amplifiers & accessories • Brass, woodwind, percussion instruments & accessories • Pro audio • Background music systems – design, installation & service • Public address systems (portable to large) – design, sales & service`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 75,
        service_type_id: "SticklandRealEsate",
        title: "Strickland Real Estate",
        address: "Section 15, Lot 7 MacGregor Street (opposite AON Haus) Port Moresby PO Box 1581, Boroko, NCD",
        phone: "+675 320 0944",
        website: "www.sre.com.pg",
        email: "info@sre.com.pg",
        description: `Strickland Real Estate offers a variety of services: • Real Estate • Consultants • Sales • Rent Collection • Property Management • General Maintenance • Leasing • Residential, Industrial, Commercial`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 76,
        service_type_id: "PrydeFurniture",
        title: "Pryde Furniture",
        address: "Head Office & Showroom Section 61, Lot 11, Morata St, Gordons, Port Moresby",
        phone: "+675 325 4233 ",
        website: "www.pryde.com.pg",
        email: "info@pryde.com.pg",
        description: `Pryde Furniture is the pryde of Papua New Guinea: • Home products • Furniture & timber products • Office fitouts • Curtains & blinds • Flooring`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 77,
        service_type_id: "RHTrading",
        title: "Vision City, Mega Mall Branch - RH Hypermarket",
        address: "Lot 7, 8, & 9 Section 429, Hohola P.O. Box 3655 Boroko, NCD, Papua New Guinea",
        phone: "+675 302 8511",
        website: "www.rhtradingpng.com",
        email: "rhtpom@rhtradingpng.com",
        description: `RH Trading Limited is a retail and wholesale company offering: • Groceries • Fruit and vegetables • Meat & seafood • Deli goods • Dairy • Beverages • Fashion apparel  • Hardware & garden products • Sports equipment • Toys Open Monday to Sunday 8:00am - 9:00pm`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 78,
        service_type_id: "RHTrading",
        title: "Gordons Branch - RH Hypermarket Express",
        address: "Lot 1, Section 479, Kennedy Road, Gordons, P.O. Box 3655 Boroko, NCD, Papua New Guinea",
        phone: "+675 325 1122",
        website: "www.rhtradingpng.com",
        email: "rhtpom@rhtradingpng.com",
        description: `RH Trading Limited is a retail and wholesale company offering: • Groceries • Fruit and vegetables • Meat & seafood • Deli goods • Dairy • Beverages • Fashion apparel  • Hardware & garden products • Sports equipment • Toys Open Monday to Wednesday, Saturday & Sunday 8:00am - 7:30pm; Thursday & Friday 8:00am - 8:00pm `,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 79,
        service_type_id: "RHTrading",
        title: "Hohola Branch - RH Hypermarket Express",
        address: "Lot 5,6 & 7, Section 1, Kamarere St. Hohola, P.O. BOX 3655 Boroko, NCD, Papua New Guinea",
        phone: "+675 325 1538 ",
        website: "www.rhtradingpng.com",
        email: "rhtpom@rhtradingpng.com",
        description: `RH Trading Limited is a retail and wholesale company offering: • Groceries • Fruit and vegetables • Meat & seafood • Deli goods • Dairy • Beverages • Fashion apparel  • Hardware & garden products • Sports equipment • Toys Open Monday – Sunday 8:00am – 7:00pm`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 80,
        service_type_id: "RHTrading",
        title: "Lae Branch - RH Hypermarket Express",
        address: "Lot 23, Section 50, Milfordhaven Rd. P.O. BOX 77, Morobe Province, Lae, Papua New Guinea",
        phone: "+675 472 3328",
        website: "www.rhtradingpng.com",
        email: "rhtpom@rhtradingpng.com",
        description: `RH Trading Limited is a retail and wholesale company offering: • Groceries • Fruit and vegetables • Meat & seafood • Deli goods • Dairy • Beverages • Fashion apparel  • Hardware & garden products • Sports equipment • Toys Open Monday to Friday 8:00am - 5:00pm; Saturday 8:00am - 12:00pm `,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 81,
        service_type_id: "BNGTrading",
        title: "BNG Trading - Port Moresby",
        address: "N/A",
        phone: "+675 323 3366",
        website: "www.bngtrading.com.pg",
        email: "pomsalesadmin@bngtrading.com.pg",
        description: `Operating since 1924, BNG Trading is the oldest and largest importer, distributor and marketer of grocery products in PNG. With a wide range of products covering food, beverage, health & beauty and non-food items, BNG represents some of the largest multi-national consumer companies in the world. The company has branches in Port Moresby, Lae, Kokopo and Kiunga supplying over 500 stores including grocers, wholesalers, foodservices, bakeries and mining camps.`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 82,
        service_type_id: "BNGTrading",
        title: "BNG Trading - Lae",
        address: "N/A",
        phone: "+675 472 4850",
        website: "www.bngtrading.com.pg",
        email: "laecustomerservice01@bngtrading.com.pg",
        description: `Operating since 1924, BNG Trading is the oldest and largest importer, distributor and marketer of grocery products in PNG. With a wide range of products covering food, beverage, health & beauty and non-food items, BNG represents some of the largest multi-national consumer companies in the world. The company has branches in Port Moresby, Lae, Kokopo and Kiunga supplying over 500 stores including grocers, wholesalers, foodservices, bakeries and mining camps.`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 83,
        service_type_id: "BNGTrading",
        title: "BNG Trading - Kokopo",
        address: "N/A",
        phone: "+675 982 8561",
        website: "www.bngtrading.com.pg",
        email: "bngkpomgr@global.net.pg",
        description: `Operating since 1924, BNG Trading is the oldest and largest importer, distributor and marketer of grocery products in PNG. With a wide range of products covering food, beverage, health & beauty and non-food items, BNG represents some of the largest multi-national consumer companies in the world. The company has branches in Port Moresby, Lae, Kokopo and Kiunga supplying over 500 stores including grocers, wholesalers, foodservices, bakeries and mining camps.`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 84,
        service_type_id: "BNGTrading",
        title: "BNG Trading - Kiunga",
        address: "N/A",
        phone: "+675 7190 9926 ",
        website: "www.bngtrading.com.pg",
        email: "N/A",
        description: `Operating since 1924, BNG Trading is the oldest and largest importer, distributor and marketer of grocery products in PNG. With a wide range of products covering food, beverage, health & beauty and non-food items, BNG represents some of the largest multi-national consumer companies in the world. The company has branches in Port Moresby, Lae, Kokopo and Kiunga supplying over 500 stores including grocers, wholesalers, foodservices, bakeries and mining camps.`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 85,
        service_type_id: "PacificPalmsProperty",
        title: "Pacific Palms Property",
        address: "N/A",
        phone: "N/A",
        website: "www.pacificpalmsproperty.com.pg",
        email: "property@pacificpalmsproperty.com.pg",
        description: `Now you can meet in private and work in world class surroundings at Pacific Palms Property's latest development, Harbourside West Tower Serviced Offices, on the waterfront in downtown Port Moresby. Choose from a range of contemporary offices with modern, quality furnishings available on an hourly, daily or monthly basis at very reasonable rates. There is 24 hour security with ample, safe, on-site basement parking for peace of mind. Our staff are well trained and ready to assist with efficient administrative support and the offices are supported with quality amenities for your convenience, including a modern kitchen, breakout areas, meeting and training rooms, reception services, printers, security and housekeeping, leaving you free to concentrate on your business.`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 86,
        service_type_id: "VisionCityMegaMall",
        title: "VISION CITY MEGA MALL",
        address: "Waigani Drive, Port Moresby ",
        phone: "+675 302 8555",
        website: "www.visioncity.com.pg",
        email: "N/A",
        description: `Vision City Mega Mall is a modern, secure shopping mall in Port Moresby catering to all your shopping needs.`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },
    {
        id: 87,
        service_type_id: "MadnessPhotography",
        title: "madNESS Photography",
        address: "N/A",
        phone: "N/A",
        website: "www.madnessphotography.com.au",
        email: "ness@madnessphotography.com.au",
        description: `Need to stand out from the crowd?`,
        img_url: "",
        mapImage: "",
        images: [
            { imageFile: '/imgs/service/Retail/S4-HeaderImage.jpg' }
        ]

    },

]


export const essentialData = [
    {
        id: "Banks",
        serviceTypes: "essentials",
        title: "BANKS",
        url: essentialNamespace + "/:serid",
        img_url: BankIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "Banks")
    },
    {
        id: "Embassies",
        serviceTypes: "essentials",
        title: "EMBASSIES",
        url: essentialNamespace + "/:serid",
        img_url: EmbassyIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "Embassies")
    },
    {
        id: "HighCommissions",
        serviceTypes: "essentials",
        title: "HIGH COMMISIONS",
        url: essentialNamespace + "/:serid",
        img_url: CommissionsIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "HighCommissions")
    },
    {
        id: "EmergencyMedicalServices",
        serviceTypes: "essentials",
        title: "EMERGENCY MEDICAL SERVICES",
        url: essentialNamespace + "/:serid",
        img_url: MedicalIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "EmergencyMedicalServices")
    },
    {
        id: "Security",
        serviceTypes: "essentials",
        title: "SECURITY",
        url: essentialNamespace + "/:serid",
        img_url: SecurityIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "Security")
    }
];

export const transportData = [
    {
        id: "AirTransportService",
        serviceTypes: "transport",
        title: "AIR TRANSPORT SERVICES (PASSNEGER)",
        url: transportNamespace + "/:serid",
        img_url: AirTransportIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "AirTransportService")
    },
    {
        id: "FreightServices",
        serviceTypes: "transport",
        title: "FREIGHT SERVICES",
        url: transportNamespace + "/:serid",
        img_url: FreightIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "FreightServices")
    },
    {
        id: "VehicleHire",
        serviceTypes: "transport",
        title: "VEHICLE HIRE",
        url: transportNamespace + "/:serid",
        img_url: CarHireIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "VehicleHire")
    }
];

export const miningData = [
    {
        id: "Mines",
        serviceTypes: "mining",
        title: "MINES",
        url: miningNamespace + "/:serid",
        img_url: MinesIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "Mines")
    },
    {
        id: "OfficialDepartments",
        serviceTypes: "mining",
        title: "OFFICIAL DEPARTMENTS",
        url: miningNamespace + "/:serid",
        img_url: OfficialDepartmentsIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "OfficialDepartments")
    },
    {
        id: "Petroleum",
        serviceTypes: "mining",
        title: "PETROLEUM & GAS IN PNG",
        url: miningNamespace + "/:serid",
        img_url: PetroleumIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "Petroleum")
    },
    {
        id: "Argiculture",
        serviceTypes: "mining",
        title: "AGRICULTURE",
        url: miningNamespace + "/:serid",
        img_url: AricultureIcon,
        isIcon: true,
        services: serviceInfoData.filter(item => item.service_type_id === "Argiculture")
    }
];

export const retailData = [
    {
        id: "BrianBell",
        serviceTypes: "retail",
        title: "BRIAN BELL",
        url: retailNamespace + "/aaa",
        img_url: '/imgs/service/Retail/Retail/S4A-BrianBell.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "BrianBell")
    },
    {
        id: "KeynoteMusic",
        serviceTypes: "retail",
        title: "KEYNOTE MUSIC",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4B-KeynoteMusic.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "KeynoteMusic")
    },
    {
        id: "SticklandRealEsate",
        serviceTypes: "retail",
        title: "STRICKLAND REAL ESATE",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4C-StricklandRealEstate.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "SticklandRealEsate")
    },
    {
        id: "PrydeFurniture",
        serviceTypes: "retail",
        title: "PRYDE FURNITURE",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4D-PrydeFurniture.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "PrydeFurniture")
    },
    {
        id: "RHTrading",
        serviceTypes: "retail",
        title: "RH TRADING",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4E-RHTrading.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "RHTrading")
    },
    {
        id: "BNGTrading",
        serviceTypes: "retail",
        title: "BNG TRADING",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4F-BNGTrading.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "BNGTrading")
    },
    {
        id: "PacificPalmsProperty",
        serviceTypes: "retail",
        title: "PACIFIC PALMS PROPERTY",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4G-PacificPalms.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "PacificPalmsProperty")
    },
    {
        id: "VisionCityMegaMall",
        serviceTypes: "retail",
        title: "VISION CITY MEGA MALL",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4H-VisionCity.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "VisionCityMegaMall")
    },
    {
        id: "MadnessPhotography",
        serviceTypes: "retail",
        title: "MADNESS PHOTOGRAPHY",
        url: miningNamespace + "/:serid",
        img_url: '/imgs/service/Retail/Retail/S4I-MadnessPhotography.jpg',
        images: [
            { imageFile: '/imgs/service/Retail/S4A-HeaderImage1.jpg' }
        ],
        services: serviceInfoData.filter(item => item.service_type_id === "MadnessPhotography")
    },
]

export const services = [

    {
        id: 1, name: "essential", title: "ESSENTIAL SERVICES", image_url: "/imgs/service/selections/EssentialServices.jpg",
        url: essentialNamespace, sub_url: essentialNamespace, service_types: essentialData,
        icon: ESSENTIAL_ICON
    },
    {
        id: 2, name: "transport", title: "CAR HIRE & TRANSPORT", image_url: "/imgs/service/selections/CarHireTransport.jpg",
        url: transportNamespace, sub_url: transportNamespace, service_types: transportData,
        icon: TRANSPORT_ICON
    },
    {
        id: 3, name: "mining", title: "MINING & RESOURCES", image_url: "/imgs/service/selections/MinesResources.jpg",
        url: miningNamespace, sub_url: miningNamespace, service_types: miningData,
        icon: MINING_ICON
    },
    {
        id: 4, name: "retail", title: "RETAIL & SERVICES", image_url: "/imgs/service/selections/RetailServices.jpg",
        url: retailNamespace, sub_url: retailNamespace, service_types: retailData,
        icon: RETAIL_ICON
    }


] 