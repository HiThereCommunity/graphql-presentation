import React from "react";

import {
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
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  businessLogic: require("../assets/business_layer.png")
};

preloader(images);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={2} textColor="primary">
            Lessons learned from implementing a GraphQL API
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">
            Dirk-Jan @excite-engineer
          </Heading>
          <Text size={4} margin={30} textColor="secondary">
            Dirk is a Software Engineer with a focus on Javascript who gets (way too) excited about writing stable and well tested code. GraphQL fan.
          </Text>
          <Heading size={6} textColor="primary">
            Florentijn @Mr_Blue_Sql
          </Heading>
          <Text size={4} margin={30} textColor="secondary">
            GraphQL enthusiast. Focusing on Javascript and realizing highly available, easy to maintain solutions on AWS. I like giving high fives.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Hi There</Heading>
          <Link href="http://hi-there.community">hi-there.community</Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Agenda</Text>
          <List>
            <ListItem>What is GraphQL?</ListItem>
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
          <Heading size={6} textColor="secondary">Properties</Heading>
          <List>
            <Appear fid="1">
              <ListItem>Client controls data, not the server</ListItem>
            </Appear>
            <Appear fid="1">
              <ListItem>Multiple resources in a single request</ListItem>
            </Appear>
            <Appear fid="1">
              <ListItem>Documentation is awesome</ListItem>
            </Appear>
            <Appear fid="1">
              <ListItem>Type system</ListItem>
            </Appear>
            <Appear fid="1">
              <ListItem>Developer tools: GraphiQL</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">GraphQL Demo</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 1</Heading>
          <Text size={6} textColor="secondary">Separation of concerns</Text>
        </Slide>
        <Slide>
          <Text>Query Joke</Text>
          <CodePane
            source={require(
              "raw-loader!../assets/code/business_logic/joke_query.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Implement the query</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/query_initial.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Authorization: Joke can only be retrieved by creator</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/query_initial_authorization.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Implement the Joke object type.</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/resolver_class_initial.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Result</Text>
          <CodePane
            source={require(
              "raw-loader!../assets/code/business_logic/joke_query.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/joke_response.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Update joke mutation</Text>
          <CodePane
            source={require(
              "raw-loader!../assets/code/business_logic/joke_update_mutation.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Implementation in GraphQL</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/mutation_initial_1.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Duplicate authorization logic</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/mutation_initial.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Result</Text>
          <CodePane
            source={require(
              "raw-loader!../assets/code/business_logic/joke_update_mutation.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/mutation_response.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Building out the schema</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>Retrieve a list of jokes</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Delete a joke</ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Create a joke</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>...</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">
            Authorization/Database logic all over the place!
          </Text>
        </Slide>
        <Slide>
          <Text size={6} textColor="secondary">Direct effects</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>
                Logic spread around independent GraphQL resolvers: Hard to keep in sync.
              </ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Testing difficult.</ListItem>
            </Appear>
            <Appear fid="4">
              <ListItem>Hard to maintain.</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Text size={6} textColor="secondary">
            Long term issues: Inflexibility
          </Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>
                {"Hard to switch from GraphQL to other API protocol."}
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>{"Hard to switch to other DB type."}</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">The solution! Separation</Text>
          <Image src={images.businessLogic} />
          <Cite>graphql.org</Cite>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Business Logic</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>
                Single source of truth for enforcing business rules.
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>
                Determines how data is retrieved, created and updated from DB.
              </ListItem>
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
          <Text bold>Connecting GraphQL to the business logic:</Text>
          <Text>Resolver functions maps directly to the business logic.</Text>
        </Slide>
        <Slide>
          <Text>Example 1: Query Joke</Text>
          <CodePane
            source={require(
              "raw-loader!../assets/code/business_logic/joke_query.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Before the split</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/query_initial_authorization.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>After the split</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/query_simple.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Business logic Layer</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/logic_example.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Example 2: Mutation to update a joke</Text>
          <CodePane
            source={require(
              "raw-loader!../assets/code/business_logic/joke_update_mutation.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>GraphQL</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/mutation_simple.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide>
          <Text>Single source of truth for authorization</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/business_logic/mutation_simple_2.example"
            )}
            margin="20px auto"
            textSize="0.5em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Image src={images.businessLogic} />
          <Cite>graphql.org</Cite>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Benefits</Text>
          <List textColor="tertiary">
            <Appear fid="1">
              <ListItem>
                Single source of truth for enforcing business rules.
              </ListItem>
            </Appear>
            <Appear fid="2">
              <ListItem>Testability</ListItem>
            </Appear>
            <Appear fid="3">
              <ListItem>Maintainable</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Lesson 2</Heading>
          <Text size={6} textColor="secondary">Relay Compliant Schema</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Appear fid="1">
            <Text size={6} textColor="secondary">What is it?</Text>
          </Appear>
          <Appear fid="2">
            <Text>
              A GraphQL schema specification that makes strong assumptions about refetching, pagination, and realizing mutation predictability.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Client Side Caching</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Joke Query</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/relay/duplicateIdExample.example"
            )}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Solution</Text>
          <Text size={6} textColor="secondary">
            Create globally unique opaque ids
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Joke Query Unique Ids</Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/relay/duplicateIdSolution.example"
            )}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} bold textColor="secondary">The Result</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>Caching becomes simple</ListItem>
            <ListItem>Database assumptions opaque to client</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">
            ... and every object can easily be refetched
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">Refetching</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">
            Retrieve resource using single query
          </Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/relay/nodeQuery.example"
            )}
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
            source={require(
              "raw-loader!../assets/code/relay/listResponse.example"
            )}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} bold textColor="secondary">Why Pagination?</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>More fine-grained control</ListItem>
            <ListItem>Prevents app from being slow</ListItem>
            <ListItem>Improves back-end performance</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">
            Pagination done right using connection approach
          </Text>
          <CodePane
            lang="javascript"
            source={require(
              "raw-loader!../assets/code/relay/connectionQuery.example"
            )}
            margin="20px auto"
            textSize="0.6em"
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">
            Opportunity to change to Relay if you wish
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} bold textColor="secondary">
            Advantages Relay Compliant Schema
          </Text>
          <List textSize={4} textColor="secondary">
            <ListItem>Enforce globally unique id that is opaque</ListItem>
            <ListItem>
              Any resource that belongs to you can be retrieved using a single query
            </ListItem>
            <ListItem>Pagination for lists is built in</ListItem>
            <ListItem>Opportunity to change to Relay if you wish</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">To Sum Up</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>
              Lesson 1: API, Business Logic, Persistence Layer
            </ListItem>
            <ListItem>Lesson 2: Relay compliant schema</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Text size={6} textColor="secondary">More Lessons</Text>
          <List textSize={4} textColor="secondary">
            <ListItem>Authentication</ListItem>
            <ListItem>Caching & Batching</ListItem>
            <ListItem>Error Handling</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">Reach us on twitter!</Heading>
          <Text size={6} textColor="primary">@excite-engineer</Text>
          <Text size={6} textColor="primary">@Mr_Blue_Sql</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary">Thanks!</Heading>
        </Slide>
      </Deck>
    );
  }
}
