import { supabase_stats } from '../supabase'


export let appUsers: any = [
    { 'name': 'Afghanistan', 'value': 32358260, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Albania', 'value': 32159880, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Algeria', 'value': 35980193, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Angola', 'value': 19618432, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Argentina', 'value': 40764561, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Armenia', 'value': 3100236, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Australia', 'value': 22605732, 'color': '  #257E7B ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Austria', 'value': 8413429, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Azerbaijan', 'value': 9306023, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Bangladesh', 'value': 150493658, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Belarus', 'value': 9559441, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Belgium', 'value': 10754056, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Benin', 'value': 9099922, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Bhutan', 'value': 738267, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Bolivia', 'value': 10088108, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Botswana', 'value': 2030738, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Brazil', 'value': 196655014, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Brunei', 'value': 405938, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Bulgaria', 'value': 7446135, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Burkina Faso', 'value': 16967845, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Burundi', 'value': 8575172, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Cambodia', 'value': 14305183, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Cameroon', 'value': 20030362, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Canada', 'value': 34349561, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Central African Rep.', 'value': 4486837, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Chad', 'value': 11525496, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Chile', 'value': 17269525, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'China', 'value': 1347565324, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Colombia', 'value': 46927125, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Costa Rica', 'value': 4726575, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Croatia', 'value': 4395560, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Cuba', 'value': 11253665, 'color': '#99295D'  , 'count':0, 'bubbleSize': 0},
    { 'name': 'Cyprus', 'value': 1116564, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Czech Rep.', 'value': 10534293, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Denmark', 'value': 5572594, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Djibouti', 'value': 905564, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Dominican Rep.', 'value': 10056181, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Ecuador', 'value': 14666055, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Egypt', 'value': 82536770, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'El Salvador', 'value': 6227491, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Eritrea', 'value': 5415280, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Estonia', 'value': 1340537, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Ethiopia', 'value': 84734262, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Fiji', 'value': 868406, 'color': '  #257E7B ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Finland', 'value': 5384770, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'France', 'value': 63125894, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Gabon', 'value': 1534262, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Gambia', 'value': 1776103, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Georgia', 'value': 4329026, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Germany', 'value': 82162512, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Ghana', 'value': 24965816, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Greece', 'value': 11390031, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Guatemala', 'value': 14757316, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Guinea', 'value': 10221808, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Guinea-Bissau', 'value': 1547061, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Guyana', 'value':756040, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Haiti', 'value': 10123787, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Honduras', 'value': 7754687, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Hungary', 'value': 9966116, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Iceland', 'value': 324366, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'India', 'value': 1241491960, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Indonesia', 'value': 242325638, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Iran', 'value': 74798599, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Iraq', 'value': 32664942, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Ireland', 'value': 4525802, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Israel', 'value': 7562194, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Italy', 'value':60788694, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Jamaica', 'value':2751273, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Japan', 'value': 126497241, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Jordan', 'value': 6330169, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Kazakhstan', 'value': 16206750, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Kenya', 'value': 41609728, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Kuwait', 'value': 2818042, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Kyrgyzstan', 'value':5392580, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Latvia', 'value':2243142, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Lebanon', 'value': 4259405, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Lesotho', 'value': 2193843, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Liberia', 'value': 4128572, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Libya', 'value': 6422772, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Lithuania', 'value': 3307481, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Luxembourg', 'value': 515941, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Madagascar', 'value': 21315135, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Malawi', 'value': 15380888, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Malaysia', 'value': 28859154, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Mali', 'value': 15839538, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Mauritania', 'value': 3541540, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Mexico', 'value': 114793341, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Moldova', 'value': 3544864, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Mongolia', 'value': 2800114, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Montenegro', 'value': 632261, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Morocco', 'value': 32272974, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Mozambique', 'value': 23929708, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Myanmar', 'value': 48336763, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Namibia', 'value': 2324004, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Nepal', 'value': 30485798, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Netherlands', 'value': 16664746, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'New Zealand', 'value': 4414509, 'color': '  #257E7B ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Nicaragua', 'value': 5869859, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Niger', 'value': 16068994, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Nigeria', 'value': 162470737, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Norway', 'value': 4924848, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Oman', 'value': 2846145, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Pakistan', 'value': 176745364, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Panama', 'value': 3571185, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Papua New Guinea', 'value':7013829, 'color': '  #257E7B ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Paraguay', 'value': 6568290, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Peru', 'value': 29399817, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Philippines', 'value': 94852030, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Poland', 'value': 38298949, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Portugal', 'value': 10689663, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Puerto Rico', 'value': 3745526, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Qatar', 'value': 1870041, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Romania', 'value': 21436495, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Russia', 'value': 142835555, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Rwanda', 'value': 10942950, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Saudi Arabia', 'value': 28082541, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Senegal', 'value': 12767556, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Serbia', 'value': 9853969, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Sierra Leone', 'value': 5997486, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Slovenia', 'value': 2035012, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Somalia', 'value': 9556873, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'South Africa', 'value': 50459978, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Spain', 'value': 46454895, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Sri Lanka', 'value': 21045394, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Sudan', 'value': 34735288, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Suriname', 'value': 529419, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Swaziland', 'value': 1203330, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Sweden', 'value': 9440747, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Switzerland', 'value': 7701690, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Syria', 'value': 20766037, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Taiwan', 'value': 23072000, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Tajikistan', 'value': 6976958, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Tanzania', 'value': 46218486, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Thailand', 'value': 69518555, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Togo', 'value': 6154813, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': '#99295D' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Tunisia', 'value': 10594057, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Turkey', 'value': 73639596, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Turkmenistan', 'value': 5105301, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Uganda', 'value': 34509205, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Ukraine', 'value': 45190180, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'United Arab Emirates', 'value': 7890924, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'United Kingdom', 'value': 62417431, 'color': '#2E769F' , 'count':0, 'bubbleSize': 0},
    { 'name': 'United States', 'value': 313085380, 'color': '#99295D ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Uruguay', 'value': 3380008, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Uzbekistan', 'value': 27760267, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Venezuela', 'value': 29436891, 'color': '#364A98' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Vietnam', 'value': 88791996, 'color': '#7F38A0 ' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Zambia', 'value': 13474959, 'color': '#816F28' , 'count':0, 'bubbleSize': 0},
    { 'name': 'Zimbabwe', 'value': 12754378, 'color': '#816F28', 'count':0, 'bubbleSize': 0}
];

export function calculateBubbleSizes(users: any[]): void {
    getUsersInfo();

    appUsers = users.map(user => ({
        ...user,
        bubbleSize: getBubbleSize(user.value, user.count)
    }));
}

function getBubbleSize(value: number, count:number): number  {
    if(count === 0) {
        return 0;
    }
    let max: number = 1347565324;
    let min: number = 324366;
    let maxBox: number = 70 * 70 * 2 * Math.PI;
    let minBox: number = 3 * 3 * 2 * Math.PI;
    let box: number = (value - min) / (max - min) * (maxBox - minBox) + minBox;
    if (box < minBox) {
        box = minBox;
    }
    return Math.sqrt(box / (Math.PI * 2)) / 2;
}

async function getUsersInfo() {
      // Query the country table
      const { data, error } = await supabase_stats.
      from('country')
      .select('*');

      if (error) {
        console.error('Error fetching countries:', error.message);
      } else {
        data.forEach((item: any) => {
            const index = appUsers.findIndex((user: any) => user.name === item.name);
            if (index !== -1) {
                // Update the count in appUsers if the name matches
                appUsers[index].count = item.count;
            }
        });
      }
    console.log(appUsers);
}
    
