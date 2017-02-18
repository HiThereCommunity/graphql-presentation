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
  Link,
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
          <Heading size={6} textColor="primary" caps>Hi There</Heading>
          <Text size={4} margin={30} textColor="secondary">Striving for innovation in the insurance industry.</Text>
          <Link href="http://hi-there.community">"http://hi-there.community"</Link>
          <Heading size={6} textColor="primary" caps>Dirk-Jan</Heading>
          <Text size={4} margin={30} textColor="secondary">Dirk is a Software Engineer with a focus on Javascript who gets (way too) excited about writing stable and well tested code. GraphQL fan.</Text>
          <Heading size={6} textColor="primary" caps>Florentijn</Heading>
          <Text size={4} margin={30} textColor="secondary">GraphQL enthusiast. Focusing on Javascript and realizing highly available, easy to maintain solutions on AWS. I like giving high fives.</Text>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">What is GraphQL?</Text>
          </Appear>
          <Appear fid="2">
            <Text>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data</Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">Why we chose GraphQL over REST?</Text>
          </Appear>
          <Appear fid="2">
          <List>
            <ListItem>Client defines requirements, not server</ListItem>
            <ListItem>Self documenting</ListItem>
            <ListItem>Versioning</ListItem>
            <ListItem>Input validation</ListItem>
            <ListItem>GraphiQL</ListItem>
            <ListItem>Developer tools</ListItem>
            <ListItem>Single endpoint</ListItem>
          </List>
          </Appear>
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
        <Slide>
          <Text> Persistence: Representation of a Joke</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/persistence_layer.example")}
            margin="20px auto"
            textSize="0.5em"
          />
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
          <Text>Connecting GraphQL to the business logic:</Text>
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
        <Slide>
          <Text> Single source of truth for authorization</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/authorization.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Response</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/authorization.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text> Viewer is contained in context </Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/graphql_endpoint.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text> Viewer is now available in GraphQL</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/business_logic/query_authenticated.example")}
            margin="20px auto"
            textSize="0.5em"
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
            source={require("raw-loader!../assets/code/batching/batching_user.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>GraphQL Implementation</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/graphQLUser.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Inefficient implementation</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/user_model_no_batching.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Inefficient implementation</Text>
          <CodePane
            source={require("raw-loader!../assets/code/batching/no_batch_database_result.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Solution: DataLoader.</Text>
          <Text>Utility used for batching and caching data requests to a
                database or some other data source.
          </Text>
          <Text>This is useful in graphql where many separate
                resolver functions make requests to the database...
          </Text>
        </Slide>
        <Slide>
          <Text>How does it work?</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/dataloader_init.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Batching and Caching</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/dataloader_example.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>New Dataloader per request</Text>
          <Text> Cache only servers purpose of not repeatedly loding the same data
                 in the context of a single request.
          </Text>
        </Slide>
        <Slide>
          <Text>Pass dataloaders in the context</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/loader_per_request.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Pass them through to the business logic</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/graphQLUserLoader.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Efficient implementation</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/user_model_batching.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Efficient implementation</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/batching/batch_database_result.example")}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <List>
            <ListItem>Caching</ListItem>
            <ListItem>Node interface</ListItem>
            <Text textSize="1em" textColor="tertiary" margin="20px 0px 0px">ID + Typename = Globally unique ID</Text>
          </List>
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
          <Heading size={6} textColor="secondary" caps>Retrieve resource using single query</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/nodeQuery.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={5} textColor="secondary" caps>Globally unique opaque id.</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/uniqueOpaqueId.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Pagination built in using connection approach</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/connectionQuery.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Opinionated about mutations</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/relay/relayMutation.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Opportunity to change to Relay if you wish</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Overview</Heading>
            <List textSize={4} textColor="tertiary">
              <ListItem>Enforce globally unique id that is opaque</ListItem>
              <ListItem>Any resource that belongs to you can be retrieved using a single query</ListItem>
              <ListItem>Pagination for lists is built in</ListItem>
              <ListItem>Opinionated about mutations</ListItem>
              <ListItem>Opportunity to change to Relay if you wish</ListItem>
            </List>
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
              source={require("raw-loader!../assets/code/errorHandling/devGraphQLResponse.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Production GraphQL Error Response</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/prodGraphQLResponse.example")}
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
              source={require("raw-loader!../assets/code/errorHandling/userVersusInternalError.example")}
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
              source={require("raw-loader!../assets/code/errorHandling/clientError.example")}
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
              source={require("raw-loader!../assets/code/errorHandling/userErrorSolution.example")}
              margin="20px auto"
              textSize="0.6em"
            />
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Add FormatError Function</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/formatErrorSchema.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Error Formatter</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/code/errorHandling/errorFormatter.example")}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
            <Heading size={6} textColor="secondary" caps>Advantages</Heading>
            <List textSize={4} textColor="tertiary">
              <ListItem>Error stack visible in debug mode</ListItem>
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
