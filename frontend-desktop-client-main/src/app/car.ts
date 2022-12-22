export interface Car {
  id: string;
  filter: { [key: string]: any };
  clientID: string;
  images: any[];
  make: string;
  model: string;
  mileage: number;
  colour: string;
  price: number;
  description: string;
  link: string;
  platform: string;
  create_epoch: any;
  valuation: any;
  general: string;
  displayImages: any[];
  isActive: boolean;
  [key: string]: any;
  unread: boolean;
}

const testCar = {
  "_id": "a7d8ef1e-0c0b-423f-8974-aa29c9f322d61",
  "valuation": {
      "vrn": {
          "match": "Perfect",
          "rating": {
              "model": 100,
              "colour": 200,
              "fuel_type": 400,
              "make": 400,
              "mileage": 991.7669755183
          },
          "accuracy": 99.60795121515716,
          "vrn": "mt57gwd"
      },
      "mot": "<H3> MOT History forMT57GWD HONDA CR-V</H3>PASSED - - - 2022.08.18 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - under body surface rust front to rear <br>ADVISORY - - - Front Subframe mounting prescribed area is corroded but not considered excessive (5.3.6 (a) (i)) <br><br>PASSED - - - 2021.11.15 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - Front Tyre worn close to legal limit/worn on edge  both on inner edge (5.2.3 (e)) <br>ADVISORY - - - covers fitted <br>ADVISORY - - - suspension/body/ subframe corrosion <br><br>PASSED - - - 2020.11.12 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - Child Seat fitted not allowing full inspection of adult belt () <br>ADVISORY - - - engine covers and undertrays fitted <br>ADVISORY - - - corrosion <br><br>FAILED - - - 2020.11.12 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - Child Seat fitted not allowing full inspection of adult belt () <br>ADVISORY - - - corrosion <br>PRS - - - Offside Stop lamp(s) not working (4.3.1 (a) (ii)) <br>ADVISORY - - - engine covers and undertrays fitted <br><br>PASSED - - - 2019.11.14 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - Nearside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i)) <br>ADVISORY - - - Front Sub-frame corroded but not seriously weakened (5.3.3 (b) (i)) <br>ADVISORY - - - Offside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i)) <br><br>FAILED - - - 2019.11.13 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - Offside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i)) <br>ADVISORY - - - Nearside Rear Anti-roll bar linkage ball joint has slight play (5.3.4 (a) (i)) <br>ADVISORY - - - exhaust badly corroded <br>ADVISORY - - - Nearside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i)) <br>ADVISORY - - - Front Sub-frame corroded but not seriously weakened (5.3.3 (b) (i)) <br>MAJOR - - - Offside Rear Coil spring fractured or broken (5.3.1 (b) (i)) <br><br>PASSED - - - 2018.11.08 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - exhaust corroded <br>ADVISORY - - - sill covers fitted <br><br>FAILED - - - 2018.11.08 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - exhaust corroded <br>ADVISORY - - - Rear Brake pad(s) wearing thin (1.1.13 (a) (ii)) <br>ADVISORY - - - sill covers fitted <br>MAJOR - - - Offside Rear Anti-roll bar linkage damaged and seriously weakened (5.3.3 (b) (i)) <br>MINOR - - - Offside Registration plate lamp inoperative in the case of multiple lamps or light sources (4.7.1 (b) (i)) <br><br>PASSED - - - 2017.11.07 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - exhausy corroded <br>ADVISORY - - - engine covers and undertrays fitted <br><br>PASSED - - - 2016.11.03 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - engine cover/undertray <br>ADVISORY - - - Child Seat fitted not allowing full inspection of adult belt () <br><br>PASSED - - - 2015.11.09 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - engine covers and undertrays fitted <br>ADVISORY - - - play in steering rack ends <br><br>PASSED - - - 2014.11.12 - - -  - Unknown mileage- Unknown unit<br>USER ENTERED - - - Play in steering rack inner joint(s) <br>ADVISORY - - - Front brake disc worn, pitted or scored, but not seriously weakened (3.5.1i) <br><br>FAILED - - - 2014.11.12 - - -  - Unknown mileage- Unknown unit<br>PRS - - - Offside Headlamp aim too low (1.8) <br>USER ENTERED - - - Play in steering rack inner joint(s) <br>PRS - - - Nearside Headlamp aim too low (1.8) <br>ADVISORY - - - Front brake disc worn, pitted or scored, but not seriously weakened (3.5.1i) <br><br>PASSED - - - 2013.11.05 - - -  - Unknown mileage- Unknown unit<br>ADVISORY - - - Offside Front Ball joint has slight play (2.2.B.1f) <br>ADVISORY - - - Nearside Front Ball joint has slight play (2.2.B.1f) <br><br>PASSED - - - 2012.11.05 - - -  - Unknown mileage- Unknown unit<br>USER ENTERED - - - Play in steering rack inner joint(s) <br><br>PASSED - - - 2011.11.11 - - -  - Unknown mileage- Unknown unit<br>No advisories <br><br>PASSED - - - 2010.11.18 - - -  - Unknown mileage- Unknown unit<br>No advisories <br><br>",
      "valuation": {
          "average": 3325,
          "good": 3775,
          "retail": 5475,
          "poor": 2850,
          "cap_margin": -485
      }
  },
  "id": "1d2ea8ab3b2d483f92434d4acea99e9c",
  "filter": {
      "max_price": "",
      "min_price": "",
      "price": 0.8680555555555556,
      "valuations": {
          "passthrough": "False",
          "margin": ""
      },
      "name": "Global scan",
      "optionals": {},
      "enabled": true,
      "client_id": "23e93a4e",
      "email": "johnappleseed@gmail.com",
      "platforms": [
          "autotrader",
          "ebay",
          "facebook",
          "gumtree"
      ]
  },
  "clientID": "23e93a4e",
  "model": "CR-V ES I-VTEC AUTO",
  "colour": "silver",
  "fuel_type": "petrol",
  "seller_type": "trade",
  "make": "HONDA",
  "create_epoch": null,
  "platform": "gumtree",
  "images": [
      "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/A7cAAOSwVNpjDx~n/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjQ0WDM0NA==/z/J-4AAOSwJ85i86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/dv4AAOSwSs9i86fs/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjM3WDM0NA==/z/ecUAAOSwcapjDx~m/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjYwWDM0NA==/z/BioAAOSwKvRi92Sy/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/eKkAAOSwx8Bi86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/z3MAAOSwCrBi86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjM3WDM0NA==/z/nLsAAOSwNZ1i86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/Z28AAOSw0cpjCeAs/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/bLcAAOSwM5di~fo0/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/kIAAAOSw7LpjDx~n/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/nggAAOSwVjdjDx~m/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/vbIAAOSw4ChjNWSk/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjczWDM0NA==/z/f3AAAOSwJDxi86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/rEgAAOSwcOdi86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/gX4AAOSwNA9jFHUg/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjQyWDM0NA==/z/GPwAAOSwFgJi86fr/$_86.JPG",
      "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/DpUAAOSwE85i86fs/$_86.JPG",
      "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/860AAOSw6P9jDx~m/$_86.JPG"
  ],
  "link": "http://www.gumtree.com/p/honda/2007-honda-cr-v-2.0-i-vtec-es-5d-148-bhp-estate-petrol-automatic/1439312720",
  "description": "\",\"*** CHECK ALL OUR CARS FOR SALE AT [Website URL removed",
  "price": 4990,
  "mileage": 82000,
  "appraisalVehicleDetails": {
      "make": "Honda",  
      "model": "CR-V",
      "registration": "MT57GWD",
      "registrationDate": 1196424000000,
      "mileage": 82000,
      "description": "2.0 i-VTEC ES SUV 5dr Petrol Automatic (195 g/km, 148 bhp)",
      "imageUrl": null,
      "yearOfManufacture": "2007",
      "plate": "57",
      "forecourtValue": 0,
      "trim": "ES",
      "derivativeId": "cfe82c02a6928dbea13a09b7df78b746",
      "fuelType": "Petrol",
      "transmission": "Automatic",
      "stockId": null,
      "stock": false,
      "co2Emissions": 195,
      "bodyType": "SUV",
      "doors": 5,
      "engineCapacity": 1997,
      "taxRate": 330,
      "numberOfOwners": 4,
      "colour": "Silver",
      "derivativeChangedByDealer": false,
      "webAdvertValue": null,
      "adminFee": null,
      "totalPrice": null,
      "useForecourtPrice": false,
      "drivetrain": "Four Wheel Drive",
      "features": [],
      "advertId": null,
      "otherVehicleText": null,
      "keyInformation": null,
      "attentionGrabber": null,
      "freeformIntroduction": null,
      "consumerWebsiteAdvertDescriptionText": null,
      "writeOffCategory": null,
      "numberOfSeats": 5,
      "vehicleType": "Car",
      "daysInStock": null,
      "ownedByCurrentUser": false,
      "stockInValue": 0,
      "vin": "SHSRE58508U003011",
      "vehicleCheckId": null,
      "vehicleCheckStatus": null,
      "enginePowerBhp": 148,
      "generationId": "a8100c67cf0a60ffe1fce20cc297e016",
      "generationName": "SUV (2006 - 2010) MK 3",
      "advertised": false,
      "registrationHash": "d1f7bb0d4fa294e2b709aafcb153100f",
      "_links": {
          "valuation": {
              "href": "https://portal.autotrader.co.uk/api/vehicle-metrics/valuation"
          },
          "optional_features": {    
              "href": "https://portal.autotrader.co.uk/api/appraisal-vehicle/cfe82c02a6928dbea13a09b7df78b746/optional-extras?effectiveFrom=1196424000000"
          }
      }
  },
  "metrics": {
      "marketAverageValuation": {
          "retail": 5654,
          "partExchange": 3390,
          "privateSale": 4500,
          "trade": 3487,
          "priceIndicatorFlag": null,
          "daysToSell": 42.20000076293945,
          "atRetailRating": 74.58999633789062,
          "atRetailRatingType": "local",
          "relativeSupply": null,       
          "relativeDemand": null,
          "relativeDemandPerVehicle": null,
          "_embedded": {
              "estimatedPriceIndicator": "GOOD"
          }
      },
      "adjustedValuation": {
          "retail": 5626,
          "partExchange": 3370,
          "privateSale": 4480,
          "trade": 3470,
          "priceIndicatorFlag": "GOOD",
          "daysToSell": null,
          "atRetailRating": null,
          "atRetailRatingType": null,
          "relativeSupply": null,
          "relativeDemand": null,
          "relativeDemandPerVehicle": null,
          "_embedded": {}
      },
      "marketAverageAtRetailRating": {
          "retail": 5654,
          "partExchange": 3390,
          "privateSale": 4500,
          "trade": 3487,
          "priceIndicatorFlag": null,
          "daysToSell": 42.20000076293945,
          "atRetailRating": 74.58999633789062,
          "atRetailRatingType": "local",
          "relativeSupply": null,
          "relativeDemand": null,
          "relativeDemandPerVehicle": null,
          "_embedded": {}
      },
      "adjustedAtRetailRating": {
          "retail": 5626,
          "partExchange": 3370,
          "privateSale": 4480,
          "trade": 3470,
          "priceIndicatorFlag": null,
          "daysToSell": 42.20000076293945,
          "atRetailRating": 74.58999633789062,
          "atRetailRatingType": "local",
          "relativeSupply": null,
          "relativeDemand": null,
          "relativeDemandPerVehicle": null,
          "_embedded": {}
      },
      "consumerMetrics": null
  },
  "vehicleCalculator": {
      "price": 5654,
      "totalPrice": 5654,
      "adminFee": null,
      "priceIndicator": null,
      "pricePosition": 100,
      "valueForMoney": null,
      "costs": 250,
      "buyPrice": 4654,
      "margin": 750,
      "priceRank": 4,
      "valueRank": 4,
      "retailRating": 74
  },
  "searchFilters": {
      "plateMin": "2007 57",
      "plateMax": "2007 57",
      "co2Emissions": "Any",
      "trim": "ES",
      "taxRate": "TO_500",
      "fuelType": "Petrol",
      "bodyType": "SUV",
      "transmission": "Automatic",
      "engineCapacity": "1997",
      "colour": "Any",
      "drivetrain": "Four Wheel Drive",
      "doors": "5",
      "mileageMin": "Any",
      "mileageMax": "Any",
      "distance": "Distance (National)",
      "generation": "a8100c67cf0a60ffe1fce20cc297e016",
      "includeCatCD": false,
      "franchise": true,
      "independent": true,
      "supermarket": true,
      "privateAdverts": false,
      "autotraderAdverts": true,
      "profileAdverts": true,
      "retailerWebsites": true,
      "showAllStock": false,
      "includedKeywords": [],
      "excludedKeywords": [],
      "excludeGroupStock": false,
      "manufacturerApprovedOnly": false
  },
  "sortOrder": "value-ascending",
  "lastAppraised": 1670756740888,
  "lastAppraisedBy": "John Appleseed",
  "vin": "SHSRE58508U003011",
  "registration": "MT57GWD",
  "performed": "2022-12-11T11:07:34.669Z",
  "engineNumber": "R20A22002675",
  "co2Emissions": 195,
  "stolen": false,
  "scrapped": false,
  "scrappedDate": null,
  "exported": false,
  "registrationDate": "2007-11-30T00:00:00Z",
  "exportedDate": null,
  "imported": false,
  "highRisk": false,
  "personalFinance": false,
  "privateFinance": false,
  "tradeFinance": false,
  "mileageDiscrepancy": false,
  "colourChanged": false,
  "insuranceWriteoffType": null,
  "stolenMarker": null,
  "motTests": [
      {
          "motTestNumber": "898532453298",
          "performed": "2022-08-18T11:41:58+01:00",
          "testResult": "PASSED",
          "expiryDate": "2023-08-17",
          "odometerReading": {
              "unit": "MILE",
              "value": 81804
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "under body surface rust front to rear"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Front Subframe mounting prescribed area is corroded but not considered excessive (5.3.6 (a) (i))"
              }
          ]
      },
      {
          "motTestNumber": "176350422110",
          "performed": "2021-11-15T09:11:59Z",
          "testResult": "PASSED",
          "expiryDate": "2022-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 80101
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "covers fitted"
              },
              {
                  "type": "ADVISORY",
                  "notes": "suspension/body/ subframe corrosion"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Front Tyre worn close to legal limit/worn on edge  both on inner edge (5.2.3 (e))"
              }
          ]
      },
      {
          "motTestNumber": "129308699537",
          "performed": "2020-11-12T08:44:47Z",
          "testResult": "PASSED",
          "expiryDate": "2021-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 76298
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "engine covers and undertrays fitted"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Child Seat fitted not allowing full inspection of adult belt ()"
              },
              {
                  "type": "ADVISORY",
                  "notes": "corrosion"
              }
          ]
      },
      {
          "motTestNumber": "817751006823",
          "performed": "2020-11-12T08:44:46Z",
          "testResult": "FAILED",
          "expiryDate": null,
          "odometerReading": {
              "unit": "MILE",
              "value": 76298
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "engine covers and undertrays fitted"
              },
              {
                  "type": "PRS",
                  "notes": "Offside Stop lamp(s) not working (4.3.1 (a) (ii))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Child Seat fitted not allowing full inspection of adult belt ()"
              },
              {
                  "type": "ADVISORY",
                  "notes": "corrosion"
              }
          ]
      },
      {
          "motTestNumber": "812413304334",
          "performed": "2019-11-14T10:06:06Z",
          "testResult": "PASSED",
          "expiryDate": "2020-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 72087
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "Nearside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Offside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Front Sub-frame corroded but not seriously weakened (5.3.3 (b) (i))"
              }
          ]
      },
      {
          "motTestNumber": "117513874993",
          "performed": "2019-11-13T09:09:18Z",
          "testResult": "FAILED",
          "expiryDate": null,
          "odometerReading": {
              "unit": "MILE",
              "value": 72087
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "exhaust badly corroded"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Nearside Rear Anti-roll bar linkage ball joint has slight play (5.3.4 (a) (i))"
              },
              {
                  "type": "MAJOR",
                  "notes": "Offside Rear Coil spring fractured or broken (5.3.1 (b) (i))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Nearside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Offside Front Lower Suspension arm corroded but not seriously weakened (5.3.3 (b) (i))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Front Sub-frame corroded but not seriously weakened (5.3.3 (b) (i))"
              }
          ]
      },
      {
          "motTestNumber": "776587187033",
          "performed": "2018-11-08T13:11:52Z",
          "testResult": "PASSED",
          "expiryDate": "2019-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 67755
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "exhaust corroded"
              },
              {
                  "type": "ADVISORY",
                  "notes": "sill covers fitted"
              }
          ]
      },
      {
          "motTestNumber": "643916411937",
          "performed": "2018-11-08T09:17:40Z",
          "testResult": "FAILED",
          "expiryDate": null,
          "odometerReading": {
              "unit": "MILE",
              "value": 67753
          },
          "motTestItems": [
              {
                  "type": "MINOR",
                  "notes": "Offside Registration plate lamp inoperative in the case of multiple lamps or light sources (4.7.1 (b) (i))"
              },
              {
                  "type": "MAJOR",
                  "notes": "Offside Rear Anti-roll bar linkage damaged and seriously weakened (5.3.3 (b) (i))"
              },
              {
                  "type": "ADVISORY",
                  "notes": "exhaust corroded"
              },
              {
                  "type": "ADVISORY",
                  "notes": "sill covers fitted"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Rear Brake pad(s) wearing thin (1.1.13 (a) (ii))"
              }
          ]
      },
      {
          "motTestNumber": "381723170475",
          "performed": "2017-11-07T09:12:15Z",
          "testResult": "PASSED",
          "expiryDate": "2018-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 63325
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "exhausy corroded"
              },
              {
                  "type": "ADVISORY",
                  "notes": "engine covers and undertrays fitted"
              }
          ]
      },
      {
          "motTestNumber": "210307722996",
          "performed": "2016-11-03T15:34:06Z",
          "testResult": "PASSED",
          "expiryDate": "2017-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 57405
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "Child Seat fitted not allowing full inspection of adult belt ()"
              },
              {
                  "type": "ADVISORY",
                  "notes": "engine cover/undertray"
              }
          ]
      },
      {
          "motTestNumber": "721599933352",
          "performed": "2015-11-09T08:55:09Z",
          "testResult": "PASSED",
          "expiryDate": "2016-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 52993
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "engine covers and undertrays fitted"
              },
              {
                  "type": "ADVISORY",
                  "notes": "play in steering rack ends"
              }
          ]
      },
      {
          "motTestNumber": "709646114303",
          "performed": "2014-11-12T11:52:26Z",
          "testResult": "PASSED",
          "expiryDate": "2015-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 47541
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "Front brake disc worn, pitted or scored, but not seriously weakened (3.5.1i)"
              },
              {
                  "type": "USER ENTERED",
                  "notes": "Play in steering rack inner joint(s)"
              }
          ]
      },
      {
          "motTestNumber": "448516214359",
          "performed": "2014-11-12T11:52:26Z",
          "testResult": "FAILED",
          "expiryDate": null,
          "odometerReading": {
              "unit": "MILE",
              "value": 47541
          },
          "motTestItems": [
              {
                  "type": "PRS",
                  "notes": "Nearside Headlamp aim too low (1.8)"
              },
              {
                  "type": "PRS",
                  "notes": "Offside Headlamp aim too low (1.8)"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Front brake disc worn, pitted or scored, but not seriously weakened (3.5.1i)"
              },
              {
                  "type": "USER ENTERED",
                  "notes": "Play in steering rack inner joint(s)"
              }
          ]
      },
      {
          "motTestNumber": "467009403391",
          "performed": "2013-11-05T13:35:26Z",
          "testResult": "PASSED",
          "expiryDate": "2014-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 41631
          },
          "motTestItems": [
              {
                  "type": "ADVISORY",
                  "notes": "Nearside Front Ball joint has slight play (2.2.B.1f)"
              },
              {
                  "type": "ADVISORY",
                  "notes": "Offside Front Ball joint has slight play (2.2.B.1f)"
              }
          ]
      },
      {
          "motTestNumber": "428500212307",
          "performed": "2012-11-05T12:00:30Z",
          "testResult": "PASSED",
          "expiryDate": "2013-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 35539
          },
          "motTestItems": [
              {
                  "type": "USER ENTERED",
                  "notes": "Play in steering rack inner joint(s)"
              }
          ]
      },
      {
          "motTestNumber": "995505911332",
          "performed": "2011-11-11T14:36:08Z",
          "testResult": "PASSED",
          "expiryDate": "2012-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 30158
          },
          "motTestItems": []
      },
      {
          "motTestNumber": "350132820307",
          "performed": "2010-11-18T15:24:44Z",
          "testResult": "PASSED",
          "expiryDate": "2011-11-30",
          "odometerReading": {
              "unit": "MILE",
              "value": 22399
          },
          "motTestItems": []
      }
  ],
  "financeAgreements": [],
  "v5cs": [
      {
          "issuedDate": "2022-08-31"
      },
      {
          "issuedDate": "2012-06-19"
      },
      {
          "issuedDate": "2012-05-01"
      },
      {
          "issuedDate": "2007-11-30"
      }
  ],
  "plateChanges": [
      {
          "currentRegistration": "MT57GWD",
          "previousRegistration": "S50RON",
          "startDate": "2012-04-26"
      },
      {
          "currentRegistration": "S50RON",
          "previousRegistration": "MT57GWD",
          "startDate": "2012-02-23"
      }
  ],
  "insuranceWriteoffs": [],
  "highRiskMarkers": [],
  "keeperChanges": [
      {
          "startDate": "2022-08-23"
      },
      {
          "startDate": "2012-06-11"
      },
      {
          "startDate": "2012-04-23"
      }
  ],
  "colourChanges": [],
  "odometerReadings": [
      {
          "performed": "2022-06-22",
          "source": "NAMA",
          "odometerReading": {
              "unit": "MILE",
              "value": 81794
          }
      }
  ],
  "previousSearches": [
      {
          "performed": "2022-12-11T11:03:07Z",
          "typeOfBusiness": "MOTOR TRADE & OTHER"
      },
      {
          "performed": "2022-11-29T20:25:59Z",
          "typeOfBusiness": "MOTOR TRADE & OTHER"
      },
      {
          "performed": "2022-11-29T20:19:19Z",
          "typeOfBusiness": "MOTOR TRADE & OTHER"
      }
  ],
  "yearOfManufacture": "2007",
  "disputed": false,
  "pdfUrl": "https://vehicle-check-report-pdf.autotrader.co.uk/check/1d2ea8ab3b2d483f92434d4acea99e9c",
  "numberOfOwners": 4,
  "numberOfPreviousOwners": 3,
  "displayImages": [
      {
          "image": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/A7cAAOSwVNpjDx~n/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/A7cAAOSwVNpjDx~n/$_86.JPG",
          "title": "Image 0",
          "index": 0
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjQ0WDM0NA==/z/J-4AAOSwJ85i86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjQ0WDM0NA==/z/J-4AAOSwJ85i86fr/$_86.JPG",
          "title": "Image 1",
          "index": 1
      },
      {
          "image": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/dv4AAOSwSs9i86fs/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/dv4AAOSwSs9i86fs/$_86.JPG",
          "title": "Image 2",
          "index": 2
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjM3WDM0NA==/z/ecUAAOSwcapjDx~m/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjM3WDM0NA==/z/ecUAAOSwcapjDx~m/$_86.JPG",
          "title": "Image 3",
          "index": 3
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjYwWDM0NA==/z/BioAAOSwKvRi92Sy/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjYwWDM0NA==/z/BioAAOSwKvRi92Sy/$_86.JPG",
          "title": "Image 4",
          "index": 4
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/eKkAAOSwx8Bi86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/eKkAAOSwx8Bi86fr/$_86.JPG",
          "title": "Image 5",
          "index": 5
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/z3MAAOSwCrBi86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/z3MAAOSwCrBi86fr/$_86.JPG",
          "title": "Image 6",
          "index": 6
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjM3WDM0NA==/z/nLsAAOSwNZ1i86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjM3WDM0NA==/z/nLsAAOSwNZ1i86fr/$_86.JPG",
          "title": "Image 7",
          "index": 7
      },
      {
          "image": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/Z28AAOSw0cpjCeAs/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/Z28AAOSw0cpjCeAs/$_86.JPG",
          "title": "Image 8",
          "index": 8
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/bLcAAOSwM5di~fo0/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/bLcAAOSwM5di~fo0/$_86.JPG",
          "title": "Image 9",
          "index": 9
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/kIAAAOSw7LpjDx~n/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/kIAAAOSw7LpjDx~n/$_86.JPG",
          "title": "Image 10",
          "index": 10
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/nggAAOSwVjdjDx~m/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/nggAAOSwVjdjDx~m/$_86.JPG",
          "title": "Image 11",
          "index": 11
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/vbIAAOSw4ChjNWSk/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/vbIAAOSw4ChjNWSk/$_86.JPG",
          "title": "Image 12",
          "index": 12
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjczWDM0NA==/z/f3AAAOSwJDxi86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjczWDM0NA==/z/f3AAAOSwJDxi86fr/$_86.JPG",
          "title": "Image 13",
          "index": 13
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/rEgAAOSwcOdi86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/rEgAAOSwcOdi86fr/$_86.JPG",
          "title": "Image 14",
          "index": 14
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/gX4AAOSwNA9jFHUg/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/gX4AAOSwNA9jFHUg/$_86.JPG",
          "title": "Image 15",
          "index": 15
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjQyWDM0NA==/z/GPwAAOSwFgJi86fr/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjQyWDM0NA==/z/GPwAAOSwFgJi86fr/$_86.JPG",
          "title": "Image 16",
          "index": 16
      },
      {
          "image": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/DpUAAOSwE85i86fs/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/DpUAAOSwE85i86fs/$_86.JPG",
          "title": "Image 17",
          "index": 17
      },
      {
          "image": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/860AAOSw6P9jDx~m/$_86.JPG",
          "thumbImage": "https://i.ebayimg.com/00/s/MjU4WDM0NA==/z/860AAOSw6P9jDx~m/$_86.JPG",
          "title": "Image 18",
          "index": 18
      }
  ],
  "unread": false,
  "general": "",
  "isActive": true
};

export default testCar;