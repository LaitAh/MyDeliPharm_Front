import {
  Grid,
  Button,
  Form,
  Header,
} from 'semantic-ui-react';

import { useState } from 'react';

import { InputFile } from 'semantic-ui-react-input-file';

import { useSelector, useDispatch } from 'react-redux';

import {
  handleButtonTabChange,
  updateOrderField,
  updateFileUploaded,
  updateCurrentVitalCard,
  updateCurrentMutualCard,
} from 'src/actions/orderPatient';

import { submitUploadVitalCard, submitUploadMutualCard } from 'src/actions/upload';

import { submitUpdateProfile } from 'src/actions/user';

import './styles.scss';

const Step1 = () => {
  const dispatch = useDispatch();

  // Stat to change step in the order form
  const activeIndex = useSelector((state) => state.order.activeIndex);

  // Patient id
  const patientId = useSelector((state) => state.user.patientInfos.id);

  // Current CV and mutual number (in data base)
  const currentCvNumber = useSelector((state) => state.user.patientInfos.vitalCardNumber);
  const currentMutualNumber = useSelector((state) => state.user.patientInfos.mutuelleNumber);

  // Controlled field
  const cvNumber = useSelector((state) => state.order.cvNumber);
  const mutualNumber = useSelector((state) => state.order.mutualNumber);
  const mutualDate = useSelector((state) => state.order.mutualDate);

  // Uploaded file
  const selectedCv = useSelector((state) => state.order.selectedCv);
  const selectedMutual = useSelector((state) => state.order.selectedMutual);

  // State click on button to change cv or mutual number
  const [cvChange, setCvChange] = useState(false);
  const [mutualChange, setMutualChange] = useState(false);

  return (
    <Form
      encType="multipart/form-data"
      action=""
      className="step1"
      id="step1"
      onSubmit={(event) => {
        event.preventDefault();
        if ((currentCvNumber || (cvNumber && selectedCv))
          && (currentMutualNumber || (mutualNumber && selectedMutual))
          && !cvChange && !mutualChange) {
          dispatch(handleButtonTabChange(activeIndex));
          if (selectedCv) {
            dispatch(submitUploadVitalCard(patientId));
          }
          if (selectedMutual) {
            dispatch(submitUploadMutualCard(patientId));
          }
          if (cvNumber) {
            dispatch(updateCurrentVitalCard(cvNumber));
          }
          if (mutualNumber) {
            dispatch(updateCurrentMutualCard(mutualNumber));
          }
          if (cvNumber || mutualNumber) {
            dispatch(submitUpdateProfile());
          }
        }
      }}
    >
      <Grid stackable container columns={2}>
        <Grid.Column>
          <Grid.Row>
            <Form.Field
              readOnly={currentCvNumber && !cvChange}
              className={(cvChange || !currentCvNumber) ? 'cv' : 'cv--validated'}
              control="input"
              id="cv-step1"
              label="N° carte vitale"
              placeholder="0 00 00 00 000 000 00"
              name="cvNumber"
              type="number"
              value={cvChange ? cvNumber : currentCvNumber || cvNumber}
              onChange={(event) => {
                const { value: newValue } = event.target;
                dispatch(updateOrderField(newValue, 'cvNumber'));
              }}
            />
          </Grid.Row>
          <Grid.Row>
            {(!currentCvNumber || cvChange) && (
              <>
                <InputFile
                  button={{ label: { children: 'Importer la carte vitale', id: 'inputfile' }, className: 'inputfile' }}
                  input={{
                    id: 'inputfile-cv',
                    name: 'inputfile-cv',
                    onChange: (event) => {
                      const action = updateFileUploaded(event, 'Cv');
                      dispatch(action);
                    },
                  }}
                />
                <Header as="h5" id="h5-input">Formats acceptés: jpg, png, pdf</Header>
              </>
            )}
            {selectedCv && (
              <object
                id="inputViewer-cv"
                className="inputViewer"
                key="inputViewer-cv"
                data={URL.createObjectURL(selectedCv)}
                aria-label="file-cv"
              />
            )}
            {currentCvNumber && (
            <Button
              type="button"
              id="submit-cv"
              onClick={() => {
                setCvChange(!cvChange);
                if (cvChange && cvNumber) {
                  dispatch(updateCurrentVitalCard(cvNumber));
                }
              }}
            >
              {cvChange ? 'Valider les changements' : 'Modifier ma carte vitale' }
            </Button>
            )}
          </Grid.Row>
        </Grid.Column>
        <Grid.Column>
          <Grid.Row>
            <Grid columns={2}>
              <Grid.Column>
                <Form.Field
                  readOnly={currentMutualNumber && !mutualChange}
                  className={(mutualChange || !currentMutualNumber) ? 'mutual' : 'mutual--validated'}
                  control="input"
                  id="mutual-number-step1"
                  label="N° mutuelle"
                  placeholder="00000000000000"
                  name="mutualNumber"
                  type="number"
                  value={mutualChange ? mutualNumber : currentMutualNumber || mutualNumber}
                  onChange={(event) => {
                    const { value: newValue } = event.target;
                    dispatch(updateOrderField(newValue, 'mutualNumber'));
                  }}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Field
                  readOnly={currentMutualNumber && !mutualChange}
                  className={(mutualChange || !currentMutualNumber) ? 'mutual' : 'mutual--validated'}
                  control="input"
                  id="mutual-validated-step1"
                  label="Validité"
                  placeholder="31/12/2021"
                  type="date"
                  name="mutualDate"
                  value={mutualDate}
                  onChange={(event) => {
                    URL.revokeObjectURL(selectedMutual);
                    const { value: newValue } = event.target;
                    dispatch(updateOrderField(newValue, 'mutualDate'));
                  }}
                />
              </Grid.Column>
            </Grid>
          </Grid.Row>
          <Grid.Row>
            {(!currentMutualNumber || mutualChange) && (
              <>
                <InputFile
                  button={{ label: { children: 'Importer la carte de mutuelle', id: 'inputfile' }, className: 'inputfile' }}
                  input={{
                    id: 'inputfile-mutual',
                    name: 'inputfile-mutual',
                    onChange: (event) => {
                      dispatch(updateFileUploaded(event, 'Mutual'));
                    },
                  }}
                />
                <Header as="h5" id="h5-input">Formats acceptés: jpg, png, pdf</Header>
              </>
            )}
            {selectedMutual && (
              <object
                id="inputViewer-mutual"
                className="inputViewer"
                key="inputViewer-mutual"
                data={URL.createObjectURL(selectedMutual)}
                aria-label="file-mutual"
              />
            )}
            {currentMutualNumber && (
              <Button
                type="button"
                id="submit-mutual"
                onClick={() => {
                  setMutualChange(!mutualChange);
                  if (mutualChange && mutualNumber) {
                    dispatch(updateCurrentMutualCard(mutualNumber));
                  }
                }}
              >
                {mutualChange ? 'Valider les changements' : 'Modifier ma mutuelle' }
              </Button>
            )}
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Button
        id={
          ((currentCvNumber || (cvNumber && selectedCv))
          && (currentMutualNumber || (mutualNumber && selectedMutual))
          && !cvChange && !mutualChange)
            ? 'nextstep' : 'nextstep--validate'
          }
        fluid
      >
        Continuer
      </Button>
    </Form>
  );
};

export default Step1;
