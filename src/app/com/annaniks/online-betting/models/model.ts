export interface ServerResponse<T> {
    count: number
    next: null
    previous: null
    results: T
}
export interface Team {
    country: string,
    id: number,
    id_key: string,
    liga: string,
    link: string,
    logo: string,
    name: string,
    url: string,
}
export interface Tour {
    'id': number,
    'liga': string,
    'name': string,
    'url': string,
}
export interface Match {
    'id': number,
    'url': string,
    'date': string,
    'matchStatus': number,
    'match_client_bet': any,
    'selectedId': number,
    'inviter': {
        'url': string,
        'name': string,
        'logo': string,
        'id_key': string,
        'link': string,
        'country': string,
        'liga': string,
    },
    'hosted': {
        'url': string,
        'name': string,
        'logo': string,
        'id_key': string,
        'link': string,
        'country': string,
        'liga': string,
    },
    'score': null,
    'match_id': string,
    'duration'?: string,
}
