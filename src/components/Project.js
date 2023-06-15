import React from 'react'; // Importing the React library
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

function Project({ project }) { // Defining a functional component that takes in a 'project' object as a prop

  const { title, description, image, githubLink, deployedLink } = project;   // Destructuring the 'project' object to extract its properties

  return (
      <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    src={image} height={250} width={250} className="card-img-top" alt={title} 
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
      {description}
      </Text>

      <Text>
      {githubLink}
      {deployedLink}
      </Text>
    </CardBody>
  </Stack>
</Card>
    // </div>
  );
}

// Exporting the 'Project' component as the default export of this module
export default Project;