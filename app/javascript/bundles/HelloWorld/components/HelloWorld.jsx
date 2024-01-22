import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import style from './HelloWorld.module.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider, Page, Card, Button, Form, FormLayout, Checkbox, TextField} from '@shopify/polaris';

const HelloWorld = (props) => {
  const [email, setEmail] = useState(props.email);

  const handleSubmit = useCallback(() => {
    setEmail('');
  }, []);

  const handleEmailChange = useCallback((value) => setEmail(value), []);

  return (
    <div>
      <h3>Hello, {email}!</h3>
      <hr />
      <AppProvider i18n={enTranslations}>
      <Page title="Example app">
        <Card>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                value={email}
                onChange={ handleEmailChange }
                label="Email"
                type="email"
                helpText={
                  <span>
                      Hello {email}!
                  </span>
                }
              />

              <Button submit>Submit</Button>
            </FormLayout>
          </Form>
        </Card>
        <br />
      </Page>
    </AppProvider>
    </div>
  );
};

HelloWorld.propTypes = {
  email: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default HelloWorld;
