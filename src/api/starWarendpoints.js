import baseAPI from ".";

export const getAllPeople = () => baseAPI.get(`/people/`);

export const getIndividualDetails = (id) => baseAPI.get(`/people/${id}/`);
