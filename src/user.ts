import { NotionObject } from './utils'

interface Users {
    /** Properties only present for non-bot users. */
    readonly person: {
        /** Email address of person. This is only present if an integration has user capabilities that allow access to email addresses. */
        readonly email: string
    }
    /** Properties only present for bot users. */
    readonly bot: {
        /** Information about who owns this bot. */
        readonly owner?:
            | { readonly type: 'workspace'; readonly workspace: true }
            | { readonly type: 'user'; readonly user: User<'person'> }
    }
}
export type UserType = keyof Users
export type User<T extends UserType = UserType> = NotionObject<
    Users,
    T,
    {
        readonly object: 'user'
        /** Unique identifier for this user. */
        id: string
        /** User's name, as displayed in Notion. */
        readonly name: string | null
        /** Chosen avatar image. */
        readonly avatar_url: string | null
    }
>
