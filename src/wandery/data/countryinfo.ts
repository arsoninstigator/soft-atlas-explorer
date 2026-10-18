// ISO3 → two-letter code, international dialing code, endonym (native name).
// Non-Latin endonyms include a romanisation in parentheses.
const RAW = `
AFG|AF|+93|افغانستان (Afghānistān)
ALB|AL|+355|Shqipëria
DZA|DZ|+213|الجزائر (Al-Jazāʾir)
AGO|AO|+244|Angola
ARG|AR|+54|Argentina
ARM|AM|+374|Հայաստան (Hayastan)
AUS|AU|+61|Australia
AUT|AT|+43|Österreich
AZE|AZ|+994|Azərbaycan
BHS|BS|+1|The Bahamas
BHR|BH|+973|البحرين (Al-Baḥrayn)
BGD|BD|+880|বাংলাদেশ (Bangladesh)
BLR|BY|+375|Беларусь (Bielaruś)
BEL|BE|+32|België · Belgique · Belgien
BLZ|BZ|+501|Belize
BEN|BJ|+229|Bénin
BTN|BT|+975|འབྲུག་ཡུལ་ (Druk Yul)
BOL|BO|+591|Bolivia
BIH|BA|+387|Bosna i Hercegovina
BWA|BW|+267|Botswana
BRA|BR|+55|Brasil
BRN|BN|+673|Brunei Darussalam
BGR|BG|+359|България (Bulgaria)
BFA|BF|+226|Burkina Faso
BDI|BI|+257|Uburundi
KHM|KH|+855|កម្ពុជា (Kampuchea)
CMR|CM|+237|Cameroun · Cameroon
CAN|CA|+1|Canada
CAF|CF|+236|Centrafrique
TCD|TD|+235|Tchad · تشاد
CHL|CL|+56|Chile
CHN|CN|+86|中国 (Zhōngguó)
COL|CO|+57|Colombia
COD|CD|+243|RD Congo
COG|CG|+242|Congo
CRI|CR|+506|Costa Rica
CIV|CI|+225|Côte d'Ivoire
HRV|HR|+385|Hrvatska
CUB|CU|+53|Cuba
CYP|CY|+357|Κύπρος · Kıbrıs
CZE|CZ|+420|Česko
DNK|DK|+45|Danmark
DJI|DJ|+253|Djibouti · جيبوتي
DOM|DO|+1|República Dominicana
ECU|EC|+593|Ecuador
EGY|EG|+20|مصر (Miṣr)
SLV|SV|+503|El Salvador
GNQ|GQ|+240|Guinea Ecuatorial
ERI|ER|+291|ኤርትራ (Ertra)
EST|EE|+372|Eesti
SWZ|SZ|+268|eSwatini
ETH|ET|+251|ኢትዮጵያ (Ītyōṗṗyā)
FLK|FK|+500|Falkland Islands
FJI|FJ|+679|Viti
FIN|FI|+358|Suomi · Finland
FRA|FR|+33|France
GAB|GA|+241|Gabon
GMB|GM|+220|The Gambia
GEO|GE|+995|საქართველო (Sakartvelo)
DEU|DE|+49|Deutschland
GHA|GH|+233|Ghana
GRC|GR|+30|Ελλάδα (Elláda)
GRL|GL|+299|Kalaallit Nunaat
GTM|GT|+502|Guatemala
GIN|GN|+224|Guinée
GNB|GW|+245|Guiné-Bissau
GUY|GY|+592|Guyana
HTI|HT|+509|Haïti · Ayiti
HND|HN|+504|Honduras
HUN|HU|+36|Magyarország
ISL|IS|+354|Ísland
IND|IN|+91|भारत (Bhārat)
IDN|ID|+62|Indonesia
IRN|IR|+98|ایران (Īrān)
IRQ|IQ|+964|العراق (Al-ʿIrāq)
IRL|IE|+353|Éire
ISR|IL|+972|ישראל (Yisra'el)
ITA|IT|+39|Italia
JAM|JM|+1|Jamaica
JPN|JP|+81|日本 (Nihon)
JOR|JO|+962|الأردن (Al-Urdun)
KAZ|KZ|+7|Қазақстан (Qazaqstan)
KEN|KE|+254|Kenya
PRK|KP|+850|조선 (Chosŏn)
KOR|KR|+82|대한민국 (Daehan Minguk)
XKX|XK|+383|Kosova · Kosovo
KWT|KW|+965|الكويت (Al-Kuwayt)
KGZ|KG|+996|Кыргызстан (Kyrgyzstan)
LAO|LA|+856|ລາວ (Lao)
LVA|LV|+371|Latvija
LBN|LB|+961|لبنان (Lubnān)
LSO|LS|+266|Lesotho
LBR|LR|+231|Liberia
LBY|LY|+218|ليبيا (Lībiyā)
LIE|LI|+423|Liechtenstein
LTU|LT|+370|Lietuva
LUX|LU|+352|Lëtzebuerg
MDG|MG|+261|Madagasikara
MWI|MW|+265|Malawi
MYS|MY|+60|Malaysia
MLI|ML|+223|Mali
MLT|MT|+356|Malta
MRT|MR|+222|موريتانيا (Mūrītānyā)
MEX|MX|+52|México
MDA|MD|+373|Moldova
MNG|MN|+976|Монгол Улс (Mongol Uls)
MNE|ME|+382|Црна Гора (Crna Gora)
MAR|MA|+212|المغرب (Al-Maghrib)
MOZ|MZ|+258|Moçambique
MMR|MM|+95|မြန်မာ (Myanma)
NAM|NA|+264|Namibia
NPL|NP|+977|नेपाल (Nepāl)
NLD|NL|+31|Nederland
NCL|NC|+687|Nouvelle-Calédonie
NZL|NZ|+64|Aotearoa · New Zealand
NIC|NI|+505|Nicaragua
NER|NE|+227|Niger
NGA|NG|+234|Nigeria
MKD|MK|+389|Северна Македонија (Severna Makedonija)
NOR|NO|+47|Norge · Noreg
OMN|OM|+968|عُمان (ʿUmān)
PAK|PK|+92|پاکستان (Pākistān)
PSE|PS|+970|فلسطين (Filasṭīn)
PAN|PA|+507|Panamá
PNG|PG|+675|Papua Niugini
PRY|PY|+595|Paraguay · Paraguái
PER|PE|+51|Perú
PHL|PH|+63|Pilipinas
POL|PL|+48|Polska
PRT|PT|+351|Portugal
PRI|PR|+1|Puerto Rico
QAT|QA|+974|قطر (Qaṭar)
ROU|RO|+40|România
RUS|RU|+7|Россия (Rossiya)
RWA|RW|+250|Rwanda
SAU|SA|+966|السعودية (As-Saʿūdiyya)
SEN|SN|+221|Sénégal
SRB|RS|+381|Србија (Srbija)
SLE|SL|+232|Sierra Leone
SGP|SG|+65|Singapura · 新加坡 · சிங்கப்பூர்
SVK|SK|+421|Slovensko
SVN|SI|+386|Slovenija
SLB|SB|+677|Solomon Islands
SOM|SO|+252|Soomaaliya
ZAF|ZA|+27|South Africa · Suid-Afrika
SSD|SS|+211|South Sudan
ESP|ES|+34|España
LKA|LK|+94|ශ්‍රී ලංකාව (Śrī Laṃkāva)
SDN|SD|+249|السودان (As-Sūdān)
SUR|SR|+597|Suriname
SWE|SE|+46|Sverige
CHE|CH|+41|Schweiz · Suisse · Svizzera
SYR|SY|+963|سوريا (Sūriyā)
TWN|TW|+886|臺灣 (Táiwān)
TJK|TJ|+992|Тоҷикистон (Tojikiston)
TZA|TZ|+255|Tanzania
THA|TH|+66|ประเทศไทย (Prathet Thai)
TLS|TL|+670|Timór-Leste
TGO|TG|+228|Togo
TTO|TT|+1|Trinidad and Tobago
TUN|TN|+216|تونس (Tūnis)
TUR|TR|+90|Türkiye
TKM|TM|+993|Türkmenistan
UGA|UG|+256|Uganda
UKR|UA|+380|Україна (Ukraïna)
ARE|AE|+971|الإمارات (Al-Imārāt)
GBR|GB|+44|United Kingdom
USA|US|+1|United States
URY|UY|+598|Uruguay
UZB|UZ|+998|Oʻzbekiston
VUT|VU|+678|Vanuatu
VEN|VE|+58|Venezuela
VNM|VN|+84|Việt Nam
ESH|EH|+212|الصحراء الغربية (Aṣ-Ṣaḥrāʾ al-Gharbiyya)
YEM|YE|+967|اليمن (Al-Yaman)
ZMB|ZM|+260|Zambia
ZWE|ZW|+263|Zimbabwe
`;

export interface CountryInfo { iso2: string; phone: string; endonym: string }

export const COUNTRY_INFO: Record<string, CountryInfo> = {};
RAW.trim().split("\n").forEach(line => {
  const [iso3, iso2, phone, endonym] = line.split("|");
  COUNTRY_INFO[iso3] = { iso2, phone, endonym };
});

/** short endonym for map labels — drops the romanisation */
export function endonymLabel(iso3: string): string | undefined {
  const e = COUNTRY_INFO[iso3]?.endonym;
  return e?.replace(/\s*\(.*\)\s*$/, "");
}
