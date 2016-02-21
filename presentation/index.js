// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Quote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
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
          <Heading size={6} textColor="primary" caps>Hi There</Heading>
          <Text size={4} margin={30} textColor="secondary">Striving for innovation in the insurance industry.</Text>
          <Link href="http://hi-there.community">hi-there.community</Link>
          <Heading size={6} textColor="primary" caps>Dirk-Jan</Heading>
          <Text size={4} margin={30} textColor="secondary">Dirk is a Software Engineer with a focus on Javascript who gets (way too) excited about writing stable and well tested code. GraphQL fan.</Text>
          <Heading size={6} textColor="primary" caps>Florentijn</Heading>
          <Text size={4} margin={30} textColor="secondary">GraphQL enthusiast. Focusing on Javascript and realizing highly available, easy to maintain solutions on AWS. I like giving high fives.</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">Agenda</Text>
            <List>
              <ListItem>What is GraphQL?</ListItem>
              <ListItem>Why GraphQL?</ListItem>
              <ListItem>Lessons Learned from implementing a GraphQL API</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">What is GraphQL?</Text>
          </Appear>
          <Appear fid="2">
            <Text>A query language for your API</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">GraphQL Demo</Text>
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
          <Text size={6} textColor="secondary">GraphQL</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Defines the API interface</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Performs query validation</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Very thin layer around your business logic</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text> GraphQL: Representation of a Joke</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/graphql_layer.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Persistence</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Responsible for low level database details</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Handles connections, database errors</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Defines the database schema</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Business Logic</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Single source of truth for enforcing business rules.</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Determines how data is retrieved, created and updated from DB.</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Performs authorization for data</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Performs validation</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text>Business logic Layer</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/logic_example.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.businessLogic} />
          <Cite>graphql.org</Cite>
        </Slide>
        <Slide>
          <Text bold>Connecting GraphQL to the business logic:</Text>
          <Text>Resolver functions map each graphQL field to the business logic.</Text>
        </Slide>
        <Slide>
          <Text>Example 1: Query Joke</Text>
          <CodePane
            source={require("raw-loader!../assets/code/business_logic/joke_query.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Implement the query</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/query_simple.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Link type GraphQLJoke to Logic</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/resolver_class_link.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Result</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/joke_response.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Example 2: Mutation to create a joke</Text>
          <CodePane
            source={require("raw-loader!../assets/code/business_logic/joke_mutation.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Implementation in GraphQL</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/mutation_simple.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Business logic performs input validation.</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/logic_mutation.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Mutation response</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/mutation_response.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Benefits</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Single source of truth for enforcing business rules.</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Prevent logic to be spread around independent graphQL resolvers in system.</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Connection to database encoded in logic, not GraphQL resolver.</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Allows DB type to be changed easily.</ListItem>
            </Appear>
            <Appear fid="5">
              <ListItem>Allows API protocol to be changed easily.</ListItem>
            </Appear>
            <Appear fid="6">
              <ListItem>Testability</ListItem>
            </Appear>
            <Appear fid="7">
              <ListItem>Reuse logic across multiple schemas</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 2</Heading>
          <Text size={6} textColor="secondary">Authorization</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.businessLogic} />
          <Cite>graphql.org</Cite>
        </Slide>
        <Slide>
          <Text> Single source of truth for authorization</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/authorization/authorization.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text> Viewer is contained in context </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/authorization/graphql_endpoint.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text> Viewer is now available in GraphQL</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/authorization/query_authenticated.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 3</Heading>
          <Text size={6} textColor="secondary">Relay Compliant Schema</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">What is it?</Text>
          </Appear>
          <Appear fid="2">
            <Text>A GraphQL schema specification that makes strong assumptions about refetching, pagination, and realizing mutation predictability.</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Refetching</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Joke Query</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/duplicateIdExample.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Solution</Text>
          <Text size={6} textColor="secondary">Create globally unique opaque ids</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Joke Query Unique Ids</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/duplicateIdSolution.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">The Result</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>Caching becomes simple</ListItem>
            <ListItem>Database assumptions opaque to client</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">... and every object can easily be refetched</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Retrieve resource using single query</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/nodeQuery.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Pagination</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">List Example</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/listResponse.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Why Pagination?</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>More fine-grained control</ListItem>
            <ListItem>Prevents app from being slow</ListItem>
            <ListItem>Improves back-end performance</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Pagination done right using connection approach</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/connectionQuery.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Opportunity to change to Relay if you wish</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">Overview</Text>
            <List textSize={4} textColor="secondary">
              <ListItem>Enforce globally unique id that is opaque</ListItem>
              <ListItem>Any resource that belongs to you can be retrieved using a single query</ListItem>
              <ListItem>Pagination for lists is built in</ListItem>
              <ListItem>Opportunity to change to Relay if you wish</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 4</Heading>
          <Text size={6} textColor="secondary">Error Handling</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Production vs Development</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Undesired Production GraphQL Error Response</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/devGraphQLResponse.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Updated GraphQL Error Response</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/prodGraphQLResponse.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">The Need for Distinct Error Types</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">User Errors vs Internal Errors</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/userVersusInternalError.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">Four Error Types</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">1. Syntax / Type Errors</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/syntaxGraphQLError.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">2. Runtime Errors</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/runTimeError.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">3. User Errors that dont need to be parsed by the client</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Introduce Client Error Class</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={5} textColor="secondary">Client Error Usage</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/userErrorSolution.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={5} textColor="secondary">Client Error Response</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/errorFormatterOutput.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">4. User Errors that need to be parsed by the client</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={5} textColor="secondary">Examples</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>Duplicate jokes</ListItem>
            <ListItem>Usage of swearwords</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={5} textColor="secondary">Solution: Add fields</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/userInputValidationError.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">Lessons</Text>
            <List textSize={4} textColor="secondary">
              <ListItem>Dont expose stack traces in production</ListItem>
              <ListItem>Hide internal server errors from client</ListItem>
              <ListItem>Define custom ClientError class for error messages that you would like to expose to client</ListItem>
              <ListItem>Include data that clients need to parse inside payload</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">To Sum Up</Text>
            <List textSize={4} textColor="secondary">
              <ListItem>Lesson 1: API, Business Logic, Persistence Layer</ListItem>
              <ListItem>Lesson 2: Authentication & Authorization</ListItem>
              <ListItem>Lesson 3: Relay compliant schema</ListItem>
              <ListItem>Lesson 4: Error Handling</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text bold>Last tip: Caching & Batching using DataLoader</Text>
            <Text>{"https://github.com/HiThereCommunity/graphql-dataloader-example"}</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Text size={6} textColor="secondary">References & Recommendations</Text>
            <List textSize={4} textColor="tertiary">
              <ListItem>React-Europe 2016 talk Dan Schafer</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">Thanks!</Heading>
        </Slide>
      </Deck>
    );
  }
}
