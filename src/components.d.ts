/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  DiscordTimestamp,
} from './util';

export namespace Components {
  interface DiscordEmbed {
    /**
    * The author's avatar URL.
    */
    'authorImage': string;
    /**
    * The author's name.
    */
    'authorName': string;
    /**
    * The URL to open when you click on the author's name.
    */
    'authorUrl': string;
    /**
    * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
    */
    'color': string;
    /**
    * The embed title.
    */
    'embedTitle': string;
    /**
    * The image to use next to the footer text.
    */
    'footerImage': string;
    /**
    * The embed image to use (displayed at the bottom).
    */
    'image': string;
    /**
    * The thumbnail image to use.
    */
    'thumbnail': string;
    /**
    * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
    */
    'timestamp'?: DiscordTimestamp;
    /**
    * The URL to open when you click on the embed title.
    */
    'url': string;
  }
  interface DiscordEmbedField {
    /**
    * The field's title.
    */
    'fieldTitle': string;
    /**
    * Whether this field should be displayed inline or not.
    */
    'inline': boolean;
  }
  interface DiscordEmbedFields {}
  interface DiscordMention {
    /**
    * The color to use for this mention. Only works for role mentions and must be in hex format.
    */
    'color': string;
    /**
    * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
    */
    'highlight': boolean;
    /**
    * The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`
    */
    'type': string;
  }
  interface DiscordMessage {
    /**
    * The message author's username.
    */
    'author': string;
    /**
    * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
    */
    'avatar': string;
    /**
    * Whether the message author is a bot or not.
    */
    'bot': boolean;
    /**
    * Whether the message has been edited or not.
    */
    'edited': boolean;
    /**
    * The id of the profile data to use.
    */
    'profile': string;
    /**
    * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
    */
    'roleColor': string;
    /**
    * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
    */
    'timestamp': DiscordTimestamp;
  }
  interface DiscordMessages {
    /**
    * Whether to use compact mode or not.
    */
    'compactMode': boolean;
    /**
    * Whether to use light theme or not.
    */
    'lightTheme': boolean;
  }
}

declare global {


  interface HTMLDiscordEmbedElement extends Components.DiscordEmbed, HTMLStencilElement {}
  var HTMLDiscordEmbedElement: {
    prototype: HTMLDiscordEmbedElement;
    new (): HTMLDiscordEmbedElement;
  };

  interface HTMLDiscordEmbedFieldElement extends Components.DiscordEmbedField, HTMLStencilElement {}
  var HTMLDiscordEmbedFieldElement: {
    prototype: HTMLDiscordEmbedFieldElement;
    new (): HTMLDiscordEmbedFieldElement;
  };

  interface HTMLDiscordEmbedFieldsElement extends Components.DiscordEmbedFields, HTMLStencilElement {}
  var HTMLDiscordEmbedFieldsElement: {
    prototype: HTMLDiscordEmbedFieldsElement;
    new (): HTMLDiscordEmbedFieldsElement;
  };

  interface HTMLDiscordMentionElement extends Components.DiscordMention, HTMLStencilElement {}
  var HTMLDiscordMentionElement: {
    prototype: HTMLDiscordMentionElement;
    new (): HTMLDiscordMentionElement;
  };

  interface HTMLDiscordMessageElement extends Components.DiscordMessage, HTMLStencilElement {}
  var HTMLDiscordMessageElement: {
    prototype: HTMLDiscordMessageElement;
    new (): HTMLDiscordMessageElement;
  };

  interface HTMLDiscordMessagesElement extends Components.DiscordMessages, HTMLStencilElement {}
  var HTMLDiscordMessagesElement: {
    prototype: HTMLDiscordMessagesElement;
    new (): HTMLDiscordMessagesElement;
  };
  interface HTMLElementTagNameMap {
    'discord-embed': HTMLDiscordEmbedElement;
    'discord-embed-field': HTMLDiscordEmbedFieldElement;
    'discord-embed-fields': HTMLDiscordEmbedFieldsElement;
    'discord-mention': HTMLDiscordMentionElement;
    'discord-message': HTMLDiscordMessageElement;
    'discord-messages': HTMLDiscordMessagesElement;
  }
}

