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

  detail(id) {
    return this.survey.get(`/API/survey/${id}`)
      .then(({ data }) => data);
  }

  update(id, answer, userId) {
    return this.survey.put(`/API/survey/${id}/vote`, {answer, userId})
      .then(({ data }) => data);
  }

  create(survey, owner) {
    const { participants, title, answers} = survey;
    return this.survey.post('API/survey/new', { participants, title, answers, owner })
    .then(({ data }) => data);
  }

  delete(id) {
    return this.survey.delete(`/API/survey/${id}/delete`)
    .then(({ data }) => data);
  }
}

/*
survey.list() DONE
survey.detail(idSurvey) DONE
survey.search( { user: string, text: string } ) DONE IN FE
survey.create( { surveyTitle: string, answers: array } )
survey.read(idSurvey)
survey.update({idSurvey, idAnswer}) DONE
survey.results(idSurvey)
*/

const survey = new Survey();

export default survey