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

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  businessLogic: require("../assets/business_layer.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={2} textColor="primary">
            Lessons learned from implementing a GraphQL API
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 1</Heading>
          <Text size={6} textColor="secondary">Separation of concerns</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.businessLogic} />
          <Cite>graphql.org</Cite>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">How to do this?</Text>
          </Appear>
          <Appear fid="2">
            <Text> Model each type in a class</Text>
          </Appear>
        </Slide>
        <Slide>
          <Text> Business logic Layer</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/class_representation.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide>
          <Text> GraphQL: Create Joke</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/query_simple.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide>
          <Text> GraphQLJoke</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/resolver_class_link.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide>
          <Text> Single source of truth for authorization </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/authorization.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide>
          <Text> Single source of truth for authorization </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/authorization_advanced.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text> Viewer is contained in context </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/graphql_endpoint.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text> Viewer is now available in GraphQL</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/query_authenticated.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Advantages</Heading>
          <List>
            <ListItem>Easy to understand code structure</ListItem>
            <ListItem>Single source of truth for authorization and validation</ListItem>
            <ListItem>Reusability logic across multiple schemas</ListItem>
            <ListItem>DB type is implementation detail</ListItem>
            <ListItem>Testability</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 2</Heading>
          <Text size={6} textColor="secondary">Batching</Text>
        </Slide>
        <Slide>
          <Text>Query</Text>
          <CodePane
            source={require("raw-loader!../assets/code/batching_user.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide>
          <Text>GraphQL Implementation</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/graphQLUser.example")}
            margin="20px auto"
            textSize="0.8em"
          />
        </Slide>
        <Slide>
          <Text>Inefficient implementation</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/user_model_no_batching.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Inefficient implementation</Text>
          <CodePane
            source={require("raw-loader!../assets/code/no_batch_database_result.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Globally unique opaque ID</Heading>
          <List>
            <ListItem>Caching</ListItem>
            <ListItem>Node interface</ListItem>
            <Text textSize="1em" textColor="tertiary" margin="20px 0px 0px">ID + Typename = Globally unique ID</Text>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={6} textColor="[ro,a]" caps>Pagination</Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
