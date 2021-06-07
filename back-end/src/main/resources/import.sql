INSERT INTO USER (name, password, role) VALUES ('Pisti', 'százhét', 'ROLE_INSTRUCTOR');
INSERT INTO USER (name, password, role) VALUES ('Béla', 'százhat', 'ROLE_INSTRUCTOR');
INSERT INTO USER (name, password, role) VALUES ('Dalma', 'százhárom', 'ROLE_ADMIN');

INSERT INTO USER (name, password, role) values ('Géza', 'tréning', 'ROLE_STUDENT');
INSERT INTO USER (name, password, role) values ('Géza2', 'tréning2', 'ROLE_STUDENT');
INSERT INTO USER (name, password, role) values ('Géza3', 'tréning3', 'ROLE_STUDENT');
INSERT INTO USER (name, password, role) values ('Géza4', 'tréning4', 'ROLE_STUDENT');
INSERT INTO USER (name, password, role) values ('Géza5', 'tréning5', 'ROLE_STUDENT');

INSERT INTO EXAM( exam_date, max_num, title ) values ( '2021-10-11', 7, 'forgalmi' );
INSERT INTO EXAM( exam_date, max_num, title ) values ( '2021-12-11', 2, 'forgalmi' );
INSERT INTO EXAM( exam_date, max_num, title ) values ( '2021-03-06', 5, 'forgalmi' );

INSERT INTO EXAM( exam_date, max_num, title ) values ( '2021-05-06', 7, 'kresz' );
INSERT INTO EXAM( exam_date, max_num, title ) values ( '2021-06-13', 11, 'kresz' );

INSERT INTO WORKWEEK( week_number, user_id) values ( 1, 1)

INSERT INTO WORKDAY( name, workweek_id ) values ( 'Hétfő', 1 )
INSERT INTO WORKDAY( name, workweek_id ) values ( 'Kedd', 1 )
INSERT INTO WORKDAY( name, workweek_id ) values ( 'Szerda', 1 )
INSERT INTO WORKDAY( name, workweek_id ) values ( 'Csötörtök', 1 )
INSERT INTO WORKDAY( name, workweek_id ) values ( 'Péntek', 1 )

INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 1, TRUE, 'Pisti', 1)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 2, TRUE, 'Pisti', 1)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 3, TRUE, 'Pisti', 1)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 4, TRUE, 'Pisti', 1)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 5, TRUE, 'Pisti', 1)


INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 1, TRUE, 'Pisti', 2)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 2, TRUE, 'Pisti', 2)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 3, TRUE, 'Pisti', 2)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 4, TRUE, 'Pisti', 2)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 5, TRUE, 'Pisti', 2)


INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 1, TRUE, 'Pisti', 3)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 2, TRUE, 'Pisti', 3)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 3, TRUE, 'Pisti', 3)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 4, TRUE, 'Pisti', 3)
INSERT INTO DRIVE_CLASS( hour, is_free, user, workday_id ) values ( 5, TRUE, 'Pisti', 3)