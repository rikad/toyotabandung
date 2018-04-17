const vehicle = {
    HATCHBACK : [
        {
            id : 'yaris',
            name : 'New Yaris',
            startPrice : '240.650.000'
        },
        {
            id : 'agya',
            name : 'New Agya',
            startPrice : '143.233.000'
        }
    ],
    SEDAN : [
        {
            id : 'camry',
            name : 'New Camry',
            startPrice : '594.150.000'
        },
        {
            id : 'vios',
            name : 'New Vios',
            startPrice : '292.600.000'
        },
        {
            id : 'altis',
            name : 'New Corolla Altis',
            startPrice : '432.300.000'
        },
    ],
    MPV : [
        {
            id : 'avanza',
            name : 'Avanza',
            startPrice : '198.465.000'
        },
        {
            id : 'veloz',
            name : 'Veloz',
            startPrice : '222.300.000'
        },
        {
            id : 'calya',
            name : 'Calya',
            startPrice : '143.660.500'
        },
        {
            id : 'venturer',
            name : 'New Venturer',
            startPrice : '402.100.000'
        },
        {
            id : 'voxy',
            name : 'All New Voxy',
            startPrice : '457.200.000'
        },
        {
            id : 'innova',
            name : 'Kijang Innova',
            startPrice : '308.600.000'
        },
        {
            id : 'sienta',
            name : 'New Sienta',
            startPrice : '236.000.000'
        },
        {
            id : 'alphard',
            name : 'New Alphard',
            startPrice : '928.900.000'
        },
        {
            id : 'vellfire',
            name : 'New Vellfire',
            startPrice : '1.077.550.000'
        }
    ],
    SUV : [
        {
            id : 'rush',
            name : 'All New C-HR',
            startPrice : '488.500.000'
        },
        {
            id : 'rush',
            name : 'All New Rush',
            startPrice : '248.065.000'
        },
        {
            id : 'fortuner',
            name : 'Fortuner TRD',
            startPrice : '475.100.000'
        },
        {
            id : 'cruiser',
            name : 'Land Cruiser',
            startPrice : '1.970.300.000'
        }
    ],
    COMMERCIAL : [
        {
            id : 'hilux',
            name : 'New Hilux',
            startPrice : '205.300.000'
        },
        {
            id : 'dyna',
            name : 'Dyna',
            startPrice : 'Contact Us'
        },
        {
            id : 'hiace',
            name : 'HiAce',
            startPrice : '430.300.000'
        }
    ],
    SPORT : [
        {
            id : 'toyota86',
            name : 'Toyota 86',
            startPrice : 'Contact Us'
        }
    ],
    HYBRID : [
        {
            id : 'camryHy',
            name : 'Camry Hybrid',
            startPrice : '783.200.000'
        },
        {
            id : 'alphardHy',
            name : 'Alphard Hybrid',
            startPrice : '1.419.800.000'
        }
    ]
}

