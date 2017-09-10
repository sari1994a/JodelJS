import {Color} from '../enums/Color';
import {VoteType} from '../enums/VoteType';

export interface IApiLocation {
    name: string;
}

export interface IPost {
    child_count?: number;
    children?: string[];
    color: Color;
    created_at: string;
    discovered_by: number;
    distance: number;
    from_home?: boolean;
    got_thanks?: boolean;
    image_approved?: string;
    image_url?: string;
    location: IApiLocation;
    message: string;
    next_reply?: string | null;
    oj_replied: boolean;
    pin_count?: number;
    pinned?: boolean;
    post_id: string;
    post_own: string;
    replier?: number;
    share_count?: number;
    shareable?: boolean;
    thumbnail_url?: string;
    updated_at: string;
    user_handle: string;
    vote_count: number;
    voted?: VoteType;
}
