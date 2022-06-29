import PropTypes from 'prop-types';

import './styles.scss';

import {
  Accordion,
  Icon,
  Button,
  Checkbox,
} from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux';

import { handleAccordionChange } from 'src/actions/orderCheck';

import { saveAs } from 'file-saver';

const DashMain = ({ checked, setChecked }) => {
  const dispatch = useDispatch();
  const statusOrder = useSelector((state) => state.orderCheck.statusOrder);

  const { cv, mutual, prescription } = checked;

  const activeIndex = useSelector((state) => state.orderCheck.activeIndex);
  // URL prod
  const cvUrl = `https://api.mydelipharm.eu/uploads/images/patient/vitalcard/${useSelector((state) => state.orderCheck.cvUrl)}`;
  const mutualUrl = `https://api.mydelipharm.eu/uploads/images/patient/mutuellecard/${useSelector((state) => state.orderCheck.mutualUrl)}`;
  const cvNumber = useSelector((state) => state.orderCheck.cvNumber);
  const mutualNumber = useSelector((state) => state.orderCheck.mutualNumber);
  const prescriptionUrl = `https://api.mydelipharm.eu/uploads/images/order/${useSelector((state) => state.orderCheck.prescriptionUrl)}`;

  // Download prescritpion
  const saveFile = (file) => {
    saveAs(
      file,
      'ordoPatient',
    );
  };

  return (
    <div id="accordion-ordercheck">
      <Accordion className="cv-accordion">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={(e, data) => {
            const action = handleAccordionChange(activeIndex, data);
            dispatch(action);
          }}
          className="ordercheck__title"
          id="cv__title"
        >
          <Checkbox
            label="Carte Vitale"
            // onChange={(e, data) => setChecked(data.checked)}
            checked={cv || statusOrder >= 2}
            className="checkbox-file"
          />
          <Icon name="plus" className="title__icon" />
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 0}
          index={0}
          className="ordercheck__content"
          content={(
            <div>
              <div className="ordercheck-file">
                <p>Carte n° {cvNumber}</p>
                <Button
                  className={`button-checkbox ${!checked.cv ? 'button-checkbox--validation' : 'button-checkbox--cancel'}`}
                  onClick={() => {
                    setChecked({
                      ...checked,
                      cv: !cv,
                    });
                  }}
                >
                  {!cv ? 'Valider' : 'Annuler'}
                </Button>
              </div>
              {cvUrl && (
              <object
                id="inputViewer-cv"
                className="inputViewer"
                key="inputViewer-cv"
                data={cvUrl}
                aria-label="file-cv"
              />
              )}
            </div>
          )}
        />
      </Accordion>
      <Accordion className="mutual-accordion">
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={(e, data) => {
            const action = handleAccordionChange(activeIndex, data);
            dispatch(action);
          }}
          className="ordercheck__title"
          id="mutual__title"
        >
          <Checkbox
            label="Carte Mutuelle"
            // onChange={(e, data) => setChecked(data.checked)}
            checked={mutual || statusOrder >= 2}
            className="checkbox-file"
          />
          <Icon name="plus" className="title__icon" />
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 1}
          index={1}
          className="ordercheck__content"
          content={(
            <div>
              <div className="ordercheck-file">
                <p>Carte n° {mutualNumber}  Date de validité : 31/12/2022</p>
                <Button
                  className={`button-checkbox ${!mutual ? 'button-checkbox--validation' : 'button-checkbox--cancel'}`}
                  onClick={() => {
                    setChecked({
                      ...checked,
                      mutual: !mutual,
                    });
                  }}
                >
                  {!mutual ? 'Valider' : 'Annuler'}
                </Button>
              </div>
              {mutualUrl && (
                <object
                  id="inputViewer-mutual"
                  className="inputViewer"
                  key="inputViewer-mutual"
                  data={mutualUrl}
                  aria-label="file-mutual"
                />
              )}
            </div>
          )}
        />
      </Accordion>
      <Accordion className="prescription-accordion">
        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={(e, data) => {
            const action = handleAccordionChange(activeIndex, data);
            dispatch(action);
          }}
          className="ordercheck__title"
          id="prescription__title"
        >
          <Checkbox
            label="Ordonnance"
            // onChange={(e, data) => setChecked(data.checked)}
            checked={prescription || statusOrder >= 2}
            className="checkbox-file"
          />
          <Icon name="plus" className="title__icon" />
        </Accordion.Title>
        <Accordion.Content
          active={activeIndex === 2}
          index={2}
          className="ordercheck__content"
          content={(
            <div className="ordercheck-prescription">
              <div className="orderchech-prescription-button">
                <Button
                  className="ordercheck-download"
                  onClick={() => {
                    saveFile(prescriptionUrl);
                  }}
                >
                  Télécharger l'ordonnance
                </Button>
                <Button
                  className={`button-checkbox ${!prescription ? 'button-checkbox--validation' : 'button-checkbox--cancel'}`}
                  onClick={() => {
                    setChecked({
                      ...checked,
                      prescription: !prescription,
                    });
                  }}
                >
                  {!prescription ? 'Valider' : 'Annuler'}
                </Button>
              </div>
              {prescriptionUrl && (
              <object
                id="inputViewer-prescription"
                className="inputViewer"
                key="inputViewer-prescription"
                data={prescriptionUrl}
                aria-label="file-prescription"
              />
              )}
            </div>
          )}
        />
      </Accordion>
    </div>
  );
};

DashMain.propTypes = {
  checked: PropTypes.shape({
    cv: PropTypes.bool.isRequired,
    mutual: PropTypes.bool.isRequired,
    prescription: PropTypes.bool.isRequired,
  }).isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default DashMain;
