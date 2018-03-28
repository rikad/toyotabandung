const _ = x => document.querySelector(x)

function imageCarousel(next) {
    _('.current-slide').classList.remove(_('.current-slide').classList[1])
    _('.current-slide').classList.add(next)
}

function spesifications(e) {

	//border bottom
    _('.spesifications span.active').classList.remove('active');
    e.target.classList.add('active');

    priceDetail(e.target.car,e.target.id);
    spesificationsTable(e.target.car,e.target.id);
}

function priceDetail(car,id) {
    _('.product-popup .price-detail').innerHTML = data[car].spesifications[id][1]; //harga
}

function spesificationsTable(car,id) {
    //data
    let tmp = data[car].spesifications[id];
    let tmp2 = data[car].spesificationsAllGrade;
    let table = '<tr>';
    tmp.forEach(function(item,index){
    	if (index > 1) {
    		table += '<td>'+item+'</td>';
    	}
    })
    table += '</tr>';
    tmp2.forEach(function(item,index){
		table += '<tr><td>'+item[0]+'</td><td>'+item[1]+'</td><td>'+item[2]+'</td></tr>';
    })

	_('.spesifications-table').innerHTML = table;
}

( function() {
	let product = [...document.querySelectorAll('.product')]
	product.map( x => _(`#${x.id}`).addEventListener('click', productDetail ,false))

})();


