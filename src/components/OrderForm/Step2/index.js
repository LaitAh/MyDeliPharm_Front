import {
  Grid,
  Button,
  Form,
  Header,
} from 'semantic-ui-react';

import { InputFile } from 'semantic-ui-react-input-file';

import { useSelector, useDispatch } from 'react-redux';

import { handleButtonTabChange, updateFileUploaded } from 'src/actions/orderPatient';

import './styles.scss';

const Step2 = () => {
  const dispatch = useDispatch();
  const activeIndex = useSelector((state) => state.order.activeIndex);
  const selectedOrdo = useSelector((state) => state.order.selectedOrdo);

  return (
    <Form
      encType="multipart/form-data"
      action=""
      className="step2"
      onSubmit={(event) => {
        event.preventDefault();
        if (selectedOrdo) {
          dispatch(handleButtonTabChange(activeIndex));
        }
      }}
    >
      <Grid stackable container columns={1}>
        <Grid.Column>
          <Grid.Row>
            <InputFile
              key={`inputFile-${selectedOrdo}`}
              button={{ label: { children: 'Importer votre ordonnance', id: 'inputfile' }, className: 'inputfile' }}
              input={{
                id: 'inputfile',
                onChange: (event) => {
                  dispatch(updateFileUploaded(event, 'Ordo'));
                },
              }}
            />
            <Header as="h5" id="h5-input">Formats acceptés: jpg, png, pdf</Header>
          </Grid.Row>
          {selectedOrdo && (
          <Grid.Row id="row-prescription">
            <object
              id="inputViewer-prescription"
              className="inputViewer"
              key="inputViewer-prescription"
              data={URL.createObjectURL(selectedOrdo)}
              aria-label="file-prescription"
            />
          </Grid.Row>
          )}
        </Grid.Column>
      </Grid>
      <Button
        id={selectedOrdo ? 'nextstep' : 'nextstep--validate'}
        fluid
      >
        Continuer
      </Button>
    </Form>
  );
};

export default Step2;
