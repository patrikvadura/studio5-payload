/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    pages: Page;
    posts: Post;
    projects: Project;
    media: Media;
    categories: Category;
    users: User;
    comments: Comment;
    redirects: Redirect;
    'contact-forms': ContactForm;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    settings: Settings;
    header: Header;
    footer: Footer;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  title: string;
  publishedAt?: string | null;
  hero: {
    title?: string | null;
    subtitle?: string | null;
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: number | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: number | Media | null;
  };
  layout?:
    | (
        | {
            invertBackground?: boolean | null;
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: number | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneFourth' | 'oneThird' | 'half' | 'twoThirds' | 'threeFourth' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  media?: number | Media | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: number | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            title?: string | null;
            subtitle?: string | null;
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (number | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
        | {
            title?: string | null;
            subtitle?: string | null;
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (number | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archiveCarousel';
          }
        | {
            slides?:
              | {
                  title: string;
                  subtitle?: string | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  media: number | Media;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'slider';
          }
      )[]
    | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  title?: string | null;
  parent?: (number | null) | Category;
  breadcrumbs?:
    | {
        doc?: (number | null) | Category;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: number;
  title: string;
  categories?: (number | Category)[] | null;
  publishedAt?: string | null;
  authors?: (number | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  hero: {
    title?: string | null;
    subtitle?: string | null;
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: number | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: number | Media | null;
  };
  layout: (
    | {
        invertBackground?: boolean | null;
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: number | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        invertBackground?: boolean | null;
        columns?:
          | {
              size?: ('oneFourth' | 'oneThird' | 'half' | 'twoThirds' | 'threeFourth' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              media?: number | Media | null;
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: number | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        invertBackground?: boolean | null;
        position?: ('default' | 'fullscreen') | null;
        media: number | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        title?: string | null;
        subtitle?: string | null;
        introContent?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (number | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: number | Post;
                }
              | {
                  relationTo: 'projects';
                  value: number | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: number | Post;
                }
              | {
                  relationTo: 'projects';
                  value: number | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        title?: string | null;
        subtitle?: string | null;
        introContent?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects') | null;
        categories?: (number | Category)[] | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: number | Post;
                }
              | {
                  relationTo: 'projects';
                  value: number | Project;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: number | Post;
                }
              | {
                  relationTo: 'projects';
                  value: number | Project;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archiveCarousel';
      }
  )[];
  enablePremiumContent?: boolean | null;
  premiumContent?:
    | (
        | {
            invertBackground?: boolean | null;
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: number | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneFourth' | 'oneThird' | 'half' | 'twoThirds' | 'threeFourth' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  media?: number | Media | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: number | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            title?: string | null;
            subtitle?: string | null;
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (number | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
        | {
            title?: string | null;
            subtitle?: string | null;
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (number | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archiveCarousel';
          }
      )[]
    | null;
  relatedPosts?: (number | Post)[] | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: number;
  title: string;
  categories?: (number | Category)[] | null;
  publishedAt?: string | null;
  hero: {
    title?: string | null;
    subtitle?: string | null;
    type: 'none' | 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: number | Page;
            } | null;
            url?: string | null;
            label: string;
            appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: number | Media | null;
  };
  layout?:
    | (
        | {
            invertBackground?: boolean | null;
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: number | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            invertBackground?: boolean | null;
            columns?:
              | {
                  size?: ('oneFourth' | 'oneThird' | 'half' | 'twoThirds' | 'threeFourth' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  media?: number | Media | null;
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?: {
                      relationTo: 'pages';
                      value: number | Page;
                    } | null;
                    url?: string | null;
                    label: string;
                    appearance?: ('default' | 'hero' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            invertBackground?: boolean | null;
            position?: ('default' | 'fullscreen') | null;
            media: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            title?: string | null;
            subtitle?: string | null;
            introContent?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects') | null;
            categories?: (number | Category)[] | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: number | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: number | Project;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  relatedProjects?: (number | Project)[] | null;
  slug?: string | null;
  meta?: {
    title?: string | null;
    description?: string | null;
    image?: number | Media | null;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "comments".
 */
export interface Comment {
  id: number;
  user?: (number | null) | User;
  populatedUser?: {
    id?: string | null;
    name?: string | null;
  };
  doc?: (number | null) | Post;
  comment?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: number;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: number | Page;
        } | null)
      | ({
          relationTo: 'posts';
          value: number | Post;
        } | null);
    url?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contact-forms".
 */
export interface ContactForm {
  id: number;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?:
              | {
                  [k: string]: unknown;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'state';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  redirect?: {
    type?: ('reference' | 'custom') | null;
    reference?: {
      relationTo: 'pages';
      value: number | Page;
    } | null;
    url?: string | null;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?:
          | {
              [k: string]: unknown;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  customField?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: number;
  form: number | ContactForm;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Settings {
  id: number;
  postsPage?: (number | null) | Page;
  projectsPage?: (number | null) | Page;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: number;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: number;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: number | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}