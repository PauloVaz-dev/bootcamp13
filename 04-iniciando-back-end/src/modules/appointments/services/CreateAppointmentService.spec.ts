import 'reflect-metadata';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointment: CreateAppointmentService;

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(2020, 4, 11, 18),
      provider_id: '111111111111',
    });

    expect(appointment).toHaveProperty('id');
  });
});