const productDetail = {
    chr : {
        vehicleName : 'All NEW C-HR',
        vehicleColor : ['FFFFFF','C4C2BF','000000','337FB4','F3F3F3'],
        vehiclePrice : [
            {   type : 'SINGLE TONE',
                price : 488500000,
                priceString : 'Rp 488.500.000'
            },
            {   type : 'DUAL TONE',
                price : 490000000,
                priceString : 'Rp 490.000.000'
            }
        ],
        specification : {
            displacement : 1798,
            torque : 17.4 + ' / ' + 4000,

            width : 1795,
            length : 4360,
            height : 1565
        }
    },
    yaris : {
        vehicleName : 'NEW YARIS',
        vehicleColor : ['EFE327','6C6F70','CCD0DA','E15D3F','E3565F','000000','FFFFFF'],
        vehiclePrice : [
            {   type : 'E Grade M/T',
                price : 240650000,
                priceString : 'Rp 240.650.000'
            },
            {   type : 'G Grade M/T',
                price : 248750000,
                priceString : 'Rp 248.750.000'
            },
            {   type : 'E Grade CVT',
                price : 251550000,
                priceString : 'Rp 251.550.000'
            },
            {   type : 'G Grade CVT',
                price : 259650000,
                priceString : 'Rp 259.650.000'
            },
            {   type : 'TRD SPORTIVO M/T',
                price : 269050000,
                priceString : 'Rp 269.050.000'
            },
            {   type : 'TRD SPORTIVO CVT',
                price : 280750000,
                priceString : 'Rp 280.750.000'
            }
        ],
        specification : {
            displacement : 1496,
            torque : 14.3 + ' / ' + 4200,
            width : 1730,
            length : 4145,
            height : 1500
        }
    },
    agya : {
        vehicleName : 'NEW AGYA',
        vehicleColor : ['F6D935','000000','595B5D','D5D7D8','C2282E','FFFFFF'],
        vehiclePrice : [
            {   type : '1.0 G M/T',
                price : 143233000,
                priceString : 'Rp 143.233.000'
            },
            {   type : '1.2 G M/T',
                price : 147333000,
                priceString : 'Rp 147.333.000'
            },
            {   type : '1.2 G A/T',
                price : 161333000,
                priceString : 'Rp 161.333.000'
            },
            {   type : '1.2 M/T TRD',
                price : 150533000,
                priceString : 'Rp 150.533.000'
            },
            {   type : '1.2 A/T TRD',
                price : 163633000,
                priceString : 'Rp 163.633.000'
            }
        ],
        specification : {
            displacement : 998,
            torque : 9.1 + ' / ' + 4400,
            width : 1600,
            length : 3660,
            height : 1520
        }
    },
    camry : {
        vehicleName : 'NEW CAMRY 2.5',
        vehicleColor : ['FFFFFF','EBEFFB','3D3D3E','341A06','050505','A8B6CA'],
        vehiclePrice : [
            {   type : 'G A/T',
                price : 594150000,
                priceString : 'Rp 594.150.000'
            },
            {   type : 'V A/T',
                price : 621150000,
                priceString : 'Rp 621.150.000'
            }
        ],
        specification : {
            displacement : 998,
            torque : 9.1 + ' / ' + 4400,
            width : 1600,
            length : 3660,
            height : 1520
        }
    },
    vios : {
        vehicleName : 'NEW VIOS',
        vehicleColor : ['275BB9','B5B5B5','000000','9E8273','C82941','5D5D5D'],
        vehiclePrice : [
            {   type : 'E CVT',
                price : 292600000,
                priceString : 'Rp 292.600.000'
            },
            {   type : 'E M/T',
                price : 279700000,
                priceString : 'Rp 279.700.000'
            },
            {   type : 'G CVT',
                price : 314200000,
                priceString : 'Rp 314.200.000'
            },
            {   type : 'G M/T',
                price : 298000000,
                priceString : 'Rp 298.000.000'
            },
            {   type : 'G M/T TRD',
                price : 314500000,
                priceString : 'Rp 314.500.000'
            },
            {   type : 'G CVT TRD',
                price : 330400000,
                priceString : 'Rp 330.400.000'
            }
        ],
        specification : {
            displacement : 1496,
            torque : 14.3 + ' / ' + 4200,
            width : 1730,
            length : 4425,
            height : 1500
        }
    },
    altis : {
        vehicleName : 'NEW COROLLA ALTIS',
        vehicleColor : ['ECEDED','FFFFFF','CDD1D3','68717F','453832','000000','521010'],
        vehiclePrice : [
            {   type : '1.8 V A/T',
                price : 467100000,
                priceString : 'Rp 467.100.000'
            },
            {   type : '1.8 G M/T',
                price : 432300000,
                priceString : 'Rp 432.300.000'
            }
        ],
        specification : {
            displacement : 1798,
            torque : 19.4 + ' / ' + 4000,
            width : 1776,
            length : 4620,
            height : 1460
        }
    },
    avanza : {
        vehicleName : 'GRAND NEW AVANZA',
        vehicleColor : ['6B6B6B','4A4C51','473835','000000','FFFFFF','877D5C','881C1E','303F88'],
        vehiclePrice : [
            {   type : '1.3 E M/T',
                price : 198465000,
                priceString : 'Rp 198.465.000'
            },
            {   type : '1.3 E A/T',
                price : 209665000,
                priceString : 'Rp 209.665.000'
            },
            {   type : '1.3 E M/T STD',
                price : 195965000,
                priceString : 'Rp 195.965.000'
            },
            {   type : '1.3 E A/T STD',
                price : 207165000,
                priceString : 'Rp 207.165.000'
            },
            {   type : '1.3 G M/T',
                price : 216315000,
                priceString : 'Rp 216.315.000'
            },
            {   type : '1.3 G M/T BASIC',
                price : 211265000,
                priceString : 'Rp 211.265.000'
            },
            {   type : '1.3 G A/T',
                price : 227015000,
                priceString : 'Rp 227.015.000'
            },
            {   type : '1.5 G M/T',
                price : 228615000,
                priceString : 'Rp 228.615.000'
            },
            {   type : '1.5 G M/T LTD',
                price : 239815000,
                priceString : 'Rp 239.815.000'
            }
        ],
        specification : {
            displacement : 1496,
            torque : 9.1 + ' / ' + 4400,
            width : 1660,
            length : 4190,
            height : 1695
        }
    },
    veloz : {
        vehicleName : 'VELOZ',
        vehicleColor : ['960C0F','1B1B1B','CFCFCF','FFFFFF'],
        vehiclePrice : [
            {   type : '1.3 VELOZ M/T',
                price : 222300000,
                priceString : 'Rp 222.300.000'
            },
            {   type : '1.3 VELOZ A/T',
                price : 234100000,
                priceString : 'Rp 234.100.000'
            },
            {   type : '1.5 VELOZ M/T',
                price : 234300000,
                priceString : 'Rp 234.300.000'
            },
            {   type : '1.5 VELOZ A/T',
                price : 246100000,
                priceString : 'Rp 246.100.000'
            }
        ],
        specification : {
            displacement : 1496,
            torque : 9.1 + ' / ' + 4400,
            width : 1660,
            length : 4200,
            height : 1695
        }
    },
    calya : {
        vehicleName : 'CALYA',
        vehicleColor : ['000000','3F3F3E','C6C5C2','F2F2F2','E58E3D','FF0000'],
        vehiclePrice : [
            {   type : '1.2 E M/T',
                price : 146460500,
                priceString : 'Rp 146.460.500'
            },
            {   type : '1.2 E M/T STD',
                price : 143660500,
                priceString : 'Rp 143.660.500'
            },
            {   type : '1.2 G M/T',
                price : 152060500,
                priceString : 'Rp 152.060.500'
            },
            {   type : '1.2 G A/T',
                price : 164060500,
                priceString : 'Rp 164.060.500'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    venturer : {
        vehicleName : 'NEW VENTURER',
        vehicleColor : ['425152','141618','7C776A','363A3E','80212B','92969E','FFFFFF'],
        vehiclePrice : [
            {   type : '2.0 Q A/T',
                price :  428400000,
                priceString : 'Rp 428.400.000'
            },
            {   type : '2.0 Q M/T',
                price :  402100000,
                priceString : 'Rp 402.100.000'
            },
            {   type : '2.0 Q A/T DIESEL',
                price : 461400000,
                priceString : 'Rp 461.400.000'
            },
            {   type : '2.0 Q M/T DIESEL',
                price : 447800000,
                priceString : 'Rp 447.800.000'
            }
        ],
        specification : {
            displacement : 2393,
            torque : 34.9 + ' / ' + '1200-2800',
            width : 1830,
            length : 4735,
            height : 1795
        }
    },
    voxy : {
        vehicleName : 'ALL NEW VOXY',
        vehicleColor : ['262B05','000000','FFFFFF'],
        vehiclePrice : [
            {   type : '2.0 A/T',
                price :  457200000,
                priceString : 'Rp 457.200.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1735,
            length : 4710,
            height : 1835
        }
    },
    innova : {
        vehicleName : 'KIJANG INNOVA',
        vehicleColor : ['053B14','171414','826060','4D4B4B','FFFFFF'],
        vehiclePrice : [
            {   type : 'G M/T DIESEL',
                price : 338500000,
                priceString : 'Rp 338.500.000'
            },
            {   type : 'G A/T DIESEL',
                price : 360000000,
                priceString : 'Rp 360.000.000'
            },
            {   type : 'G M/T DIESEL LUX',
                price : 342900000,
                priceString : 'Rp 342.900.000'
            },
            {   type : 'G A/T DIESEL LUX',
                price : 364400000,
                priceString : 'Rp 364.400.000'
            },
            {   type : 'V M/T DIESEL',
                price : 388300000,
                priceString : 'Rp 388.300.000'
            },
            {   type : 'V A/T DIESEL',
                price : 408300000,
                priceString : 'Rp 408.300.000'
            },
            {   type : 'V M/T DIESEL LUX',
                price : 394000000,
                priceString : 'Rp 394.000.000'
            },
            {   type : 'V A/T DIESEL LUX',
                price :  414000000,
                priceString : 'Rp 414.000.000'
            },
            {   type : 'G M/T',
                price : 308600000,
                priceString : 'Rp 308.600.000'
            },            
            {   type : 'G A/T',
                price :  328800000,
                priceString : 'Rp 328.800.000'
            },
            {   type : 'G M/T LUX',
                price : 313000000,
                priceString : 'Rp 313.000.000'
            },            
            {   type : 'G A/T LUX',
                price :  333200000,
                priceString : 'Rp 333.200.000'
            },
            {   type : 'V M/T',
                price : 354600000,
                priceString : 'Rp 354.600.000'
            },
            {   type : 'V A/T',
                price : 374400000,
                priceString : 'Rp 374.400.000'
            },
            {   type : 'V M/T LUX',
                price : 360300000,
                priceString : 'Rp 360.300.000'
            },
            {   type : 'V A/T LUX',
                price : 380100000,
                priceString : 'Rp 380.100.000'
            },
            {   type : 'Q M/T',
                price : 393800000,
                priceString : 'Rp 393.800.000'
            },
            {   type : 'Q A/T',
                price : 414100000,
                priceString : 'Rp 414.100.000'
            }
        ],
        specification : {
            displacement : 1998,
            torque : 18.7 + ' / ' + 4000,
            width : 1830,
            length : 4735,
            height : 1795
        }
    },
    sienta : {
        vehicleName : 'NEW SIENTA',
        vehicleColor : ['D3002C','6D581F','FF3200','F4F4F4','939393','BABABA','000000'],
        vehiclePrice : [
            {   type : '1.5 E M/T',
                price : 236000000,
                priceString : 'Rp 236.000.000'
            },
            {   type : '1.5 G M/T',
                price : 248000000,
                priceString : 'Rp 248.000.000'
            },
            {   type : '1.5 G CVT',
                price : 266000000,
                priceString : 'Rp 266.000.000'
            },
            {   type : '1.5 V M/T',
                price : 263000000,
                priceString : 'Rp 263.000.000'
            },
            {   type : '1.5 V CVT',
                price : 281000000,
                priceString : 'Rp 281.000.000'
            },
            {   type : '1.5 Q CVT',
                price : 301000000,
                priceString : 'Rp 301.000.000'
            },
            {   type : 'New 1.5 Q CVT',
                price : 302600000,
                priceString : 'Rp 302.600.000'
            },
            {   type : '1.5 Q CVT LIMITED',
                price : 326600000,
                priceString : 'Rp 326.600.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4232,
            height : 1600
        }
    },
    alphard : {
        vehicleName : 'NEW ALPHARD',
        vehicleColor : ['000000','3B352F','9AAAAA','FFFFFF'],
        vehiclePrice : [
            {   type : '1.2 X A/T',
                price : 928900000,
                priceString : 'Rp 928.900.000'
            },
            {   type : '1.2 G A/T',
                price : 1080450000,
                priceString : 'Rp 1.080.450.000'
            },
            {   type : '1.2 Q A/T',
                price : 1774250000,
                priceString : 'Rp 1.774.250.000'
            },
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    vellfire : {
        vehicleName : 'NEW VELLFIRE',
        vehicleColor : ['000000','28211B','7A7A7A','FFFFFF'],
        vehiclePrice : [
            {   type : '1.2 E M/T',
                price : 1077550000,
                priceString : 'Rp 1.077.550.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    rush : {
        vehicleName : 'ALL NEW RUSH',
        vehicleColor : ['FFFFFF','C2C5C8','A22628','AE9E80','7A1328','000000'],
        vehiclePrice : [
            {   type : '1.2 G M/T',
                price : 248065000,
                priceString : 'Rp 248.065.000'
            },
            {   type : '1.2 G A/T',
                price : 258065000,
                priceString : 'Rp 258.065.000'
            },
            {   type : 'S M/T SPORTIVO',
                price : 259265000,
                priceString : 'Rp 259.265.000'
            },
            {   type : 'S A/T SPORTIVO',
                price : 269265000,
                priceString : 'Rp 269.265.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    fortuner : {
        vehicleName : 'FORTUNER TRD',
        vehicleColor : ['FFFFFF','000000','73665F','2F1B0F','BFBEBA','E2E2E0'],
        vehiclePrice : [
            {   type : 'G M/T DIESEL 4x2',
                price : 475100000,
                priceString : 'Rp 475.100.000'
            },
            {   type : 'G A/T DIESEL 4x2',
                price : 493100000,
                priceString : 'Rp 493.100.000'
            },
            {   type : 'VRZ M/T DIESEL 4x2',
                price : 523700000,
                priceString : 'Rp 523.700.000'
            },
            {   type : 'VRZ A/T DIESEL 4x2',
                price : 535700000,
                priceString : 'Rp 535.700.000'
            },
            {   type : 'G A/T DIESEL 4x4',
                price : 595600000,
                priceString : 'Rp 595.600.000'
            },
            {   type : 'VRZ A/T DIESEL 4x4',
                price : 667200000,
                priceString : 'Rp 667.200.000'
            },
            {   type : 'SRZ A/T 4x2',
                price : 549300000,
                priceString : 'Rp 549.300.000'
            },
            {   type : 'SRZ A/T TRD 4x2',
                price : 561300000,
                priceString : 'Rp 561.300.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    cruiser : {
        vehicleName : 'LAND CRUISER',
        vehicleColor : ['000000','6A5D5A','ACA6A5','EBECED','F4F4F4'],
        vehiclePrice : [
            {   type : 'STD A/T',
                price : 1970300000,
                priceString : 'Rp 1.970.300.000'
            },
            {   type : 'FULLSPEC A/T',
                price : 2303500000,
                priceString : 'Rp 2.303.500.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    hilux : {
        vehicleName : 'NEW HILUX',
        vehicleColor : ['000000','999999','F2F2F2','F3F3F3'],
        vehiclePrice : [
            {   type : 'SC M/T',
                price : 205300000,
                priceString : 'Rp 205.300.000'
            },
            {   type : 'SC M/T DIESEL',
                price : 222600000,
                priceString : 'Rp 222.600.000'
            },
            {   type : 'EC E M/T 4x4',
                price : 337600000,
                priceString : 'Rp 337.600.000'
            },
            {   type : 'DC E M/T 4x4',
                price : 399800000,
                priceString : 'Rp 399.800.000'
            },
            {   type : 'DC G M/T 4x4',
                price : 420400000,
                priceString : 'Rp 420.400.000'
            },
            {   type : 'DC V A/T 4x4',
                price : 458000000,
                priceString : 'Rp 458.000.000'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    dyna : {
        vehicleName : 'DYNA',
        vehicleColor : ['1129DD','EA0032','FFFFFF'],
        vehiclePrice : [
            {   type : '1.2 E M/T',
                price : null,
                priceString : 'Please Contact Us'
            }
        ],
        specification : {
            displacement : 1197,
            torque : 11 + ' / ' + 4200,
            width : 1655,
            length : 4070,
            height : 1600
        }
    },
    hiace : {
        vehicleName : 'HiACE',
        vehicleColor : ['C7BFBF','FFFFFF','06086B'],
        vehiclePrice : [
            {   type : 'STD Manual',
                price : 430300000,
                priceString : 'Rp 430.300.000'
            },
            {   type : 'Commuter Manual',
                price : 430300000,
                priceString : 'Rp 465.300.000'
            },
            {   type : 'Commuter Manual Luxury',
                price :  649700000,
                priceString : 'Rp 649.700.000'
            }
        ],
        specification : {
            displacement : 2494,
            torque : '26.5/1,600-2,400',
            width : 1880,
            length : 5380,
            height : 2285
        }
    },
    toyota86 : {
        vehicleName : 'TOYOTA 86',
        vehicleColor : ['000000','BD0814','423B31','F4F4F4','6D6D6D','003FA5'],
        vehiclePrice : [
            {   type : 'MANUAL',
                price : null,
                priceString : 'Please Contact Us'
            },
            {   type : 'AUTOMATIC',
                price : null,
                priceString : 'Please Contact Us'
            },
            {   type : 'TRD',
                price : null,
                priceString : 'Please Contact Us'
            }
        ],
        specification : {
            displacement : 1998,
            torque : 20.9 + ' / ' + 6600,
            width : 1775,
            length : 4240,
            height : 1320
        }
    },
    camryHy : {
        vehicleName : 'CAMRY HYBRID',
        vehicleColor: ['000000','46342E','4B4C51','737476','FFFFFF'],
        vehiclePrice : [
            {   type : '2.5 L A/T Hybrid',
                price : 783200000,
                priceString : 'Rp 783.200.000'
            }
        ],
        specification : {
            displacement : 2494,
            torque : 4800,
            width : 1825,
            length : 4850,
            height : 1470
        }
    },
    alphardHy : {
        vehicleName : 'ALPHARD HYBRID',
        vehicleColor: ['FFFFFF','A6ACA8','F4F4F4'],
        vehiclePrice : [
            {   type : '2.5 G A/T Hybrid',
                price : 1419800000,
                priceString : 'Rp 1.419.800.000'
            }
        ],
        specification : {
            displacement : 2494,
            torque : 21 + ' / ' + 4400,
            width : 1850,
            length : 4915,
            height : 1895
        }
    }
}
    
