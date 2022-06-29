import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {
  Form,
  Grid,
  Header,
} from 'semantic-ui-react';
import { InputFile } from 'semantic-ui-react-input-file';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { updatePatientInfos } from 'src/actions/user';
import { updateFileUploaded } from 'src/actions/orderPatient';
import './styles.scss';

const UpdatePatientInfos = () => {
  const dispatch = useDispatch();

  const birthDate = useSelector((state) => state.user.patientInfos.birthDate);
  const weight = useSelector((state) => state.user.patientInfos.weight);
  const vitalCardNumber = useSelector((state) => state.user.patientInfos.vitalCardNumber);
  // const selectedCv = useSelector((state) => state.order.selectedCv);
  const mutuelleNumber = useSelector((state) => state.user.patientInfos.mutuelleNumber);
  const mutualDate = useSelector((state) => state.user.patientInfos.mutualDate);
  // const selectedMutual = useSelector((state) => state.order.selectedMutual);

  return (
    <Grid.Row id="updatePatientField">
      <Grid stackable columns={3} container>
        <Header as="h3">Information du patient</Header>
        <Grid stackable container>
          <Grid.Column width={3} id="updatePatientField-left">
            <Grid.Row id="updatePatientField-left--weight">
              <Form.Field
                control="input"
                type="number"
                label="Poids"
                placeholder="En kg"
                name="weight"
                value={weight}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updatePatientInfos(newValue, 'weight');
                  dispatch(action);
                }}
              />
            </Grid.Row>
            <Grid.Row id="updatePatientField-left--age">
              <SemanticDatepicker
                // @Docs: https://github.com/arthurdenner/react-semantic-ui-datepickers
                label="Date de naissance"
                className="updatePatientField-left--age"
                placeholder="JJ/MM/AA"
                format="DD∕MM∕YY"
                firstDayOfWeek={1}
                showOutsideDays
                locale="fr-FR"
                icon="calendar alternate outline"
                name="age"
                value={birthDate}
                onChange={(event, data) => {
                  const age = moment(data.value).fromNow();
                  dispatch(updatePatientInfos(age, 'age'));
                  const action = updatePatientInfos(data.value, 'birthDate');
                  dispatch(action);
                }}
              />
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={7} id="updatePatientField-middle">
            <Grid.Row id="updatePatientField-middle--cvField">
              <Form.Field
                control="input"
                type="number"
                label="N° de carte vitale"
                placeholder="0 00 00 00 000 000 00"
                name="vitalCardNumber"
                value={vitalCardNumber}
                onChange={(event) => {
                  const { value: newValue } = event.target;
                  const action = updatePatientInfos(newValue, 'vitalCardNumber');
                  dispatch(action);
                }}
              />
            </Grid.Row>
            <Grid.Row id="updatePatientField-middle--cvInput">
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
              <Header as="h5" id="updatePatientField-middle--cvInput_h5">Formats acceptés: jpg, png, pdf</Header>
            </Grid.Row>
            {/* <Grid.Row>
              {selectedCv && (
                <object
                  id="inputViewer-cv"
                  className="inputViewer"
                  key="inputViewer-cv"
                  data={URL.createObjectURL(selectedCv)}
                  aria-label="file-cv"
                />
              )}
            </Grid.Row> */}
          </Grid.Column>

          <Grid.Column width={6} id="updatePatientField-right">
            <Grid columns={2} stackable id="updatePatientField-right--mutual">
              <Grid.Row id="updatePatientField-right--mutualField">
                <Grid.Column id="updatePatientField-right--mutualField_Number" width={8}>
                  <Form.Field
                    control="input"
                    type="number"
                    label="N° mutuelle"
                    placeholder="000 000 000 000"
                    name="mutuelleNumber"
                    value={mutuelleNumber}
                    onChange={(event) => {
                      const { value: newValue } = event.target;
                      const action = updatePatientInfos(newValue, 'mutuelleNumber');
                      dispatch(action);
                    }}
                  />
                </Grid.Column>
                <Grid.Column id="updatePatientField-right--mutualField_Date" width={8}>
                  <SemanticDatepicker
                    // @Docs: https://github.com/arthurdenner/react-semantic-ui-datepickers
                    label="Validité"
                    id="updatePatientField-right--mutualField_Date_Input"
                    className="updatePatientField-right--mutualField_Date_Field"
                    placeholder="JJ/MM/AA"
                    format="DD∕MM∕YY"
                    firstDayOfWeek={1}
                    showOutsideDays
                    locale="fr-FR"
                    icon="calendar alternate outline"
                    name="mutualDate"
                    value={mutualDate}
                    onChange={(event, data) => {
                      const validity = moment(data.value).fromNow();
                      let isValid;
                      if (validity.includes('ago')) {
                        isValid = false;
                      }
                      else {
                        isValid = true;
                      }
                      dispatch(updatePatientInfos(isValid, 'mutualValidity'));
                      const action = updatePatientInfos(data.value, 'mutualDate');
                      dispatch(action);
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid.Row id="updatePatientField-right--mutualInput">
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
              <Header as="h5" id="updatePatientField-right--mutualInput_h5">Formats acceptés: jpg, png, pdf</Header>
            </Grid.Row>
            {/* <Grid.Row>
              <object
                id="inputViewer-mutual"
                className="inputViewer"
                key="inputViewer-mutual"
                data={URL.createObjectURL(selectedMutual)}
                aria-label="file-mutual"
              />
            </Grid.Row> */}
          </Grid.Column>
        </Grid>
      </Grid>
    </Grid.Row>
  );
};

export default UpdatePatientInfos;
