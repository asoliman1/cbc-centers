import React, { Component } from 'react';

class contact extends Component {
    render() {
		window.scrollTo(0,0)        
        return (
            <div>
            <div className="mail">
            <div className="container">
                <h3 className="tittlef-agileits-w3layouts">Contact Us</h3>
                <div className="shopf-sear-headinfo_mail_grids">
                    <div className="col-md-7 contctf_mail_grid_right">
                        <h3 className="sub-w3ls-headf">Please fill this form to contact with us.</h3>
                        <form action="#" method="post">
                            <div className="inputf_left">
                                <input type="text" name="Name" placeholder="Name" required />
                            </div>
                            <div className="inputf_right">
                                <input type="email" name="Email" placeholder="Email" required />
                            </div>
                            <div className="clearfix"> </div>
                            <div className="inputf_left">
                                <input type="text" name="Telephone" placeholder="Telephone" required />
                            </div>
                            <div className="inputf_right">
                                <input type="text" name="Subject" placeholder="Subject" required />
                            </div>
                            <div className="clearfix"> </div>
                            <div className="inputf">
                                <textarea name="Message" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message...';}" required="">Message...</textarea>
                            </div>
                            <input type="submit" value="Submit" />
                            <input type="reset" value="Clear"/>
                        </form>
                    </div>
                    <div className="col-md-5 contactf-left">
                        <h3 className="sub-w3ls-headf">Contact Info</h3>
                        <div className="visit">
                            <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-sidef">
                                <span className="fa fa-home" aria-hidden="true"></span>
                            </div>
                            <div className="col-md-10 col-sm-10 col-xs-10 contact-text-shopf-sear-headinf0">
                                <h4>Visit us</h4>
                                <p>Cologne, Ehrenfeld Gutenbergstr. 50823 Cologne, Germany</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="contactf-mail">
                            <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-sidef">
                                <span className="fa fa-envelope" aria-hidden="true"></span>
                            </div>
                            <div className="col-md-10 col-sm-10 col-xs-10 contact-text-shopf-sear-headinf0">
                                <h4>Mail us</h4>
                                <p><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="call">
                            <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-sidef">
                                <span className="fa fa-mobile" aria-hidden="true"></span>
                            </div>
                            <div className="col-md-10 col-sm-10 col-xs-10 contact-text-shopf-sear-headinf0">
                                <h4>Call us</h4>
                                <p>+18044261149</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="visit">
                            <div className="col-md-2 col-sm-2 col-xs-2 contact-icon-sidef">
                                <span className="fa fa-clock-o" aria-hidden="true"></span>
                            </div>
                            <div className="col-md-10 col-sm-10 col-xs-10 contact-text-shopf-sear-headinf0">
                                <h4>Work hours</h4>
                                <p>Mon-Sat 09:00 AM - 05:00PM</p>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
        <div className="mapf">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.5588531024528!2d6.926104315807983!3d50.950370979547415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25139c136161%3A0x40466a2b892ec6e7!2sCologne%2C+Ehrenfeld+Gutenbergstr.!5e0!3m2!1sen!2sin!4v1516624585853"></iframe>
        </div>
    
        <div className="locatnf-section">
            <div className="container-fluid">
                <h3 className="tittlef-agileits-w3layouts">various locations</h3>
                <div className="locationsf-main">
                    <div className="locationsf-inn">
                        <div className="locatnf-grids m1">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10171.143717162497!2d-73.99510450880028!3d40.72023723426282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590485a57bab%3A0xc30a1a20d5c453f4!2sD%C5%8C%2C+Cookie+Dough+Confections!5e0!3m2!1sen!2sin!4v1512641855744"></iframe>
                            <h3 className="sub-w3ls-headf">Location1</h3>
                            <div className="add-left">
                                <p className="paragraphf"><span>Location : </span>550 LaGuardia Pl, New York, NY 10012, USA</p>
                                <p className="paragraphf"><span>Call Us : </span>000-568-3214</p>
                                <p className="paragraphf"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                        <div className="locatnf-grids m2">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20335.70063503884!2d-73.99748627450514!3d40.741786138002865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fecf664df5%3A0x33d224a0d5dacca2!2sRockefeller+Center!5e0!3m2!1sen!2sin!4v1512641910229"></iframe>
                            <h3 className="sub-w3ls-headf">Location2</h3>
                            <div className="add-left">
                                <p className="paragraphf"><span>Location : </span>45 Rockefeller Plaza, New York, NY 10111, USA</p>
                                <p className="paragraphf"><span>Call Us : </span>000-953-456</p>
                                <p className="paragraphf"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="locationsf-inn">
                        <div className="locatnf-grids m3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.10926901785!2d-73.97583160860489!3d40.8209002394618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x80a26a8cc62f2aa5!2sCity+Ice+Pavilion!5e0!3m2!1sen!2sin!4v1512641992727"></iframe>
                            <h3 className="sub-w3ls-headf">Location3</h3>
                            <div className="add-left">
                                <p className="paragraphf"><span>Location : </span>32nd Pl, Long Island City, NY 11101, USA</p>
                                <p className="paragraphf"><span>Call Us : </span>000-860-568</p>
                                <p className="paragraphf"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                        <div className="locatnf-grids m4">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47576.40355278206!2d-71.45619986572248!3d41.81698718199209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4451158a3cc03%3A0x3b88861277135d60!2sProvidence+Biltmore!5e0!3m2!1sen!2sin!4v1512642068206"></iframe>
                            <h3 className="sub-w3ls-headf">Location4</h3>
                            <div className="add-left">
                                <p className="paragraphf"><span>Location : </span>11 Dorrance St, Providence, RI 02903, USA</p>
                                <p className="paragraphf"><span>Call Us : </span>000-809-6193</p>
                                <p className="paragraphf"><span>Email : </span><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
        </div>
        );
    }
}

export default contact;