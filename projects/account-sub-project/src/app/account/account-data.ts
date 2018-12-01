import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Account } from './state/account';

export class AccountData implements InMemoryDbService {

    createDb() {
        const accounts: Account[] = [
            {
                'id': 1,
                'name': 'Kate Wilson',
                'street': '123 Main St.',
                'city': 'Dover',
                'state': 'NH',
                'zipCode': '03220'
            },
            {
                'id': 2,
                'name': 'Amadeus Group',
                'street': '100 International Dr.',
                'city': 'Portsmouth',
                'state': 'NH',
                'zipCode': '03801'
            },
            {
                'id': 3,
                'name': 'William Jackson',
                'street': '456 Dead End Rd.',
                'city': 'Farmington',
                'state': 'NH',
                'zipCode': '03749'
            },
            {
                'id': 4,
                'name': 'David Hall',
                'street': '93 Stuart St.',
                'city': 'Rochester',
                'state': 'NH',
                'zipCode': '03823'
            },
            {
                'id': 5,
                'name': 'Lillian McBride',
                'street': '93 Windy Hill Lane',
                'city': 'Portsmouth',
                'state': 'NH',
                'zipCode': '03801'
            }
        ];
        return { accounts };
    }
}