var data = {
	yaris : {
		title : 'NEW YARIS 2018',
		desc : 'Menggunaan mesin anyar dengan tipe 2NR-FE Dual VVT-i berkapasitas 1496 cc yang dapat menghasilkan tenaga sebesar 107 ps/6,000 rpm dan torsi 14.3 Kgm / 4,200 rpm. Terdapat juga overfender, roof rail, side protection moulting, sticker heyker, side skirt, rear spoiler dan rear bumper.',
		dimension : '4.1 m x 1.7 m x 1.5 m',
		engine : '1496 cc | 4 Cy | 16 Valve | DOHC | Dual VVT-i',
		price : 'Rp 350.000.000',
		angsuran : [
			['Rp. 15.141.000,00','Rp. 103.266.200,00'],
			['Rp. 7.931.000,00','Rp. 96.056.200,00'],
			['Rp. 5.527.666,67','Rp. 93.652.866,00'],
			['Rp. 4.326.000,00','Rp. 92.451.200,00']
		],
		spesifications : [
				['E GRADE M/T','Rp. 235.400.000','Overall Length 4,145','5-Speed Manual','In-line 4 Cyl, 16 Valve, DOHC, Dual VVT-i'],
				['E GRADE CVT','Rp. 247.200.000','Overall Length 4,145','7-Speed CVT','In-line 4 Cyl, 16 Valve, DOHC, Dual VVT-i'],
				['G GRADE M/T','Rp. 243.700.000','Overall Length 4,145','5-Speed Manual','In-line 4 Cyl, 16 Valve, DOHC, Dual VVT-i'],
				['G GRADE CVT','Rp. 254.700.000','Overall Length 4,145','7-Speed CVT','In-line 4 Cyl, 16 Valve, DOHC, Dual VVT-i'],
				['TRD SPORTIVO M/T','Rp. 264.100.000','Overall Length 4,145','5-Speed Manual','In-line 4 Cyl, 16 Valve, DOHC, Dual VVT-i'],
				['TRD SPORTIVO CVT','Rp. 275.900.000','Overall Length 4,145','7-Speed CVT','In-line 4 Cyl, 16 Valve, DOHC, Dual VVT-i']
			],
		spesificationsAllGrade : [
			['Width 1,730','Front Suspension Macpherson Strut','1,496 cc'],
			['Height 1,500','Rear Suspension Torsion Beam','Bore X Stroke 72.5 x 90.6 Mm'],
			['Wheelbase 2,550','Front Brake 15" Ventilated - TRD','Max Output 107 / 6,000 Ps/RPM'],
			['','Rear Brake 15" Solid Disc - TRD','Torsi Max 14.3 / 4,200 Kgm/RPM'],
			['','Additional Brake System ABS + EBD + BA','Fuel Injection'],
			['','Tires Size 195/50R16',''],
			['','Rack and Pinion, Electric Power Steering With Tilt','']
		]
	},
	rush : {
		title : 'ALL NEW RUSH',
		desc : 'Design Trendy dan terbaik di kelasnya, dengan mesin 2NR-VE Dual VVT-i yang irit bahan bakar',
		dimension : '4.1 m x 1.7 m x 1.5 m',
		engine : '2NR-VE | 4 Cylinder In Line | 16 Valves | DOHC | Dual VVT-i',
		price : 'Rp 240.000.000',
		angsuran : [
			['Rp. 15.306.375,00','Rp. 104.386.025,00'],
			['Rp. 8.017.625,00','Rp. 97.097.275,00'],
			['Rp. 5.588.041,67','Rp. 94.667.691,00'],
			['Rp. 4.373.250,00','Rp. 93.452.900,00']
		],
		spesifications : [
				['1.3 E M/T','Rp. 190.950.000','Overall Length 4,190','5-Speed Manual','IL, 4 Cylinder, 16 V, DOHC, Dual VVT-i'],
				['1.3 E A/T','Rp. 202.150.000','Overall Length 4,190','4-Speed Automatic','IL, 4 Cylinder, 16 V, DOHC, Dual VVT-i'],
				['1.3 G M/T','Rp. 221.100.000','Overall Length 4,190','5-Speed Manual','IL, 4 Cylinder, 16 V, DOHC, Dual VVT-i'],
				['1.3 G A/T','Rp. 219.500.000','Overall Length 4,190','4-Speed Automatic','IL, 4 Cylinder, 16 V, DOHC, Dual VVT-i'],
				['1.3 G A/T','Rp. 220.600.000','Overall Length 4,190','5-Speed Manual','IL, 4 Cylinder, 16 V, DOHC, Dual VVT-i']
			],
		spesificationsAllGrade : [
			    ['Length 4.435','Front Suspension MacPherson Strut with Coil Spring and Stabilizer','1.496 CC'],
			    ['Width 1.695','Rear Suspension 5 Link Lateral Rod with Coil Spring and Stabilizer','Bore X Stroke (Mm) 72.5 x 90.6'],
			    ['Height 1.705','Front Brake 16" Disc','Bore X Stroke (Mm) 72.5 x 90.6','Max Output (Ps/Rpm) 104 / 6.000'],
			    ['Wheelbase 2.685','Rear Brake Drum','Max Torque (Kgm/Rpm) 13.9 / 4.200','Fuel System Electronic Fuel Injection'],
			    ['Tread Front 1.450','Tires Size 215 / 65 R16 Alloy with Machining','Electronic Power Steering'],
			    ['Tread Rear 1.450','','']
			]

	},

	avanza : {
		title : 'GRAND NEW AVANZA',
		desc : 'Mobil MVP terbaik untuk anda, Mesin Dual VVT-i dengan efisiensi tinggi dan irit dan interior baru yang cocok untuk mobil keluarga anda',
		dimension : '4.1 m x 1.7 m x 1.5 m',
		engine : 'IL | 4 Cylinder | 16 V | DOHC | Dual VVT-i',
		price : 'Rp 190.000.000',
		angsuran : [
			['Rp. 12.381.687,50','Rp. 84.581.712,00'],
			['Rp. 6.485.645,83','Rp. 78.685.670,00'],
			['Rp. 4.520.298,61','Rp. 76.720.323,00'],
			['Rp. 3.537.625,00','Rp. 75.737.650,00']
		],
		spesifications : [
				['G M/T','Rp. 239.900.000','Overall Length 4,435','5-Speed Manual','2NR-VE, 4 Cylinder In Line, 16 Valves, DOHC, Dual VVT-i'],
				['G A/T','Rp. 249.900.000','Overall Length 4,435','4-Speed Automatic','2NR-VE, 4 Cylinder In Line, 16 Valves, DOHC, Dual VVT-i'],
				['TRD SPORTIVO M/T','Rp. 251.300.000','Overall Length 4,435','5-Speed Manual','2NR-VE, 4 Cylinder In Line, 16 Valves, DOHC, Dual VVT-i'],
				['TRD SPORTIVO A/T','Rp. 261.300.000','Overall Length 4,435','4-Speed Automatic','2NR-VE, 4 Cylinder In Line, 16 Valves, DOHC, Dual VVT-i']
			],
		spesificationsAllGrade: [
			    ['Length 4.190','Gear Ratio 1st 3.769','1.329 CC'],
			    ['Width 1.660','Gear Ratio 2nd 2.045','Max Output (Ps/Rpm) 96.5/6,000'],
			    ['Height 1.695','Gear Ratio 3rd 1.376','Max Torque (Kgm/Rpm) 12.3/4,200'],
			    ['Wheelbase 2.655','Gear Ratio 4th 1.000','Electronic Fuel Injection'],
			    ['Tread Front 1.425','Gear Ratio 5th 0.838','Fuel Bensin'],
			    ['Tread Rear 1.435','Gear Ratio Reverse 4.128','Fuel Capacity (Liter) 45'],
			    ['Ground Clearance 200','Gear Ratio Final 5.125',''],
			    ['','Front Suspension MacPherson Strut dengan Pegas Koil / MacPherson Strut with Coil Spring',''],
			    ['','Rear Suspension 4 Link dengan Pegas Koil dan Lateral Rod / 4 Link Lateral Rod with Coil Spring',''],
			    ['','Front Brake Cakram / Disc',''],
			    ['','Rear Brake Tromol / Drum',''],
			    ['','Steering Gear Rack & Pinion, Electric Power Steering & Tilt Steering',''],
			    ['','Tires Size 185/70 R14','']
			]

	}
}

