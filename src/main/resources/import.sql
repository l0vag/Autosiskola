INSERT INTO instructor( name ) values ( 'Pisti' );
INSERT INTO instructor( name ) values ( 'Béla' );

INSERT INTO exam( instructor_id, exam_date, title ) values ( 1, '2020-07-11', 'kresz' );
INSERT INTO exam( instructor_id, exam_date, title ) values ( 2, '2020-08-12', 'vezetés' );

INSERT INTO studentclass ( start_date, end_date, exam_id ) values ('2020-05-30', '2020-06-10', 1);
INSERT INTO studentclass ( start_date, end_date, exam_id ) values ('2020-04-30', '2020-07-10', 2);

INSERT INTO student ( name, instructor_id, studentclass_id ) values ( 'Béci', 2, 1);
INSERT INTO student ( name, instructor_id, studentclass_id ) values ( 'Géza', 1, 1);