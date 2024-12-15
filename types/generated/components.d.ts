import type { Schema, Struct } from '@strapi/strapi';

export interface CommonFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_blocks';
  info: {
    description: '';
    displayName: 'FaqBlock';
  };
  attributes: {
    Answer: Schema.Attribute.Text;
    Question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonLink extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    Link: Schema.Attribute.Text;
    Text: Schema.Attribute.String;
  };
}

export interface CommonProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_common_process_steps';
  info: {
    description: '';
    displayName: 'ProcessStep';
  };
  attributes: {
    AccentColorBackground: Schema.Attribute.Boolean;
    Description: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Number: Schema.Attribute.Integer;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonTextComponent extends Struct.ComponentSchema {
  collectionName: 'components_common_text_components';
  info: {
    displayName: 'TextComponent';
    icon: '';
  };
  attributes: {
    Text: Schema.Attribute.String;
  };
}

export interface CommonTrustBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_trust_blocks';
  info: {
    displayName: 'TrustBlock';
    icon: 'apps';
  };
  attributes: {
    Image: Schema.Attribute.Media<'files' | 'images'>;
    Subtitle: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.faq-block': CommonFaqBlock;
      'common.link': CommonLink;
      'common.process-step': CommonProcessStep;
      'common.text-component': CommonTextComponent;
      'common.trust-block': CommonTrustBlock;
    }
  }
}