declare namespace LocalJSX {
  interface DiscordEmbed {
    /**
    * The author's avatar URL.
    */
    'authorImage'?: string;
    /**
    * The author's name.
    */
    'authorName'?: string;
    /**
    * The URL to open when you click on the author's name.
    */
    'authorUrl'?: string;
    /**
    * The color to use for the embed's left border. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
    */
    'color'?: string;
    /**
    * The embed title.
    */
    'embedTitle'?: string;
    /**
    * The image to use next to the footer text.
    */
    'footerImage'?: string;
    /**
    * The embed image to use (displayed at the bottom).
    */
    'image'?: string;
    /**
    * The thumbnail image to use.
    */
    'thumbnail'?: string;
    /**
    * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
    */
    'timestamp'?: DiscordTimestamp;
    /**
    * The URL to open when you click on the embed title.
    */
    'url'?: string;
  }
  interface DiscordEmbedField {
    /**
    * The field's title.
    */
    'fieldTitle': string;
    /**
    * Whether this field should be displayed inline or not.
    */
    'inline'?: boolean;
  }
  interface DiscordEmbedFields {}
  interface DiscordMention {
    /**
    * The color to use for this mention. Only works for role mentions and must be in hex format.
    */
    'color'?: string;
    /**
    * Whether this entire message block should be highlighted (to emulate the "logged in user" being pinged).
    */
    'highlight'?: boolean;
    /**
    * The type of mention this should be. This will prepend the proper prefix character. Valid values: `user`, `channel`, `role`
    */
    'type'?: string;
  }
  interface DiscordMessage {
    /**
    * The message author's username.
    */
    'author'?: string;
    /**
    * The message author's avatar. Can be an avatar shortcut, relative path, or external link.
    */
    'avatar'?: string;
    /**
    * Whether the message author is a bot or not.
    */
    'bot'?: boolean;
    /**
    * Whether the message has been edited or not.
    */
    'edited'?: boolean;
    /**
    * The id of the profile data to use.
    */
    'profile'?: string;
    /**
    * The message author's primary role color. Can be any [CSS color value](https://www.w3schools.com/cssref/css_colors_legal.asp).
    */
    'roleColor'?: string;
    /**
    * The timestamp to use for the message date. When supplying a string, the format must be `01/31/2000`.
    */
    'timestamp'?: DiscordTimestamp;
  }
  interface DiscordMessages {
    /**
    * Whether to use compact mode or not.
    */
    'compactMode'?: boolean;
    /**
    * Whether to use light theme or not.
    */
    'lightTheme'?: boolean;
  }

  interface IntrinsicElements {
    'discord-embed': DiscordEmbed;
    'discord-embed-field': DiscordEmbedField;
    'discord-embed-fields': DiscordEmbedFields;
    'discord-mention': DiscordMention;
    'discord-message': DiscordMessage;
    'discord-messages': DiscordMessages;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'discord-embed': LocalJSX.DiscordEmbed & JSXBase.HTMLAttributes<HTMLDiscordEmbedElement>;
      'discord-embed-field': LocalJSX.DiscordEmbedField & JSXBase.HTMLAttributes<HTMLDiscordEmbedFieldElement>;
      'discord-embed-fields': LocalJSX.DiscordEmbedFields & JSXBase.HTMLAttributes<HTMLDiscordEmbedFieldsElement>;
      'discord-mention': LocalJSX.DiscordMention & JSXBase.HTMLAttributes<HTMLDiscordMentionElement>;
      'discord-message': LocalJSX.DiscordMessage & JSXBase.HTMLAttributes<HTMLDiscordMessageElement>;
      'discord-messages': LocalJSX.DiscordMessages & JSXBase.HTMLAttributes<HTMLDiscordMessagesElement>;
    }
  }
}


