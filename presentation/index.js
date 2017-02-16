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
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 3</Heading>
          <Text size={6} textColor="secondary">Caching</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 4</Heading>
          <Text size={6} textColor="secondary">Authentication & Authorization</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 5</Heading>
          <Text size={6} textColor="secondary">Relay Compliant Schema</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">What is it?</Text>
          </Appear>
          <Appear fid="2">
            <Text> A GraphQL schema specification that makes strong assumptions about refetching, pagination, and realizing mutation predictability.</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Advantages</Heading>
            <List textSize={4} textColor="tertiary">
              <ListItem>Enforce globally unique id that is opaque</ListItem>
              <ListItem>Any resource that belongs to you can be retrieved using a single query</ListItem>
              <ListItem>Pagination for lists is built in</ListItem>
              <ListItem>Opinionated about mutations</ListItem>
              <ListItem>Opportunity to change to Relay if you wish</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Demo</Heading>
            <Text>I actually suggest we choose a code snippet/query for each of the advantages, and show it in the slides.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 6</Heading>
          <Text size={6} textColor="secondary">Error Handling</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={6} textColor="secondary" caps>Create distinction between:</Heading>
          </Appear>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>User errors and internal errors</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Production and development</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={6} textColor="secondary" caps>Development GraphQL Error Response</Heading>
          </Appear>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/devGraphQLResponse.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Production GraphQL Error Response</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/prodGraphQLResponse.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={6} textColor="secondary" caps>User errors versus internal errors</Heading>
          </Appear>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/userVersusInternalError.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="3">
            <Heading size={6} textColor="secondary" caps>Introduce Client Error</Heading>
          </Appear>
          <Appear fid="4">
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/clientError.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Heading size={6} textColor="secondary" caps>Client Error Usage</Heading>
          </Appear>
          <Appear fid="2">
            <CodePane
              lang="javascript"
              source={require("raw-loader!../assets/code/userErrorSolution.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Add FormatError Function</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/formatErrorSchema.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Error Formatter</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorFormatter.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Advantages</Heading>
            <List textSize={4} textColor="tertiary">
              <ListItem>Error strack visible in debug mode</ListItem>
              <ListItem>No server source code exposed</ListItem>
              <ListItem>No cryptic internal server errors</ListItem>
              <ListItem>Descriptive user error messages</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Exciting Community Work</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Query whitelisting</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Serverless</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>To SUm Up</Heading>
            <List textSize={4} textColor="tertiary">
              <ListItem>Lesson 1: API, Business Logic, Persistance Layer</ListItem>
              <ListItem>Lesson 2: Authentication & Authorization</ListItem>
              <ListItem>Lesson 3: Relay compliant schema</ListItem>
              <ListItem>Lesson 4: Batching</ListItem>
              <ListItem>Lesson 5: Caching</ListItem>
              <ListItem>Lesson 6: Error Handling</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>References & Recommendations</Heading>
            <List textSize={4} textColor="tertiary">
              <ListItem>Reacteurope 2016 talk Dan Schafer</ListItem>
              <ListItem>x</ListItem>
              <ListItem>x</ListItem>
              <ListItem>x</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Thanks!</Heading>
        </Slide>
      </Deck>
    );
  }
}
