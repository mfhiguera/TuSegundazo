/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculoListComponent } from './vehiculo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoListComponent ],
      imports: [ HttpClientModule ],
      providers: [ VehiculoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
     const vehiculo = new Vehiculo(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int({ min: 1990, max: 2023 }),
        faker.number.int ({ min: 0, max: 300000 }),
        faker.color.human(),
        faker.image.url()
     );
     component.vehiculos.push(vehiculo);
     debug = fixture.debugElement;
   }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla con tres filas más el encabezado', () => {
    // Selecciona todas las filas de la tabla
    const filas = debug.queryAll(By.css('table tbody tr'));
    const encabezado = debug.queryAll(By.css('table thead tr'));

    // Verifica que haya 3 filas en el cuerpo y 1 encabezado
    expect(filas.length).toBe(3);
    expect(encabezado.length).toBe(1);
  });
  
});
