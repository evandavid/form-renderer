'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('DisplayCtrl', function ($scope) {
    $scope.data = {
      'schema': {
        'pages': [{
          'id': '234-1234-12345',
          'type': 'steps',
          'html': {
            'className': '',
            'style': ''
          },
          'subPages': [{
            'id': '1234335-3443534-456',
            'type': 'blank',
            'subPages': [{
              'id': '234-1234-12345',
              'type': 'generic',
              'contents': [{
                'id': '4567-4354-2343',
                'label': 'Title',
                'type': 'label',
                'elementType': 'h3',
                'html': {
                  'className': '',
                  'style': 'margin-bottom: 20px;'
                }
              }, {
                'id': '23435-23455-34434',
                'label': 'Body',
                'type': 'textarea',
                'html': {
                  'className': '',
                  'style': ''
                }
              }]
            },{
              'id': '567-2323453-455656',
              'type': 'disclosure',
              'downloadRequired': true,
              'acceptRequired': true,
              'html': {
                'className': '',
                'style': 'margin-top: 20px;'
              },
              'contents': [{
                'id': '4567-4354-23436',
                'label': 'Title',
                'type': 'label',
                'elementType': 'h3',
                'html': {
                  'className': '',
                  'style': 'margin-bottom:20px;'
                }
              }, {
                'id': '23435-23455-34434445',
                'label': 'Body',
                'type': 'textarea',
                'html': {
                  'className': '',
                  'style': ''
                }
              }, {
                'id': '23435-23455-344565768',
                'label': 'Download PDF',
                'type': 'url',
                'html': {
                  'className': '',
                  'style': ''
                }
              }, {
                'id': '23435-23455-3456546',
                'label': 'I HAVE READ THE DISCLOSURE CAREFULLY',
                'type': 'button',
                'html': {
                  'className': 'ui button blue',
                  'style': ''
                }
              }]
            }]
          },{
            'id': '1234335-3443534-456',
            'type': 'blank',
            'subPages': [{
              'id': '567-2323453-455656',
              'type': 'disclosure',
              'downloadRequired': true,
              'acceptRequired': true,
              'html': {
                'className': '',
                'style': 'margin-top: 20px;'
              },
              'contents': [{
                'id': '4567-4354-23436',
                'label': 'Title',
                'type': 'label',
                'elementType': 'h3',
                'html': {
                  'className': '',
                  'style': 'margin-bottom:20px;'
                }
              }, {
                'id': '23435-23455-34434445',
                'label': 'Body',
                'type': 'textarea',
                'html': {
                  'className': '',
                  'style': ''
                }
              }, {
                'id': '23435-23455-344565768',
                'label': 'Download PDF',
                'type': 'url',
                'html': {
                  'className': '',
                  'style': ''
                }
              }, {
                'id': '23435-23455-3456546',
                'label': 'I HAVE READ THE DISCLOSURE CAREFULLY',
                'type': 'button',
                'html': {
                  'className': 'ui button blue',
                  'style': ''
                }
              }]
            }]
          }, {
            'id': '1234335-3443534-456',
            'type': 'blank',
            'subPages': [{
              'id': '234-1234-12345',
              'type': 'generic',
              'contents': [{
                'id': '4567-4354-2343',
                'label': 'Title',
                'type': 'label',
                'elementType': 'h3',
                'html': {
                  'className': '',
                  'style': 'margin-bottom: 20px;'
                }
              }, {
                'id': '23435-23455-34434',
                'label': 'Body',
                'type': 'textarea',
                'html': {
                  'className': '',
                  'style': ''
                }
              }]
            }]
          }]
        }]
      },
      'data':[
        {
          'id': '12344354546-3443546',
          'pageId': '234-1234-12345',
          'contents': [
            {
              'contentId': '4567-4354-2343',
              'value': 'Disclosure(s)'
            }, {
              'contentId': '23435-23455-34434',
              'value': '<p><b>You have been determined to be eligible to apply for SimpleFi\'s Education Debt Refinancing Program</b></p><p> <b> SimpleFi’s Graduate Education Debt Refinancing Program is offered through The Bank &amp; Trust of Bryan/College Station </b>, a Texas state-chartered bank located in Bryan, Texas (herein called “TB&amp;T”). In connection with this program, SimpleFi performs marketing and provides origination services using underwriting and other criteria approved by TB&amp;T, and contracts with ECMC Servicing Corporation to provide ongoing loan servicing.  If you apply for a private student loan with TB&amp;T through this program, SimpleFi, as TB&amp;T’s originating agent, will receive your completed loan application, including required verifications, obtain a credit report as authorized by you, and will perform certain underwriting activities on behalf of TB&amp;T. If you satisfy the necessary credit and other eligibility requirements for loan approval, TB&amp;T will fund your loan. Although TB&amp;T will be the lender and owner of your loan, all borrower contact will be conducted by SimpleFi and, subsequent to disbursement, by SimpleFi or ECMC Servicing. </p><br><p> In the event that TB&amp;T subsequently sells your loan to a third party, TB&amp;T may disclose and/or transfer your information as part of the transaction. The purchaser of your loan may use your information pursuant to its own privacy policies, and those policies may be different from the privacy policies of TB&amp;T. In the event of any sale of your loan, SimpleFi or its subservicer may continue to service your loan. At that time, however, you will be notified of the transfer and provided with instructions regarding any changes in the process for making payments. </p>'
            }
          ]
        },
        {
          'id': '3443545-453434-343',
          'pageId': '567-2323453-455656',
          'contents': [
            {
              'contentId': '4567-4354-23436',
              'value': 'Application and Solicitation Disclosure'
            }, {
              'contentId': '23435-23455-34434445',
              'value': '<div><p align="CENTER" style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="3"><b>PRIVATE EDUCATION LOAN APPLICATION DISCLOSURE</b></font></font></p> <p align="CENTER" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="CENTER" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="CENTER" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p> <font face="Arial, serif"> <font size="2"> <b>Borrower:</b> </font> </font> </p> <p> <font face="Arial, serif"> <font size="2"> <b>Lender:</b> &nbsp; The Bank &amp; Trust of Bryan/College Station </font> </font> </p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"> </font></font> </p> <p></p> <p><br></p> <p><br></p> <p style="margin-bottom: 0in; border-top: none; border-bottom: 1px solid #00000a; border-left: none; border-right: none; padding-top: 0in; padding-bottom: 0.01in; padding-left: 0in; padding-right: 0in; line-height: 100%"> <font face="Arial, serif"><b>Loan Interest Rate &amp; Fees</b></font></p> <p><br></p> <center> <table cellspacing="0" cellpadding="7"> <colgroup><col> </colgroup><tbody><tr valign="TOP"> <td bgcolor="#ffffff" style="border: none; padding: 0in"> <p style="margin-bottom: 0in"><img width="328" hspace="12" height="132" border="0/" align="LEFT" name="Picture 1" src="data:image/png;base64,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"> </p> <p style="margin-bottom: 0in"><br> </p> <p><br> </p> </td> </tr> <tr><td style="border: none; padding: 0in" rowspan="6"> <p style="margin-bottom: 0in"> <font face="Arial, serif"><font size="2"><b>Your Interest Rate (upon approval)</b></font></font></p> <p align="JUSTIFY" style="margin-bottom: 0in"> <font face="Arial, serif"><font size="2">The interest rate you pay will be determined after you apply. It will be based upon your credit worthiness and other factors. </font></font></p> <p align="JUSTIFY" style="margin-bottom: 0in"><a name="_GoBack"></a> <br> </p> <p align="JUSTIFY" style="margin-bottom: 0in"> <font face="Arial, serif"><font size="2">If approved, we will notify you of the rate you qualify for within the stated range. </font></font> </p> <p align="JUSTIFY"> </p> </td> </tr> <tr valign="TOP"> <td bgcolor="#ffffff" style="border: none; padding: 0in"> <p><br> </p> </td> </tr> <tr valign="TOP"> <td bgcolor="#ffffff" style="border: none; padding: 0in"> <p> </p> </td> </tr> <tr valign="TOP"> <td bgcolor="#ffffff" style="border: none; padding: 0in"> <p><br> </p> </td> </tr> <tr valign="TOP"> <td bgcolor="#ffffff" style="border: none; padding: 0in"> <p><br> </p> </td> </tr> <tr valign="TOP"> <td bgcolor="#ffffff" style="border: none; padding: 0in"> <p><br> </p> </td> </tr> </tbody></table> </center> <p style="margin-bottom: 0in; line-height: 100%"> <font face="Arial, serif"> <font size="2"> <b>Your Interest Rate during the life of the loan:</b> </font> </font> </p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b> Your rate is </b></font></font><font face="Arial, serif"><font size="2"><u><b>fixed.</b></u></font></font></p> <p><br></p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>Loan Fees</b></font></font></p> <p style="margin-bottom: 0in; line-height: 100%"><br> </p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>Late Charge: </b></font></font><font face="Arial, serif"><font size="2"> 5% of the amount of the past due payment</font></font></p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>Returned Payment Fee:</b></font></font><font face="Arial, serif"><font size="2"> $30.00</font></font></p> <p style="margin-bottom: 0in; line-height: 100%"><br> </p> <p style="margin-bottom: 0in; border-top: none; border-bottom: 1.50pt solid #00000a; border-left: none; border-right: none; padding-top: 0in; padding-bottom: 0.01in; padding-left: 0in; padding-right: 0in; line-height: 100%"> <font face="Arial, serif"><b>Loan Cost Examples</b></font></p> <p style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2">You must begin repayment upon disbursement of the loan. This example is based on repayment beginning upon disbursement of the loan.</font></font></p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <table cellspacing="0" cellpadding="7"> <colgroup><col> <col> <col> <col> <col> </colgroup><tbody><tr valign="TOP"> <td bgcolor="#dbe5f1" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="JUSTIFY" style="margin-bottom: 0in"><font face="Arial, serif"><font size="2"><b>Repayment Option</b></font></font></p> <p align="JUSTIFY"><br> </p> </td> <td bgcolor="#dbe5f1" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="CENTER" style="margin-bottom: 0in"><font face="Arial, serif"><font size="2"><b>Amount Provided</b></font></font></p> <p align="CENTER"><font face="Arial, serif"><font size="1" style="font-size: 8pt">(amount provided directly to you or your school)</font></font></p> </td> <td bgcolor="#dbe5f1" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="CENTER" style="margin-bottom: 0in"><font face="Arial, serif"><font size="2"><b>Interest Rate</b></font></font></p> <p align="CENTER"><font face="Arial, serif"><font size="1" style="font-size: 8pt">(highest possible rate)</font></font></p> </td> <td bgcolor="#dbe5f1" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="CENTER" style="margin-bottom: 0in"><font face="Arial, serif"><font size="2"><b>Loan Term</b></font></font></p> <p align="CENTER"><font face="Arial, serif"><font size="1" style="font-size: 8pt">(how long you have to pay off this loan)</font></font></p> </td> <td bgcolor="#dbe5f1" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="CENTER" style="margin-bottom: 0in"><font face="Arial, serif"><font size="2"><b>Total Paid Over 20 Years</b></font></font></p> <p align="CENTER" style="margin-bottom: 0in"><br> </p> <p align="CENTER"><font face="Arial, serif"><font size="1" style="font-size: 8pt">(includes associated fees)</font></font></p> </td> </tr> <tr> <td height="34" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p style="margin-bottom: 0in"><font size="2"><b>MAKE FULL PAYMENTS</b></font></p> <p><font size="2">Pay principal and interest amounts starting upon loan disbursement</font></p> </td> <td style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="JUSTIFY">$10,000</p> </td> <td style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="JUSTIFY"> 6.99%</p> </td> <td style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p style="margin-bottom: 0in"><b>20 years</b></p> <p><font size="1" style="font-size: 8pt">starting after your first payment</font></p> </td> <td style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p align="JUSTIFY"> $18,592.77</p> </td> </tr> </tbody></table> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>About this example</b></font></font></p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2">The repayment example is based on a $10,000.00 loan amount and the highest starting rate currently charged and associated fees.</font></font></p> <br> <p align="JUSTIFY" style="margin-bottom: 0in; border-top: none; border-bottom: 1.50pt solid #00000a; border-left: none; border-right: none; padding-top: 0in; padding-bottom: 0.01in; padding-left: 0in; padding-right: 0in; line-height: 100%"> <font face="Arial, serif"><b>Next Steps</b></font></p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="LEFT" style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>To Apply for this Loan, Complete the Application. </b></font></font> </p><p align="JUSTIFY" style="margin-left: 0.20in; margin-bottom: 0in; line-height: 100%"> <font face="Arial, serif"><font size="2">If you are approved for this Loan, the loan terms will be available for 30 days (terms will not change during this period, except as Permitted by law).</font></font></p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <p align="JUSTIFY" style="margin-bottom: 0in; line-height: 100%"><br> </p> <table cellspacing="0" cellpadding="7" bgcolor="#dbe5f1" style="page-break-before: always"> <colgroup><col> </colgroup><tbody><tr> <td width="570" valign="TOP" height="3" bgcolor="#dbe5f1" style="border: 1px solid #000001; padding-top: 0in; padding-bottom: 0in; padding-left: 0.08in; padding-right: 0.08in"> <p style="margin-bottom: 0in"><font face="Arial, serif"><font size="2"><b>REFERENCE NOTES</b></font></font></p> <p></p> </td> </tr> </tbody></table><p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>Eligibility Criteria </b></font></font></p> <p style="margin-bottom: 0in; line-height: 100%"><br></p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>Borrower:</b></font></font></p> <ul> <li><p style="margin-bottom: 0in; line-height: 100%"><font size="2">Must be of legal age in their state of residency at the time you apply.</font></p> </li><li><p style="margin-bottom: 0in; line-height: 100%"><font size="2">Must have graduated from an eligible school.</font></p> </li></ul> <p style="margin-left: 0.25in; margin-bottom: 0in; line-height: 100%"> <br> </p> <p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2"><b>Bankruptcy Limitations</b></font></font></p> <ul> <li><p style="margin-bottom: 0in; line-height: 100%"><font face="Arial, serif"><font size="2">If you file for bankruptcy you may still be required to pay back this loan.</font></font></p> </li></ul> <p style="margin-bottom: 0in; line-height: 100%"><br> </p> <p style="margin-bottom: 0in; line-height: 100%"><br> </p> <p style="margin-bottom: 0.14in"><font size="2"><b>More information about repayment and forbearance options is available in your loan agreement and at <a href="http://www.simplefinow.com">www.simplefinow.com</a>. </b></font> </p> <p style="margin-bottom: 0in; line-height: 100%"><br> </p> <p style="margin-left: 0.25in; margin-bottom: 0in; line-height: 100%"> <br> </p> <div type="FOOTER"> <p style="margin-top: 0.46in; margin-bottom: 0in; line-height: 100%"> <br> </p> </div></div>'
            }, {
              'contentId': '23435-23455-344565768',
              'value': 'http://placeholderforpdf.com/ile.pdf'
            }
          ]
        }
      ]
    };
  });
