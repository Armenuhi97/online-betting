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
    'status':string
}
export interface Match {
    'id': number,
    'url': string,
    'date': string,
    'matchStatus': number,
    'match_client_bet': MatchClientBet[],
    'selectedId': number,
    'game_output': string,
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
    'status': string,
    'score': null,
    'match_id': string,
    'duration'?: string,
}
export interface Count {
    count: number
}
export interface MatchClientBet {
    client: string,
    game_output: string,
    id: number,
    match: string,
    url: string,
}
export interface Rating {
    client: number
    client__image: null
    client__user__first_name: string
    client__user__last_name: string
    total_win: number
}
export interface RatingResponse<T> {
    count: T
}