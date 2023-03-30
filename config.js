const liska = {
	size: 4,
	dict: [
		["\"Jáj\""],
		["\"Jsem veselý\""],
		["\"A z toho (ne)jsme smutní\""],
		["\"Smutný příběh\""],
		["\"Pro mě ten lehčí a pěkný příklad\""],
		["\"To bude teprve bžunda\""],
		["\"Tak to je príma\""],
		["\"No to si nepomůžete\""],
		["\"A jsme veselí\""],
		["\"Máme dobrovolníka?\""],
		["\"Můžete si to smazat\"","\"To se vejdete\"","\"... na druhou tabuli\""],
		["\"Počkejte, hned vám zadám příklad\"","\"Zadám vám příklad\""],
		["\"Váš integrál je ...\"","\"Váš příklad je...\""],
		["\"Někoho vyberem\""],
		["\"A budem spokojení\""],
		["\"Myšlenka je jasná\""],
		["\"Všechno oukej?\""],
		["\"Nikdo nic neříká\""],
		["\"To je báječné\""],
		["\"To taky můžeme, ale...\""],
		["\"To už jsme tu měli\""],
		["\"Život není fér\""],
		["\"Všichni jsme v pohodě\""],
		["\"Ve skutečnosti je to jednoduché\""],
		["\"Klasický zkouškový příklad\"","\"Takové příklady jsou u zkoušky\""],
		["\"Čili\""],
		["\"Krásná práce\""],
		["příklad už byl na přednášce","\"... Došlá...\""],
		["Liška přijde včas","Liška nepřijde včas"],
		["Kdokoliv křičí \"BINGO!\""]
	]
};

const vondra = {
	size: 4,
	dict: [
		["\"Jo zlato?\"","\"Jo lásko?\""],
		["\"Cajk\""],
		["\"Lets go\""],
		["Jakákoli sexuální narážka","Nepadla žádná sexuální narážka"],
		["Vondra se zoufalým výrazem opře hlavu o tabuli","Vondra si rozmyslí opření hlavou o tabuli"],
		["\"Kdo už alespoň slyšel o <geometrický termín>?\""],
		["Kdokoliv rýsuje příliš tlustou čáru"],
		["Kdokoliv nemá pravítko"],
		["Kdokoliv nemá kružítko"],
		["Vondra vyjadřuje nesouhlas s črtáním do tabletu"],
		["\"Hej\""],
		["\"Tak a znova, lépe, radostněji!\""],
		["\"A proč?\""],
		["Vondra si donese kafe z automatu","Vondra si donese vlastní hrnek","Vondra si nedonese nápoj"],
		["Vondra použije 4 a více barev","Vondra použije více než 4 barvy"],
		["Vondrovi došly barvy"],
		["\"To se to blbě rýsuje, bez kružítka...\""],
		["\"body dotyku\""],
		["\"... zabodnete kružítko...\""],
		["\"Vyšlo?\""],
		["Vondra při trapném tichu čeká na odpověď"],
		["Vondra si brousí kružítko"],
		["Kdokoliv rýsuje pastelkou","Kdokoliv rýsuje propiskou"],
		["Kdokoliv dělá náčrt v nevhodném pořadí"],
		["\"Co o tomto <útvar> víte?\""],
		["Vondra mluví sprostě"],
		["Vondra se podivně směje","Vondra vydá divný zvuk"],
		["\"Nápady?\""],
		["\"Povídejte, přehánějte\""],
		["\"Komentář:\""],
		["\"Zadejte si ...\""],
		["\"Máte?\""],
		["\"Oukej\""],
		["\"Čili\""],
		["Vondra kohokoliv osloví zdrobnělinou"],
		["Kdokoliv křičí \"BINGO!\""]
	]
};

const drimalova = {
	size: 4,
	dict: [
		["\"Divný, co?\""],
		["\"A co jako?\""],
		["\"Bolí, co?\""],
		["\"Motivační příklad\""],
		["\"Ono si to sedne\""],
		["\"Vezměte si žeton\""],
		["\"To cítíte\""],
		["\"Tady je kokínko\""],
		["Dřímalová vypráví o dětech","\"Péťo, řekni čau.\"","Dřímalová mluví o svém psovi"],
		["Kdokoliv na člověka před tabulí: Napiš mě tam","Kdokoliv sprintuje k tabuli zapsat si příklad"],
		["Na začátku cvika víme, že některý příklad nestihneme","\"To asi nestihneme\"","Libovolný příklad se nestihne"],
		["\"Zadřel\""],
		["\"Sledujete to?\""],
		["\"Máte to v Teamsech\""],
		["\"Vemte si lodičky\""],
		["\"Zelená dobrý, žlutá si sedne, červená vůbec\""],
		["\"Nechte mi tu váš dojem ze cvičení\""],
		["\"Ono to začne dávat smysl\""],
		["\"Nějak to zařiďte tak, aby...\""],
		["\"Takhle se to dělá\""],
		["\"O tom si popovídáte u zkoušky\"","\"O tom si popovídáte s Janyškou\"","\"Přejedu vám to zvýrazňovačem\""],
		["\"Není, protože například...\""],
		["\"Já si to označím třeba <barvou>\""],
		["\"Dá se to napsat hustě\""],
		["Kdokoliv křičí \"BINGO!\""]
	]
};

const bingotables = [
	{
		name: "Liška",
		config: liska,
		checkname: "liska"
	},
	{
		name: "Vondra",
		config: vondra,
		checkname: "vondra"
	},
	{
		name: "Dřímalová",
		config: drimalova,
		checkname: "drimalova"
	}
];


