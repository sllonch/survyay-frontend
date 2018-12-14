import axios from 'axios';

class Survey {
  constructor() {
    this.survey = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
      withCredentials: true
    });
  }

  list() {
    return this.survey.get('/API/surveys')
      .then(({ data }) => data);
  }
}
/*
survey.list()
survey.detail(idSurvey)
survey.search( { user: string, text: string } )
survey.create( { surveyTitle: string, answers: array } )
survey.read(idSurvey)
survey.update({idSurvey, idAnswer})
survey.results(idSurvey)
*/

const survey = new Survey();

export default survey