interface Equals<T> {
    /** Only return pages where the page property value matches the provided value exactly. */
    equals?: T
    /** Only return pages where the page property value does not match the provided value exactly. */
    does_not_equal?: T
}

interface Empty {
    /** Only return pages where the page property value is empty. */
    is_empty?: true
    /** Only return pages where the page property value is present. */
    is_not_empty?: true
}

/** A text filter condition applies to database properties of types `"title"`, `"rich_text"`, `"url"`, `"email"`, and `"phone_number"`. */
export interface Text extends Equals<string>, Empty {
    /** Only return pages where the page property value contains the provided value. */
    contains?: string
    /** Only return pages where the page property value does not contain the provided value. */
    does_not_contain?: string
    /** Only return pages where the page property value starts with the provided value. */
    starts_with?: string
    /** Only return pages where the page property value ends with the provided value. */
    ends_with?: string
}

/** A number filter condition applies to database properties of type `"number"`. */
export interface Number extends Equals<number>, Empty {
    /** Only return pages where the page property value is greater than the provided value. */
    greater_than?: number
    /** Only return pages where the page property value is less than the provided value. */
    less_than?: number
    /** Only return pages where the page property value is greater than or equal to the provided value. */
    greater_than_or_equal_to?: number
    /** Only return pages where the page property value is less than or equal to the provided value. */
    less_than_or_equal_to?: number
}

/** A checkbox filter condition applies to database properties of type `"checkbox"`. */
export interface Checkbox extends Equals<boolean> {}

/** A select filter condition applies to database properties of type `"select"`. */
export interface Select extends Equals<string>, Empty {}

/** A multi-select filter condition applies to database properties of type `"multi_select"`. */
export interface MultiSelect extends Select {}

/**
 * A date filter condition applies to database properties of types `"date"`, `"created_time"`, and `"last_edited_time"`.
 *
 * **Properties where type is date:**
 *
 * If a date is provided, the comparison is done against the start and end of the UTC date.
 *
 * Note that if no timezone is provided, the default is UTC
 */
export interface Date extends Empty {
    /**
     * Only return pages where the page property value matches the provided date exactly.
     *
     * If a date is provided, the comparison is done against the start and end of the UTC date.
     */
    equals?: string
    /** Only return pages where the page property value is before the provided date. */
    before?: string
    /** Only return pages where the page property value is after the provided date. */
    after?: string
    /** Only return pages where the page property value is on or before the provided date. */
    on_or_before?: string
    /** Only return pages where the page property value is on or before the provided date. */
    on_or_after?: string
    /** Only return pages where the page property value is within the past week. */
    past_week?: Record<string, never>
    /** Only return pages where the page property value is within the past month. */
    past_month?: Record<string, never>
    /** Only return pages where the page property value is within the past year. */
    past_year?: Record<string, never>
    /** Only return pages where the page property value is within the next week. */
    next_week?: Record<string, never>
    /** Only return pages where the page property value is within the next month. */
    next_month?: Record<string, never>
    /** Only return pages where the page property value is within the next year. */
    next_year?: Record<string, never>
}

/** A people filter condition applies to database properties of types `"people"`, `"created_by"`, and `"last_edited_by"`. */
export interface People extends Empty {
    /** Only return pages where the page property value contains a user with the provided UUID. */
    contains: string
    /** Only return pages where the page property value does not contain a user with the provided UUID. */
    does_not_contain: string
}

/** A files filter condition applies to database properties of type `"files"`. */
export interface File extends Empty {}

/** A relation filter condition applies to database properties of type `"relation"`. */
export interface Relation extends Empty {
    /** Only return pages where the page property value contains a page with the provided UUID. */
    contains: string
    /** Only return pages where the page property value does not contain a page with the provided UUID. */
    does_not_contain: string
}

/** A formula filter condition applies to database properties of type `"formula"`. */
export interface Formula {
    /** Only return pages where the result type of the page property formula is "text" and the provided text filter condition matches the formula's value. */
    string: Text
    /** Only return pages where the result type of the page property formula is "checkbox" and the provided checkbox filter condition matches the formula's value. */
    checkbox: Checkbox
    /** Only return pages where the result type of the page property formula is "number" and the provided number filter condition matches the formula's value. */
    number: Number // eslint-disable-line @typescript-eslint/ban-types
    /** Only return pages where the result type of the page property formula is "date" and the provided date filter condition matches the formula's value. */
    date: Date
}