function productDetail(e) {
    let tableAngsuran = '';

    data[e.target.id].angsuran.forEach(function (item,index) {
    	tableAngsuran += '<tr><td>'+ (index+1) +' Tahun</td><td>'+item[0]+'</td><td>'+item[1]+'</td></tr>';
    });

    let div = document.createElement('DIV');
    data[e.target.id].spesifications.forEach(function (item,index) {
    	let x = document.createElement('SPAN');
    	let t = document.createTextNode(item[0]);
    	x.onclick = spesifications;
    	x.id = index;
    	x.car = e.target.id;
    	x.appendChild(t);
    	if (index == 0) {
    		x.classList.add('active')
    	}

    	div.appendChild(x);
    });

    _('.product-popup .spesifications .menu').innerHTML = ''; //clear
    _('.product-popup .spesifications .menu').appendChild(div);
    spesificationsTable(e.target.id,0); //show default table of spesifications
    priceDetail(e.target.id,0); //show default price of spesifications

    _('.product-popup').style.display = "flex"
    _('body').style.overflow = "hidden"
    _('.product-popup').scrollIntoView()
    _('.product-popup .car-name').innerHTML = data[e.target.id].title;
    _('.product-popup .car-article').innerHTML = data[e.target.id].desc;
    _('.product-popup .car-article').innerHTML = data[e.target.id].desc;
    _('.product-popup .engine').innerHTML = data[e.target.id].engine;
    _('.product-popup .dimension').innerHTML = data[e.target.id].dimension;
    _('.product-popup .angsuran-table').innerHTML = tableAngsuran;
    _('.product-popup .popup-image').classList.remove(_('.product-popup .popup-image').classList[1])
    _('.product-popup .popup-image').classList.add(e.target.id+'-frame')

}

function closePopup() {
    _('.product-popup').style.display = "none"
    _('body').style.overflow = "auto"
}

function jumpTo(x) {
	scroll(0, _(x).offsetTop);

	_(x).style.animationName = 'simple';	
	_(x).style.animationDuration = '1s';

	setTimeout(function() {
		_(x).style.animationName = '';	
		_(x).style.animationDuration = '';		
	}, 1000);
}




