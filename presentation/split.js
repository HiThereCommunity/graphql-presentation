// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  CodePane,
  Layout
} from "spectacle";

import businessLogic from "../assets/business_layer.png";

export default () => (
  <div>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Lesson 1</Heading>
      <Text size={6} textColor="secondary">Separate GraphQL from your business logic</Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Image src={businessLogic} />
      <Cite>graphql.org</Cite>
    </Slide>
  </div>

)
