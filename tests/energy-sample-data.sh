#!/bin/sh
APIKEY="$2"
URL="$1"

curl -X POST $URL/Lucy/EnergyBudget/budget/building1  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "budget": [230,240,235,200,190,200,220,230,220,225,230,235] }'

curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/1  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 123 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/2  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 231 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/3  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 192 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/4  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 302 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/5  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 200 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/6  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 130 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/7  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 190 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/8  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 230 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/9  -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 250 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/10 -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 220 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/11 -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 200 }'
curl -X POST $URL/Lucy/EnergyBudget/consumption/building1/2020/12 -H "Authorization: APIKEY $APIKEY" -H "Content-Type: application/json" --data '{ "value": 190 }'
