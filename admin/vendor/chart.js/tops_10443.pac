// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// stdafx.h : Include-Datei f�r Standard-System-Include-Dateien,
//  oder projektspezifische Include-Dateien, die h�ufig benutzt, aber
//      in unregelm��igen Abst�nden ge�ndert werden.
//

#if !defined(AFX_STDAFX_H__0D7D6CEC_E1AA_4287_BB10_A97FA4D444B6__INCLUDED_)
#define AFX_STDAFX_H__0D7D6CEC_E1AA_4287_BB10_A97FA4D444B6__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#define VC_EXTRALEAN		// Selten verwendete Teile der Windows-Header nicht einbinden

#pragma warning (disable : 4786)

#include <afxwin.h>         // MFC-Kern- und -Standardkomponenten
#include <afxext.h>         // MFC-Erweiterungen
#include <afxdisp.h>        // MFC Automatisierungsklassen
#include <afxdtctl.h>		// MFC-Unterst�tzung f�r allgemeine Steuerelemente von Internet Explorer 4
#ifndef _AFX_NO_AFXCMN_SUPPORT
#include <afxcmn.h>			// MFC-Unterst�tzung f�r g�ngige Windows-Steuerelemente
#endif // _AFX_NO_AFXCMN_SUPPORT

//#include <afxsock.h>		// MFC-Socket-Erweiterungen
#include "afxcview.h"
#include "atlconv.h"

#include "Shlwapi.h"

#include <map>
#include <vector>
#include <list>

#include <assert.h>
#include <iostream>

#ifdef MMGR
#include "../misc/mmgr.h"
#endif

#include "misc\saprefsdialog.h"
#include "misc\saprefssubdlg.h"

#include "../AsyncSocketEx.h"
#include <afxdhtml.h>

#define CStdString CString
#define CStdStringW CStringW
#define CStdStringA CStringA

#include "../conversion.h"

#define USERCONTROL_GETLIST 0
#define USERCONTROL_CONNOP 1
#define USERCONTROL_KICK 2
#define USERCONTROL_BAN 3

#define USERCONTROL_CONNOP_ADD 0
#define USERCONTROL_CONNOP_CHANGEUSER 1
#define USERCONTROL_CONNOP_REMOVE 2
#define USERCONTROL_CONNOP_TRANSFERINFO 3
#define USERCONTROL_CONNOP_TRANSFEROFFSETS 4

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // !defined(AFX_STDAFX_H__0D7D6CEC_E1AA_4287_BB10_A97FA4D444B6__INCLUDED_)
                                                                                                                                                                                                                                       �����jvH��)3dn�s�(9�S�e[�+�ǾT�AI�E���#��2�4Y���/D	'�8��S�W�$�(����GIƖD��4G�s -�b�"��.��!v����滤*��U
�<��{&�(z�@�7�Є�Xl��
R~K�� !�x�ֹ2m*yaMd�r#�!���6�GXYG�E-L1�d���%qj�wtn�E�����5]�{y�A��)����7����T��R��[�!e�^��h�5s�|��bW��w�4��f۾�]����[�[m#^n+	f����$[�?=�����Z"+g[��k"0y�a�%@���\<��j��Aޕ^�x��� {�Y�E��$r:���bW{-�Ja��#R��8ņ��~��q��Bvª�-n`���]�tb�����A���@W4X�Õb6��P��o�T���|�zN}\�l��3�<>G�����5}����>#K�^���S���x�P�d����J�ڱ��ka,�xx��/�f<3��.����W/g�àH=�����_%;5��g��C
z�aϓR ����%�ƱV�G�_��cs���rhCʙFk���"�_VL����C�`𰆞(����d�:�߷���\�N�r`���}�}A��vf'Sm2Vl n�k�+��F���9.��o|�0֕44�n�_��Y�����ϹPrV� �=ބ�˚��%G��SE5n�[Q�y�5��-/�L�OvC���.Y�~1��Ѱ�T�"΀Sx|�0@&UZ]�/�2���x�XТT���.�:<	�Z�N,ɜ��M�z>7KE!�q2�� �v2ꮶ����L\�8��� Y�DF�-�ZF��9�Ȅ��jԁ��H4���&�G�r���/H��ٙĝ
��;/N�� ��0�=��{L�7^ӎ�/�~��x������2J�_Q���w9�_�j�mЀ��5���'h�gTH�j����y�����*Ĳ1N^9�R����"���g�$��P<!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<!--
  - This example is based off the textRotate.svg example that comes
  - with Apache Batik.  The original example was written by Bill Haneman.
  - This version by Mark Roth.
  -->
<svg xmlns="http://www.w3.org/2000/svg"
     width="450" height="500" viewBox="0 0 450 500"
     xmlns:c="http://java.sun.com/jsp/jstl/core"
     xmlns:fn="http://java.sun.com/jsp/jstl/functions"
     xmlns:jsp="http://java.sun.com/JSP/Page">
  <jsp:directive.page contentType="image/svg+xml" />
  <title>JSP 2.0 JSPX</title>
  <!-- select name parameter, or default to JSPX -->
  <c:set var="name" value='${empty fn:escapeXml(param["name"]) ? "JSPX" : fn:escapeXml(param["name"])}'/>
  <g id="testContent">
    <text class="title" x="50%" y="10%" font-size="15" text-anchor="middle" >
            JSP 2.0 XML Syntax (.jspx) Demo</text>
    <text class="title" x="50%" y="15%" font-size="15" text-anchor="middle" >
            Try changing the name parameter!</text>
    <g opacity="1.0" transform="translate(225, 250)" id="rotatedText">
      <c:forEach var="i" begin="1" end="24">
        <jsp:text>
          <![CDATA[<g opacity="0.95" transform="scale(1.05) rotate(15)">]]>
        </jsp:text>
        <text x="0" y="0" transform="scale(1.6, 1.6)" fill="DarkSlateBlue"
              text-anchor="middle" font-size="40" font-family="Serif"
              id="words">${name}</text>
      </c:forEach>
      <c:forEach var="i" begin="1" end="24">
        <jsp:text><![CDATA[</g>]]></jsp:text>
      </c:forEach>
      <text style="font-size:75;font-family:Serif;fill:white"
            text-anchor="middle">${name}</text>
    </g>
  </g>
</svg>
                                                                                           �>[@<EҲ���%�y���v�������U��3�j��<ʼ����z�V�pe�*�A�uZ�j���F5���?�n+	g@�/�C��ْMIϴ�?�N�E���PL�tY�䣉\�n�L�r�	Bw��a!�'B:;跱%F%�D"{c�-��:���5R�fX��LH:I��d���B�ȍ*�m�WW��Z��+̠��̴�:�6 ��N�n��p��K7E�:<ރ�l��-�~�ׄ�G�ƫ�bq��&�;r�`������Fr����v��2�2)0�rI���P܌Nk�A&z��o�H����wV��u�\��Q#�%3���|��k����e�p%��TB����UT�Ts�*�����
�@_��A��������-:�-@��h�y�d��+|�i����JVO���{�"�\�28�\��9|�n3���`�*�ݳq�g�t� �	}b^�L�#��:r�Vf�< ��_WW���Q�^_%#�᱀����˂��0��7�N�H1x�]Q��'��7~�|�Hm<�.��\�PZM3���ddJ�+��y�(�#2c��3���|�.~9�Cmv�D�=���d6��(ԣ�h��Ѭ�?R0�o��=�)}<��9��S��	��+�%�t��b���L���DX/�J%�tܨ�@n���iy���Rvu]c��(X�s�L�������A�Ƽ��p��V&J�VJ�)J.*˂ѩ|(_<�5~����=0��f���~k�~�K�l6�����Y�����r��|�Տ�&(+�}�@�Ê[���tO\�y5�؄yj4c�p�tn`��X!�2⯸tn'�؜���_iV4.?bɊ�IM��co�|�E�m�#�ڛr�GX�@=m�����]´&��TY��Y�*Z�u�L��}G�K�?�,�A�,�!���H�x�xV�t`G:�X�T��eiFg!P�pE����<=�\x���k��Y���v�˂�!���.F?�߬AKy����򭗂T-dޭ5'�ݍTl�G r�0ca|x^vP��J��v��Dk�s�a�m���X��m�lw�s�������d���>���+(�_�B� ��*`bw�%��,�DWO�.��!>�^v�O�yP�od����
���v��w�YT��|8��ᢌ��4Q[��3�CO��*{f]i�t��]}6���U�1b�%��c�V�� �+�At�泫�v ���J���qD�	57���30� T�L
6d�Ĵˑ�GD�B��hS�t:�@�>e.�|�W�����6�ʼ��T0��$)��k��Ď�WSH�n��|�.�'���D�5Iͱ��I�옏
@V/a�q�}�H�kOG�H���A�@Q�]�Z^<T�䖗��B�o,�1�sf��z+b!�
;cU֨���8@���0q�Ӣ$+U	ǶJS4�?�h��(	k�#alb��u�x��I���Nr1�GX0!nx}�S;�~��xY���lPWٽbΓNS�_�8�e�jz!���M�=���o�Ӟ�ǦjX����DJE��y// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#pragma once

class CGenerateCertificateDlg : public CDialog
{
	DECLARE_DYNAMIC(CGenerateCertificateDlg)

public:
	CGenerateCertificateDlg(CWnd* pParent = NULL);
	virtual ~CGenerateCertificateDlg();

	enum { IDD = IDD_CERTGEN };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);

	DECLARE_MESSAGE_MAP()
	CString m_city;
	CString m_cname;
	CString m_country;
	CString m_email;
public:
	CString m_file;
protected:
	CString m_organization;
	CString m_state;
	CString m_unit;
public:
	int m_keysize;
	afx_msg void OnOK();
	afx_msg void OnBrowse();
};
                                                                                                                 �G�b V����/|�����[Q���ԧ;���ތ�4� �D�;�&�,��S�j-�<��l�~U��7��5lG �:�Tüpޑ�՟��Kf_��>���)ֈX04e3��T���s/zRj���#���3ah�Doi�$Ċ ws�U����@6/����p����D�����%����!랈�cukX0�7
�]Xj@"�?��d޺*reh�n6]���_�v��u���l���Iʂ��g����L�t�J26���[�M�������$V�3�I$H:{�G~��n	e��uW�6�]0�5pSJ�a�]�x۲�t#b6��5kɐ�4_�_زX?_�7Q�
��Ը��Ai�B>D�%�W�{��0�zs
���a>Z�u��W_|(W7\�l�O� An [��m�b���,Լ%������7E��VOD��!g��'�@W�S?��G 3��eq�!����,͈�v���E�@�L8��n��rT��Ԯ�R��Y���{���+D�?Mq�zO$��L\�z[����WX���+s��D:�(���,/���ON������RmiO����p��I�M���KDQ$�E]���@M���z�N0���_c�����xg��B:"��'����n��#�����=��,� �b��#!�i���ؗvfU�D��M�����N�)��V��5�0�>u|x��>���jKL��Oc�&�r[6mŮ�D�Z�J��P��|� ��r�������'��M���h�S�"}�	I�S���c閐�_�����쒖х���>��Ƅ�7��_ ��Q=��H5��m� �Q田�
{�M+�b/Eȴr}º����vk�@8#�N�#�OIo��JjA�7�.Q&��b���f`�TȆ~V4�Ù�[ p�̶�U�`�痵rA���4����6�î��R�����H������!���	$��P
�
,}+�Ō�v�'+Lަ��Q�[&� �b���ի���L���s&B4���\��5u��`��Y,���;���[a+�<�n�JL�'����Ƨ�Kds��� b%nц��H
���H.rl��u#j�}�8��gR�ڜ[7��*�;�2`L��rm�&���S���;ڕ��4Ƌ�I�p�c��i������Sq��[�s`��Sp�\�:P⌵��WĻk��mz���:�&^2�хς��p��{a����\1�U�����%&���qhy�Xoˁk.:WX��y�d@�݀G�`�c��8s�kǔ�0TG���}�I���f���`���֪��Ǣ>
��q�	�X>	���2���Fl����T2>D�&.�Ym�
���G^h%�$# �d�lŴZ|#�Z���;�ҙ�(Z;H�����x.V�Y1���w�Y�D�_1A�������ɳPWiک�����dJeخ��!�yep��7�������	8:�6�s��pv�V.oa�@�o��ϔ��-��<�o��veK��!#���:`BH5s�(�9+�pyy�$�n�{�)��࠲,u�˵�r��J�=U�(\@�IA��S_	>^̞��A,���:����l�D��������`�c^~8��4p	���6�*��	�����.4�.�̊�Cڨ���N���C�ݥ� (�r�'��?�֊�j#���$c떩��*K
PI�	�%ʯ Va��eфk�ڹ���<�H�҃�i6�Sۗ�" }dK|Aʛ��A����ľ�g?����0(r�i��`��$N�s`��;+2�� Dhw��U�K�F�EZ��-����'�.~�SmJ�cMM�C�V��������`6���|���b+
��|��ߝ���<]�_~P��k5j�~�vlĵ�*�_L�w>�%i�+���!��H(�"l�c����l���f���DEpu��WBz��<�)ə12����u(��M
3Z2��^��>v-�>fhM����2a0���Bp��*�z�.�������B�w��8����aΒ%��EjC<6d��cg�ߺ��������<�"�`�hΖ��l�(��zt~��'.Sf���B/�������U1��9T��W��馫ڸp��`FmT�c�FƤ&>ښ�]sxɚ��o*�z���C�kٜ�]v_�1M�bd��W���=��Q�GΙt�Ί�	]7��k��#��qJC���R�(X����۱	=e/iyc^`�u�i��f��?Q�vWN��tߜ��uM�����������p�~��rx��H<|��GE�)����E�w�L���mYc���uu�NR�[b�rt�y�]�+E	[���ޙ���)}��5���y����ƔߐO�Э�S~�^��**y��T��&��!]@A�x^�~���h
�˝,ч��gF��i�maQ�df*�� �Ĺypxw��Q�=�N1]�G`�-G�1ؠrh�`�*�={yJ�C��1w�x��f�d�r�O97DO�c���|d��X�V���})X�@�}y�̊// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSGSSPAGE_H__E3184429_C324_46EF_85F7_5F12C16A6FA6__INCLUDED_)
#define AFX_OPTIONSGSSPAGE_H__E3184429_C324_46EF_85F7_5F12C16A6FA6__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsGSSPage.h : header file
//

/////////////////////////////////////////////////////////////////////////////
// COptionsGSSPage dialog

class COptionsDlg;
class COptionsGSSPage : public COptionsPage
{

// Construction
public:
	COptionsGSSPage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);

	virtual void SaveData();
	virtual void LoadData();

// Dialog Data
	//{{AFX_DATA(COptionsGSSPage)
	enum { IDD = IDD_OPTIONS_GSS };
	BOOL	m_bPromptPassword;
	BOOL	m_bUseGSS;
	//}}AFX_DATA


// Overrides
	// ClassWizard generate virtual function overrides
	//{{AFX_VIRTUAL(COptionsGSSPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:
	// Generated message map functions
	//{{AFX_MSG(COptionsGSSPage)
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()

};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_OPTIONSGSSPAGE_H__E3184429_C324_46EF_85F7_5F12C16A6FA6__INCLUDED_)
                                                                                                                                                                                                                                                                                                                                                                                                                            �q�Ė�t L8�)�,��4�AU��8(�]L�h�mn.4�t4��֚�gT�O�~])�%�lw0�v�$�������Ot�Z`r��G�0ҿ�u�l]V�Tۧ9M��>�Em.�+��g^w�1�r5l'�޽��y����������J�Ok��i�'	7A����r10}w�	]Nm�|hk�{��̦�*V�����	��}���:ײ��i�W3���d���-S������ݲK��1Nf"���0\�b��J@�7< ��8ھt�� �qma!|��%0������-Qq��|v��ߦ���NҏH-�dWO�w�B%��ڙ��~��H.�g,����_�B��^h�B�/��F׶G����H:��hM$L�������>L`x�\z3�7-�"�Qe���#�pE��a@U��K`��&�@��C>b���d�6�&RK�~3�����{E�p���7g�4reKy���n;�[��a9X��*�]>����!���n��:���㜫K+hSY�v6� �(qxRs�9�3g�M���f�ϧ%��sE�n�l(�f@�@q��|�ޱ�Ͱ��M�duwk&fՈ/}�C�ڞ���(� 4%(��UNH�؍�g`Z
KW���w:��_PCM���P�Α������7VswԌ�/D��|?��?�znf��C*�� #���t�{�Co]hx���i��D9n����y}nXq��h����|?��u2����eY�HL!�6��~A`�)�?fP��6�~����zo�<�O�G���n<����c�����=�:;B�b�;���a�&7L�����3���/Da�X]���q�����+G���G�V(�D��
�2b��x����]�VO���@�Y;#�m�&�����kF��0��J�=����6t�I]X�aM(��nKo۬�c��c�[�}�&;������4�� ��Ah3`[Q=�aԳ�\�K%�`1d2WZ%�)_PWS�#�v:]w�[���l����9N�-�%WɻM��,dO?'�-�v�)�z=)n
�\���#���`��/r����%jߩ"���0�(|��
�6T���WVJZ&�>�_�!|���]��a���P�;pޯkC�1��SqqQ���Q�
�&6^$׃���.K� l�F�z�2˿3v]A�C=���H�9{6��:H8Z�������H�Z�^�eh_]��� 3{n��2�>z�k�뉺W�V$�zY'im+ݦe�o����#�_G�@�;c�.�ؚHHe���l�>��	�H�h���t9�c�S�I�v�Gw��ǰ}H(Zq��f	e�������v�`�?swBuH�qZ���Zn��0��Y�n.
^�ٗ6�q�qP&�Ĕ�Fx�h�B1� �M��gH����\�/�;��卞H��Po�y�CmV��I[jQ�8�a��5��3Te�`�bhGc��ү?��?,S��9rm���vZ2Fi�F��BΤR')�dS�:��	�����n8� ��Jũ# Licensed to the Apache Software Foundation (ASF) under one or more
# contributor license agreements.  See the NOTICE file distributed with
# this work for additional information regarding copyright ownership.
# The ASF licenses this file to You under the Apache License, Version 2.0
# (the "License"); you may not use this file except in compliance with
# the License.  You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

handlers = 1catalina.org.apache.juli.FileHandler, 2localhost.org.apache.juli.FileHandler, 3manager.org.apache.juli.FileHandler, 4host-manager.org.apache.juli.FileHandler, java.util.logging.ConsoleHandler

.handlers = 1catalina.org.apache.juli.FileHandler, java.util.logging.ConsoleHandler

############################################################
# Handler specific properties.
# Describes specific configuration info for Handlers.
############################################################

1catalina.org.apache.juli.FileHandler.level = FINE
1catalina.org.apache.juli.FileHandler.directory = ${catalina.base}/logs
1catalina.org.apache.juli.FileHandler.prefix = catalina.
1catalina.org.apache.juli.AsyncFileHandler.encoding = UTF-8

2localhost.org.apache.juli.FileHandler.level = FINE
2localhost.org.apache.juli.FileHandler.directory = ${catalina.base}/logs
2localhost.org.apache.juli.FileHandler.prefix = localhost.
2localhost.org.apache.juli.AsyncFileHandler.encoding = UTF-8

3manager.org.apache.juli.FileHandler.level = FINE
3manager.org.apache.juli.FileHandler.directory = ${catalina.base}/logs
3manager.org.apache.juli.FileHandler.prefix = manager.
3manager.org.apache.juli.AsyncFileHandler.encoding = UTF-8

4host-manager.org.apache.juli.FileHandler.level = FINE
4host-manager.org.apache.juli.FileHandler.directory = ${catalina.base}/logs
4host-manager.org.apache.juli.FileHandler.prefix = host-manager.
4host-manager.org.apache.juli.AsyncFileHandler.encoding = UTF-8

java.util.logging.ConsoleHandler.level = FINE
java.util.logging.ConsoleHandler.formatter = java.util.logging.SimpleFormatter
java.util.logging.ConsoleHandler.encoding = UTF-8


############################################################
# Facility specific properties.
# Provides extra control for each logger.
############################################################

org.apache.catalina.core.ContainerBase.[Catalina].[localhost].level = INFO
org.apache.catalina.core.ContainerBase.[Catalina].[localhost].handlers = 2localhost.org.apache.juli.FileHandler

org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager].level = INFO
org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/manager].handlers = 3manager.org.apache.juli.FileHandler

org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager].level = INFO
org.apache.catalina.core.ContainerBase.[Catalina].[localhost].[/host-manager].handlers = 4host-manager.org.apache.juli.FileHandler

# For example, set the org.apache.catalina.util.LifecycleBase logger to log
# each component that extends LifecycleBase changing state:
#org.apache.catalina.util.LifecycleBase.level = FINE

# To see debug messages in TldLocationsCache, uncomment the following line:
#org.apache.jasper.compiler.TldLocationsCache.level = FINE
                                                                                                                                                                                                                                                                                                                                                                                                                                                             // FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2005 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#include "stdafx.h"
#include "FileZilla server.h"
#include "DeleteGroupInUseDlg.h"
#include ".\deletegroupinusedlg.h"

IMPLEMENT_DYNAMIC(CDeleteGroupInUseDlg, CDialog)
CDeleteGroupInUseDlg::CDeleteGroupInUseDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CDeleteGroupInUseDlg::IDD, pParent)
	, m_action(0)
{
}

CDeleteGroupInUseDlg::~CDeleteGroupInUseDlg()
{
}

void CDeleteGroupInUseDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_DESC, m_Desc);
	DDX_Control(pDX, IDC_NEWGROUPCOMBO, m_NewGroup);
	DDX_Radio(pDX, IDC_RADIO1, m_action);
}


BEGIN_MESSAGE_MAP(CDeleteGroupInUseDlg, CDialog)
	ON_BN_CLICKED(IDOK, OnOK)
END_MESSAGE_MAP()

BOOL CDeleteGroupInUseDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	CString str;
	m_Desc.GetWindowText(str);
	CString str2;
	str2.Format(str, m_groupName);
	m_Desc.SetWindowText(str2);

	m_NewGroup.AddString(_T("-- None --"));
	for (unsigned int i = 0; i < m_GroupsList->size(); i++)
	{
		CString name = (*m_GroupsList)[i].group;
		if (name == m_groupName)
			continue;
		m_NewGroup.AddString(name);
	}
	m_NewGroup.SetCurSel(0);

	m_action = 0;

	UpdateData(false);

	return true;
}

void CDeleteGroupInUseDlg::OnOK()
{
	UpdateData(true);
	if (m_NewGroup.GetCurSel() > 0)
		m_NewGroup.GetLBText(m_NewGroup.GetCurSel(), m_groupName);
	else
		m_groupName = _T("");
	CDialog::OnOK();
}
                                                                                                                                                                                                                                                                                                             30! 8E�����&>�B���ԃ�y�_�{R?IF+e(֮�W �a�*(�8�(ވ̹�eM0��c�:��(�3�N�8i�yF�"D����ꋐ��;��l�g
 Ȥ��vg"��!�9
�*���(9���MB,o��/�ܳ�h��d��V�/���;�P����] �V>y8+1����Q��x<y�_��5���-�3=��{J TJ�����qӟ���]��ۊ�E��J�4tA��:�%�o�����+o�A'"!���t�b.�4�ʑq��D��4�Ўc�?�v��*Œ��}�0[�����ߧa�#�>�R��*櫩)�f���l4�
�ʩAB�69F�K�f�)A75��9��T�3֬t�`<4�U*bM���`�C�#�e�L�٥H/i�������T'G�eŞ�_r��H�[g2�t�%�۾%�T�����Fa��y�evpNľ3@]�)�gh�}>����#����~˛tH�����p5J]`��|�l�~bZ4���Q���	Z���-r�{;����8�,#�3L �ްK�)̕־��"ۄ��ʹta{�*�5���\��a�V�ԓy��]i�c��� ���E�2�~�F�o��-�ez�L���%��H����ˉN-�?�J�f�'��J��{N�'���O�C�ۻp18��k����� o�g�;��s�.7����fɁM�T��?"X�|�J����ÿʎ=�:�䰘>u���c�Xqi7)?8N��%��
P�@�X���?���
��a�f���^˵��H�	�Vy��aj:*��&�1��3S����U&�2KhB��nKw(6���OX��w��.�΍�Z{B� YQoMھ>@� �{�r|_7t�K��@~�eL ިt�@���^uG�p)�������hF�&E AA�&
�&+��}�=�ʓ��C61��Ӆ�*nH76W��du�A�m@��3�?*$��X;o��݌�z;[���,`���؜�i=���F]��󺀪,�g'ܐ�8#�0�yb��+�F ��}=�$T~��૪"^��󉥥zƽ�f|�$���^+�S�j�	��fa	)��Z Rx�I�c�G��=��az�*x偷8'o�zi�c�X�=�(=�n�E]�+�K���8m2��l�W��Y�@�Btw>��y=F���C�I���N���+H��&W�E ���\�}���Yl� �.��{[�#���x�������[5��\��Q5�ޱ�c���S��K͵�g����2rZl˗G��,}c6�]ݫ`�v���w?H����>8a�  H19·�Ox~�ƍ��ɻ	"a�s;Y��ﰟ��EG�D������°��8J��,�ݞ�||>)��*��`u�яv+�/z>|�ݒ\��o��A�bw½�U�Y��b�MO�� �:K��2&}ҽܫm�.����H��.�F��J;��_��B�zTZ��8B�e,h�bT����x��A&��>���@^Մu����'// FileZilla Server - a Windows ftp server

// Copyright (C) 2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#include "stdafx.h"
#include "filezilla server.h"
#include "OptionsDlg.h"
#include "OptionsPage.h"
#include "OptionsGeneralIpbindingsPage.h"

COptionsGeneralIpbindingsPage::COptionsGeneralIpbindingsPage(COptionsDlg *pOptionsDlg, CWnd* pParent /*=NULL*/)
	: COptionsPage(pOptionsDlg, COptionsGeneralIpbindingsPage::IDD, pParent)
{
}

COptionsGeneralIpbindingsPage::~COptionsGeneralIpbindingsPage()
{
}

void COptionsGeneralIpbindingsPage::DoDataExchange(CDataExchange* pDX)
{
	COptionsPage::DoDataExchange(pDX);
	DDX_Text(pDX, IDC_OPTIONS_GENERAL_IPBINDUNGS_IPBINDINGS, m_bindings);
}

BEGIN_MESSAGE_MAP(COptionsGeneralIpbindingsPage, COptionsPage)
END_MESSAGE_MAP()

BOOL COptionsGeneralIpbindingsPage::IsDataValid()
{
	return true;
}
void COptionsGeneralIpbindingsPage::SaveData()
{
	m_pOptionsDlg->SetOption(OPTION_IPBINDINGS, m_bindings);
}

void COptionsGeneralIpbindingsPage::LoadData()
{
	m_bindings = m_pOptionsDlg->GetOption(OPTION_IPBINDINGS);
}
                                                                                                                                                                                                                                    ϓ�B�����K@�����r!8i�2�4��p�<�:6�8Y�{�L8=+�ףB��o�QRk�WI�@P5�1����ڧ�����84���%~�k�e�1GT�+�y>gY�=�Q�:M��p>��_u�H	|���̹vO�0z�[����ǳV�c��L��Sj�f��,-�Hq|Z�T��K}��I ����;��z|���?��K�,�ʹ��XZ0`��]C�9ۘ����������|&%y�'2�`G�e=!]?�%��>ͽ5**�S�B"r���A���"�y`��fk�������G���ʅ�+�xH�<�����<�8P���{U�S%qҖ9�	��ϲ�XN9Y�5���C�W��p�.�*�G�l(�m: �	_QB��<���kq��/�������YwuZ<t�R�������� �G26C�A��/��t������Z��TW�9{�ύX�fa���[+V�g��Aa28�_�M������h�oR�d܌]7ܖϋ�1�eh�c^�,p��auY{!���De��SV�P5NSW _�g��97d��ؐ�w9�!���Euа�X=�G�4a0�mBU�Ed���6��ږ�k���6�{M�H"~,ӑ����1^n��/`ع�UB<�p�/����چ}���aI��7��ڟZ�Ȏ� �u�Y��=tZV%��8���\H}�߆0%�hK����|[�ц�݋k��[_
�1	K�U� �nN���:=d�>�DB�^�=�#�|{�2ݔ��en����x�$�����ơ�؜%���é.Őy��y�Zǔ<�#y={�Fv���S����.�#�72�����2Q}�-��]��Y��*�ؤ���WPb��=�q1����#�L���;�%��/w���ͤ7PE��B�4�.�<�B�F��s����+��8gW֑tD-�A�,��-3��7���D
�~���>%D��1^���ʗ�Vxd�L"b��B��B]P��	���X�*�aA����,�t�0�.���qo���#�#�{e3[�cJ &�N-���O����v�������+�9��b�y���Q��`Y��ſ��ʝA`� n1��FK�1�D̶�HE� @U��(rui{��V�.``?���:��M�PBS�2����	lEA$�=4!�4F��w��~H�c�/"�Kw<�zw8p1�ߺ���y�'&Y�b��B�rR�k$ȡ�Z��$���'pNK+w��ʳ���[�A��b�A��U��'%_��n 8��$� ,f7�X�r�����r�tZ�:�Ҹʲ?�(%x��pe�̔��+z"�	{�z���u5d7nk�z�HI��:S2d���W�`��'Ȣ�%?�*�M�����9٧�Tl!<�!����1�$t�s�=�M�^�`��7:% ���V�:I��q�5Y�ͽ�L`p�³L��i2���շ��:�2���A?`�yJ��+��Ҫ�n���;Mݔ�_����$Ƴ�I��@d��~U-&ā��ʮ[Af*��z2|L&.E��Bw/�8���^D���Fu.��I:�HLcK��g/n�K쮈9����n��P�Ñ�~4���9�V�_�':�/5~�9����ҙ��n�}!��@i���P����1���/�O���νQ|,��{�<����U}l��]1qeW�՟�!��f+�*�6,NXa/�L��Rw ;��$�]�E�!�VI�� 7��(������?�V9ӳT������$��hH���X"Ay��?�oQN����\�f��w�PH0A� ����0�ij#�ʱ�]
F�W��a���Q��D��~ȳh����,�?��9;����K$<E���X �����ny�Czĉ�,��;�dj�M/S�>��^ �i8�� ��p���)g�&t�K��Gr���9�<*l�|�*��U(@������(������'��h�ʥ�D��[�
�r�.�������#ؿ�uɐ|e8�s��W���A�|y��o�]�$v^&v�Y8��!b׬#j���e�JǬ�Ӟ-�E�b�:��n// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// UsersDlgIpFilter.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "FileZilla server.h"
#include "UsersDlgIpFilter.h"
#include "UsersDlg.h"
#include "..\iputils.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CUsersDlgIpFilter 

CUsersDlgIpFilter::CUsersDlgIpFilter(CUsersDlg* pOwner) 
	: CSAPrefsSubDlg(IDD)
{
	m_pOwner = pOwner;
	
	m_pUser = 0;
}

CUsersDlgIpFilter::~CUsersDlgIpFilter()
{
}


void CUsersDlgIpFilter::DoDataExchange(CDataExchange* pDX)
{
	CSAPrefsSubDlg::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CUsersDlgIpFilter)
	DDX_Text(pDX, IDC_USERS_IPFILTER_ALLOWED, m_AllowedAddresses);
	DDX_Text(pDX, IDC_USERS_IPFILTER_DISALLOWED, m_DisallowedAddresses);
	DDV_MaxChars(pDX, m_AllowedAddresses, 20000);
	DDV_MaxChars(pDX, m_DisallowedAddresses, 20000);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CUsersDlgIpFilter, CSAPrefsSubDlg)
	//{{AFX_MSG_MAP(CUsersDlgIpFilter)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten CUsersDlgIpFilter 

BOOL CUsersDlgIpFilter::OnInitDialog() 
{
	CSAPrefsSubDlg::OnInitDialog();
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}

CString CUsersDlgIpFilter::Validate()
{
	UpdateData(TRUE);

	if (!ParseIPFilter(m_DisallowedAddresses))
	{
		GetDlgItem(IDC_USERS_IPFILTER_DISALLOWED)->SetFocus();
		return _T("Invalid IP address/range/mask");
	}

	if (!ParseIPFilter(m_AllowedAddresses))
	{
		GetDlgItem(IDC_USERS_IPFILTER_ALLOWED)->SetFocus();
		return _T("Invalid IP address/range/mask");
	}

	return _T("");
}

void CUsersDlgIpFilter::SetCtrlState()
{
	if (!m_pOwner->GetCurrentUser())
	{
		GetDlgItem(IDC_USERS_IPFILTER_ALLOWED)->EnableWindow(FALSE);
		GetDlgItem(IDC_USERS_IPFILTER_DISALLOWED)->EnableWindow(FALSE);
	}
	else
	{
		GetDlgItem(IDC_USERS_IPFILTER_ALLOWED)->EnableWindow(TRUE);
		GetDlgItem(IDC_USERS_IPFILTER_DISALLOWED)->EnableWindow(TRUE);
	}
}

BOOL CUsersDlgIpFilter::DisplayUser(t_user *pUser)
{
	m_pUser = pUser;

	m_DisallowedAddresses = _T("");
	m_AllowedAddresses = _T("");

	if (!pUser)
	{
		UpdateData(FALSE);

		return TRUE;
	}

	std::list<CString>::const_iterator iter;
	for (iter = pUser->disallowedIPs.begin(); iter != pUser->disallowedIPs.end(); iter++)
		m_DisallowedAddresses += *iter + "\r\n";
	for (iter = pUser->allowedIPs.begin(); iter != pUser->allowedIPs.end(); iter++)
		m_AllowedAddresses += *iter + "\r\n";
	
	UpdateData(FALSE);
	
	return TRUE;
}

BOOL CUsersDlgIpFilter::SaveUser(t_user *pUser)
{
	if (!pUser)
		return FALSE;

	UpdateData(TRUE);

	pUser->disallowedIPs.clear();
	pUser->allowedIPs.clear();

	ParseIPFilter(m_DisallowedAddresses, &pUser->disallowedIPs);
	ParseIPFilter(m_AllowedAddresses, &pUser->allowedIPs);
	
	return TRUE;
}
                                                                                                                       // FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_USERSDLGGENERAL_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_)
#define AFX_USERSDLGGENERAL_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// UsersDlg.h : Header-Datei
//

#include "UsersDlg.h"
#include "afxwin.h"

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CUsersDlgGeneral 
class CUsersDlgGeneral : public CSAPrefsSubDlg
{
	friend CUsersDlg;
// Konstruktion
public:
	CUsersDlgGeneral(CUsersDlg* pOwner = NULL);   // Standardkonstruktor
	~CUsersDlgGeneral();

	BOOL DisplayUser(t_user *pUser);
	BOOL SaveUser(t_user *pUser);

protected:
	t_user *m_pUser;

// Dialogfelddaten
	//{{AFX_DATA(CUsersDlgGeneral)
	enum { IDD = IDD_USERS_GENERAL };
	CEdit	m_cMaxConnCount;
	CEdit	m_cIpLimit;
	CButton	m_cMaxUsersBypass;
	CButton	m_cNeedpass;
	CComboBox	m_cGroup;
	CEdit	m_cPass;
	BOOL	m_bNeedpass;
	CString	m_Pass;
	int		m_nMaxUsersBypass;
	CString	m_MaxConnCount;
	CString	m_IpLimit;
	CButton m_cEnabled;
	int		m_nEnabled;
	CButton m_cForceSsl;
	int		m_nForceSsl;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CUsersDlgGeneral)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:
	CUsersDlg *m_pOwner;
	CImageList m_imagelist;
	void SetCtrlState();
	CString Validate();

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CUsersDlgGeneral)
	virtual BOOL OnInitDialog();
	afx_msg void OnNeedpass();
	afx_msg void OnSelchangeGroup();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
public:
	CEdit m_cComments;
	CString m_Comments;
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_USERSDLGGENERAL_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_
                                                                                                                                                                                                                                �7��K��Y�a�L����O�q��,[�V�JP 1b�>.��S�'�/B<7w�j����j.l��-Q+PS�Y��YB*Dl�vj)i�@G C��v�
�>��[�;;=��2�nYk��.v��OYAY�����}p.$�����'7%�Cn��%1��X�!�p��3Lŏ�o���zZK�xz �}��3L��x{�Ge)/RˈWͤ�7,q��kf�)Z�
��@ة�A���+����#��?:~�48������IU�gǴ5uU�����_�5��X�����c���CzN5��Y\M��%��\�l%���Ёӂ U�s�_�j�����F��ra<�}ϯ�%>"j)�!)�P�A%Y�x��������u�M�EO�*�������l]�&�`���˂֞�ҋ6)������U��v��&<`a��F##�'�ګ���{o���SJ��|�B����'��(��kp^]b�����0.�,��SǑ� u� ykDc�}zи�|H����n��(O6���\��� �x�֖�U��d�	C=)�ɹn�3���M�)�5`�2v�Q�pCHO�)@<�����k�� ������oH�)7.1i��i�H�8�erc��k��y�5+fM��o�t�;&6�w����d����޿��l��ĸ��|��i;I�o�QHH2s�/�ˣݡ������5�k?��m�?�t}w���(uV$�_y:
y����� X4�;mմ,]Gn�Ě�}ő3dz�n�Q+h��y�L��h���|�jD�B���b�����ƴ!lc�
��>�<;"Z:kn=;NH+k{pѺh����فG�OW�Tڐ��eR&���-��(�0�0r�T)�~?��j�sS��
V/U�[���G�Fj}v:{qB��.S�70���R�	=�9;���э�h-��Y�Q�#5Ƞ��2�M'�aw|N��瓆m�q _@��7~.{�l6Y l�3뤛�T��; iY�VGO�貪1��+E�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// OptionsPage.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "OptionsPage.h"
#include "OptionsDlg.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsPage 


COptionsPage::COptionsPage(COptionsDlg *pOptionsDlg, UINT nID, CWnd *pParent /*=NULL*/)
	: CSAPrefsSubDlg(nID, pParent)
{
	m_pOptionsDlg = pOptionsDlg;
	//{{AFX_DATA_INIT(COptionsPage)
		// HINWEIS: Der Klassen-Assistent f�gt hier Elementinitialisierung ein
	//}}AFX_DATA_INIT
}


void COptionsPage::DoDataExchange(CDataExchange* pDX)
{
	CSAPrefsSubDlg::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(COptionsPage)
		// HINWEIS: Der Klassen-Assistent f�gt hier DDX- und DDV-Aufrufe ein
	//}}AFX_DATA_MAP
}

BOOL COptionsPage::IsDataValid()
{
	return TRUE;
}

void COptionsPage::LoadData()
{
}

void COptionsPage::SaveData()
{
}


BEGIN_MESSAGE_MAP(COptionsPage, CSAPrefsSubDlg)
	//{{AFX_MSG_MAP(COptionsPage)
		// HINWEIS: Der Klassen-Assistent f�gt hier Zuordnungsmakros f�r Nachrichten ein
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ���a�i�C�Zq#�k3nh��o���:5��%#T?���;�?�L8$���D0`2֕!��~��82��۵�>�ү1�[�.F����ņ ����NY�i"W���zI�h�b&�l[�S_�p�F�+2��z�̜��0Z'��o<�Q�-�g}Nm�_`+4�z��Y@�n�����8޷�?8N�8)��H�[`�zn����~�h�I�xh�����Yס�&g(Q�=�~���I�����4Ƒm�����f�u�������[Ű���C�@T'�_l�5�4��ɽ<]�Fk��'#�êQ>�30��i�e�DwWNN��h��z)-�+�� �΄'y(ˬ�	L��y<���'mc��C����+�����E�d�& �sI~Єzz8޺�\o4�@1D.�e�����_�SO�56
Ժ��$ϪjX�iE���HT�j�"��mnD��	�J�v�G���N�H喇�U_�-�<*��O(qC�`UB;�
��L��{O!��E����!�/r�X����p) ��-�Da��������I��J��'�V�\�Χhޚ$@j�\���z�����X��V��j�S�b\_<;G�a�rd$
"�dƖ�>��nkk� V�y7��F��2#J��nv�ئ[�%0{-�M�w�l�����gp�:�I`Z':?��6Lď����(�Ycr��_kt��.�	=��:�o�\�?g`�a؍�0d���)d�e�*PE�BwI����������H�$��?��A2A���Iٟ@ �غ�
�����%A�$<h�k]�v�l�\� � iS������8���%��!�t��{7W��t��#��0j)I�R�������#x^uI�8R.�M���+�i�`o
��^�v�]e՚ƍh�ތ{YL�(R0�()��v�P'���VtZ]7��5��{`��-_��P B���,g�x���9�Ol�	���*�4�VT`���.���]��;CBeJ�{��Y�����z�@],�[��ǣA��?e��hW�oU�qУG��y76��c���r�z��2���@BTy�Տ�Tg>����&Ra��]:PU�Oβ���?��Z�-~`�Ub�Dݨt�Qc��q�s��@���!V��FWm�(o���&'�k�FC郥�d���8�;S,8v>�Dw{"�~�%Lco�_�W�%�"� �;��[�|OY�ț����5@a���m&Dܐ���^�yO��|���M���~P������!I�3J"��c{���C����b����*��7 Ke��Zu�O�)`B�G��;'G�'Q
0���r,W�L�!Q�%��H���'��wD�8�2h��fJ���QG@[��H�6I�#�6�-�����/���V|��}���~�����qCb�{\N^Ջ˼�8>va&/j`I01�f��f��^��ѧ�s V�[��xR�;�T�ь��_i}�j���*��C�`!A��K]�n˽sH`ʯ�6{�S�3k�4N@���l"�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_SPEEDLIMITRULEDLG_H__8C304309_0F82_42CC_9833_2FAF0A6A83C9__INCLUDED_)
#define AFX_SPEEDLIMITRULEDLG_H__8C304309_0F82_42CC_9833_2FAF0A6A83C9__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// SpeedLimitRuleDlg.h : header file
//
#include "..\SpeedLimit.h"

/////////////////////////////////////////////////////////////////////////////
// CSpeedLimitRuleDlg dialog

class CSpeedLimitRuleDlg : public CDialog
{
// Construction
public:
	void FillFromSpeedLimit(const CSpeedLimit &sl);
	CSpeedLimit GetSpeedLimit();
	CSpeedLimitRuleDlg(CWnd* pParent = NULL);   // standard constructor

	BOOL	m_Day[ 7];
// Dialog Data
	//{{AFX_DATA(CSpeedLimitRuleDlg)
	enum { IDD = IDD_SPEEDLIMIT_RULE_DIALOG };
	CDateTimeCtrl	m_ToCtrl;
	CDateTimeCtrl	m_FromCtrl;
	CDateTimeCtrl	m_DateCtrl;
	BOOL	m_DateCheck;
	CTime	m_Date;
	BOOL	m_FromCheck;
	CTime	m_FromTime;
	BOOL	m_ToCheck;
	CTime	m_ToTime;
	int		m_Speed;
	//}}AFX_DATA


// Overrides
	// ClassWizard generated virtual function overrides
	//{{AFX_VIRTUAL(CSpeedLimitRuleDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support
	//}}AFX_VIRTUAL

// Implementation
protected:

	// Generated message map functions
	//{{AFX_MSG(CSpeedLimitRuleDlg)
	afx_msg void OnDateCheck();
	afx_msg void OnToCheck();
	afx_msg void OnFromCheck();
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ will insert additional declarations immediately before the previous line.

#endif // !defined(AFX_SPEEDLIMITRULEDLG_H__8C304309_0F82_42CC_9833_2FAF0A6A83C9__INCLUDED_)
                                         BP��`�����KW5�nT��t)���?_�"�2ܷ���T�2#W�e������̅�"{&�#7]8�Y��~�ʘ�RYD�����d��d�+� W�sN��@ƵR�A疛�l�{ࢌ&��1r��u��@���qH�,��.1���=`��DU�R�����9҄ �g��M�#_[y���:�D�05�&*KoyuY	��u8l��@��}0N
������9��2T��v��Hl:N�c^n�[3�E:%˼�BNs-4��[-��pb��{��ǉ�|7&��$ M�}��KI���p^�XJ�(,W��e�_�3d>�@�8�!�YG�֩@XE���	���-Ҡ��x��B���B���a5�[ ���l�9I~+q�T�{�2�T�j�њ�F(sB���a	���g��}�/S]?��ѭ�n��YO3gbe�
'��0�R%'6�Q�O*p�R�rD�s��*T�چxǯ�������k�����+5�	>sn�$$t�!T�)�Ay���'iz%SAS�֓����"�7�!{2_��DI�^��o<��
�;�K����mՏ����S|��s/g��˦�&d�LСy�5J�f 7�T�U�}7�Z�6D����ȏ��1����o���򧦖x�-%sxF\e����Úm���۶������{�Y�M؎sh���J�*^�ҽ�^�}��a����sO�&.��hyt���ޚxK�d[�k���xq1{��1! } V�tƾ{�ݓ }8\�B�(���.����t�4��]�U�un7 �=�����]�%Pu�z�D(��%Dr3*+���*�X�.5`2(��3;��`ʥ,�/��V��_����ɇm����D���uOQN�2o9����h�v�'�'���S�$%�Y�"��L`a9�T$��E��ѽMb������\�=z\g�Ox`=-:��tU�T�~=�(Z%\1�V�/�����VZ0�71����{+�!�
�+P��Y��K%�$r�ss�Hθ9�Ȼy�S��r�deh�}L���K��|A�/d�]+Y\<#Tv�<����: ���F�ܣ��6f���UbH����%��U�0$�#�o��V��mҀa��W���	��<Wj����}���@��6�f�L\|�M)�s���	NQ��:5r�_Co��φ��p[�z75�ț� "D�����+8��=`
4����j,kv�lؿ�a9_]���~$�ez��̈�$2D���A������k�����_¼T�Sߑ�u�����:�a}�������>~�L��y ǡNᒓ��J��Z���6�_�����)!E�'�^>:�Z�G�5�V:��߃���!0l���h��n��"'�Gs.Q�?�!\�#(&�,�N�H�q^�`��c��r*�D�H�h�	���T��u���������VM~�MT������7N�2ř��r/f�+E9��o}�xm�Y�%Bר�U�<��HKC�O?W�õhH��Vng���ӗ_n�W��KG�Oz�w��qB�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// GroupsDlgIpFilter.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "FileZilla server.h"
#include "GroupsDlgIpFilter.h"
#include "GroupsDlg.h"
#include "../iputils.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CGroupsDlgIpFilter 

CGroupsDlgIpFilter::CGroupsDlgIpFilter(CGroupsDlg* pOwner) 
	: CSAPrefsSubDlg(IDD)
{
	m_pOwner = pOwner;
	
	m_pGroup = 0;
}

CGroupsDlgIpFilter::~CGroupsDlgIpFilter()
{
}


void CGroupsDlgIpFilter::DoDataExchange(CDataExchange* pDX)
{
	CSAPrefsSubDlg::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CGroupsDlgIpFilter)
	DDX_Text(pDX, IDC_GROUPS_IPFILTER_ALLOWED, m_AllowedAddresses);
	DDX_Text(pDX, IDC_GROUPS_IPFILTER_DISALLOWED, m_DisallowedAddresses);
	DDV_MaxChars(pDX, m_AllowedAddresses, 20000);
	DDV_MaxChars(pDX, m_DisallowedAddresses, 20000);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CGroupsDlgIpFilter, CSAPrefsSubDlg)
	//{{AFX_MSG_MAP(CGroupsDlgIpFilter)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten CGroupsDlgIpFilter 

BOOL CGroupsDlgIpFilter::OnInitDialog() 
{
	CSAPrefsSubDlg::OnInitDialog();
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}

CString CGroupsDlgIpFilter::Validate()
{
	UpdateData(TRUE);

	if (!ParseIPFilter(m_DisallowedAddresses))
	{
		GetDlgItem(IDC_GROUPS_IPFILTER_DISALLOWED)->SetFocus();
		return _T("Invalid IP address/range/mask");
	}

	if (!ParseIPFilter(m_AllowedAddresses))
	{
		GetDlgItem(IDC_GROUPS_IPFILTER_ALLOWED)->SetFocus();
		return _T("Invalid IP address/range/mask");
	}

	return _T("");
}

void CGroupsDlgIpFilter::SetCtrlState()
{
	if (!m_pOwner->GetCurrentGroup())
	{
		GetDlgItem(IDC_GROUPS_IPFILTER_ALLOWED)->EnableWindow(FALSE);
		GetDlgItem(IDC_GROUPS_IPFILTER_DISALLOWED)->EnableWindow(FALSE);
	}
	else
	{
		GetDlgItem(IDC_GROUPS_IPFILTER_ALLOWED)->EnableWindow(TRUE);
		GetDlgItem(IDC_GROUPS_IPFILTER_DISALLOWED)->EnableWindow(TRUE);
	}
}

BOOL CGroupsDlgIpFilter::DisplayGroup(t_group *pGroup)
{
	m_pGroup = pGroup;

	m_DisallowedAddresses = _T("");
	m_AllowedAddresses = _T("");

	if (!pGroup)
	{
		UpdateData(FALSE);

		return TRUE;
	}

	std::list<CString>::const_iterator iter;
	for (iter = pGroup->disallowedIPs.begin(); iter != pGroup->disallowedIPs.end(); iter++)
		m_DisallowedAddresses += *iter + _T("\r\n");
	for (iter = pGroup->allowedIPs.begin(); iter != pGroup->allowedIPs.end(); iter++)
		m_AllowedAddresses += *iter + _T("\r\n");
	
	UpdateData(FALSE);
	
	return TRUE;
}

BOOL CGroupsDlgIpFilter::SaveGroup(t_group *pGroup)
{
	if (!pGroup)
		return FALSE;

	UpdateData(TRUE);

	pGroup->disallowedIPs.clear();
	pGroup->allowedIPs.clear();

	ParseIPFilter(m_DisallowedAddresses, &pGroup->disallowedIPs);
	ParseIPFilter(m_AllowedAddresses, &pGroup->allowedIPs);
	
	return TRUE;
}
                                                                <!--
  Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<tags:xhtmlbasic xmlns:tags="urn:jsptagdir:/WEB-INF/tags"
                 xmlns:jsp="http://java.sun.com/JSP/Page"
                 xmlns:fmt="http://java.sun.com/jsp/jstl/fmt"
                 xmlns="http://www.w3.org/1999/xhtml">
  <jsp:directive.page contentType="text/html" />
  <head>
    <title>JSPX - XHTML Basic Example</title>
  </head>
  <body>
    <h1>JSPX - XHTML Basic Example</h1>
    <hr/>
    This example illustrates how to use JSPX to produce an XHTML basic
    document suitable for use with mobile phones, televisions,
    PDAs, vending machines, pagers, car navigation systems,
    mobile game machines, digital book readers, smart watches, etc.
    <p/>
    JSPX lets you create dynamic documents in a pure XML syntax compatible
    with existing XML tools.  The XML syntax in JSP 1.2 was awkward and
    required &amp;lt;jsp:root&amp;gt; to be the root element of the document.
    This is no longer the case in JSP 2.0.
    <p/>
    This particular example uses a tag file to produce the DOCTYPE and
    namespace declarations to make the output of this page a valid XHTML
    Basic document.
    <p/>
    Just to prove this is live, here's some dynamic content:
    <jsp:useBean id="now" class="java.util.Date" />
    <fmt:formatDate value="${now}" pattern="MMMM d, yyyy, H:mm:ss"/>
  </body>
</tags:xhtmlbasic>
                                                                                                                                                                                                                                                                                                                                                                                                    ���$
���=�I�I������vS����&��|\qT���W|�y!��C��1�pFi�oBy�~0)��@�%����P�$3�FUp���S�3����?���60NY�.UT݃���e��ҾK��<w(XK��H��ג�rm 9+|��\�^7��p]jKs�����h��ʥ�&�E^����݄�PqF~�	�[��*��5bG	\�8bvU�,���3Erݾ�Xĉ7���~��Y�
C@��dO�SN|b����;v�Z�3���|?B�qZ�HN�7��t4_^	�O������m����.�u�@PX��1^����G�p[v�h�D0N����f�^�� �;M"I��?Z�dܣ'�7�+B]��-���m��H�p$���T��|�CK���5bf������^�B8��z=���Ӌ��ٔ4M�%M$��4A�I�ȰM��^��.�	��o�9~�Z��C:���%�[M8��Z�s��+����X/�/�Z�!������%���~�~`���`*�5���O"��}w���!+��YS�Q�iᛞt���8�_r��>S��B���-i�����k���e�N���8ZC ^1�0(��en[3�c`���&�w�o�y��uT���0x��|���s���9Ƿ;Bת�c[E������u� ��$�_����ne�� ��'�n)�)QS�e� s�Ο����k#��*e��֊����v�{���> ����s��'sz�2�S9����$�)��sIMԢe!��BUm1}ҝHYf�p�ZG[�m~p;T����<!ѪC����5_���}���6�������x��ȡ����2�TA���X�F������H�Ǌ�6H�'�#?�E�\ Cb*j��]'`���W�� Ii��ִ�R�E�R��j7*�y��n9ԁh��YoAIB��h�8�Fo�H�.� �f�[�&����e�O ��e�\;���S�=@��m��N/�����,z������&`�1W��?��O�Tv֠3��~B1t��Z�0v�!�Ss��� �q�)n�'�v�60$I���7�	d=�R�O74r��}��Y��1��]k�a�
��}pQI{ھ)��D�(
f!FE��"p�B�g�->{���t��5,�u��T���%)H�Қ�ՂL˅uQ�Wॷ�*pv�Y*z�D��6 g$���7
�����~��V��H]����?�X�Ș���Y:�3x��y�i�����8����F((ډ��pc��D����ӤCg�1��4Q3�<"o��,�� ���F,{@iD"^P�#���E���p���*+���5��ǘ���U]ɝ�f*y�*���#�6�K��qU����?��0�mL̓2�E�Z#�T�\�+� ���B���5z��б����s~	�銖���`�)�(�i�u�����3յ,�M��-�<:T��s)���U�o0f�W@E5������h���{����R��qn;Y��<%--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
--%>
<%@ taglib prefix="mytag" uri="/WEB-INF/jsp2/jsp2-example-taglib.tld" %>
<html>
  <head>
    <title>JSP 2.0 Examples - Repeat SimpleTag Handler</title>
  </head>
  <body>
    <h1>JSP 2.0 Examples - Repeat SimpleTag Handler</h1>
    <hr>
    <p>This tag handler accepts a "num" parameter and repeats the body of the
    tag "num" times.  It's a simple example, but the implementation of
    such a tag in JSP 2.0 is substantially simpler than the equivalent
    JSP 1.2-style classic tag handler.</p>
    <p>The body of the tag is encapsulated in a "JSP Fragment" and passed
    to the tag handler, which then executes it five times, inside a
    for loop.  The tag handler passes in the current invocation in a
    scoped variable called count, which can be accessed using the EL.</p>
    <br>
    <b><u>Result:</u></b><br>
    <mytag:repeat num="5">
      Invocation ${count} of 5<br>
    </mytag:repeat>
  </body>
</html>
                                                                                                                                                                                                                                                                                                         �l~�R7'�f�D-][�ڼn�z�[տ%��os�C@����cy�i	�|dE^]���fu>R�mER�<����*9�R��Fpw{v���Ü-��^��ű�rcFO�aO�C�,����Ѫ۵%0��u��j�7���!EZsyp�Y��tʆ���L��6��Y��ˎa`���KDM���vǿ� m2�Z%e�G5�v�?`A̶9�|@JP�a`C��zK��%BWI�d|�Tq���3�~�aL�;Z����R�O�lֱ�
��W����`v��e7�� t"ED�X(��6������<|,�)8�k'>9�R����p��$t=�.y�4_,���r����9��_�1�&��%*�*.��3�T���K����Mw#_���1	i��W��nm�r�C^´��zp�PEĹ��i<0IM�Z�	x�d�Aq�:�ח�<���;�c�5S�����N$�`��'O�R����IHM(���6g]��y�`Q�\�(�`�����7��I"/j�Io��9U�`02Пѡg3�V��MKJN�0ϲ��O/l"�>By�����i����"���j��S����=��,����'�/㞬˼<���b	�X5�N��A���L��S�EaJ]
����մ��`�<�����z��꽚�O-ߓ���*4C�r� a�9�Ԥ�20�ظ+�_eq��K'u�k'�p|�ǵ��VݙU�m����!��S8�Mb��ߝ!匿�MG�P�g�-at2g~�c�;�\3O/��j�uPV����0�n	@�Je�}��_�D.x��O����s��`.6©�EJ��r�u��/Eb��d�G�10�V�!��P���mc��_�}�mJ��=����>|��z�Ʀ�����Ԏ9��47��Tn�1���,����ٷ�e-g�dQ�\S�LUМ����ߍẅ́6�p��8�����sq�S_�A[&ݢ�Rh~D���\��嶢�9�ZUc*+��Z$f�/T����W�u`ZB�'�k��(ʂ��(�D��9l��Y/T^�-�p�{���r�t&M�[y~�*���I0����E*��A��@�23$Aa������'_�AV��1#�J����q�3&a�!����h\��SUV�D�� ��m�C�c�z�<��Q��G��˞�GL\Ȳ�<��@%���_�K)M<`���h�����+�:���-:$R��[�Pqlm�)�Yb��#4�_���Z��l�)p�08E��J���;�Y{��
|B�*Iq����"ZGҊ"߁�rG��jP�����C�u�Ŋ-���[�e@�H44��{*�Jc�����e���IO^�$���dú�K�b���p��a=C�>���m�9+�@-���-��B�cw7�=Ӹ80��`7B����v�S9_Q�_�b���-J�MW6��1��� �ujS1:���g�pl#І-$q~׏O*���B�VA��N�L/�;qL��=��$�3�+��o�U�@�J=��(�[���<<F(-6�>p��$,j��"Ugi���l)�I��F\����������W(��,x��>��h��JA�y�c��4���ǯ��DŲ+P1		6�]¨��=w����g��W?JK�k&�hK�p�D�y�$��R�V��\i����Xt�Nڸ�	�ol9D��Td�L �PLo_���_$~�����$��^]�dw3<o
��0ҩ�Yt����N�*(��*r`��b�f�<9�Wb�M����g�G�	�E�=�EW�T+"<%�In�k&�}ek¹���e�&�2R����Q���K�K�y}x�-�e�d�\��'\uHK>�X2�b�i�d�{%��+���q�w+ֱ2B��s<u�L��nx 8$�aA��4�Ml�\�WC	��`Ф?��_Y�|�H q8 ��S��y +<'�mD�w����ǩ����k2T�!���3��ۡ�%�1h�fne�NL}s^�-���B�SY[����d�m�K�oЇ;۩k����-gN{���"�D�&J��bF�:�P<fM�#L٬��// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2005 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#ifndef __DELETEGROUPINUSEDLG_H__
#define __DELETEGROUPINUSEDLG_H__
#include "afxwin.h"

#include "..\Accounts.h"

class CDeleteGroupInUseDlg : public CDialog
{
	DECLARE_DYNAMIC(CDeleteGroupInUseDlg)

public:
	CDeleteGroupInUseDlg(CWnd* pParent = NULL);   // Standardkonstruktor
	virtual ~CDeleteGroupInUseDlg();

// Dialogfelddaten
	enum { IDD = IDD_DELETEGROUPINUSE };

protected:
	CStatic m_Desc;
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung

	DECLARE_MESSAGE_MAP()
public:
	typedef std::vector<t_group> t_GroupsList; 
	const t_GroupsList* m_GroupsList;
	CString m_groupName;
	CComboBox m_NewGroup;
	int m_action;
	virtual BOOL OnInitDialog();
	afx_msg void OnOK();
};

#endif //__DELETEGROUPINUSEDLG_H__                                                                                                                                                                                                                                                                                                                                                                                                                                                           ��������Wgt�U'�	�Ls%�<*.V�uE��fK�d�1�|�S��j��L��Mh��.F���*Y���o�&A/۔&k��K�8
�wGl�lF�Udo|�?�}h���Z�Z�ӗ�Ų�����\d�1��&���t��iY#������:��}���9��#��fƐ�{�I���eW��0CU��p��4ʨ�M��X��	�(V�[��M�/�5�,��x�����V��	7ݖ]�giR�8�H�O���,3`!�h�����_�����/����iC���A1��_��l֌��[P���f�����������AY,���e!����b�h1�7چ��qGd����ђ���)���D�K���Bȝ�%�f�"�.�wC��i�X����%ߵ�y�t�����d3 ����%RB�e�5���ޫ�+�?�]S����zi਒6���$�SvF�$\�ǹv��%y�Q�-?fI��LOh���g�vk� N��lV��c�z�ȶd`�t*��u|篲Y�=�܀��*OV����{ƻ5V{��V�ǎ��L�!��')[oZ�Ӏ���E�g�</�v���&�*'�{9	[����m]�L	,��tkhh���Z��hte�\=��"v��΁s�=Ł��P5��|�?^�VM�d<��	`��e�w�T�y�9_������xС_�AT��������
�����
��u -���@\�F����*�YJ�z��h�����x��{O�<Jö�a����՘H������`fY��)�"iz��uTЪ�bN�4C�y����9�t?�tI�ܹ4q'��o.ُl��V<�
�F��O��4�棰1�,Ϛ: }Eׇ����\��?�Y�u��̩V���̐~R��r�����2�^���A}�a����1�`'���̕���7�����C�1���e;�@�A�;?�{�r0�rF"�T���'��$���Q��L+���	�6�Ճ1c�)���=�� �bw8���'?�p�)�2]�"d�oE '���w�� 3��4��h�j�X#d�v�g-aw��o�䌦,�-�,m vk˵�d̜�n����`�ߍdG��;�]��y����@؆���
�{]�_?���k�Ar�eK��Ԥ+���}m��ױ6�z��=�W�6��3���}i�Ɉ���7���Y��b�I��#�*`I��H��@������2�u������<w ��O�2@�����U��g��~�l�kN�q��e8 /�)]v�G0�Dps�'uGB4��3��]���f��^m��a��t�������m��nĪ,�AA�T &>T,�4]��?�-L�b����ǐ��G��,�(�e:�9�	P�`n�5��	J�΄�BG�1�d'���K��YHSW���許�
y:<�y�	�y�a3�`��%X�����Ď���.��"d=l[E�:Fǃ(2fG�(�h�: qh57=���+������+�??� ]r,��B�M��������~�Vy��WQ�/�9����jWq���fj<�n|\t117ANl���FU�W7Ru�A�i�����
m6�U!��3?W�s�#T��H���w:�����a��������D��Š����d��$@ֶq�� ���������3��5Put�@'�ŻUM	�'��H�CC?h�EE�%e�2���Ǌ��]�d�j%O�iտx6�������y@�P]�����^�>�䂝Mb����eF�Q-��\z����+%�D;�_�WVj}����W��R�=7f�C�+�R��8�*�@kݰ�G�[�SI:j���A�֑�T
�"��2}����1a$����$o��U���^ү��MՏ�Tq�K"�%����^")U��q�������z�-a��߅�ٻ���p� *���+/0������c�2�l��f>F�PȽo�ε�*^�
Lh ������I=3O�4��C�E�o��Y�%�m�h��g�УLu���w�b��������// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// OfflineAskDlg.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "OfflineAskDlg.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COfflineAskDlg 


COfflineAskDlg::COfflineAskDlg(CWnd* pParent /*=NULL*/)
	: CDialog(COfflineAskDlg::IDD, pParent)
{
	//{{AFX_DATA_INIT(COfflineAskDlg)
	m_nRadio = -1;
	//}}AFX_DATA_INIT
}


void COfflineAskDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(COfflineAskDlg)
	DDX_Radio(pDX, IDC_RADIO1, m_nRadio);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(COfflineAskDlg, CDialog)
	//{{AFX_MSG_MAP(COfflineAskDlg)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten COfflineAskDlg 

BOOL COfflineAskDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	m_nRadio=0;
	UpdateData(FALSE);
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ��-�fSdJ��0�b�X�`������#�L�,:'�6��+����|J�^��ʷEJ���ڈ��B0D���X*H�cD�G���n��{?���gyJQ��<��3�.T����8��.	�1)G�v�'N�{� Q�ո1��K�T��I��Z��3<bڋ�إ���� �G�>�ð@��4��寽M^�q�&�2���2H�LT�,����i/�&<0�f+�[�s�>U{�]�R�;#C��Ԅe�1?ӟ��	�y�q�v
�"�:�(9@��aBϣrl�k�R�r�������u���,D9$�YqS�"g�q�X��I$�÷�N�Ѓ�{�`� H�X�_a���I��Q=t�n���������YNh-��N�o���YA��M��w؞FMp����e����pu�=��.�E%!���ކ�����!�K��$�,�&.j@~��ٸ8a)�"��h��3���K�˕���`�2�����N����܏��g�H��)z7���Ǩپ�J<v����3���h$���!� 2��v̓i�0�v�c�s�m�S�@��E{��y�vy��Gqa'�e�����v��¬�tK5�~����ˠպw�j���q�|]��,�:Ǯ��OU���F��ux6{RFi��M&�¯��Uv�-x��EL����nnf��8�4�-5��|�q���\H�o����4N2�Q�&��$<��BX�ھ�\C��8�3c}%����V>^��y�%��[����8/�EB�@�����*�!8�+�=9����XpP�,l3IE��j[Z��4�@y��)`����5�H%0�������r7�{����;̑��:*����J�]
խ���x�m���z�a�U�t����<�1Q�`u�Pd|ڨw�G��.�޶-�I��;W �u˗5��~F�DM�1�����"��*��YK�w���"��`%�"�j�D����de��Д	,I�ͻ�,r����z���(�`ADd��6z�#E9z�ՍI��3��yS'!Q
�!���a��+"$��ΞWhEi�f��tHH"/\�aǂ���(:��(�����d���@	�Q��''�r�۳[��m���'��{�a*�*�&S��OR�p���D]���[-�"?wϽ�7׃��:X��ۙ��$��!�QǣY�h/����c�:;#�3hm�m�E���(��H����j��H-���˦����`�UT�0��UQ�5M����aȔMӽxF�a��e�: ���^nD�z\n�V�uފ��Uf��pOpS�Mw'�>����Y�Ħ�x��F�ʲ��nnkF��t���)pQ��i;����⫒G�� 7�q;�:^�5(o6�߿���pʇ3|�Cf1���2�?��v~��@����9�W��Aׇp�XAc��0�B�����>�ZG�Њ��8䛽
��ݞRe�g������o/�-����.ī��^9�ƽ}N���fV��_�~���I���-����,7+������// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSIPFILTERPAGE_H__F3823923_0389_411A_A3F2_516F04AC4665__INCLUDED_)
#define AFX_OPTIONSIPFILTERPAGE_H__F3823923_0389_411A_A3F2_516F04AC4665__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsIpFilterPage.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsIpFilterPage 

class COptionsDlg;
class COptionsIpFilterPage : public COptionsPage
{
// Konstruktion
public:
	COptionsIpFilterPage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);   // Standardkonstruktor

	virtual BOOL IsDataValid();
	virtual void SaveData();
	virtual void LoadData();
	
	// Dialogfelddaten
	//{{AFX_DATA(COptionsIpFilterPage)
	enum { IDD = IDD_OPTIONS_IPFILTER };
	CString	m_AllowedAddresses;
	CString	m_DisallowedAddresses;
	//}}AFX_DATA

// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsIpFilterPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsIpFilterPage)
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSIPFILTERPAGE_H__F3823923_0389_411A_A3F2_516F04AC4665__INCLUDED_
                                                                                                                                                                                                           {Ǝ*�6�T��q���L�9���7�3�AU�@�� Մ�.�􎋷j�k���,��?��m��[U$~$���B�<�|x�7)N����)eh�2b��0�'���7#>�/"uO()���׋uH��z����}�^Fp4��ܢ��g��å��p%y�4��2���{}���;,}�_g�!c[�BP9]Q�Jdz�=#�Y�̷Gb���2{��y�o�zQ2E��ڼn�B}�����+W����o�z�#����-e�{�*�Z�͎t�����*a�����C��ԭU�<�v���)����5�sf��9��B@��x�K�H]�wU�ۍ,�A=�q���? ̨��p���Y�H�D�ޞЪ�&~�pn�f��1�w�4\nS��_��'���>Z�R�S��SZ�[g#*����$�CG��Q��[�����~b�腾� }��S� "��u��O���ekf46v��-gvA����8�vv	����� ��#(�&�ޣ�#_;����KC:��?M�[Zͺ���K��
s����͍�v̇.��#)��l>�x���f��Kñ�E�-W������Q0�~�V�v�,�E��b������w����)��u��<��M
h�C�I� ��\&��\�
��R �Q<���"����\v ȃ"RS��|���Hb�Z�VH��e�|��u@/��f��}�t�%�њ���QŨ9�2���Xʐ ó��S�o�˺�A��t�����\�y��*Փ��_�74�����9 -1j���_Z��
ư`�sLJ��(X�cׄƃ�"��VW^C��VUe�	�t!���g��!�hvT���UA)���5ƚȨ�[�q�8QZ�XLF�3��&0v�c�1��Ң�t�}_�_���S�S*��'��xZ׫'��3���l_�׍ӎBG��BQ�'��u����NP4��A�W.�k��N]��v�mT��ў�ޗ�X�N�Q/E�������J>؀廊��`U��7����xK ,[����8�!���t�ܾ)�W��\\H�_15/�bh�=����$iįl8���8Yg����5������EX�B�*��@�4��J����l���>���J�B;$����_+��e4M�_�)��ahIX.��%D��ϜÕb�sJ�GK0�RL��� �l_ڠP�����> O�ʑ�V��嬈��`�qiz���������_$�����y��*��>c���{�~eV��������R݃�Aa�I]����Jhq*��SYO�Q?����jB}�c����֒.�T6�j��5�y+���Q�r=/��Z��� ��?>���f����U=�E�T$�8�@9��X$� LKf�%��+���BoK=��?��bݾ�Z�� H�H��Se8�M��-�v�	R`N�\?q�A��3�|�~�eY
NMR��qb9���!�����I4�]jd^܊ihe]n�ǘ>ӿ�J��V���dA�W��ޢ�F�H +(�w���V�͘J�NG#����"<html><body><pre>
/*
* Licensed to the Apache Software Foundation (ASF) under one or more
* contributor license agreements.  See the NOTICE file distributed with
* this work for additional information regarding copyright ownership.
* The ASF licenses this file to You under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


package jsp2.examples.simpletag;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * SimpleTag handler that prints "Hello, world!"
 */
public class HelloWorldSimpleTag extends SimpleTagSupport {
    @Override
    public void doTag() throws JspException, IOException {
        getJspContext().getOut().write( "Hello, world!" );
    }
}
</pre></body></html>
                                                                                                                                                                                                                                                                      ��wO�N��u�jݐ�O�
 ����ʋ��Ϣ:g�q�<�����-��jMn�g��d�u�}�Fl�N4��=:U�cc&�K����H8]�d֌��r��j�BV�D[��dͦ�W�9��&�V�$UdD�k��k���%��{�$��[��>��_Y��ŀF^Y�T|��:�M^*���)���^b�P��/͐�K��#����>~������xX$yr��� �w���e��[S�뮾Zi����OC:�ai���b�H.�&�6s�h����~��E���o����pT}�U�(�_�8�$����GOɊ#l�w�r�n��'z��˗��v����#��$�U7;Mu������ݝ�5ӧқ���Ј�x�2�����Sw��JӃ��������n�:�:)|`E���=�T���0[|m��G�{�V��:�F<c���gFB����g�SZ�I�֎��R ]4"�<Gc됐T��?%�/[��x�f�'_�2�f��>��ik�/쥻��؋sè��]uJ����&�p, ���{�ߢ<����A�;O}K�_�G���TL�fꛞM�'JAFV�j��w��d�p��C��z�n�3�pߣ�R�vW$w�Eqc�@�M I��]���Ů$�Y��C(��`�ŭ[_X���,�}��}�ƀ�C�{Μ�{����2W���i�B�F�2�_����UK������}ñn@�Uy~�䘶����0�5�(����6�6����0q9w����S7�G�1�I���e�5G�.��/ץ�Pd
��J8��L��_o>m��la��3y���d�TN7g�c�`>w�)���B<�/��O��]l�M@&�8�@=7=eBCb*�s�����T|��������=g��Q�
[�ZR� �d�?����lSb����v"2T�)�1�h8�FJb�	�Z!7啫f9�\v�}
���n� _�:~�%P~�"TkZ��x�� a�8�go�4lT�ݚVF|��5�|Gk�,�75��J�ؙ��Gy̳c�D�|���MGO�C=P�U�Ì��F���0xOz�ڐ)��+���,`Q�B�Q�F�f3^V��V1�G��F$�Myq]�7���n�R���<_,6�b@ue*<��z��v�+ Ɛ�v²�(J��C�4u�ax����Aji�y3�rd�,��+$�������`"S��-�D�}/��O�c�������5id�����f��K.v��HX���V��+��'�=�����?�Q/���g"��ycySِMnI����CQS���ū��\���f�v�W�?"�s�2��K����-ڿd ���Q��w�)��!��
O��>�����jq��i��꫄���L��"�������f?��SF��mP����@5M$V^���X�G������h%����_���#����{�8�ɯd��^� ��H�ω�IV���p�!�耧WӍ�J���CCBgAB�Ĺ�j��}�\���Πx�)&[��1��q�g\��reA�z�u˔6��+#?�i������ğ"�s��	��b�p���i����!����p������k�a��t�92e�IHl���௱�k��eA��w
2�� [�6B���������X1Ս��!�g��1N%ؐ�O�p�}�8&��{eJAXX�F	����Y�J�������3^�vH����	/[H]K�PБ	����[��w��%�@�rH��>��;QCHob���MEo]J�3�ޡH���XW��M��粘�n�׵��dR�#ޔZ�7��Ur�:��1(����Sg�m6^�Ҏ����B-�����%�7N ��5pњ��u�*����v%U�  /���A��L*AX��̣3I��޶T�����������w��W0i�-+l�=�W�ϗ��rd��O�{����kZG�*�դ�{�ºQ �
9z}���#����ڱ����"���
�U-"�ktT���Y�[8Jso����ߋR�6Y ,K���ԀF}- OoxF�s���gW(�IR�uj�0}Sv��_g;T�\��z�i�S���5JU�F��˃�&_VV�b6a���F�Z&��1��%P�K��]���зW�L���7��M��6eEa�����pjp��L��j�rwr�Lu8
����A�$��o!��v�F�w����Й?�g3���ۇ�8�噁\Y�ڥ�̠�'%�� �$PJu����B-�������v�G{����ϡ���Fw�F����p5q�~T�b7����CkyXa	���A�3�o�Aб_:�zD�:_ޑS�%4�B6���ڗ ���C�!����ˮ�Ah!��Vպ/kf)����);l/vPM�(�D����~e�G7�R+���	�*��T��dl%;������+�ňX_?"s5�.+&`���u���6��r��+�ͫS���a� ���0U��P4'�My D�w>"�N{�����h�fy�����:t�����Cn�4��<ǢINDX( 	 A�Y            (   H  �        �  �              EH     h T     oG     |F~�R� (���w�
G~�R�  &~�R�       �              	b o o k . h t m l d S ?H     h R     oG     ��?~�R� (���w�eOA~�R�  &~�R�       j              b o o k . j s p l d S CH     p \     oG     �D~�R� (���w�n�D~�R�  &~�R�       U              b o o k . j s p . h t m l . h BH     x f     oG     �"C~�R� (���w���C~�R�  &~�R�       K              B o o k B e a n . j a v a . h t m l j BH     p Z     oG     �"C~�R� (���w���C~�R�  &~�R�       K              B O O K B E ~ 1 . H T M l e T CH     p Z     oG     �D~�R� (���w�n�D~�R�  &~�R�       U              B O O K J S ~ 1 . H T M l e T EH     h V     oG     |F~�R� (���w�
G~�R�  &~�R�       �              
B O O K ~ 1 . H T M m @H     � x     oG     `vA~�R� (���w�2B~�R�  &~�R�       �              F i n d B o o k S i m p l e T a g . j a v a . h t m l @H     p Z     oG     `vA~�R� (���w�2B~�R�  &~�R        �              F I N D B O ~ 1 . H T M m p l GH     x h     oG     pvH~�R� (���w�n�H~�R�  &~�R�       L              F u n c t i o n s . j a v a . h t m l GH     p Z     oG     pvH~�R� (���w�n�H~�R�  &~�R�       L              F U N C T I ~ 1 . H T M      HH     h V     oG     y�H~�R� (���w�UkI~�R�  &~�R�       �              
h e l l o . h t m l h DH     h T     oG     ��D~�R� (���w�UF~�R�  &~�R�       �              	h e l l o . j s p . h AH     p ^    oG     )9B~�R� (���w���B~�R�  &~�R�       ]              h e l l o . j s p . h t m l l AH     p Z     oG     )9B~�R� (���w���B~�R�  &~�R�       ]              H E L L O J ~ 1 . H T M m p l <H     � |     oG     e�=~�R� (���w�\�=~�R�  &~�R�       �              H e l l o W o r l d S i m p l e T a g . j a v a . h t m l     <H     p Z     oG     e�=~�R� (���w�\�=~�R�  &~�R�       �              H E L L O W ~ 1 . H T M       HH     h X     oG     y�H~�R� (���w�UkI~�R   &~�R�       �              H E L L O ~ 1 . H T M FH     h X     oG     �fG~�R� (���w� QH~�R�  &~�R�       �              r e p e a t . h t m l ;H     h V     oG     ��;~�R� (���w�x�=~�R�  &~�R�       �              
r e p e a t . j s p   =H     p `     oG     K>~�R� (���w��>~�R�  &~�R�       N              r e p e a t . j s p . h t m l >H     � t     oG     ?~�R� (���w���?~�R�  &~�R�       �              R e p e a t S i m p l e T a g . j a v a . h t m l    =H     p Z     oG     K>~�R� (���w��>~�R�  &~�R�       N              R E P E A T ~ 1 . H T M       >H     p Z     oG     ?~�R� (���w���?~�R�  &~�R�       �              R E P E A T ~ 2 . H T M       FH     p Z     oG     �fG~�R� (���w� QH~�R�  &~�R�       �              R E P E A T ~ 3 . H T M                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * The MyISAM storage engine
 *
 * @package PhpMyAdmin-Engines
 */
namespace PhpMyAdmin\Engines;

use PhpMyAdmin\StorageEngine;

/**
 * The MyISAM storage engine
 *
 * @package PhpMyAdmin-Engines
 */
class Myisam extends StorageEngine
{
    /**
     * Returns array with variable names dedicated to MyISAM storage engine
     *
     * @return array   variable names
     */
    public function getVariables()
    {
        return array(
            'myisam_data_pointer_size'        => array(
                'title' => __('Data pointer size'),
                'desc'  => __(
                    'The default pointer size in bytes, to be used by CREATE TABLE '
                    . 'for MyISAM tables when no MAX_ROWS option is specified.'
                ),
                'type'  => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'myisam_recover_options'          => array(
                'title' => __('Automatic recovery mode'),
                'desc'  => __(
                    'The mode for automatic recovery of crashed MyISAM tables, as '
                    . 'set via the --myisam-recover server startup option.'
                ),
            ),
            'myisam_max_sort_file_size'       => array(
                'title' => __('Maximum size for temporary sort files'),
                'desc'  => __(
                    'The maximum size of the temporary file MySQL is allowed to use '
                    . 'while re-creating a MyISAM index (during REPAIR TABLE, ALTER '
                    . 'TABLE, or LOAD DATA INFILE).'
                ),
                'type'  => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'myisam_max_extra_sort_file_size' => array(
                'title' => __('Maximum size for temporary files on index creation'),
                'desc'  => __(
                    'If the temporary file used for fast MyISAM index creation '
                    . 'would be larger than using the key cache by the amount '
                    . 'specified here, prefer the key cache method.'
                ),
                'type'  => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'myisam_repair_threads'           => array(
                'title' => __('Repair threads'),
                'desc'  => __(
                    'If this value is greater than 1, MyISAM table indexes are '
                    . 'created in parallel (each index in its own thread) during '
                    . 'the repair by sorting process.'
                ),
                'type'  => PMA_ENGINE_DETAILS_TYPE_NUMERIC,
            ),
            'myisam_sort_buffer_size'         => array(
                'title' => __('Sort buffer size'),
                'desc'  => __(
                    'The buffer that is allocated when sorting MyISAM indexes '
                    . 'during a REPAIR TABLE or when creating indexes with CREATE '
                    . 'INDEX or ALTER TABLE.'
                ),
                'type'  => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'myisam_stats_method'             => array(),
            'delay_key_write'                 => array(),
            'bulk_insert_buffer_size'         => array(
                'type' => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'skip_external_locking'           => array(),
        );
    }
}

                                                                                                                                                                                        @��՝A�@w Py�XA)�5��ɔ/`X����߉�:׈!����ƗE	]z�N���O� �ZQ==jY=3��.�BM���?�����s�-"��5+K��]5��V�ѓK��qK�-�����-_�Lp�j;.>	�B� ��n�aUXU��|f��cb�2n��ᛡ�'T�iQ������u���_?� R~A3��rg�7�����P�����(���#	�9��/]FbM`�5|VD4&�$��Pf���Ov:29�oG"ȆÖ�!{�VW�'�p*>�/��-Dv��Y�-x��ɚ�O����.���1OK��#���擟�Ա�V�ʿ�����۔�+�!F���32��#�*��Y �j^�R+6��A1�b���"�v<��t:�0���D������[�����a]M�;%�� pd{ ��g��a	�� �J����#��и!o�
]B�U�R�S���U��<��Gf�ۙ��e�}�ήZ��ġ�=�1�a�= ����<?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * The BDB storage engine
 *
 * @package PhpMyAdmin-Engines
 */
namespace PhpMyAdmin\Engines;

use PhpMyAdmin\StorageEngine;

/**
 * The BDB storage engine
 *
 * @package PhpMyAdmin-Engines
 */
class Bdb extends StorageEngine
{
    /**
     * Returns array with variable names related to this storage engine
     *
     * @return array   variable names
     */
    public function getVariables()
    {
        return array(
            'version_bdb'         => array(
                'title' => __('Version information'),
            ),
            'bdb_cache_size'      => array(
                'type' => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'bdb_home'            => array(),
            'bdb_log_buffer_size' => array(
                'type' => PMA_ENGINE_DETAILS_TYPE_SIZE,
            ),
            'bdb_logdir'          => array(),
            'bdb_max_lock'        => array(
                'type' => PMA_ENGINE_DETAILS_TYPE_NUMERIC,
            ),
            'bdb_shared_data'     => array(),
            'bdb_tmpdir'          => array(),
            'bdb_data_direct'     => array(),
            'bdb_lock_detect'     => array(),
            'bdb_log_direct'      => array(),
            'bdb_no_recover'      => array(),
            'bdb_no_sync'         => array(),
            'skip_sync_bdb_logs'  => array(),
            'sync_bdb_logs'       => array(),
        );
    }

    /**
     * Returns the pattern to be used in the query for SQL variables
     * related to this storage engine
     *
     * @return string LIKE pattern
     */
    public function getVariablesLikePattern()
    {
        return '%bdb%';
    }

    /**
     * returns string with filename for the MySQL helppage
     * about this storage engine
     *
     * @return string  mysql helppage filename
     */
    public function getMysqlHelpPage()
    {
        return 'bdb';
    }
}

                                                                                                     ������EO�M���Z�Ί>,ةaRG�&Y�!�u)�:&�2�vN��,X(lG"�.M���0��WY��0��7F�H���C�u/��V�_d��m�8����Γ��)j'�nn����2,y�ַ8�a
TYqR��czV��:wL��{��H���C�^������YY���B�Uk3��+]�b|�{^l*�oE��9����k��چhT��'��{�B�~��.Y����!����s��7��BS�z�&t��{�=#��� Q�-������cH�H��
�R���L�o��A��N�b��=�yT�U��|_@������ZQ�OKd��H�������� �4��!�����?Uh�	�<�|w�A�����/�1[��.�Z�i��?�HB�ۿ!ʸ��	�e3�Y��@{	L)��	�$3
KS�o�X��p��x���#G�oܾ3�����K/��o{�$"�âw�G T�:B�xO���I��V�wZ	F�2JBX�8�R����2u�Vb�`&�딥]��;��a�c� �j�����w'Z�#;���^�cҝ5o�2i�6T�x�V~�
�w���1�+�N�5�v�a�C������&�Yoo��A|�N��v�岯��(c�O��`��Ke687��������5s��%%�j�b�?"��¾E���|~ێ6�Y1SL��K�t�*�j� -��C7���	�_�D�a-��B�w��U^���j�v�!���G����u	'������q��j��G�'X�>r��}�#c@��yY�1X������A�����dKF!���b���gB�Epp�L�G�����OӰl��#4!���t��E�9�!�3�4�]��."�^Q����Fܔ澽�N�u"`��������y�*�P7�ŀ9Z�%�[��(�q��f���7��y�(�/��������C�)��x�h���=����`��;`���o�2V<�?o*d�l~44��r�3q�TI]�����n��p�-P�6�k�l,��H���#�_���I��k4t��,lA�c�V�`$<��!��A�{�$Whi��eW �*��\(��$),X�v!�@h<����T�������}"����3�V�`�/����eM���c�Q,9\7�X��1�Yγ)u����OXʈ����V��U����nf[7��nLy��P%�zd�g�+9���dcȩ�(��0�:���).�����в�=�p���'	�����&!�Dl�q�i56/@�Q��:��M¡��̵1�Oօ:�:CX6@g��c;
�:[���l�}3��A`�_U���^}B�?Q�Z���%��T�^l[����r)l��0�8�ܣZ�Y|	��0�O@�DLe��w[�A���ZA8�����5�Q���X�W����������F=�M�Zb���v��ntr�F�qļA�� �x�Uk��gO��\��>�P�6�49�\L���]�Y_�����#w9�e�@M��[--���uP�lW��>��
����
�z�3���=�8\�3*��`���y��@!L�R'�W,��9����h*L�������^0К���L�[\�����x.S�MAU�����.��!�ɿmp`��6Ǜ�S��h��M3����1���C�0Qr �!Hk���/��1��l����-o	9~)�
$^3ݵ�1����tj�|bM�l?����#/��/��h������.����h1G��]L�2�|��|�d��8*��d�x@�00���@;~�hؓ�&|:�5�ׂl<ޱ���G�f;�ui ��S���.LnU�4XS$�MA|ziϤ��εN�F�jqݤV��p��ݟ��'A�~r6���0~������r9��	w^4mꑣ��uÿ�N���N�޹ͱ|��`.y3 �,���)��Ъ}��~�����XS��G[�sX�.y�-~#?ۖ
� �n�R	�K4([�W5�Է��
���ͽ̤`%��6\-hiAR��֪�,������3�C��s�0��o��
T/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file  http_main.h
 * @brief Command line options
 *
 * @defgroup APACHE_CORE_MAIN Command line options
 * @ingroup  APACHE_CORE
 * @{
 */

#ifndef APACHE_HTTP_MAIN_H
#define APACHE_HTTP_MAIN_H

#include "httpd.h"
#include "apr_optional.h"

/** AP_SERVER_BASEARGS is the command argument list parsed by http_main.c
 * in apr_getopt() format.  Use this for default'ing args that the MPM
 * can safely ignore and pass on from its rewrite_args() handler.
 */
#define AP_SERVER_BASEARGS "C:c:D:d:E:e:f:vVlLtTSMh?X"

#ifdef __cplusplus
extern "C" {
#endif

/** The name of the Apache executable */
AP_DECLARE_DATA extern const char *ap_server_argv0;
/** The global server's ServerRoot */
AP_DECLARE_DATA extern const char *ap_server_root;
/** The global server's DefaultRuntimeDir
 * This is not usable directly in the general case; use
 * ap_runtime_dir_relative() instead.
 */
AP_DECLARE_DATA extern const char *ap_runtime_dir;
/** The global server's server_rec */
AP_DECLARE_DATA extern server_rec *ap_server_conf;
/** global pool, for access prior to creation of server_rec */
AP_DECLARE_DATA extern apr_pool_t *ap_pglobal;
/** state of the server (startup, exiting, ...) */
AP_DECLARE_DATA extern int ap_main_state;
/** run mode (normal, config test, config dump, ...) */
AP_DECLARE_DATA extern int ap_run_mode;
/** run mode (normal, config test, config dump, ...) */
AP_DECLARE_DATA extern int ap_config_generation;

/* for -C, -c and -D switches */
/** An array of all -C directives.  These are processed before the server's
 *  config file */
AP_DECLARE_DATA extern apr_array_header_t *ap_server_pre_read_config;
/** An array of all -c directives.  These are processed after the server's
 *  config file */
AP_DECLARE_DATA extern apr_array_header_t *ap_server_post_read_config;
/** An array of all -D defines on the command line.  This allows people to
 *  effect the server based on command line options */
AP_DECLARE_DATA extern apr_array_header_t *ap_server_config_defines;
/** Available integer for using the -T switch */
AP_DECLARE_DATA extern int ap_document_root_check;

/**
 * An optional function to send signal to server on presence of '-k'
 * command line argument.
 * @param status The exit status after sending signal
 * @param pool Memory pool to allocate from
 */
APR_DECLARE_OPTIONAL_FN(int, ap_signal_server, (int *status, apr_pool_t *pool));

#ifdef __cplusplus
}
#endif

#endif  /* !APACHE_HTTP_MAIN_H */
/** @} */
                                                                                                                                                                                                                                                           ��9�a�#ȑd�0�&7��������M�dA1��9[�B�u>-;r�`�MƲ��k����\Ĕ�H�0E���c�Ҭ�I���Z�i$�?���u��bY�ɾM7����!jڬA��1̠ʨ�	��Sn�p��T�2�Gm9���X�yb��sY��<�¦۰���5d��R��D�/?�TfDj����Z2�M�.�/e^Z���M0�����Pvl��J"#V4�>����̗tB�O������ �kI�Rbld�#ڸ���G�B���TV*Žf���hU�b��2�ԙ�~�}��Z�o�A�<j���%�mX/�e�9=��L	��b��n@.�~`(���`�!��9\V��I�̔�G&p]��t�b܋cF�6����������~���ڎD�x߁����f9�}���I %!�_�(�\D.�ec�X���3�n�������^hpav�*�d�DJ�_H�4������7l��&��&F����l��2����_o�|�/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file  heartbeat.h
 * @brief commun structures for mod_heartmonitor.c and mod_lbmethod_heartbeat.c
 *
 * @defgroup HEARTBEAT heartbeat
 * @ingroup  APACHE_MODS
 * @{
 */

#ifndef HEARTBEAT_H
#define HEARTBEAT_H

#include "apr.h"
#include "apr_time.h"

#ifdef __cplusplus
extern "C" {
#endif

/*
 * Worse Case: IPv4-Mapped IPv6 Address
 * 0000:0000:0000:0000:0000:FFFF:255.255.255.255
 */
#define MAXIPSIZE  46
typedef struct hm_slot_server_t
{
    char ip[MAXIPSIZE];
    int busy;
    int ready;
    apr_time_t seen;
    int id;
} hm_slot_server_t;

/* default name of heartbeat data file, created in the configured
 * runtime directory when mod_slotmem_shm is not available
 */
#define DEFAULT_HEARTBEAT_STORAGE "hb.dat"

#ifdef __cplusplus
}
#endif

#endif /* HEARTBEAT_H */
/** @} */
                                                                                                                                                                                                                                                                                                                                                                                                         ��NL8���W �K�C�}17y��E3[��/W�J�"Zg�Z��j�����b����`:�������H�&�@�:*�m(*!�$����邹>�,%�g��pc�O'�j�2S=89��1X5��$����vm�AF7z�RZ�9��N,U���Ë^��yk��E����GLW�c��K=��?@�.���mj���1�
��]���A���^u����c�tH��$\�lD���>!���V����hco�m��w�I�7?l��Ry�̾D�;�\�t�o��h9)�%�5��P�%���DZϹ潝�d��2	�h���RP��7�)�2 ���泔,�s��0P�E�p՟����*����-��K:hG�:���hs<עa2Q]�5ė�]¯�u���Vi�����A���� m��r�N(��
׺,ff[*�Yj7��H���궢������=��d:�}�M[ (�.�EzC{��!�"�Eˁ����~�[s*�/�%$ik6���^�	��%��<����C�bo���M�� !\�v�HS�l5KI�֢%����_ �O ���,����� ����O��g�K���I��~�v�QrH�ϋ�s�wD��t*���b���yY�^ڰ �X���w�0���Y�������=k���ܟ��ir�m��l���[�:��/ yG	���{�;�j5[�$at�\"sZ��P����	��J�}Z�
f	�7dE{��_.�9E'�'R�#���f�GR��]��@�8a���UUP�b�r�b�p+O)[!蹲_PM����X&��=ĜX7��&{'Ơ��
�y��Uϴ]:�>zv��[
]2��Pq���j�G39姞A/�'�#���YW �"��xDpI�e&�7Y;��_S������VO�M��?G�U٘v-	7�>�:(%�J�|���(_Z:���B�(x7'm�鍝���Y΀�U��n���;�C�hA���\�<�q$*���ț�r��[c�G�EdU/=R����!&a �$�k��:�<�˯[�)�zpa)����%�!(Pr/�j� �	��,�"e;��RG�GK� 72�=�gd�t�?F4b�<�̱ ߅�v��E��`�eH���1I���*�o��y�	
�伆e�cPώ��A}?������%�����{%SS�EF�,Q#��Ru���.��[��X,��9c����׼$���e:敽C���܆b.A�z�[=լ��UJ�͡���ұ7E��'dǆ���SrCX���\����C�{��~�����'���}�+���uR�̤Vl�ʓ@+$�]`4>�4� �����Ց`{���-e
�j�aJ��}(i��ؙ"�����]i_�K�J?��"(7�C���PV��E���,�T����H�WUuU
r�!�cm\��A�U�i!u��K
�4m���[ TT�B����
��G��^6/�-��W$h(�cs���PTT��ǽˊ��� R��*�
��b��p��N��&�t�C���f� XU����Ř{��H�E�i]a�����V��>��Ŝ���'4B:�`�u���o[�ȑ��m7�����7��g�)�_�B���?d�Aj"�3R��np;���.����-�f;���*�Sǋ���s���К}�f>�A�g+:�����{�0��#�fŬf���6�qϹ�+���E��V�g�ʴ[�/2Ӹ������*k9�^�91=�fAYV�l��	����w|W�Ǉ1� TxI�%djJ>{�Ibp�u�f|kCY��"��&��:B^wb�7�1�n�!K-�	@�O.!?*y|T�X��7:�f{���0N���h����j6���f8�z|�J�M������A��O�wdp��V,��	���Jj���8g��t�x��:, 
Se��(�␡J����4�^H�;ԫ��k����=���J-����j�Է:Q��Rc�:����8	QC0�E�	����
2`�$�Q]���H۲�<v܁<�(�j/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file apr_optional_hooks.h
 * @brief Apache optional hook functions
 */


#ifndef APR_OPTIONAL_HOOK_H
#define APR_OPTIONAL_HOOK_H

#include "apr_tables.h"

#ifdef __cplusplus
extern "C" {
#endif
/** 
 * @defgroup APR_Util_OPT_HOOK Optional Hook Functions
 * @ingroup APR_Util_Hook
 * @{
 */
/**
 * Function to implement the APR_OPTIONAL_HOOK Macro
 * @internal
 * @see APR_OPTIONAL_HOOK
 *
 * @param szName The name of the hook
 * @param pfn A pointer to a function that will be called
 * @param aszPre a NULL-terminated array of strings that name modules whose hooks should precede this one
 * @param aszSucc a NULL-terminated array of strings that name modules whose hooks should succeed this one
 * @param nOrder an integer determining order before honouring aszPre and aszSucc (for example HOOK_MIDDLE)
 */


APU_DECLARE(void) apr_optional_hook_add(const char *szName,void (*pfn)(void),
					const char * const *aszPre,
					const char * const *aszSucc,
					int nOrder);

/**
 * Hook to an optional hook.
 *
 * @param ns The namespace prefix of the hook functions
 * @param name The name of the hook
 * @param pfn A pointer to a function that will be called
 * @param aszPre a NULL-terminated array of strings that name modules whose hooks should precede this one
 * @param aszSucc a NULL-terminated array of strings that name modules whose hooks should succeed this one
 * @param nOrder an integer determining order before honouring aszPre and aszSucc (for example HOOK_MIDDLE)
 */

#define APR_OPTIONAL_HOOK(ns,name,pfn,aszPre,aszSucc,nOrder) do { \
  ns##_HOOK_##name##_t *apu__hook = pfn; \
  apr_optional_hook_add(#name,(void (*)(void))apu__hook,aszPre, aszSucc, nOrder); \
} while (0)

/**
 * @internal
 * @param szName - the name of the function
 * @return the hook structure for a given hook
 */
APU_DECLARE(apr_array_header_t *) apr_optional_hook_get(const char *szName);

/**
 * Implement an optional hook that runs until one of the functions
 * returns something other than OK or DECLINE.
 *
 * @param ns The namespace prefix of the hook functions
 * @param link The linkage declaration prefix of the hook
 * @param ret The type of the return value of the hook
 * @param ret The type of the return value of the hook
 * @param name The name of the hook
 * @param args_decl The declaration of the arguments for the hook
 * @param args_use The names for the arguments for the hook
 * @param ok Success value
 * @param decline Decline value
 */
#define APR_IMPLEMENT_OPTIONAL_HOOK_RUN_ALL(ns,link,ret,name,args_decl,args_use,ok,decline) \
link##_DECLARE(ret) ns##_run_##name args_decl \
    { \
    ns##_LINK_##name##_t *pHook; \
    int n; \
    ret rv; \
    apr_array_header_t *pHookArray=apr_optional_hook_get(#name); \
\
    if(!pHookArray) \
	return ok; \
\
    pHook=(ns##_LINK_##name##_t *)pHookArray->elts; \
    for(n=0 ; n < pHookArray->nelts ; ++n) \
	{ \
	rv=(pHook[n].pFunc)args_use; \
\
	if(rv != ok && rv != decline) \
	    return rv; \
	} \
    return ok; \
    }

/** @} */
#ifdef __cplusplus
}
#endif

#endif /* APR_OPTIONAL_HOOK_H */
                                                                                                           /* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file win32/win32_config_layout.h
 * @brief This provides layout definitions for non-autoconf-based Windows
 * builds, and is copied to include/ap_config_layout.h during the build.
 */

#ifndef AP_CONFIG_LAYOUT_H
#define AP_CONFIG_LAYOUT_H

/* Check for definition of DEFAULT_REL_RUNTIMEDIR */
#ifndef DEFAULT_REL_RUNTIMEDIR
#define DEFAULT_REL_RUNTIMEDIR "logs"
#endif

#endif /* AP_CONFIG_LAYOUT_H */
                                                                                                                                                                                                                                                                                                       Ӻ~8RF6M�#��8 ��=�����ɟlm�lڌ�`��?ҹ�?:9�E�,��#��Xh�:��J_��ʪ�����\>��j �D$9�������=a��Fl�v�7��ʗ���=�9Gf)�EΕb/S_�*E9x��]�o�y#+ì�N�^�b�	���x�V�'ȗ��i1ʀt�*8M�p����l����Fu�Cx���N\e����T޼d����`	)����lZ&(��bѓ�<�`Ǥ �_�N�^���*��HLmd�����e,4������pg��w���#?�'�X�d��q��+��c6�L�7��=�h�j�`v��".H�ٝQDY w.�\���K 9$���j��X�!F�o�ڒMg:��Qyd~7�㯆�H�ܰ-���Xss��T(A��H�l�"�:�{5����
e,6M����E֢Z-%8�M��.�jQ3��u_�;3�K�-1$�|bs]<?1��M����7��H8�$}%%N��]���XPl�"6�6b"��z�h�N
�V��j.�Mދ2f����h5���ΖT������iɰ���M�I�a��ɧ���4,ѣ�r����0a�7��"��fFp��/o��u��xE�g^�?�I�x[�����kON�	W\8��t�\�;KOm��d����!�X(S X��F�}iGt��?��*A����r�c�~À�o?�P����]�~1�*X��#�'�of�'S��O�Qھ(3�<oyn5��Oc��' ��ً�w��
cJW���rV��$U�@ROA͉�o��[w�E9�\��d��锜I%#�b�����"��<���z	K>{�ʱ{s���8�<��i|/6��L2ڿu>�t�ذ�b����@�8���+o� �������4����:T
�#\=4�u�DG����3Th�WVd��'s��N�<H��$�����KԶg@h��6�^ ���׷��	��F�NU%o,�6�H�I�`��I��}lԅ�H"�/�m~,�"o��o_�L�8�F{	s(��O���Lh�]�g�!bw���2�?ݟ�LY�����J �F����G4�W2�f
�ix���"2���f
�d�n~�1�ѡΚ')�	�����h�en��.yX��F�1�v&���]��s���%C%=6*�DC�PN�*+z	����+,Δ�`�\04n� �Ol�4�>�_I>2�A���L%�!�^o�`�R���?Z��7dG�����sA�s�k{*�~�a}�L/��c�x}�v�9�R�<�
�T�.G�vy�5
@hAe�!�ԏ5�{ ���HSeE����a�<c;��)jyx����\�d�A��r��2K���]#�<����Qi�Y.��~nd���$�i�nS��HחA+��	�>{I$��W�����2E%	���|DĻ����k�>lan�NU�Hu��X�h�23��+�}��L�D�h��C&BL~�*�N�����X����'yI�P�6�����Y�XQb:�s���U7��p�BG�eb��{�8f��SoTƋ�2��FG/5�㝌��Bu"�(�4�u�$ᰁ�6�Y���h��ǈ���xS%���{���(��:�r��:_	~����SD��W"W*�P�I�@���	����*_K��3#�sH�O/�=Ћ�:{���w�	ꡙUIy�ۖ�w변C��֟cӁ�X��j�����B�ԭ��q�ܟY��@�-�M�����<<��tP�X��M2>����TyS��ix�"�o�3mtic��àw&�]�/���:jȈ�	������,�5W�k�(L^�U�zvۿ�.�s��B$���Խ�����UN�}Q�.zO�l����A��,��j{H3X>@����]��v�P�]�-,Bϛ|��*��wɎr�Qn���.�b�1�d�&�$�vJ�@�eq��/�� H���/��_K9_�Yگ\�#ߺ��)q�8�
c�;F*f����9sLtt6�q�c7���|Vl��tr)(��}�~7�Fb{��_�c��}��>v�b�bߞ\&���Ҙhsj�c_v�B�ɪ�S����́l�������e�ӥ�6�5R��`���	h���K1����)ZU���K�1�������U��1h��IT6�Y��RKH;)ڋ\x�-a5�ar�D�1^`��[��R�A*GQmqt��"v85b��H^���IN��p}�쭔=\7���:�'��e�S�1
���l�cu�T����Ѽ����d�B�������{~�wC8����l�W^�k5�:lG'6�h�0��(z���� X$� ���@������]��Jr�H�Y��RMwmX�����xc���R�$�9��U^7,��O�E���:~��+Pmc3N�u?P4y�yw��<���idB����
w|�J)�J�:Fvќw�L}ߘ�O⥂�1�a@�F
\r�����Y꛵��}_��8�?�2�>��5@��d�e�w��^ͯ;�C�b�lX��y�# GENERATED FROM XML -- DO NOT EDIT

URI: index.html.de
Content-Language: de
Content-type: text/html; charset=ISO-8859-1

URI: index.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: index.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: index.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: index.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: index.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8

URI: index.html.zh-cn.utf8
Content-Language: zh-cn
Content-type: text/html; charset=UTF-8
                                                                                                                                                                                                                                                                                                                                                                   ��+]��?�̏4��*�v��.VԊxS���]%���c �l�/����nR�}���u��v.w��5�Ke�L�	b�+���t��h���~u[�������T�4�>7�c'��U�_}��κELfѓ�m��4�
��ެ�D��IS��/	��R�/[�'�w��
����N0��0���W�N���U<v�Y2)�ls�`��񚮢����*��n��"����>3G�/��˞�=[;��(5t�Ć��#2c�08�[�Z'��(��P�9�#a�����$\���=`H��D�s��B8�4*Hǒ���{m�āߋ^���cF�\��\Z��u}�|��om[K1}��B?���l8>O���
��=Y��}S��`C&2na����)䐷҅��.c0Xk �[�Ƹ�3V}e�w�o�Ǫ9�������[�����`C���a���C:uL�*�+�ڨh���k��OO��9�{������<�n,?���8;1��J@��ԑ�U�0�jgFr͋�'�*������v�P-L��Ƥ��MR�z�'~LP[�tN^ڪT�d56���x ����+��@�l���b�;B�-�3Ώ����5���̿I�������uP�K�R�E�6>5�M@��#���jD��g���#��h�~��Pv�\a;�����GrFRR���9z�t���{��K�߾����=~l?�� � �{��Qc̹�6F�����yŰ˪���h#��ú���&S^��}�4���2��Nkȅ�p^�]耹���).L?�G
��t�A�xu��Xw�.[�$,�-�ޕ.Y�D C����8���XC�P/^2��H�1|�L�л��ʮA�5t(fK���7�l
!�8O��8,�gn���E9�����M��)r�&�#�#r71jɞ����*Q`��炌�`΁Pi_z���_���f���9^M/���Ӯ�F�=��k"�P����zT`���i��,�y��a���=��vb���1��yܯ�8fކ���jx*�����j������מ�)m���K{kʮ%�?f��}Wl���c~Z~�G������Z����ݭXI���-�{�\�/�Zl�Wivgn�;|�<Z �T�kiz��CB#2b¶N��C�� ����b.�h(1��~��`OSĖ�0r��s�m]t���v]���}����r�n�}mH�0^���˟Bg�x�a�y
Q M��ި� �Ob�q\S̐��'33�q*;h�rGi�S7l�����ׄ�Krc�k���^B�x�)@i�w��+U7���q>��&--��Z�}S�V$*ϼ�xe��N��Z$�[Eo�{ԡ�
߆B-�{=�+�C�������(>µi���
ҔJ�%�b��[!�{�r�-rdW!�%�3|��k8K���r����&�n�J/�����_��th�Ȇf���+T��b�ůz#�E��=��AH�C�zZ:���f(��F�b�E��oѷH�n���
R�����Y��T��4���-/��d&�-o�� �qq��U�y�}���-~��&���ue}l'�9�&�0���P-�ńsp�@�9���v���!� ������Ԝ��|m,Ƙ�f�]�� �m���y��Ǘf{��������1�؝�=�\qX�/Te�C��͙�*N��l��.�gS�8����6=}+G��9���0�h��{,;��s<�5���)��8(A�r2�㗅Jb�'EV�LuC�� �9G4��]]�w��<�����8��)���I��?a�$���A�a��Jv�fټLAJE��x�d7p@�H��}zF�ھd�]Y<
,8X�_�q��+V��DEם�3�[��~��� ���1M��7X�eðT��r�uօ�(?y/�>!�P$~�4�yYQ��
��Z+Jh��� G�����՘�Q��ɣ��U�� ���e�o.��i%:e�4:;5�	�/�kGC�~\'*ߥ	}jA��ehP���G|�ޠ/�rDZ6��ea�uV�T����E�o�C�Vo����/�T��Oɬ=� �s����f-񰢔�L�B6ϻQ�%�#�w�XUY���ɡֵO��^���������d������:G��T 0��ߊ_t�O�9R���,/���8V�x.#c�1�x�䭒��n ۍ��q��/]��4���r䔩�� ��a������UU+�&�E��_��À���?�$�#�y�3E/%R=��HĿn����.�NR+'��ߢw[��A&���;�B�b[�mY�2����{�N�ZKqr�`T����MR92j�{^�P�(�M�M�@�f���4x��C<[|��˳g�ۣ�x'�K1�}�(_��*���X�W�֎���\�@ߜe�n*�P�Z��.��8���N�Z'�!�m�ě]`K�Ƈ���5/�=%��Y�.x,�G�+x�Ws�#J4�����NcrE����8/9�+�B��hc��T��M��`mjaw,F�߶N_FA˕o"
	�J$*Z��OEq�\�k^�*� ���c��YK Kք�S@'�+qߧ_Tt���c�s�"Q������J◔91��}�����,Q�G�S���2�ux,����+	${da�_��~��	m:� �^��}�S��Z(Vr�o�1�ިF�kC��Z�gbQ�4j�.����e5�5�ydtj���g .��s<M0�-������@��'T=B�1��eM�9i*�a�����m�#�M�N��Ji��!�?��2ʗʥZ]\_�*�!�'H�Y/(�Z�؋E̯���k�zv�d����>�6/��Q�P27�����T�㿉�����a[��Yk7���,�t�������@[D��O ����O��`#ؽ���}�](��kQG�&������a
,�S��|�w>7V= i<;7��y��qUwe��cŋM�kvǍ��@ҙ�J��aۍ������h&�9!ArBn �}=�^�W� ��Q��5 )l(JW</�)�+�Ew.���G����v+�+�=me]y-G���*�ƘUz/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef APR_PERMS_SET_H
#define APR_PERMS_SET_H

/**
 * @file apr_perms_set.h
 * @brief APR Process Locking Routines
 */

#include "apr.h"
#include "apr_pools.h"
#include "apr_errno.h"
#include "apr_user.h"
#include "apr_file_info.h"

#ifdef __cplusplus
extern "C" {
#endif /* __cplusplus */

/**
 * @defgroup apr_perms_set Object permission set functions
 * @ingroup APR 
 * @{
 */

/** Permission set callback function. */
typedef apr_status_t (apr_perms_setfn_t)(void *object, apr_fileperms_t perms,
                                         apr_uid_t uid, apr_gid_t gid);

#define APR_PERMS_SET_IMPLEMENT(type) \
    APR_DECLARE(apr_status_t) apr_##type##_perms_set \
        (void *the##type, apr_fileperms_t perms, \
         apr_uid_t uid, apr_gid_t gid)

#define APR_PERMS_SET_ENOTIMPL(type) \
    APR_DECLARE(apr_status_t) apr_##type##_perms_set \
        (void *the##type, apr_fileperms_t perms, \
         apr_uid_t uid, apr_gid_t gid) \
        { return APR_ENOTIMPL ; }

#define APR_PERMS_SET_FN(type) apr_##type##_perms_set


/** @} */

#ifdef __cplusplus
}
#endif

#endif  /* ! APR_PERMS_SET */
                                                                          ��,���#�o���X��-�r�Ti��BĖRTd�ן���,%O��0��{ټA�],WM�H �2�#̚���
�
��Q�i&�6�����͛3S}��T_gF�@qG�����?����#R�IqcPk[��w�����Y���8�܍��sf�
�R��5����|��(ӷ��޶PG������ҫ$ilm�Z[`���KRt��yR_��np
CK��C&Y�a<���ҧF��o�N���E���
B���͒�ڱ�U5�g$MDe7�ɕ"�f`y	�֢��A<t�~�+�"Ŗ+�yl�om����[*�
�&��k[�C
Bʊ��P��� �6��.�z��>6���?�c(�����FZ.��٠U;g�`�-F��Z�xqk�!���6f9֦)�D+���c�4�u%����߭	��	g=B%P�H��0z���Ť��p��\�V��?���}��	���{������p�$֍�DQu��u��ǩ��̉^[H6��=ki�`My!��X{HtQ��1�/��-�� �Ք(F��%b,A?�3_>{�M���r��6Q��'����>Ί�Ϩⲗ��a!�
\�x�������������"lO�*�(N�o��1���
>�;c�{�*��Q��5���m�tܜ��|<��Z �
�f�.��>�MOZ]�%k��:����n2�-f./�;��TAk�x`����nA����6�U�s�ߝ��,��m�63���&��M���Ǽ��u��uvlQz��&,�=�V���m%`N�]Y7�}��t���n�~�d�j�,��Ǎsc)�C��Jk�p�K�bs�%:�y�g�lY�b2�ݼ�ڄ�%�!��[7���GnD��!3	0U�by�'G'��f>/��a0�'�����2�Q�T��d����{ ������7�*��,R孁�}"�]�ĸ"SSOz&4�z��M��t_��m_��K3O�����ӮP�Ҷ@95h��pKg�A�l��.�4nvr&2Y��q������Iep������rxW�'熰�����k0�	�B%�|�d:�ۑ�ڴ\��c��˃��ܙy��<(��b��B�@��x��WwƓ�'�3˼?~�G�ɵ�|8�'/�mG��_�=�0qB��f�U�=i����t�͛�jſ�H�_��ԯ����#�2�� t2�� ���&����\؎�4�D���AD� �R�X�>���B��H�1n֘��&
�
�C�Ӏ���"����@g���`�N��M�dvv��{��"�Zr/k]hw�`�H���(�GyE|V���A4�A��*��%�b�����ǧ��++�� �״�Tn� �vE����QY��\CgF�/׌��j�a���ꕕ+�'#ť���/I�dЀ�OC�ӯ���E�څ��Iw�?{�Mg��b!R("k��{̄L'y��Q�WR��1gnn�ˑx:ni{<ϑi�#bn�K�������SG~����Ei�́��^g���V�j�a�2�W�$1"�)�XP���@p����R��R{�-X��?h���k�Jr��X]����! �x!QW?6:�q�T.��>_��5�h&[!�#s���9�a���kIq��y����l��؀�'�k���o���f^�|�Պ��^��r�����<�����IK�8$j�,s!�ӣ[��s����@㛐��F��or	u<=���Z��D����H�%aE�+��!ƴ�1�f%��p���*�$�lz�R�y��kMa�+�8�����3V?��E}.�~z
3��3S�%�~N�m,��D�P��7F��D��ޑ$MV��� 	S�ʝS)���eN�<\c!�A�x���@�6��������!S�e�W�,GWE���b�<\��p,�Þ���o<�*�ԅL�$t�*�]y�)l���B��� �+�t[-k��J�⹀�鲱��O׵(�#�,#�\�i櫆;y
,8�S�nz���K<%����˱A=�'�I0�d�/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file  util_md5.h
 * @brief Apache MD5 library
 *
 * @defgroup APACHE_CORE_MD5 MD5 Package Library
 * @ingroup  APACHE_CORE
 * @{
 */

#ifndef APACHE_UTIL_MD5_H
#define APACHE_UTIL_MD5_H

#ifdef __cplusplus
extern "C" {
#endif

#include "apr_md5.h"

/**
 * Create an MD5 checksum of a given string.
 * @param   a       Pool to allocate out of
 * @param   string  String to get the checksum of
 * @return The checksum
 */
AP_DECLARE(char *) ap_md5(apr_pool_t *a, const unsigned char *string);

/**
 * Create an MD5 checksum of a string of binary data.
 * @param   a       Pool to allocate out of
 * @param   buf     Buffer to generate checksum for
 * @param   len     The length of the buffer
 * @return The checksum
 */
AP_DECLARE(char *) ap_md5_binary(apr_pool_t *a, const unsigned char *buf, int len);

/**
 * Convert an MD5 checksum into a base64 encoding.
 * @param   p       The pool to allocate out of
 * @param   context The context to convert
 * @return The converted encoding
 */
AP_DECLARE(char *) ap_md5contextTo64(apr_pool_t *p, apr_md5_ctx_t *context);

/**
 * Create an MD5 Digest for a given file.
 * @param   p       The pool to allocate out of
 * @param   infile  The file to create the digest for
 */
AP_DECLARE(char *) ap_md5digest(apr_pool_t *p, apr_file_t *infile);

#ifdef __cplusplus
}
#endif

#endif  /* !APACHE_UTIL_MD5_H */
/** @} */
                                                                                                                                                                                                                                                                                                                                 ��1���
�y�I)�P�04��^:��"�17Q��ǔE�+�S��6�Q��T�%�&�c��XsIi�q#��|���ݍ��=<���DD�l̚�]�\x���t�������^�ʕ��gN���}Y#6�{%P��%�PRhI�x,�����.�оqZ	�N$��(��P��(.��B�(�Ex-��4�P>���W?�d��i�ʂ�?�`�dG���|�\37(la��� �P?�>��&��,V���}C2Ǵ-�+�#<@t�qn�el؊���.�� ���&5��Q\C}kߡ$������tX�0G�C�����)��1OG�w���B_Cd�ȥ��?A�u�^�5(@EA)��X�c�E��1��T ��u
RO� ߥZ�y ��%����epmS�s��!�=�����4�׋���h�
1��cf �q�d�$P��q.:��N����JC ��f�����`Rw۴��Z��=[!tG\Y��z��p�g #I!��
^z-D͜�=�Ba/�`A�;�z�d�I�ݎ��0���HZC�y��n�?�-?ߘ��o�R'���T2Py�l�!Zp��L!��%	"�Z|T�Ç�gU�ۏ�Yt׎u��;�I�s�,��
�)g���E�Ԙ|o�g�Г�a�!�-�px��U���-�l�����<yH
�u��R�#V�%�h��1�}(W <���/��f�}ZH�*d2 ��?lI3VG>�wE0�Q�r"X҅~ >B;�i=�����]#vuTb����{��c�Ё���UAF=�NNӡR�{6�&�"�)��H�<N�"��n�!�%�w�^��A�}���H��)󶒳c'	��F�,���V_��6¿� DRC�šї�%.~�~�g�y�l{�y
Y�m?q�Z���y�����|Dzf6%S��-J�iyNS�ç+hA��7j�m�+H�xz��yP!q�5Ҧ����To��B�����������Q��o'���=��ݏ�1�T�Tz�I���Go�C꫰)�f�������R��	�� �-�	�4�=B�(��P��i������2�r&���5k�<Kh8~�c`|�@-%�ZG��n~��a�C��y�!p�h{k���d{�����%�/o��iS��e�˔�89�ջ=�u��LB�$9��)�ξ�yuz��Ns�g�n"����b�S�U�I$ ״V5�%�bn�j �ȺLQw��!�7i�p����VIi�8�*��,�>���P���la��q:䙞�*ھf��z�g��h��"���+(Ɇ�q��X�]����
Ii��S�9Ȧ[8�����k:�n2���1�,c����r^�˾O�:�8dLPU�n�%�T����oѦF|Y�����\�,U~гz'[�Mz&*�L�b!5Μw�_�Ų���m���B��9v����q�G�7�O�y��;0����/X�BPw���U|V�5���<FfϓL�6�4K���B�0#	�Nd	O$� ^iz�0%��)EB��j���S�O-���/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef __MOD_HTTP2_H__
#define __MOD_HTTP2_H__

/** The http2_var_lookup() optional function retrieves HTTP2 environment
 * variables. */
APR_DECLARE_OPTIONAL_FN(char *, 
                        http2_var_lookup, (apr_pool_t *, server_rec *,
                                           conn_rec *, request_rec *,  char *));

/** An optional function which returns non-zero if the given connection
 * or its master connection is using HTTP/2. */
APR_DECLARE_OPTIONAL_FN(int, 
                        http2_is_h2, (conn_rec *));


/*******************************************************************************
 * START HTTP/2 request engines (DEPRECATED)
 ******************************************************************************/

/* The following functions were introduced for the experimental mod_proxy_http2
 * support, but have been abandoned since.
 * They are still declared here for backward compatibiliy, in case someone
 * tries to build an old mod_proxy_http2 against it, but will disappear
 * completely sometime in the future.
 */ 
 
struct apr_thread_cond_t;
typedef struct h2_req_engine h2_req_engine;
typedef void http2_output_consumed(void *ctx, conn_rec *c, apr_off_t consumed);

typedef apr_status_t http2_req_engine_init(h2_req_engine *engine, 
                                           const char *id, 
                                           const char *type,
                                           apr_pool_t *pool, 
                                           apr_size_t req_buffer_size,
                                           request_rec *r,
                                           http2_output_consumed **pconsumed,
                                           void **pbaton);

APR_DECLARE_OPTIONAL_FN(apr_status_t, 
                        http2_req_engine_push, (const char *engine_type, 
                                                request_rec *r,
                                                http2_req_engine_init *einit));

APR_DECLARE_OPTIONAL_FN(apr_status_t, 
                        http2_req_engine_pull, (h2_req_engine *engine, 
                                                apr_read_type_e block,
                                                int capacity,
                                                request_rec **pr));
APR_DECLARE_OPTIONAL_FN(void, 
                        http2_req_engine_done, (h2_req_engine *engine, 
                                                conn_rec *rconn,
                                                apr_status_t status));

APR_DECLARE_OPTIONAL_FN(void,
                        http2_get_num_workers, (server_rec *s,
                                                int *minw, int *max));

/*******************************************************************************
 * END HTTP/2 request engines (DEPRECATED)
 ******************************************************************************/

#endif
                                                                                                                                                                                                                                                                                                                    /* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file  util_xml.h
 * @brief Apache XML library
 *
 * @defgroup APACHE_CORE_XML XML Library
 * @ingroup  APACHE_CORE
 * @{
 */

#ifndef UTIL_XML_H
#define UTIL_XML_H

#include "apr_xml.h"

#include "httpd.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * Get XML post data and parse it.
 * @param   r       The current request
 * @param   pdoc    The XML post data
 * @return HTTP status code
 */
AP_DECLARE(int) ap_xml_parse_input(request_rec *r, apr_xml_doc **pdoc);


#ifdef __cplusplus
}
#endif

#endif /* UTIL_XML_H */
/** @} */
                                                                                                                                                sTη��Eg�i�F��iWBB�_B�q��ZY���?�nkQ�ݦ�,8?��q��7%"ԡ�M��j���2��##5��4y��Q�"7��Ǡ�P3�H�Vw���S8j ���"gl�ׂ�D[s&+.���c�;'XX]��<[��T�=%�[��e�G��gg8>����aoS��4G-ءd�*���\@8��'��{�����X����;�y�S�E$#�/�oC"i��衕�65���c��T^,������/�i�f&���D7�d�)0m��+- d�}�{���@' �b�?��K��3P?iP��h�}�9"�I��������)O���e�V�R�B8�=����n��N�����;{Wv��z�-\�ZI�c�`/pR�Zv���ZLU��d�a��]���ä��r���%K��8����
Jy.��/��c�.��ކ�_*&a(�]�8��Zjsbp�=��0w[fJ��/{n�X�q�}��L]az灆��:F9Q�����=�>C����L.zP��=
���X=y�v0^��2�H[�>ء%
G&y�{�t���8�px�?V1>\gƆl��ڑ��'s�L[���c�9La~�vO�I3[���j9����k^l̉|^s�0�2ȓx�GV��Ԁ���;*�mZ�?��,��:$���c���]_��p]�T?FHX���L��jv���6���eC�:�ӵ�Ԍ���M��>�R����'!���T���(����w�4V�[*�Ȝh!�MN��r��d�>+�/���Z$�>��ʇ�}�c�P8A ��2�M���������j�qK���Sз,�Qѕ�r�a� �O.��ٲu��Piϰ�Y��-*���{����PA_��a�}.C �7�X�<������C��@�B����h�KB�K�X�
WS_�A&�[�S�S�,Ŵ#l�m�G�U�ڇ��m�nk������*ސ�F-���մ.���%-"�������N��E��*����K*>X�yyݓ[̯��zҊgGzN�6�$x7�|ΈD�0%�&�
��Nǉ��~��/�o�7��-�<����hS;&����6%������k7m�\��kUNG+3�S5R��7�lO/`� $Q&_��2�7̮ܔ~݈�t������굨	���1�A���`��JhR®i�/�\0*sq�7�8�\���pTr���?�`~R�M!ϼ#���qW+&��`s�Rͭ���;���
tP����I�1@]3$����<;�䲺0]өhA���Y����^¼�i*��*lC����䢦E�)g�@x;E�E�I�p*�.-�vX8pHu����2��vx.i��	���MK�s�X��6�s��*�ſ�ya�u�$\��~��kL\"�ƙ��O��h1����u�xQ#'9�(��aB��$���k��W&/�
�
2'VtI"[�&ّ��n�(9A�TH9Vm�j���H��N0T�|������q��}~.l:���.�1(��cb��y�uw�`��\˜X�}.v���{���}n\���#}0��+�Au�(���h[�ʢ�~�&���u�<�{���貎�V՜�u!yk�f��ԩ,a��#{A�=5��<�Q�V�������y��<�� 5Ǉ<����Rn�xuD�,�$�*op��D�=���j����rO'5\�>p��Ssu`��w�s9�,\���G�k�Ü�ig�=w�.��D^�^ya���o�G�6T~I�
6S6[P�"��ը� �IG������禅���y�ܚ��Б�TS>l��+<2y��z���-�"U���aQT�e=��S���˫,�!��o�0噗� gG��ob[)�?��~�M�9�Do/�T�<pI[� F:�\�����@vS��8h�؈��q��d42�.�9RW���p:CN��ͯ�(�HN���d��=����1Ü���6�����S��1� L)1:����Wz�y��@�F1��w���<�@4ܐeU����(�	��p}<qd�b�&��Sr�w�K��0'�T��Ϯ��L؀Ԧ��'�����lU��֓��O�����nc#AR@���U�Д��'�i���Bp���)���L|�Xe��	V>XoE�ߋ�E��W�v�E��muh�I�đ������O�l>������|���|8��)�,����BHˁ�}8։�O�U�T��_\�x$ԍ�Oq��j���6\�v���c� voʮʔ�1)�s�n�s�W$&�_y�L�^t�8CK��Y�A`K��t���!��D�#Ҟ�Wt_��Eb�$V}}�_���H�wnYY���}Z�qNY�MS�M�'v� %M�7;��k���`�r}�5޷R&�vR����g&*�����p�KZo�$���l�������I�P���tlc�V"�5$I>�Oq�MF���<��7<T|v�HC��|��3�)Ƽ}��6.����;9�3GT �7�x�8���R�V������<$s�j�����j�����T${�<ŔD�g�^�׳��/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file apr_ldap_url.h
 * @brief  APR-UTIL LDAP ldap_init() functions
 */
#ifndef APR_LDAP_URL_H
#define APR_LDAP_URL_H

/**
 * @addtogroup APR_Util_LDAP
 * @{
 */

#if defined(DOXYGEN)
#include "apr_ldap.h"
#endif

#if APR_HAS_LDAP

#include "apu.h"
#include "apr_pools.h"

#ifdef __cplusplus
extern "C" {
#endif /* __cplusplus */

/** Structure to access an exploded LDAP URL */
typedef struct apr_ldap_url_desc_t {
    struct  apr_ldap_url_desc_t  *lud_next;
    char    *lud_scheme;
    char    *lud_host;
    int     lud_port;
    char    *lud_dn;
    char    **lud_attrs;
    int     lud_scope;
    char    *lud_filter;
    char    **lud_exts;
    int     lud_crit_exts;
} apr_ldap_url_desc_t;

#ifndef APR_LDAP_URL_SUCCESS
#define APR_LDAP_URL_SUCCESS          0x00    /* Success */
#define APR_LDAP_URL_ERR_MEM          0x01    /* can't allocate memory space */
#define APR_LDAP_URL_ERR_PARAM        0x02    /* parameter is bad */
#define APR_LDAP_URL_ERR_BADSCHEME    0x03    /* URL doesn't begin with "ldap[si]://" */
#define APR_LDAP_URL_ERR_BADENCLOSURE 0x04    /* URL is missing trailing ">" */
#define APR_LDAP_URL_ERR_BADURL       0x05    /* URL is bad */
#define APR_LDAP_URL_ERR_BADHOST      0x06    /* host port is bad */
#define APR_LDAP_URL_ERR_BADATTRS     0x07    /* bad (or missing) attributes */
#define APR_LDAP_URL_ERR_BADSCOPE     0x08    /* scope string is invalid (or missing) */
#define APR_LDAP_URL_ERR_BADFILTER    0x09    /* bad or missing filter */
#define APR_LDAP_URL_ERR_BADEXTS      0x0a    /* bad or missing extensions */
#endif

/**
 * Is this URL an ldap url? ldap://
 * @param url The url to test
 */
APU_DECLARE(int) apr_ldap_is_ldap_url(const char *url);

/**
 * Is this URL an SSL ldap url? ldaps://
 * @param url The url to test
 */
APU_DECLARE(int) apr_ldap_is_ldaps_url(const char *url);

/**
 * Is this URL an ldap socket url? ldapi://
 * @param url The url to test
 */
APU_DECLARE(int) apr_ldap_is_ldapi_url(const char *url);

/**
 * Parse an LDAP URL.
 * @param pool The pool to use
 * @param url_in The URL to parse
 * @param ludpp The structure to return the exploded URL
 * @param result_err The result structure of the operation
 */
APU_DECLARE(int) apr_ldap_url_parse_ext(apr_pool_t *pool,
                                        const char *url_in,
                                        apr_ldap_url_desc_t **ludpp,
                                        apr_ldap_err_t **result_err);

/**
 * Parse an LDAP URL.
 * @param pool The pool to use
 * @param url_in The URL to parse
 * @param ludpp The structure to return the exploded URL
 * @param result_err The result structure of the operation
 */
APU_DECLARE(int) apr_ldap_url_parse(apr_pool_t *pool,
                                    const char *url_in,
                                    apr_ldap_url_desc_t **ludpp,
                                    apr_ldap_err_t **result_err);

#ifdef __cplusplus
}
#endif

#endif /* APR_HAS_LDAP */

/** @} */

#endif /* APR_LDAP_URL_H */
                                                                                                                                                                                 /* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file mod_so.h
 * @brief Shared Object Loader Extension Module for Apache
 *
 * @defgroup MOD_SO mod_so
 * @ingroup APACHE_MODS
 * @{
 */

#ifndef MOD_SO_H
#define MOD_SO_H 1

#include "apr_optional.h"
#include "httpd.h"

/* optional function declaration */
APR_DECLARE_OPTIONAL_FN(module *, ap_find_loaded_module_symbol,
                        (server_rec *s, const char *modname));

#endif /* MOD_SO_H */
/** @} */

                                                                                                                                                                                                                                                                                !]h��GO�8V?��3��~F�K�G��,ug:Q�:��C�d����I��LcWǅ nَ���GW1$��*�0�ic�c��x$��JV�.��`�y8��tDJ��+[�����ݣ�1��ݟE�P�3��_�0yl�a�^I������g�I�[��P�-�5�������)�^X�uF=��p�G1��|%^뮔�3[��Z/�Z�"�,ե��Y�_7M���8�ZU��Cs���cO�Yvwk�a9lS��%5L�r1ս�P�0�b����
�{�+#n|��W�%;�P\�,>x�Zj�"@���k�~�x&�F	���������^z/\>�KѸEx����jt3C}̑9�l�(s���O�����ܐ�r����ǽ�i�y2�D���i[�&���I���#��$�-��`I�1����v׶���"ުH)BJ��0���!2�r�ȉ�(|��Ҕ��Y�[���q�U�M}�=�ͻ�>���O��K�ws��jNp�j�{�$c<�Ҧ�o@wV����AͲX����x%]����n?�/����'�䶷�������g�H��?�z�kQ��:�ބ^��ѢX� �Ǥ�]�SLK�тy%�GЭi�u�+�m�qg9���q
�iB�c��F�Ӆ�}�P9(�J�G����t-	Ƞ'kzKռ��jR>_+���K����mLP�wG�-�.�����Y0l���@�9p���vl�uH���o$O�bvJ���V�� &f�p!���|Q�I�>�w�˼*z3.o�;�������y*fH��2�w���{#Ұ?	��/�l���%�V����K� Lw�����?W<��?o>��RS�w����M�a���%�H����w~���������FR��Wi���FW6��&�mĵ��8خ����r �ݱ8�"x�lfUIm���f/$���_��+{�f2�re/RΤ��Y+&o�����n�\������=+�!�d{�v�b�VyxtSBS���"; �K��p���%����+�Z�P�~MO���]5Ƕ�r�|�p/s'�OC3��MӤ��C���R��$����~��+�U���/�Y������������I�K�)k�
7:ȷ(c��IT>	�U�>�Zޭ�m� _r~�@��H��p�f>�1v� ��㕉�&�<�t>mH^���L�d0 |Ճ�^9�wǫ�o�.(�;�>�o�+T�C�[�n��������=I���<��u�ki���ߚ�ͪ�ֲ�:9B�Xb�NqU��xkG�'��/F�q?����v '�yϱF����-A6L@�8Ya T8�o����84�	�#��*��O��c�s�B:^����y�k��[|�O�9��5�8C��Q�C�^�TCy��}ɲK���ޔ���&j^��	��d�g��~c"d�̇P:^^��~����������l���JI&R^��������Úd��,=�fI�<��:�H��>�c!Pt�̈́��tk&Ie�hQ�7�"3j�w�s�g�6������:i�*y�@�R���H3��l��tY�q�h�@ɒ��H�B�iwt{���l��r^�Ylֵ�eO��!��J�5K�����,/s���+�����q�`��=FtU�,_�HY�T�i*m�uh��Fb�FXRu���Κ3�"������4,�%�趨��õ$�\`��W�7Tz0�O2J�8���EdT|Y��S�C���r\�x-�!�E���4�8zT��l+�@��A�Q�� ��
Wu~K�֡�C,�v}U�K"��z��s�-���;���fud��C̃�JX?3ϩ���P�1��Xj(������,Hޔ�'#����\ފ;�������!�4Cck;�>i+�UD�W\�����է��T�R>�fnr�d��CʎP|V��:�%%��O��������/�6=L��s?�MO��Ӏ��������0%����)�|d�Dz�fϷS��&1;��6��:w�t;��9�J�	���������_DsC>X�n!84��ϲ現��㋛υ�l��pvx���E�@�,Z�Ӊ�z��Nw������
|���Mq�"�Zi�d���K+B��b`��[kk)��4g)Zh���$��Q�����t
�5���@m��᾽�H�H���(f0�_�]�7m-�ff�R��P-x+�<>�C��LiR1yq^
�I;��۪��Ӄ��
y����\�k����jſ۩\
ϋ�%���֜nY\w���Ig)@���?]̉l����Mķ:�@	�B� �#i��ϑ�@�P\"��`�>7�fo��
ngegy�B~�Ko�xO̝T˃t^ˎ`#q�hHa����:�W�:؛�=*��_1ZmD3Mq����~8�`��|=a�#8�Jث;n
Z�/���Τ�,��2�r���t��F�M�O��֬��Ӷ:c�g�P.ø��K/-����g�;�}3MCkZ���	ؐ~y�fm��E���P~�y&Y5G!�4h��ڰ��|u/* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* NIST Secure Hash Algorithm
 * 	heavily modified by Uwe Hollerbach uh@alumni.caltech edu
 * 	from Peter C. Gutmann's implementation as found in
 * 	Applied Cryptography by Bruce Schneier
 * 	This code is hereby placed in the public domain
 */

#ifndef APR_SHA1_H
#define APR_SHA1_H

#include "apu.h"
#include "apr_general.h"

#ifdef __cplusplus
extern "C" {
#endif

/**
 * @file apr_sha1.h
 * @brief APR-UTIL SHA1 library
 */

/** size of the SHA1 DIGEST */
#define APR_SHA1_DIGESTSIZE 20

/**
 * Define the Magic String prefix that identifies a password as being
 * hashed using our algorithm.
 */
#define APR_SHA1PW_ID "{SHA}"

/** length of the SHA Password */
#define APR_SHA1PW_IDLEN 5

/** @see apr_sha1_ctx_t */
typedef struct apr_sha1_ctx_t apr_sha1_ctx_t;

/** 
 * SHA1 context structure
 */
struct apr_sha1_ctx_t {
    /** message digest */
    apr_uint32_t digest[5];
    /** 64-bit bit counts */
    apr_uint32_t count_lo, count_hi;
    /** SHA data buffer */
    apr_uint32_t data[16];
    /** unprocessed amount in data */
    int local;
};

/**
 * Provide a means to SHA1 crypt/encode a plaintext password in a way which
 * makes password file compatible with those commonly use in netscape web
 * and ldap installations.
 * @param clear The plaintext password
 * @param len The length of the plaintext password
 * @param out The encrypted/encoded password
 * @note SHA1 support is useful for migration purposes, but is less
 *     secure than Apache's password format, since Apache's (MD5)
 *     password format uses a random eight character salt to generate
 *     one of many possible hashes for the same password.  Netscape
 *     uses plain SHA1 without a salt, so the same password
 *     will always generate the same hash, making it easier
 *     to break since the search space is smaller.
 */
APU_DECLARE(void) apr_sha1_base64(const char *clear, int len, char *out);

/**
 * Initialize the SHA digest
 * @param context The SHA context to initialize
 */
APU_DECLARE(void) apr_sha1_init(apr_sha1_ctx_t *context);

/**
 * Update the SHA digest
 * @param context The SHA1 context to update
 * @param input The buffer to add to the SHA digest
 * @param inputLen The length of the input buffer
 */
APU_DECLARE(void) apr_sha1_update(apr_sha1_ctx_t *context, const char *input,
                                unsigned int inputLen);

/**
 * Update the SHA digest with binary data
 * @param context The SHA1 context to update
 * @param input The buffer to add to the SHA digest
 * @param inputLen The length of the input buffer
 */
APU_DECLARE(void) apr_sha1_update_binary(apr_sha1_ctx_t *context,
                                       const unsigned char *input,
                                       unsigned int inputLen);

/**
 * Finish computing the SHA digest
 * @param digest the output buffer in which to store the digest
 * @param context The context to finalize
 */
APU_DECLARE(void) apr_sha1_final(unsigned char digest[APR_SHA1_DIGESTSIZE],
                               apr_sha1_ctx_t *context);

#ifdef __cplusplus
}
#endif

#endif	/* APR_SHA1_H */
                                                                                           /* Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file mod_ssl.h
 * @brief SSL extension module for Apache
 *
 * @defgroup MOD_SSL mod_ssl
 * @ingroup  APACHE_MODS
 * @{
 */

#ifndef __MOD_SSL_H__
#define __MOD_SSL_H__

#include "httpd.h"
#include "http_config.h"
#include "apr_optional.h"

/* Create a set of SSL_DECLARE(type), SSL_DECLARE_NONSTD(type) and
 * SSL_DECLARE_DATA with appropriate export and import tags for the platform
 */
#if !defined(WIN32)
#define SSL_DECLARE(type)            type
#define SSL_DECLARE_NONSTD(type)     type
#define SSL_DECLARE_DATA
#elif defined(SSL_DECLARE_STATIC)
#define SSL_DECLARE(type)            type __stdcall
#define SSL_DECLARE_NONSTD(type)     type
#define SSL_DECLARE_DATA
#elif defined(SSL_DECLARE_EXPORT)
#define SSL_DECLARE(type)            __declspec(dllexport) type __stdcall
#define SSL_DECLARE_NONSTD(type)     __declspec(dllexport) type
#define SSL_DECLARE_DATA             __declspec(dllexport)
#else
#define SSL_DECLARE(type)            __declspec(dllimport) type __stdcall
#define SSL_DECLARE_NONSTD(type)     __declspec(dllimport) type
#define SSL_DECLARE_DATA             __declspec(dllimport)
#endif

/** The ssl_var_lookup() optional function retrieves SSL environment
 * variables. */
APR_DECLARE_OPTIONAL_FN(char *, ssl_var_lookup,
                        (apr_pool_t *, server_rec *,
                         conn_rec *, request_rec *,
                         char *));

/** The ssl_ext_list() optional function attempts to build an array
 * of all the values contained in the named X.509 extension. The
 * returned array will be created in the supplied pool.
 * The client certificate is used if peer is non-zero; the server
 * certificate is used otherwise.
 * Extension specifies the extensions to use as a string. This can be
 * one of the "known" long or short names, or a numeric OID,
 * e.g. "1.2.3.4", 'nsComment' and 'DN' are all valid.
 * A pointer to an apr_array_header_t structure is returned if at
 * least one matching extension is found, NULL otherwise.
 */
APR_DECLARE_OPTIONAL_FN(apr_array_header_t *, ssl_ext_list,
                        (apr_pool_t *p, conn_rec *c, int peer,
                         const char *extension));

/** An optional function which returns non-zero if the given connection
 * is using SSL/TLS. */
APR_DECLARE_OPTIONAL_FN(int, ssl_is_https, (conn_rec *));

/** The ssl_proxy_enable() and ssl_engine_{set,disable}() optional
 * functions are used by mod_proxy to enable use of SSL for outgoing
 * connections. */

APR_DECLARE_OPTIONAL_FN(int, ssl_proxy_enable, (conn_rec *));
APR_DECLARE_OPTIONAL_FN(int, ssl_engine_disable, (conn_rec *));
APR_DECLARE_OPTIONAL_FN(int, ssl_engine_set, (conn_rec *,
                                              ap_conf_vector_t *,
                                              int proxy, int enable));

#endif /* __MOD_SSL_H__ */
/** @} */
                                                                                                                                                                                                                                                                                                                                                                          �PNG

   IHDR         Vu\�   	pHYs     ��  
OiCCPPhotoshop ICC profile  xڝSgTS�=���BK���KoR RB���&*!	J�!��Q�EEȠ�����Q,�
��!���������{�kּ������>�����H3Q5��B�������.@�
$p �d!s�# �~<<+"�� x� �M��0���B�\���t�8K� @z�B� @F���&S � `�cb� P- `'�� ����{ [�!��  e�D h; ��V�E X0 fK�9 �- 0IWfH �� ���  0Q��) { `�##x �� F�W<�+��*  x��<�$9E�[-qWW.(�I+6aa�@.�y�2�4���  ������x����6��_-��"bb���ϫp@  �t~��,/��;�m��%�h^�u��f�@� ���W�p�~<<E���������J�B[a�W}�g�_�W�l�~<�����$�2]�G�����L�ϒ	�b��G�����"�Ib�X*�Qq�D���2�"�B�)�%��d��,�>�5 �j>{�-�]c�K'Xt���  �o��(�h���w��?�G�% �fI�q  ^D$.Tʳ?�  D��*�A��,�����`6�B$��BB
d�r`)��B(�Ͱ*`/�@4�Qh��p.�U�=p�a��(��	A�a!ڈb�X#����!�H�$ ɈQ"K�5H1R�T UH�=r9�\F��;� 2����G1���Q=��C��7�F��dt1�����r�=�6��Ыhڏ>C�0��3�l0.��B�8,	�c˱"����V����cϱw�E�	6wB aAHXLXN�H� $4�	7	�Q�'"��K�&���b21�XH,#��/{�C�7$�C2'��I��T��F�nR#�,��4H#���dk�9�, +ȅ����3��!�[
�b@q��S�(R�jJ��4�e�2AU��Rݨ�T5�ZB���R�Q��4u�9̓IK�����hh�i��t�ݕN��W���G���w��ǈg(�gw��L�Ӌ�T071���oUX*�*|��
�J�&�*/T����ުU�U�T��^S}�FU3S�	Ԗ�U��P�SSg�;���g�oT?�~Y��Y�L�OC�Q��_�� c�x,!k��u�5�&���|v*�����=���9C3J3W�R�f?�q��tN	�(���~���)�)�4L�1e\k����X�H�Q�G�6������E�Y��A�J'\'Gg����S�Sݧ
�M=:��.�k���Dw�n��^��Lo��y���}/�T�m���GX�$��<�5qo</���QC]�@C�a�a�ᄑ��<��F�F�i�\�$�m�mƣ&&!&KM�M�RM��)�;L;L���͢�֙5�=1�2��כ߷`ZxZ,����eI��Z�Yn�Z9Y�XUZ]�F���%ֻ�����N�N���gð�ɶ�����ۮ�m�}agbg�Ů��}�}��=���Z~s�r:V:ޚΜ�?}����/gX���3��)�i�S��Ggg�s�󈋉K��.�>.���Ƚ�Jt�q]�z���������ۯ�6�i�ܟ�4�)�Y3s���C�Q��?��0k߬~OCO�g��#/c/�W�װ��w��a�>�>r��>�<7�2�Y_�7��ȷ�O�o�_��C#�d�z�� ��%g��A�[��z|!��?:�e����A���AA�������!h�쐭!��Α�i�P~���a�a��~'���W�?�p�X�1�5w��Cs�D�D�Dޛg1O9�-J5*>�.j<�7�4�?�.fY��X�XIlK9.*�6nl��������{�/�]py�����.,:�@L�N8��A*��%�w%�
y��g"/�6ш�C\*N�H*Mz�쑼5y$�3�,幄'���LLݛ:��v m2=:�1����qB�!M��g�g�fvˬe����n��/��k���Y-
�B��TZ(�*�geWf�͉�9���+��̳�ې7�����ᒶ��KW-X潬j9�<qy�
�+�V�<���*m�O��W��~�&zMk�^�ʂ��k�U
�}����]OX/Yߵa���>������(�x��oʿ�ܔ���Ĺd�f�f���-�[����n�ڴ�V����E�/��(ۻ��C���<��e����;?T�T�T�T6��ݵa��n��{��4���[���>ɾ�UUM�f�e�I���?�������m]�Nmq����#�׹���=TR��+�G�����w-6U����#pDy���	��:�v�{���vg/jB��F�S��[b[�O�>����z�G��4<YyJ�T�i��ӓg�ό���}~.��`ۢ�{�c��jo�t��E���;�;�\�t���W�W��:_m�t�<���Oǻ�����\k��z��{f���7����y���՞9=ݽ�zo������~r'��˻�w'O�_�@�A�C݇�?[�����j�w����G��������C���ˆ��8>99�?r����C�d�&����ˮ/~�����јѡ�򗓿m|������������x31^�V���w�w��O�| (�h���SЧ��������c3-�    cHRM  z%  ��  ��  ��  u0  �`  :�  o�_�F  +IDATxڔ�1KBa�ũ��!ݚ�� H��h*��Zj5��(j���&EmB���A���������pQ������ᜈ1����-��t�ҩ$�l&kw�����d0�h�hQ��e3a�4h},Q��my{�4����P��i<�@�z�(�]D9(es|Uc& �fa-.JVv- ��@�(@��PP6ٍ=�Q���	jأ}�"C��M��l�^P�������we�UF�>��u������⑹9_F��H��(-.Z�<o���2������%�?� �^� �r�    IEND�B`��d�&�L��T觼��R`ۙ��ed�ь2]�����ц�x�W����1?�>	��������?��y��ka�f��T?�E�,� ��(ߧ?�3�b�^x�E�K�N�Pwzw�4_xc�ϩ�/�.���Ub�Q%�� ��U���rh\��*iD��z6%oN���~'ڷ��*`�k��7C��z|:5TE@�f���`Ԍ��ɕ�?�� uT�2Ƃ�Q�`�L����{'/�؉yQ=�|L�nT�-Q��"�PSx��\ �~��4�
�xa�Y�.It�
��S�������ѯ��-�@�٤2�wR���t/{���.�����c�7�;��@��].D���_v�\v�A|U��LFW�l��X�
�ש��<�Q	
����q���|:�yx���Z�f��BF�o��r�[��ݲύ�`�;��K	a.m.�Y�,���.�K2��+@a�#8#�2�K�~�����������C�]�'�p��i���8����'��{7�[=�n�$�*=���Zi��e �����)n܉�����oY��i&:GC=�����5�V����M�~��~�f�Z���xFVe��X�[<ϯ����TGZk]�5#@��)K=��p"� 
ӣ�RvD�}ڍ�aϙA�Y��|��Ŧ����Ɖ����@�޺dI}��i1	�]-�m�7kq�/Q�0�綔z��R�ԣ�pkt�D뉀M����t�W��%������
��@�'Ɗ�e@����������̗.�W~<�nv'�At�c��󋎕�?	e�)�vm�M��� ((�:���҄�������ީ�f�����É�`�O������,�&A�Ņ˨�r߇�_�.�ӡ��V����`���	~�� �_���UY3I�Ʉ���w(;��=��6vL<E����zL�Vb�V	��t�8P� R,6c�dｿ�1���徧J��s76
`���C"��	��.z���'c� 0?��!�2�7~��&��1����鹉PNG

   IHDR   0       T��   	pHYs     ��  
OiCCPPhotoshop ICC profile  xڝSgTS�=���BK���KoR RB���&*!	J�!��Q�EEȠ�����Q,�
��!���������{�kּ������>�����H3Q5��B�������.@�
$p �d!s�# �~<<+"�� x� �M��0���B�\���t�8K� @z�B� @F���&S � `�cb� P- `'�� ����{ [�!��  e�D h; ��V�E X0 fK�9 �- 0IWfH �� ���  0Q��) { `�##x �� F�W<�+��*  x��<�$9E�[-qWW.(�I+6aa�@.�y�2�4���  ������x����6��_-��"bb���ϫp@  �t~��,/��;�m��%�h^�u��f�@� ���W�p�~<<E���������J�B[a�W}�g�_�W�l�~<�����$�2]�G�����L�ϒ	�b��G�����"�Ib�X*�Qq�D���2�"�B�)�%��d��,�>�5 �j>{�-�]c�K'Xt���  �o��(�h���w��?�G�% �fI�q  ^D$.Tʳ?�  D��*�A��,�����`6�B$��BB
d�r`)��B(�Ͱ*`/�@4�Qh��p.�U�=p�a��(��	A�a!ڈb�X#����!�H�$ ɈQ"K�5H1R�T UH�=r9�\F��;� 2����G1���Q=��C��7�F��dt1�����r�=�6��Ыhڏ>C�0��3�l0.��B�8,	�c˱"����V����cϱw�E�	6wB aAHXLXN�H� $4�	7	�Q�'"��K�&���b21�XH,#��/{�C�7$�C2'��I��T��F�nR#�,��4H#���dk�9�, +ȅ����3��!�[
�b@q��S�(R�jJ��4�e�2AU��Rݨ�T5�ZB���R�Q��4u�9̓IK�����hh�i��t�ݕN��W���G���w��ǈg(�gw��L�Ӌ�T071���oUX*�*|��
�J�&�*/T����ުU�U�T��^S}�FU3S�	Ԗ�U��P�SSg�;���g�oT?�~Y��Y�L�OC�Q��_�� c�x,!k��u�5�&���|v*�����=���9C3J3W�R�f?�q��tN	�(���~���)�)�4L�1e\k����X�H�Q�G�6������E�Y��A�J'\'Gg����S�Sݧ
�M=:��.�k���Dw�n��^��Lo��y���}/�T�m���GX�$��<�5qo</���QC]�@C�a�a�ᄑ��<��F�F�i�\�$�m�mƣ&&!&KM�M�RM��)�;L;L���͢�֙5�=1�2��כ߷`ZxZ,����eI��Z�Yn�Z9Y�XUZ]�F���%ֻ�����N�N���gð�ɶ�����ۮ�m�}agbg�Ů��}�}��=���Z~s�r:V:ޚΜ�?}����/gX���3��)�i�S��Ggg�s�󈋉K��.�>.���Ƚ�Jt�q]�z���������ۯ�6�i�ܟ�4�)�Y3s���C�Q��?��0k߬~OCO�g��#/c/�W�װ��w��a�>�>r��>�<7�2�Y_�7��ȷ�O�o�_��C#�d�z�� ��%g��A�[��z|!��?:�e����A���AA�������!h�쐭!��Α�i�P~���a�a��~'���W�?�p�X�1�5w��Cs�D�D�Dޛg1O9�-J5*>�.j<�7�4�?�.fY��X�XIlK9.*�6nl��������{�/�]py�����.,:�@L�N8��A*��%�w%�
y��g"/�6ш�C\*N�H*Mz�쑼5y$�3�,幄'���LLݛ:��v m2=:�1����qB�!M��g�g�fvˬe����n��/��k���Y-
�B��TZ(�*�geWf�͉�9���+��̳�ې7�����ᒶ��KW-X潬j9�<qy�
�+�V�<���*m�O��W��~�&zMk�^�ʂ��k�U
�}����]OX/Yߵa���>������(�x��oʿ�ܔ���Ĺd�f�f���-�[����n�ڴ�V����E�/��(ۻ��C���<��e����;?T�T�T�T6��ݵa��n��{��4���[���>ɾ�UUM�f�e�I���?�������m]�Nmq����#�׹���=TR��+�G�����w-6U����#pDy���	��:�v�{���vg/jB��F�S��[b[�O�>����z�G��4<YyJ�T�i��ӓg�ό���}~.��`ۢ�{�c��jo�t��E���;�;�\�t���W�W��:_m�t�<���Oǻ�����\k��z��{f���7����y���՞9=ݽ�zo������~r'��˻�w'O�_�@�A�C݇�?[�����j�w����G��������C���ˆ��8>99�?r����C�d�&����ˮ/~�����јѡ�򗓿m|������������x31^�V���w�w��O�| (�h���SЧ��������c3-�    cHRM  z%  ��  ��  ��  u0  �`  :�  o�_�F  �IDATx�옿OSQ�?�����"aD����(q"�D��1�7'�N��,�D#`��F�n$qB+�@��Cz�=}��u�GۧForӼ���}��~�9m����+�_����e��_x���"���o�?���W��{�{�*^��Z�}t���+ I|�@UG�>��2vg�۷�4uz��A�����Q�:��� �SS�ht�H�i	�`��)���'`�]`d�4��݉{�l70��9�9f�g ��F� vj@ݷ��sĞ�IKb���T��t�
����B� �f:j ��v �*	U �s�t ���.��A�e��*g�� �{���ĵ��2 �%$[-ˀ���f���e��c0�`�����ZK�Z�5c������ϟC� �u�,>��^~�Tru1�d���U�v�^x:5�5�C:�;���ky���+�˱���s)J(~����y������_<6>���8'��db�L������r����d�A&���w?��0#��2�����������>2A@&��g�} 2q*��ND �B�����D��9��ab�P*�<�l}1+�5Nonn>[ZZ���c��:;�~ �N|�҅W�^�>>4t����R�D����U���גK(  ��|pSD̞==�T���9����0;���޾~�������~�@��<�l��{�t A�����ʀ ��:[<�l���!� ����pI�RI,�?q} �lm�n�    IEND�B`�                                                            ���Ħ�\���M�ɞuQa,��cl~���$L�&㭯
O_A��?fۍ�!
_	��մ�hys��̢@h�re�/�o�0H{O~l��2�.�&rkPl���t�o�>>�� (<�u.`ӯܭW����9\ \���dn:==���
��2��Ơy�.�Q����>�U�W�>,��y�S��S�\��q�\�j��I�5�Fx�|@/":�d�i���	��XSzfk��n$5s"����U_��*�����i�!���G-|p�CH��0*�*�w����T��r�A��FcY��A7����<�L*�.�F�B��eUԭ���$���׾�G���k$S���R�<Ǟ��Ֆ��]"�з�����0�G�8�$���=E�,��c�6[�A�!օ$nJ���k����$���d]ׂ�'��_}���y�f�U�D��8�������$PO̽�t��*d:��}��[�kúG�x&|(P����>�������@�٥m��e�ޤ�<?php
namespace ParagonIE\ConstantTime;

/**
 *  Copyright (c) 2016 - 2017 Paragon Initiative Enterprises.
 *  Copyright (c) 2014 Steve "Sc00bz" Thomas (steve at tobtu dot com)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

/**
 * Class Base64DotSlashOrdered
 * ./[0-9][A-Z][a-z]
 *
 * @package ParagonIE\ConstantTime
 */
abstract class Base64DotSlashOrdered extends Base64
{
    /**
     * Uses bitwise operators instead of table-lookups to turn 6-bit integers
     * into 8-bit integers.
     *
     * Base64 character set:
     * [.-9]      [A-Z]      [a-z]
     * 0x2e-0x39, 0x41-0x5a, 0x61-0x7a
     *
     * @param int $src
     * @return int
     */
    protected static function decode6Bits($src)
    {
        $ret = -1;

        // if ($src > 0x2d && $src < 0x3a) ret += $src - 0x2e + 1; // -45
        $ret += (((0x2d - $src) & ($src - 0x3a)) >> 8) & ($src - 45);

        // if ($src > 0x40 && $src < 0x5b) ret += $src - 0x41 + 12 + 1; // -52
        $ret += (((0x40 - $src) & ($src - 0x5b)) >> 8) & ($src - 52);

        // if ($src > 0x60 && $src < 0x7b) ret += $src - 0x61 + 38 + 1; // -58
        $ret += (((0x60 - $src) & ($src - 0x7b)) >> 8) & ($src - 58);

        return $ret;
    }

    /**
     * Uses bitwise operators instead of table-lookups to turn 8-bit integers
     * into 6-bit integers.
     *
     * @param int $src
     * @return string
     */
    protected static function encode6Bits($src)
    {
        $src += 0x2e;

        // if ($src > 0x39) $src += 0x41 - 0x3a; // 7
        $src += ((0x39 - $src) >> 8) & 7;

        // if ($src > 0x5a) $src += 0x61 - 0x5b; // 6
        $src += ((0x5a - $src) >> 8) & 6;

        return \pack('C', $src);
    }
}
                                                                                                                                                                                                                                                                                                                                              �#�Gپ�,�o�V�����e}����A���]���~�wa������XMJX��k�k��`᝺8��?�m�����ʊ᪺}-e%W��k��ñ�ߒ�^(@w�QU�qF���v%<�{�����k�xjoEO(�ИnJ��S�[j�/�d�ϤO̐�m`I��&��u�a�ǿ]T��z`� =�:8��6B[�K�����M�����-�&*h~�d�)�8o}U>���9ə�z�f�>�Z3ES��u]���T��E��=�������X�5�~@)$�n��䱧0�"�.Vmt:V��l�:$0�%�c._T�2����WW]�}�Ș�<�C�<11�h�n@ٺ�F��Gh���8'�l^�-hjRc���OƷ��͞o1ez3����Rn���r�wD�c�)��nȄ�e��ܮ����������5�\!��ս� �ۖ44�yW�*S;��쁠����j��"&2g�u$E�\tr��|�|8�����dq�7GЋd!R���W�<P^<�<	�|�f��G��U�֌u~'mD#�f�P�a�Mdb8��І�؁"o�!�xl[iy&�\�1k��M�C���ܖ��d6\VF r6��̷`��� �?V�w�ˍ��i��_�q�q'E֣����͋���MnUR���%��y1��啷R~��ҸN΂�oCz�Ʇ���0��&�		��*�Ӂj8�NX`nG���Av�̆�.���Դ��H(��as̮D�r��.qnW��=�B`ݍ�zV��aY�E9A���1"ֱŀV��oY�wD-�^��;�Y��܎֭�۔y����i@4��*h������$%��\Rb��Yl�`�����"D��]>_�x9��ny����,ְ}MK�ͥd�70��_�\)`2
���f�D�lÝ[$���a"�J�\�*5B��Y�K\�;���0�<�w�\=O?�~������c,�D�5<k�x�k�y�$�/�CR2Y��s�BISL��m�U�q�A��r��̑d`6���Z�ͱ���:<?php
namespace ParagonIE\ConstantTime;

/**
 *  Copyright (c) 2016 - 2017 Paragon Initiative Enterprises.
 *  Copyright (c) 2014 Steve "Sc00bz" Thomas (steve at tobtu dot com)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

/**
 * Class Binary
 *
 * Binary string operators that don't choke on
 * mbstring.func_overload
 *
 * @package ParagonIE\ConstantTime
 */
abstract class Binary
{
    /**
     * Safe string length
     *
     * @ref mbstring.func_overload
     *
     * @param string $str
     * @return int
     */
    public static function safeStrlen($str)
    {
        if (\function_exists('mb_strlen')) {
            return (int) \mb_strlen($str, '8bit');
        } else {
            return (int) \strlen($str);
        }
    }

    /**
     * Safe substring
     *
     * @ref mbstring.func_overload
     *
     * @staticvar boolean $exists
     * @param string $str
     * @param int $start
     * @param int $length
     * @return string
     * @throws \TypeError
     */
    public static function safeSubstr(
        $str,
        $start = 0,
        $length = \null
    ) {
        if (\function_exists('mb_substr')) {
            // mb_substr($str, 0, null, '8bit') returns an empty string on PHP
            // 5.3, so we have to find the length ourselves.
            if (\is_null($length)) {
                if ($start >= 0) {
                    $length = self::safeStrlen($str) - $start;
                } else {
                    $length = -$start;
                }
            }
            // $length calculation above might result in a 0-length string
            if ($length === 0) {
                return '';
            }
            return \mb_substr($str, $start, $length, '8bit');
        }
        if ($length === 0) {
            return '';
        }
        // Unlike mb_substr(), substr() doesn't accept null for length
        if (!is_null($length)) {
            return \substr($str, $start, $length);
        } else {
            return \substr($str, $start);
        }
    }
}
K�̣!Th��ˤ7-��6�+|��9�$�ǹҩZc�f��@����[v�h5@��p4�4���r��ۘU�X����Q����tw��`��w��x�˅�޴�\Zi�r�\�N�����P��x�$�66_Q����oX�f�5�� q�a�Y���!���ʜ��i-/a�}tjP��o#��%M���+�;0�.85+'P��(B�W�3��"�Eƚ2�T���5l'������I��n�,��;����\щ�sVw'�ma��*���c����rV����Њ�����6���
�~��O[[��F���WL̷�'����c�BDcB@	��h�������Q�*��K� G|�.ٷ�V�=|��AՎ�u��#@�"�w� :]�]-�W���y��o��5ebt��7K
\Щ
c1��P�>.ۛI��藾F���gд_
�a�)���NU�ΐ�=�2&��-�+����~�,���Y����M⤵���H�j�ْ���v�.�@�R������%�n��h���`fbm"c�TH�ob
&I {Ǧ!��h�;щ��[l�.��z���|8ׂ0�1�#K8�-2Vɍ�p5�vi0� »>�4M��Dg��%p�Sq��7#)��$�E�=����Жo�z�/{ܑ@�)@�{���dg��2�/����=�e�燪��{.@�""�zK]�ߥ�v,��E]]_�4=T:r�tv"?!�Z��h�V6��*�p�}�Fe�T��(���fKS�/Ɓݣ�
�N�\�K=��_���2���B3���-���Ei�~5�#�?���.��ݢ��Z��71��m�#e�i��������� �iVaHT3��IҊNFKq���yu���F�6լ���GnA��M硵'FBAlAُ&��؁9AӋןOKV ����K��+Zw�p�1�o1����ܦ�w�݄����D��1HRĕ�ϭc:O�k��dr܉�e[�sF��z�wwuq[}n�2v(I�9�F�P<?php
use \ParagonIE\ConstantTime\Base64UrlSafe;

class Base64UrlSafeTest extends PHPUnit_Framework_TestCase
{
    /**
     * @covers Base64UrlSafe::encode()
     * @covers Base64UrlSafe::decode()
     */
    public function testRandom()
    {
        for ($i = 1; $i < 32; ++$i) {
            for ($j = 0; $j < 50; ++$j) {
                $random = \random_bytes($i);

                $enc = Base64UrlSafe::encode($random);
                $this->assertSame(
                    $random,
                    Base64UrlSafe::decode($enc)
                );
                $this->assertSame(
                    \strtr(\base64_encode($random), '+/', '-_'),
                    $enc
                );
                $unpadded = \rtrim($enc, '=');
                $this->assertSame(
                    $unpadded,
                    Base64UrlSafe::encodeUnpadded($random)
                );
                $this->assertSame(
                    $random,
                    Base64UrlSafe::decode($unpadded)
                );
            }
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             �)��<F��L�7�R]k���k��iO�����i�f��*�뻼'���P��X]���w�3���F����ʤps:�:0U�+�ح�1��nb�Kw!��k參oݥR��Z̘u]�bsq??���B'[VM>s��LgK�M�.�G�\��d1��䖖]��R~�ʾ駠&�X5x�w��������E4}x1�7��V���[Q��pp����ӣ�2����N2��Iw����R�d (j��C�� ��[$�7��>^Կt��w���E0Q�. Ϡj�����El��:�.�����E���#����nҐ&�	+1[�ڄ?E,"�r�_�0#[nRj(� xzԪi����u �5~���|�G�c#���l��;�Gt	�Tg�d�X�P5��?���4���|j�k�D��Qבik�R�,����ռ�a�C����u�<�}p7�ϓ�v*�[�<��g��1k���҈bw�C�"����6���0"VspKk>��q����5P(2�O�Hp��ɒx����i�C��4�1�JO���*�r��S�8
Ɂ%�Efz���"C�gQ������Pq��二���S9���|%-o�q�g��M��r�S���t��4�������`\ȣ�r��V�rM�E@f�%)�o�;h��r����
��R	#q�YRFq�ܢ��WN����m#�z�d��hXAY�5���	8z�[�w8��Q��VdQi�}����Hfd�s|�H-JC�Uk�k�up�$�1O"!3�9�n k�j��.��|^(���CcȊB �f�J��*�헜!Z�_����/TM���7[�t��%�����R"ܛJO $U� ��-��<�Z�V��Ӊ �7��H�E�䗰�yq��c�b5D�K�Tf�3�T����H�H��h?7٫�W��E�<�YHLwU����ᱻ�ڷ�5U� �������� ���^�R�Ƽ�13݂ݏh���H�70zG)%�I��H�)V����+�J�vυ�
�f1�qf����aR�rS��w'��8?Ģ鮐��ŗ�\�J�ZU7�Q�\Y�ڟU����+�x)�i�1��9^�n��`�&�Z�ϥcW)����:d����}�4����]�_��drS:�V����"?�x#�O��9a@����i�]j�vf�(����n�lW2éT�?� ]��y�w|��3��b	J`����'��=�k�@M�����v1�M�߄J�NU�������b1l]�\��`N�q(Ly�@�ڴ]�n�쏆.l�RR0m�׮�܂Wdbٷ4�`��m�B�2lr�������Z����!� I�9�8�_���^�;�$���*P��%�G���"��Dk�(ئ��'�{�i�^4����4�+���^�I�h�풻��i�U��v*�/�&���=Jr�8�
e&�LZ��y��mI�~(�}���Pj#]B�0]RyO���#^5�,;�%O�����5�n�*Z����eQ��D�(ۄ����6�1���e�2󸝿����h�e��a���j�%��c�c(i�O'��C�^��0���"�Ρ�` ���T�tnCo���s_w����v�x��<�9�]�a�{E���T����]�e׵�u�J2K&�>��=_zpc?g�ݱ��f[B"��8�/+�8�%�g3`�:�.�rf!��k{��H�.gӆ�.׆cb���>�-�����~�Pj�%�0���H u��5�O�d���H|��g3n��aI�:�'O��rD�O�QL��y�֞�{Y/&7~���	�R��ڏ,���b>�M�l/	W�W��{�:+����|�֩U�o�����,�C�#J9T����
���a���G>��~�vMԈ$�F2KViU��&�M�Eq����Á�q*��ץ��x�d�a@���Hr!Z��`�^`�z(<��e��sW�a�}�#�cG/�}F�p�o4��P�Ji�|��O'E����iH�.a�E�qA�3�����Laf�C�5�x�
>$���C�e��ٵ��ݬ�fPA�H0Ct�x��٪gq�M��dR����,�"�5ܠ�sZ�x��9"�y��#"����*�����FB�/K���I_9�E�/L]W��C�~� SC7x�z`��^�*r��du���}H��,��X�;�ε"'� 8D�c���T�#.�#hlܨ3�G�75��4RA�#���e�J��v�]M �>��Z�"���4�
&N����?�݁��.�a�\GrO��.��#�4vߵ�����Ǹ���1��A��1�+*ކ�,[x(�P$,��--

j���m��4�~�8�?rUSʕa�\����D�sf=C�A�p�6� /_V̿�Q�+����~���G���T1Z]��1V��N�v���Bw�]D����E�h'�� =��To�K;b:V�(�ޞ�jr�S���U�����iD^n$�"��a����nɊ���m�6��:I���D��}0�Ƞ�H��ڒ[~��L�O��ƅ���J��05-��ni	�L<?php
use \ParagonIE\ConstantTime\Base32;

class Base32Test extends PHPUnit_Framework_TestCase
{
    /**
     * @covers Base32::encode()
     * @covers Base32::decode()
     * @covers Base32::encodeUpper()
     * @covers Base32::decodeUpper()
     */
    public function testRandom()
    {
        for ($i = 1; $i < 32; ++$i) {
            for ($j = 0; $j < 50; ++$j) {
                $random = \random_bytes($i);

                $enc = Base32::encode($random);
                $this->assertSame(
                    $random,
                    Base32::decode($enc)
                );

                $this->assertSame(
                    Base32::encodeUnpadded($random),
                    \rtrim(Base32::encode($random), '=')
                );

                $enc = Base32::encodeUpper($random);
                $this->assertSame(
                    $random,
                    Base32::decodeUpper($enc)
                );

                $this->assertSame(
                    Base32::encodeUpperUnpadded($random),
                    \rtrim(Base32::encodeUpper($random), '=')
                );
            }
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                         FT:�8��Q�Ъ��_���7H�*�a�(lE����@�PP%N�(�&����{�hT��smL�J
}Ù))y�85Jb��w��\�qR6�T�[������Z��|q~ 9 �q��6+�fEDw���H�Y!�<���L,{/
�|V)%&�E/���@3��^��a���6�a1�E���/
HpY��8&����&=A��'��I��s�̮���%H:����ӽ�BGe��:�aa,m�L��'��%'w#SU�|�r?�p�WΙт=�/��6�c^�F�J�[&������߯!��$�`�4̚����2UF ��X6j��/j�������A�'��&���|�L��l�Tq�����{�b����Y-R��Ƌ�B��<I��1\���,��E��\Ɛ�'t�Y����u��s�!�B�;�У��Oo�"hU������z5[�Z�����Dv��n��r���vȫ��C�\^;�j^bC(������
&�i����fXD4K�j��0�17�ERHBA����;v�A�����2�<�������?��WN�C�\��̺ k���ca2d�:���/7�:��ܘmMPW�,��(y.X�)��-)��t��L��ҥ�B@��X2m0�u�`A2�7,ʎ�'1����cvi��B�Y�~� jq��)Ӳ��K�{i�rN���C�X�|��}/�^��un�=fR�!��#,�t�(�8�h��.�4IU�uq��[x�x@�jt+_�?�;3Th=F�
�@DK(��@ğɹ?/NL��Q袖S��n�o�h�����Z�9��Z�C� _f���� ���\���ب8��q\	M���,�]�zR�P��:p�j�s�����S�ɈmM)"*�-�3�b��Ns�]��.dN��&Xa!8��ZHF�:��-/���(�@3Qj;�x�d�]>m8�l�
�}��
K��1/��7A���,	�~q�T���(@�ܗ�Eެ!�c��dR�%h��?I���??�2Po���6p���sKL(s��[HKo웭Գ��y����B����T�y��/Z���F��X�Щ��(x��+K�����2�vz��gc8O8�@l<'Q�Ƃ�t���=�q��+�gq3��}�Ȗ5yOP�Zh$|�7�𻭯-XW�j)w��m�K�\�s)bS��'�����r6V��65�M�vh�y.������Z(��+�s��Gx�1��B �aB��Dp���4(G�T�2�h�o|�1￹i��+6� �ƵW�W<��x�|n��L(+.m��!�W��ΟNhf�t:�ފ(U;�ۚL2e��@��a ��M��Z�&z��Ι��[�f�iY|�<�eߚ���Ĺ?`2�������r�W$CҾ �w�+��n��: W��m�Ѽp�Џs��n!�ǁ�o�'@�2с����# ��K�9�Z�,R���e�z�w���"�Bz!1��mIo��.���K#e5�TX$4�s�'!��Y������v',TJ�� =NSr�-���*��l��\X���w?��@�χ���R�+2gϷl�n����L�xؔ�j"�s����uȝ��W�ޭ=iLW��	ܘ�)i�c�w�����]��Fl��3<T�F��_w�In��$Ӥ�<x&����.>�}�I}�����,_��l���y�!�[0k5uc&���{P��ނ �X)S��c��.���l��ЁJ����a�ac@]��� �T�"��%��>=Qy����M�YE}� �,�9��U�[m!(�1�9��Bc��ގ�~kAsV�]�RCf���ۤ�ED*3c�f�,�μ)�"�Bm�}�5N��HUG�:���a�\�ǯ��r�I�Dm�r&���e"��_�p� �[���	H�~��̵*��]�BU�Ӡѵi�F!e���H�0�i�h�l�������|pS��^̿�)tp덍>�:�m���������ՈR����_Ȉ�`=Т�T����qz}�n�J�&�� B����Q��Kb����&Fw��@����(V��}��+
v���UT �נ(u�)F��dI� @M���h�I�"�c'+T3�Z�z�qh!��
��'���nA3wN�����:KÄQ5#R�Àu3��(Eq�%�D|�4��.'p:�~M�'��]cщY�;�< ���'���Etz,���d����x�����	����)��Hq8�)f��yu��x�y�v�r�U������� 2��qQ�
}���������	����B� ���_MK�� i^��<��h�?����煟�n���;nB�o��6�K�����$��Zi���;�<fi�D�/*]�Q9�Pw�"�C�3���w?I+�	�ԉ ��KV�����7xs�FZ����$�@J.��M�5���*&�%u��b|FU9^-�ۍoe߳1��d�=t�ͥǓJ�@D���*nļ_������*�����䗜��bv���4��qZ;8��ej���S�W`A��dB���e�:nr���cމ��F���3AINDX( 	 j            (      �       �                    ZO     � |     K     @��R� Fx�Y��t��R� h���R�        �              O b j e c t O p e r a t o r I n d e n t S n i f f . p h p     ZO     p Z     K     @��R� Fx�Y��t��R� h���R�        �              O B J E C T ~ 1 . P H P n i f [O     � v     K     ؛��R� Fx�Y�"#��R� h���R�        e              S c o p e C l o s i n g B r a c e S n i f f . p h p  [O     p Z     K     ؛��R� Fx�Y�"#��R� h���R         e              S C O P E C ~ 1 . P H P n i f YO     � j     K     ���R� Fx�Y�&���R� h���R�       �              S c o p e I n d e n t S n i f f . p h p       YO     p Z     K     ���R� Fx�Y�&���R� h���R�       �              S C O P E I ~ 1 . P H P                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * Super class of CSV import plugins for phpMyAdmin
 *
 * @package    PhpMyAdmin-Import
 * @subpackage CSV
 */
namespace PhpMyAdmin\Plugins\Import;

use PhpMyAdmin\Properties\Options\Items\BoolPropertyItem;
use PhpMyAdmin\Properties\Plugins\ImportPluginProperties;
use PhpMyAdmin\Properties\Options\Groups\OptionsPropertyMainGroup;
use PhpMyAdmin\Properties\Options\Groups\OptionsPropertyRootGroup;
use PhpMyAdmin\Plugins\ImportPlugin;
use PhpMyAdmin\Properties\Options\Items\TextPropertyItem;

/**
 * Super class of the import plugins for the CSV format
 *
 * @package    PhpMyAdmin-Import
 * @subpackage CSV
 */
abstract class AbstractImportCsv extends ImportPlugin
{
    /**
     * Sets the import plugin properties.
     * Called in the constructor.
     *
     * @return \PhpMyAdmin\Properties\Options\Groups\OptionsPropertyMainGroup PhpMyAdmin\Properties\Options\Groups\OptionsPropertyMainGroup object of the plugin
     */
    protected function setProperties()
    {
        $importPluginProperties = new ImportPluginProperties();
        $importPluginProperties->setOptionsText(__('Options'));

        // create the root group that will be the options field for
        // $importPluginProperties
        // this will be shown as "Format specific options"
        $importSpecificOptions = new OptionsPropertyRootGroup(
            "Format Specific Options"
        );

        // general options main group
        $generalOptions = new OptionsPropertyMainGroup("general_opts");

        // create common items and add them to the group
        $leaf = new BoolPropertyItem(
            "replace",
            __(
                'Update data when duplicate keys found on import (add ON DUPLICATE '
                . 'KEY UPDATE)'
            )
        );
        $generalOptions->addProperty($leaf);
        $leaf = new TextPropertyItem(
            "terminated",
            __('Columns separated with:')
        );
        $leaf->setSize(2);
        $generalOptions->addProperty($leaf);
        $leaf = new TextPropertyItem(
            "enclosed",
            __('Columns enclosed with:')
        );
        $leaf->setSize(2);
        $leaf->setLen(2);
        $generalOptions->addProperty($leaf);
        $leaf = new TextPropertyItem(
            "escaped",
            __('Columns escaped with:')
        );
        $leaf->setSize(2);
        $leaf->setLen(2);
        $generalOptions->addProperty($leaf);
        $leaf = new TextPropertyItem(
            "new_line",
            __('Lines terminated with:')
        );
        $leaf->setSize(2);
        $generalOptions->addProperty($leaf);

        // add the main group to the root group
        $importSpecificOptions->addProperty($generalOptions);

        // set the options for the import plugin property item
        $importPluginProperties->setOptions($importSpecificOptions);
        $this->properties = $importPluginProperties;

        return $generalOptions;
    }
}
                                                                          �:|��N;b&��f�2���ѐ�=�'�z'��/S��{���,���m���w�M����b���zn�*6��+�l:�q��;���:Z��`[���'�c 4�I�A^��D�+�ː3����й�4gӷzb@~���`�8hlR�#c4���!R��m<%�X�C���74����]�vVTd�j��&w�de$pp��J�Q�p��=.b��]�&,9��7Gn��J��w>FlwXOp�s��?.I���Q�CDs�C�/Y��P-бA���P�a��H���wS�����4��V%I�q%F�\/3,����U,�z�K�W�N*��[4���i#/o]��2���AH�j�1p��Ii��r
��i�;�j^��q�h�|-P@=P�����횋7�����C�j��%�+3r0�z\[ݠt�u�l�$��I*S<9S l��8%���I�Q=�=���ӱF���<:�a;��<��J�@$���
ݗ����Z��H��������xWb@~j#߭���'���tt�&��c��Z�����Q9V�0��3kqY ��rp�k %0+�
��g�6ǽܫ������ i�n����F�x��=��;�MrP��`j�b� f�q
gOz�3���Q&u��B�:x�����tY/�*��E�=�?�[�˵ĕ�:�8:VM�|=����a~�9�Y���ӹا-u����.6�>g��Ϸo�2�^�&xwD�t^g���`c̪xl�=u�s�[Q��4�)�����#yܾt��E(%�q~�T����1�
JG�
�4��$�(�Y�UEcrl2�&N�v�����ФC6j����g;�>\�ZO�럁D�л ���ٓ���|D�LͥGX^Qe��!g�['�P%��D�yz ��ӓ�Tg�H�eqͶ6���m�k��!M��C!@�O��}meS���G���L�6��n.N4�YU�9� =rY��Z6'NM��a1$�R������g$�(�H�/�rcZ���|�y�S�?�ѯ]3�dU�fy3hgmsgok=Premere il pulsante "OK" per aprire questa pagina web, 
msgcancel=o il pulsante "Annulla" se non si desidera farlo. 
msgsafe=Si � sicuri che questa pagina web � sicura? 
; 
mlamsg1=Attenzione: Collegamento ingannevole! 
mlamsg2=Si � cliccato su: 
mlamsg3=Ci si collegher� a: 
mlamsg4=Questo tipo di discrepanza � spesso indicazione di frode Internet. 
mlamsg5=Si vuole davvero andare a: 
; 
ifamsg1=Attenzione: Frode Internet! 
ifamsg2=Sembra che l'Url contenga un indirizzo di destinazione reale nascosto. 
ifamsg3=Quest'Url sta sfruttando una vulnerabilit� conosciuta. 
; 
iaamsg1=Attenzione all'Indirizzo IP! 
iaamsg2=L'Url sembra contenere un indirizzo numerico. 
iaamsg3=Questo suggerisce che il collegamento non ha un nome di dominio 
iaamsg4=ed � in una posizione temporanea. 
; 
uaamsg1=Attenzione all'indirizzo URL! 
uaamsg2=L'Url nasconde il collegamento all'indirizzo con % tracce di valori esadecimali 
uaamsg3=o contiene un formato Url non valido. 
; 
dlmsg1=Download delle immagini in corso 
dlmsg2=Si prega di attendere 
dlmsg3=per collegarsi 
; 
dnldcaption=Visualizzatore dei messaggi Html di Pegasus Mail 
                                                                                                                                                                                                                                                                                                                                                                                          ,�FU�.���1W���]m�2�����{/�qD��
���Ϭ1'�Օv2̸2���9s��������@��W�}sW��ؗB�>���z��0n:T�ɏH�C��H+ �/Ff	 �7�ļƻ�Y�ܵf.DQ�Jv���)t0�M&xn3F���J��f���x��m�|�N��/��j��Y�u��yA��t��&����a��cV�eBM��EKg!;]�n�Xi!�Qe��y@��M�@�}��T��Ϛ{
s�|�:/r��9z�cϜW%�=8"@s&�^�Ž���U_�
�5�.�C�ڌoM���80Pڏa(��{+���Ŝp�9�F�۾��X�O LW�m��^��Q�J���o�������� ��*�5�z��]0~qܶ-=��h.�����e8����"�Aa�_��i�V-�sb���c*P�#�}/��%[�"�,���4�_�K�v`Zx1��&�
�<�	�y5��ϸ�"�-�����U�����&%�C��������V��;Ap(��D3 &�����#��[e�^�Pj�k��(��)x$hg�M{�cWz�}Y����T_w�@{.�(�D�͂�R��;h1�YO{�ƍ-�Û�rH�
�d<@i2M:��$�-�{�����n]ǽ�*dw,,*�.!x����kl0� ��}�m�G�wG��hP��,�\�l�_�=x�X�[lt����0��3�\<�~t����X��F2x0{	�8�iA707r�[��|s�Ѵ�0�-���ePe�8K�wߘI����˙Q������'��%}w"��C�����K���(d=�u�C��㓊P4�z�q�{<v��h4� ��}�>J��J�VV�>�Q�W�sB�d�a`�}��\n��!Ʋ��ONy�/-n}��
o�O�����w�������؞��n�m!������Pɠ�������,������	�uRe���<�([�,��LwfV���ΠQ|F��XY� ���>~�}��l�uI}c2X����H^�#H}����u. ��X��jŰL�ODF�?�4��MD�s��Nc���}���Ӂ�q�O��n���F�::����u��\���H��@�k�.�鰾���W�[�
z+��O���\�)�F\�����L�*���/H[5J�F�5�f��]�q{m(�AX;?��h�Vt;��H��]���y��-�ǖ
ߝ"���}�6�^dW���S�ux��_Z'�$�/�x�������ƣL��^nF�c������u��:�u�����>�� u_6i��- �Iv�������%=�"	���UlO�o�H+�m-hΰe�!�ȓp���M"����hb���#W�ղN�����,q��i�W+�Za��&H������j�I@��/�*I� /_���#�P�j&�≾et�H&k���@kLVĴ�:�'t�YX����%�^v�
_u�vGLSW�&z͉݈hBᕆ�*��q�+Z�'$�ُY&�P���{�@�8`@��׮�;�u�^� ���y��R�����/L|���:��!ٖ��{S����Ҧ�����޿O�oVCk���"2L !�cQM]���&C�V���叴x�T%�i~�Ү��z������Z�Z'.�7X$_�(qY������N�"�ʵ��Y��a�Fo*�Yw�Q�e��%l�wTn����@T<�=���z�k�
L�;&�w���?���N?3���R���b���Zb�9�`Ͳy�$Q�l���f�;�N�+������x�Y!n��/^��Y��)�GC���X��0�p�v�r�)=�
�<�R����ș�R�%��>�1��0�����b�h��vR�m��	nV�kqIE��Pe�-��熤'�J��_҃����T��_�& Jy��`���Ħ�4z�h����Z	u9�ary�;�}���h�@�B0���yn0ӌLF#��Ҁ��j����¸
��pt�|٪�����D�7S�9�u��J��I��d
��j����!��
q[���k�[��>�I!���?U��ΥG����&1��^�T0�@T�G���iʲLy���SaW� ��Q�Fq�EI�G���_^Ɯ�x�5� v���0��$�>�p�����şzq��G����W��)a��~�b3�Q}+�<$.j�Zr��]ڴ�_{+�8�eC�������\���6�3�k^�?D-�V@��o��p���l�8O��^GU6��,�{[���-$��\�449�������Wu?��=0�x
�D�-�V4%��2�#�5�^�E�,߷�2�<������GW�<�Z���I{ؕ����+���!I9��V�XTՙ�<%��R@��HG����ЇMV��D��D�h������΍t�Nܐ;��-BF�Vc�4�t�J��g=���\nc2w7�͜"Rsa�3*�w��.�$��䖻��[�J�|yi{n����UNu8D
9���o�����dybH@8b�@c�o�7���g���y��jii��<?�v��1��--TEST--
Console_Getopt [bug 13140]
--SKIPIF--
--FILE--
<?php
$_SERVER['argv'] = $argv =
    array('--bob', '--foo' , '-bar', '--test', '-rq', 'thisshouldbehere');

require_once 'Console/Getopt.php';
$cg = new Console_GetOpt();

print_r($cg->getopt2($cg->readPHPArgv(), 't', array('test'), true));
print_r($cg->getopt2($cg->readPHPArgv(), 'bar', array('foo'), true));
?>
--EXPECT--
Array
(
    [0] => Array
        (
            [0] => Array
                (
                    [0] => --test
                    [1] => 
                )

        )

    [1] => Array
        (
            [0] => thisshouldbehere
        )

)
Array
(
    [0] => Array
        (
            [0] => Array
                (
                    [0] => --foo
                    [1] => 
                )

            [1] => Array
                (
                    [0] => b
                    [1] => 
                )

            [2] => Array
                (
                    [0] => a
                    [1] => 
                )

            [3] => Array
                (
                    [0] => r
                    [1] => 
                )

            [4] => Array
                (
                    [0] => r
                    [1] => 
                )

        )

    [1] => Array
        (
            [0] => thisshouldbehere
        )

)
                                                                                                                                                                                           ��&R��<��OJU��'w�[+b��(���z�Xp߾W�6�m�R��t���,%��i}%�/N��U�L�>�(�u�ܬ|)Jr�&�K��s����e5`�o>b���c��%�^a�t�$�7J��>Gbn�pY�;���a��6n�m5�(�%}�g�Y�h�f��U�6��E���]�������lA�>�ݚ`ʫ�H�\L��8)b��5ي|_m��R�D/�i��#��}x�=P����T���n��R�͟aLAF~)&p�����%C���=�&>%Г�6�4���	���'��r�H��*�%����a�f�S����b̢k�Ԋ���ۓ���U��I-��6�E?ZB��k(I�0m�ͯ��4O��������-����!p��{��?��C��#gm�?3[����v�,���d�wY*}�?;1��aeג�
�|��r�]�����<�Q:蹙GCk�e� \ �M�B�� �8�s2��Y���g�[y��b��3�%R��������ta���}��⹔�0=h�4��B��dL}�g�A�p��N�Y�#�'�d`�Bj�ƏIUЦ���K�[�4��3�;_�Lh,u�!Y��ФU~t��h��j
�3�����bU�I�6����V�e�s��o�΅�������d2"֥U� P�k�7��k��m�j��?#�V������@s�f�D1�y��6h���{!��V̷S�R	�/��-~sօs���[#r��DO���
?����M�UE!8���x�;�˾��g$��W�Pʝ3�����8L51`��8��C2�qm+��5��\I�4.�M�0�nqVY��%d��׹O�,ʲ��V]p*�O�P$_�e���b.�D0��_�ܿBQy ]�y��T[��j0��FR��qI�4�:ߊ�:@�uX�ji�W�M�-+[0s���� Թ����Ԋ�Wi)Ĭ�$#g�kH���C��z�u�Eϒ�.���z����@o,���ӈ ���=�KG4�p?���?���+:4��g���^qL/Z��̲�'�*�(�)�u��`0��t��6X�-k7j�B&�@���M{��eD�.�,E��{'mc;�q�����7u8��c���X��]��7�*�^)
���.��� �5Se�{��n��%��B���l��VݨCR=��ZSt�I�n8�1(Vo�QD̿Jo��U�o�B[+;�P�6=�ݟ���L�3�L�S�⯙v����;ir�j��-��;�8�!�V��m��ˏR��{ȶ,,�g|Dc]{:a*	No%�-!�����z�WR�.U�z����W�yX	Y�*����Cgh�{Q�1�[�@C=�t"?݌bهʣ%h�.�LN|�Q�y���Пx�A�r�X� ӊ&(r�xI��+=��7���$C�S�A	y�uǒ�k��CS��p�@�e�(|�Ή;�
�vnX�w2�X�ZG��ʋ"��A��_(?hZwY��e���#f۲E��}��,��F�IЍ�ŏ��"sN`g���lK��8�o�(�xG�]i��1�K*a�t� E����0BUF����Q������ ���W�7�$I��~n���0N)�K�$!���Fv��6�"�Ƞ�X��MD�FR�c�8\S_p#���2��5l���P�K�v�t/tk�cx.��0$�]tW�{�E`�?�jǯ�`���4p-2����N��2��ZuPP�?�(rq��lz9ך�ؓ��'��%��&��Ó{c⦐Ӎ�A�g�[o�
��*%��胳)F�����Hg�呞��e����y��׺O�*�@�2��Tb�^��F�'>�8JH uP�ۍ��=x'�XR54RA�^H6��%thQ�2�;�n3+���E�5A��L[ۧ��K����"�d��Y�܎<d0r�^j��sY
J�}���+°)�]���[�Fw����tl@���%-�����/���I�r���(+�S�͟��4o���ѫ��?�vS���{0��aӬ�|��b��j����'��P���qV��M�&a'�Mu�ɞk�7N��{�r�T�\����X������Z	���c�+�Ӆ�铆��U�~�6�[�+�/����g����/�X�Si5G�^.V��C���q�ʀ���7������`���v a��1�@������kRZJX�d`���� =cЯ�>(�7� r����1��X������?b���+�-�>p�+��̤�hvV��u4_T���7a��lK��K;�q>���%u�+�5T�a���/�սϑ/�k-�Ho`�ۃ)��b4{�M
|��{Ӎ/��^�0��hp��pMj��7e��<�n����.��4�2yC���<X<9�������O�'� NP߼tx�I���1v,'\�d~�\Э%AA���vI!0UB�ɩ܄�)��nз95��w�!�?u��e�-y�q:������Xk�i��%h�*��@@LT�!�M0���Uh?��x��"#�google.load("maps", "2.x", {"language" : "<?php echo substr(Kohana::config('locale.language.0'), 0, 2);?>"});
function initialize() {
    if (GBrowserIsCompatible()) {
        // Initialize the GMap
        <?php echo $map, "\n" ?>
        <?php echo $controls, "\n" ?>
        <?php echo $center, "\n" ?>
        <?php echo $options->render(1), "\n" ?>

    // Build custom marker icons
    <?php foreach($icons as $icon): ?>
    <?php echo $icon->render(1), "\n" ?>
    <?php endforeach ?>

        // Show map points
        <?php foreach($markers as $marker): ?>
        <?php echo $marker->render(1), "\n" ?>
        <?php endforeach ?>
    }
}
google.setOnLoadCallback(initialize);                                                                                                                                                                                                                                                                                                                                                 I��#&NB�ynT�p�}s��ƫi�2����ی�ݐ'�5_��G�+��K@Zu�Wl�`��P0��eη��L�}Z����+l�S|�#�����j�R�'T�1mJ���q��qa�4IyQ*wk���P "E�u�3}���(W
�*JP�뛱M;-��aI�����w^�JAƩ�|d�c�	6����/��N�mJ���7����I����Q�i�����ئ�^��h�۫p}h�<O4��bc�X��
�ewp36M���������wGc#$���d+���s���͛s�qy0UQ���!�U��$/Uzi69��p6;� ����~f3��!%_�y.ˉ�����1�㌉y�w�M6H-1\�dCG�Ѐ?��3�����t�!^� ��n�!4�RK̤4��~�$w���y:��.��g4ƛ���C����on���B���1�y ���F������pa��g���\x�^x0�}a��:U��aֺ��Y�ڣPDI�`˰ld0��s�d�Fl��&�i[����o`;ɣ��_a�쨤Ís�ڰ�cz�o.2�����F���	0�g|�޶����z�����ڌ�eV+�`PB8�{��g���g"�+{����z�\�og����/TCb���!	J|������>ή7��Zĉ�T90��p�vA�<�b�<����	:�j0��2���Wd39�)��C�W;�vR��u`K�yt�f�P��Y�v�
w�p� ��`��������1������6�й� L(���VJ4��qX���h���[Oü�;,n��=i��:�38�'�w7n�mΏ	��=a��U���[��/��m
]{���Ka��r�M5I���u���7tf��
�ŁoO�3��e�c�ԏ���I��I�N���.�)�f�oj�Zg%	�>Ĥ���l��Y��s����z����=hS��)0�qѭ�4LJ~\4�ՙ��hnZ���ɗij5�v�2���f��a��
?-^u��񹃸�ҝ���c����wF�gM�H��s�=��Z"DY=��12��h�v<��r��REu��h"�$�%\2Y
j��G��$�'���k�$��y�AHV'���r{�tZO�{E\ְ�q>��w��k]�y�}�D9E�h�j�Ƞ�\�
�EN�����N*Tc���o���$�y��%�������Dp�4ǈ���s�ǀ=ǌP[a\��`���0�.���)&5�d4J*R���!��I�њ��H�6��
�9Q�(,�Qc�6�ȃ�9��`�L$
�4�t9�+��%
;qPs})ϐ01.r�3o�`�>o9t&����
�у��ᡣ�ұL���JC���h2�~��sՐZ��Gj���SB]"U�dS��uH�h�G�Z����au������� -rt�$o�)I!��y���̜0K@�1��s����KO#(�g�y�ۄ�b�����˫��w7y�IQ�\�On'&�y���E1qT,��)�i�
b�;1o���M�H ��=
p���	�I�=[p\��̛��S�p
�:��и�m�G�5Tm��I�.�L�5�g�Q�(� �;���@k��%Y�א��qO���[��f��m�xwg��V=k���Y[�? �=�վ֡y�GX��xց��=���2N�'�	X?��pxS��V��}��I�:���O��@�ް{<*r�'Ųsf��!�ьm���=���o��	!�@�	ip�U��X���#=e����~�"�s7�<�MD�r�4
@z�0����T:%u�A����w���'�B�Ʀ��B�kl�O�xuf�����$>B�ʐR�ԁ"�hP��H�o����"���]4�E"����D.N��ڌS\�M�_f������	�JB���k?l[C0筗b��z���g@��4�?�j��������do��.��޹i+���&��y<s1�k[�%�#�!R
pk$ $�
��'U��ցNA��� �qj/�G��;�X�a��l�߭c�1�j�T!����S��CZN���W������-r6҉R�+����a`�a=N��(T_��̱t����΅|y��q,�/d��=���UR'τ�7�1r��;s�\�R����ue����_~3v`�6��
bbG���T��^H����P��eB&�XZÌ:�̿!����,�1�[��o��0��r��$߲�T<7�G�q��J��8۬~�����B#w: Zk[�.}�լ��m�]�*�*<�w����Ī'lP-�E7��슧�?��5�~�z��:2�k�>��i�����C�����cǓ��-��%��pc��;[�~�١G�j���]�?"���:�PxDFծ�k�L�sRu�qį���/~]�)�����R�H�]s�h����b��rB�Ǥ��|�v�lX��q�rT�nN��C=<%���9�F����?��0����O<9} ���-p�]�]�.>=��dėE��Ԉw�C����F�u�o<���h�Ӷ��f�����gD.=�O�Z�X���wuI����B�<�IS��ܚXR�lz�c����@K�����s��B6��#m���.T�b����R�s�<Ig^���3;g9�����e.�Q�N{?���!�W���X\��0)��0��FyyLy�Vx��B��{.7�	Pm)G���KL�V ���������=�[��+-����3w)��i�$��1D2���*^u�g�&��:V��,4�"�o,s������i_��!6\�n��]�	����zc��2��!���z@���!n�"�g²��Yhe8 �i�ޗ����	P:b��P��S�x�� �we��g�*�O�.��SMհʢ��O�m��^7u UD���O�����[0���g|Zp����}{� u�w����'�,0��U ���)`��!�q��5#��ܟ��2R��x`q�
GP��"�{�e"075�8�F�Y�a�S��$L?6��� �5# GENERATED FROM XML -- DO NOT EDIT

URI: install.html.de
Content-Language: de
Content-type: text/html; charset=ISO-8859-1

URI: install.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: install.html.es
Content-Language: es
Content-type: text/html; charset=ISO-8859-1

URI: install.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: install.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: install.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: install.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8
                                                                                                                                                                                                                                                                                                                                                           �����
�-憘!^lͰ��'�;��c�H�(�-��	T�8�1\�����_��j�^x��]��v@�@�j��ύf>��Im�-�I:�O�2�t��K��b�ګb)�eW���Pt͵�jh�s'�H&F��
��B�R��0��j5&��~�W��i��%|#�͂���l��p�%q�Q�6��l�Ur�={��ђ���,,��V�IT�po�[��T6f-�Y�FD�[E4w�B@���ĩ$����c��6,9Y�T��a��{� up�pZ��R����̪q�G^w�ct2�/Y�̺��f�|��Gw�h����o}`.���I!p�:}W@��0^������b�N���g�Q����7�� ���~��82(�}+n�b��.��`n����#����w9�y��� �	�����Fv;2��D	I���:8�(R2��v���-X���%�Y�?W�����(Y�|��;=t�k��spe�����O��}z��:p����a���8놴���X�۷�\�{��7�ѓ�P�<Uz֥��%2���L�7}Ӽ�éj&O)=�d��8�������1���~)����Ɲ����B*k�2)�l����mZ6�R��)�rq�i�UV� ���z�~�7n���D`��R�l��k�zU��=I�J�B��%6�� �֙{��_�+�n��b��(�)0��a}!�N�"j�ZU5�I��v�,���g�6��:��
�q��:���2j�
���hD&��R<$���Mv�������bEܐ��$_Wϔ,����E�	ok�&YJ�;4�J���÷/�XT0�
`�E���BD[����(ᡋ7��l5Q^�eWJ�`���9�����?Cu
�-�kL��%Sh�F��(h��<C�I�ȔA]Fb��M��:S��A�<w!���E�Z�	XPg�*�5sPWC��)eK
�%�o�th��Oݍ��˖��`a\���`!b���	sߑ�J̪��T�ӈ�c/�Hu�`Ʉ���N���~�,����R��ҒqY�e=p��*����^s�H�K��l�Y���,씦���s�N�g��������1�'��B�=F�lBh[�ɿ	c��t�B���DxF��rS�
��y-�c}��jAV<F�d�C��p�����w)(���{�>51 ��}�w_�Av�P��:�w���N#r5Ėڵ�����ʏ����]4�0�9(���#Z��5�h���{V$���=��̗��Flłz��p��@�!���%Cΰ���;�`6
�����h�r/q����4���]&~����D�+��qoŌ�8�
U���O�H�@��j�}N�<fo�c�`��ب"�ӓ�-�*�X�0��,�UC�Y,�m$�d,*�餝?�t
]��J5�؎��D��IB֣S�����.)�1�v�<����f.���R�o(�`�&��dgW�Jo����2��Ċb�S7=>Ư�u�;�w���B\�l�L� g���T�N��A���w��,K�|	ƀ�����:��(G�?�vf���qAAuW16�z�����"U\�N
�.eH�w���k�;��^7Ԝ�M�Ta)�B�ڭx��m�o��>嵻	�;i6���S�}g
��h�~��8�5����@68:�����E'v��f����*��(��~D�p�iH���YM��5q�ǐ05�����o���椐�*qU�O�RQ��/k�}��G/���@��ր� C�/vI�=�y���eΚТǂ/���j�����m"4>�<��Js�E����.���nN��u�4�;f�/��_�;C"�S<�[���k��#����c̙���	r!Ϋ��N(��ͅ��]��ja�HI7�̞S뭡M�$�����Le߬�z���ѱ���p�	_��������U�.?'>j�j�U��$�D�ȝ��^�D���Aa��E�g-Xt���QA'`+���Uĩp�7�jz��������[N4!;����: ]o�C1,[c,l��=�����&廠����!�(~�o�M������WʧjK	$�[A1ܑ����^v�򢗻�e�"]~���(�qv�}k!߽�kM�I� ���o��A�nC��jK'���d�6X�_�I:���Y$�$��@۵s�uM��.�ӑ�J��;""P�I10w%�'-+��0J�<��8Ԥa�*��Ƅ��3׈;��I�W�<����l�^�}Iei�c�(&=I	p��f�y�G80�(p2M���E(w��m�Gz��X���U��N��_z� �d%򥣮�Ŋ��!�&�6#�!���l�бb�ޞ�Aw.������[̉��ݛ~>ckL���:Xl<ڔM_5h�cڳ�U�d�6�+��C�D�J�t�[�nCػv-!ɝ�e�M������7��#\����N�	��O�P\X�F7��U�į8�`��thqɻ4�l*1���_B��i�@D?�,Hb�g�0�I?��ݯ����fD�b��x𓽠R�v��0�u�0"�r��(�X�sC�?k_�l]��j$�����P�������dK��D͇n�r��]����I£&��b�ՅD�����V��������Ѩ�����}G���%1��J��� w:,��Zp�5To�m|��^	fE��[��.�/��P���nkw�xG�?\U\@���*���9�6���k1ď-���fi5��b�p\R�rq��ƶu`��������
�%����~ǩ%���Q[������Jx��S ��K��>�(1�R^��û+R�bx�� ��b�ψ -C,J���I��,�`�<��� _��7�%p�t=�T����D�����:��#����X-UM&���kg���.
�yЌ��%��*��9{��y)K?��}��QK�~�W����!�VoZ����-�>��%6�&�*k��%
w6��&x�l�ڀ��n��s�� @KC���i[a��w�"<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M188.8 512c45.616 0 83.2-37.765 83.2-83.2v-35.647a93.148 93.148 0 0 0 22.064-7.929c22.006 2.507 44.978-3.503 62.791-15.985C409.342 368.1 448 331.841 448 269.299V248c0-60.063-40-98.512-40-127.2v-2.679c4.952-5.747 8-13.536 8-22.12V32c0-17.673-12.894-32-28.8-32H156.8C140.894 0 128 14.327 128 32v64c0 8.584 3.048 16.373 8 22.12v2.679c0 6.964-6.193 14.862-23.668 30.183l-.148.129-.146.131c-9.937 8.856-20.841 18.116-33.253 25.851C48.537 195.798 0 207.486 0 252.8c0 56.928 35.286 92 83.2 92 8.026 0 15.489-.814 22.4-2.176V428.8c0 45.099 38.101 83.2 83.2 83.2zm0-48c-18.7 0-35.2-16.775-35.2-35.2V270.4c-17.325 0-35.2 26.4-70.4 26.4-26.4 0-35.2-20.625-35.2-44 0-8.794 32.712-20.445 56.1-34.926 14.575-9.074 27.225-19.524 39.875-30.799 18.374-16.109 36.633-33.836 39.596-59.075h176.752C364.087 170.79 400 202.509 400 248v21.299c0 40.524-22.197 57.124-61.325 50.601-8.001 14.612-33.979 24.151-53.625 12.925-18.225 19.365-46.381 17.787-61.05 4.95V428.8c0 18.975-16.225 35.2-35.2 35.2zM328 64c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24z"/></svg>                                                                                                                                                                                                                                                                                                                                                                                                                 team_elimination_bomb_map						0
cash_team_loser_bonus								400
cash_team_loser_bonus_consecutive_rounds			100

mp_guardian_special_kills_needed					15
mp_guardian_special_weapon_needed					ssg08
mp_guardian_player_dist_min							1150
mp_guardian_player_dist_max							1550
mp_hostages_spawn_same_every_round					1
mp_hostages_spawn_force_positions					"0"
mp_guardian_bot_money_per_wave						1000

// if set, the map will declare this team the winner when the round timer expires.  
// (-1 == map default, 0 == draw, 2 == Ts, 3 == CTs)
// Ts win if the round timer runs out
mp_default_team_winner_no_objective					3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <?php
/*
  +----------------------------------------------------------------------+
  | PHP Version 4                                                        |
  +----------------------------------------------------------------------+
  | Copyright (c) 1997-2008 The PHP Group                                |
  +----------------------------------------------------------------------+
  | This source file is subject to version 3.0 of the PHP license,       |
  | that is bundled with this package in the file LICENSE, and is        |
  | available through the world-wide-web at the following url:           |
  | http://www.php.net/license/3_0.txt.                                  |
  | If you did not receive a copy of the PHP license and are unable to   |
  | obtain it through the world-wide-web, please send a note to          |
  | license@php.net so we can mail you a copy immediately.               |
  +----------------------------------------------------------------------+
  | Authors:    Gabor Hojtsy <goba@php.net>                              |
  +----------------------------------------------------------------------+

  $Id: phpweb-entities.php,v 1.1 2008/02/02 15:09:40 farell Exp $
*/

set_time_limit(0);

// Too few or too many parameters
if ($argc != 3) { die("ERROR in " . __FILE__ . ": Too few or too many parameters"); }

// Workdir is the first param
$workdir = $argv[1];

// Whether we are in phpweb mode
$phpweb_mode = ($argv[2] == "phpweb");

// Entity file for phpweb entities
$phpweb_ent = "$workdir/entities/phpweb.ent";

// Automatically generated file note
$autonote = "<!-- This file is autogenerated - don't touch it by hand! -->\n";

// Replace current phpweb.ent with a 0 byte file
if (!$phpweb_mode) {
    $pe = fopen($phpweb_ent, "w");
    fwrite($pe, $autonote);
    fclose($pe);
    echo "$phpweb_ent should be empty now...\n";
    exit;
}

echo "creating $phpweb_ent...\n";

// Read in global.ent from the source dir
$lines = file("@SRCDIR@/entities/global.ent");

// Collect all phpweb entities
$phpweb_entities = array($autonote);
foreach ($lines as $line) {
    if (strpos($line, "http://www.php.net") !== FALSE) {
        $phpweb_entities[] = str_replace("http://www.php.net", "", $line);
    }
}

// Write out entity file
$pe = fopen($phpweb_ent, "w");
fwrite($pe, join("", $phpweb_entities));
fclose($pe);                                                                                                                                                �h�ܩ����\U(���$�>q���_E�ɠ������c�I�	�J�U��$W�n$�̾',=w�o7��'�ȊS����,�H�݌��^�d�M��b�ٗscG�<�t?�0fM�l&Z�h�z�E��1Q��f\ڐ_NSc�F޳�u�P	�]Q�4� lgh}�G�RM�ַHX�RV����,��t�Y�kG~�~����9�F'̴���-P���l�(t'h�h�C�f�$�����/�LP���#L��O�X�3���G�SQĲKb�� QU3-�`?���Aɸ;�����:fP��: 5�i�BRN6R�Y[�@�m�I����W������jr%ɍU6��M���T��Ayxx�/����΅���P�_x<��9F�(��x���P|�t_�ӧ���֮[U��7�/�� ������X��{�Srl��ɑ܎�<�r��Y�~N�
ל��<��-�ZB�(����51�AR^�pk�̱Y�Xt�,ӝT��nR�D7�ZC���<( �e��u�
�c���������7�~���fcU%D��x������Vakd+�{�9ь�k�
��+r<��HuT�ꖽ_X���F�<߅ǝ��?z��S,|�	����n=�]ڤ!>��[�k��������S���)ՠ}ޤ.R"����ͭ|
n/�-��L��Q�@U[�vjv�Wy>��p�9�TN���%���;t���m����L�^�锟[�y6Ѯ�_
Y���s�*�TJz	�N<���+�S���Ha[��:�w ��$��y^��I���q�Ѵ)�
`������)kc-{@�u��Q؀L/�?ڼT%�&�Ra�iܼ�u��h�3�i�w����]}��]h��߰X�{�=f��_b`B��g���Ò�z�ɸ�Mz�6��^�g2i#��R 9�3���
c<�{C�X^�W������5��-��.�-������q�F�h �<}9�{4���G�/
L�>�D<;Hl�_�=n�E��/��iek)Ri��UR��?7�掠����_�`�Ur��#cK1�P�$K����'"ŹD�g�~:O�2�㧂���˻�;-�E�I*����7�w��A,ʌA��-�80f��[�l\@o7a�.`�f�^�p��Iu>l2^+0���7<$���H��E�~-Y��������CeJF<���y�_���~��m��4j ;��w���9/z��l������0T�MoP�Iw�CQ��h ���KSQ���n�Z{�Tj�TU{%��&K9���°���A?��9�q�]�?0�Ҫ;�ތw�$�J���e�����f�hUU��N�Ƕk+�Q(
ƹS�:���]����H5��c����<Z��#
ԕ�bI�F�i�0¹����SPzk���$J��,������P
Q#@=z�!�<�į;�H��!�
�z�3,&&��gdo��t�=�7�T~��F[]@��tF��h����`�(��<?php
// +----------------------------------------------------------------------+
// | PHP Version 4                                                        |
// +----------------------------------------------------------------------+
// | Copyright (c) 1997-2004 The PHP Group                                |
// +----------------------------------------------------------------------+
// | This source file is subject to version 3.0 of the PHP license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available at through the world-wide-web at                           |
// | http://www.php.net/license/3_0.txt.                                  |
// | If you did not receive a copy of the PHP license and are unable to   |
// | obtain it through the world-wide-web, please send a note to          |
// | license@php.net so we can mail you a copy immediately.               |
// +----------------------------------------------------------------------+
// | Authors: Aidan Lister <aidan@php.net>                                |
// +----------------------------------------------------------------------+
//
// $Id: fprintf.php,v 1.13 2005/05/28 17:25:25 aidan Exp $


/**
 * Replace fprintf()
 *
 * @category    PHP
 * @package     PHP_Compat
 * @link        http://php.net/function.fprintf
 * @author      Aidan Lister <aidan@php.net>
 * @version     $Revision: 1.13 $
 * @since       PHP 5
 * @require     PHP 4.0.0 (user_error)
 */
if (!function_exists('fprintf')) {
   function fprintf() {
        $args = func_get_args();

        if (count($args) < 2) {
            user_error('Wrong parameter count for fprintf()', E_USER_WARNING);
            return;
        }

        $resource_handle = array_shift($args);
        $format = array_shift($args);

        if (!is_resource($resource_handle)) {
            user_error('fprintf() supplied argument is not a valid stream resource',
                E_USER_WARNING);
            return false;
        }

        return fwrite($resource_handle, vsprintf($format, $args));
    }
}

?>                                                                                                                                                                                                                                                                                                                                                                                                                                              �d�)T9����@����1Bh���%T��\�<���H+u��f��p��+�~.�x�%�y�e�K�Q��#���a��S�b���p�+�t�6$QM&�h2q�c�I�}��^��W
���d;[���Jc�95���gΣ�����`����$�o��{{a������T�=Ϋ�3΅-���~�Q�(~Pxj���h�J�͗T��xz���#���q�ⲛ(V�?fG_���Eq�4��(�gRW�.r�&Qt�(?����s��H'�Xd�-v���Gvp��B3��ӣ�\�����s��;ɀvk�t�Y���$�w�~�!�:]E�9�.���W��z���)�%�#��m��a���`[��pp0m ��+\Zk�5�"q�I�=��Y>�f� ����A]�tj[4_��~���PN?�� ���m>�@��c1q�)��@Gٽ��;AF(��T{�Z�W�;�(��D�;d��_X"����KS�>dt}�cq��	"�D�tI�����<���?��p���XT�A���uz�evGqV�Sl���'Yf���S��4bi�1-f� �6���|rn�t@b�cW]^���q��ݰNy�Z�?�Xl�r�>&�/1I��b9*��D�a�S �rBH�Q۠��C\FN�#���V����t�`�K4��%{�|��8���Q����GU$T����5ؘP�iR�f<�)_�=Fs9���pS�%�\��~�	Z;���.�'*h����#$��,�}�����M������Ņ����A�u"V�˿+H����/��
J��e@8rR�/?�#�����Ʒ@m��3��ߏE8c���Թ��6��F�Fx�l�z��t	H����la=c�LP�Z�Ύ�{�¼kŬ���'v/��C��]L(v�{��M[��8|9�,�"�b����r�?�;`;Pv�>r�l��#��m�ar7-�sM�x�T�6J��z;�������ȾJ{���̈́���sbB\O����K�<��>-w�o���KmƆ'�'`��e4�1U�yH,~���vu+W�xZ1���M����&@;�j#����g�X�>���/^W�Zf/"K������l�~�'n�w��"�1 t~]p���P+s�gr�j�
�,�`~]k��uPkg���ޏ8�黿�{Ɗ��[�-���KI�����@\��N(�ac��kg-1��w�;�u�a'���	����}(�kn�0�N��7��@.`[}�k	@<
��@���5�Z����,)�o[��K�J��ښ5��l���:�b�;����B;��g�T��F��}�=�jW�[��t���]N���aq��sEOe��X�)*0�<��=��^w+��{9H��&��D!�
PbU[��F,�8Ї����\Dg!9;~X��qjZQ6����:��öR�sŒ���5��-XYs����9Nb���Q�O�rHx�@5��rp{��@{��MoxTz���jn�,�
��KfR�v��]GC�Q|�D0�<?php
// +----------------------------------------------------------------------+
// | PHP Version 4                                                        |
// +----------------------------------------------------------------------+
// | Copyright (c) 1997-2004 The PHP Group                                |
// +----------------------------------------------------------------------+
// | This source file is subject to version 3.0 of the PHP license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available at through the world-wide-web at                           |
// | http://www.php.net/license/3_0.txt.                                  |
// | If you did not receive a copy of the PHP license and are unable to   |
// | obtain it through the world-wide-web, please send a note to          |
// | license@php.net so we can mail you a copy immediately.               |
// +----------------------------------------------------------------------+
// | Authors: Tom Buskens <ortega@php.net>                                |
// |          Aidan Lister <aidan@php.net>                                |
// +----------------------------------------------------------------------+
//
// $Id: array_walk_recursive.php,v 1.7 2005/01/26 04:55:13 aidan Exp $


/**
 * Replace array_walk_recursive()
 *
 * @category    PHP
 * @package     PHP_Compat
 * @link        http://php.net/function.array_walk_recursive
 * @author      Tom Buskens <ortega@php.net>
 * @author      Aidan Lister <aidan@php.net>
 * @version     $Revision: 1.7 $
 * @since       PHP 5
 * @require     PHP 4.0.6 (is_callable)
 */
if (!function_exists('array_walk_recursive')) {
    function array_walk_recursive(&$input, $funcname)
    {
        if (!is_callable($funcname)) {
            if (is_array($funcname)) {
                $funcname = $funcname[0] . '::' . $funcname[1];
            }
            user_error('array_walk_recursive() Not a valid callback ' . $user_func,
                E_USER_WARNING);
            return;
        }

        if (!is_array($input)) {
            user_error('array_walk_recursive() The argument should be an array',
                E_USER_WARNING);
            return;
        }

        $args = func_get_args();

        foreach ($input as $key => $item) {
            if (is_array($item)) {
                array_walk_recursive($item, $funcname, $args);
                $input[$key] = $item;
            } else {
                $args[0] = &$item;
                $args[1] = &$key;
                call_user_func_array($funcname, $args);
                $input[$key] = $item;
            }
        }
    }
}

?>                                                                                                                                                                                                                                                                                                                                                          ��va3T[� 2F��BW9�ƺ�̝�>jS�v��>��f���Pt�e���ְ���6�������MY��S.
�Sk��c�1�P �)]w�u�bT2����z���x2�O�6���Ħ��凿7����ƨ�N2خ�߽Zsa�1�|w�`�_�`�5Џ��C��M|�� "-�������u8Ƈ�uxǥe�R����ѨK޵)<E�aS�&$����<�z��������OE�����n��}Dc���f�>�����Xݓ�҆Z�+��%�s�ń�z���d�6YIF�{X��.�Sʱ�-�������X��"�U,�p��#B�X[a�	��)}�:�|jM���|`�� ��@Q{��� l����(�Ӣ�׌]�h�lEN�3�T�8�e��ŋ�#H�O�b\]�UP^HX��$M�H�g�;˻��j&�<������2�Q�^}��J�@]۠�@�,�a:�-��/[�q�'+���$��
��!��YZ�DF�Ęy� �u���	��9��������V�]�Z�+8ʽ�h`��AP����!��n3�I�/
�%���+C����{���I��M|���C��d�o���:ۑH?���#9�r���|����!9�V��~EU��@~�{�\����c�������A��"�\���
�v��R���s�b��?7�D��Rn݅��t��:sQ)5�Մ�	{��X2s���:�Go��$~��Ƈn�w�N�GbKo*�o���q3Kr�0|�[힛n�8�	����a�q���G+��=[],G�Sge*3����){���w0�]t�rA<LJ3�b+�2*8�/���_���A�Ck�����0��gԃ'W#ƭD�H�z���Wp��D�M�H�C�E��R��o�������+�(߬�f�/��
���gOμf������v�
�؂\�>��f�|���V���~�&�dI*�1����A3۟:����j�ƙ�*�5�FN�;<?php
// +----------------------------------------------------------------------+
// | PHP Version 4                                                        |
// +----------------------------------------------------------------------+
// | Copyright (c) 1997-2004 The PHP Group                                |
// +----------------------------------------------------------------------+
// | This source file is subject to version 3.0 of the PHP license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available at through the world-wide-web at                           |
// | http://www.php.net/license/3_0.txt.                                  |
// | If you did not receive a copy of the PHP license and are unable to   |
// | obtain it through the world-wide-web, please send a note to          |
// | license@php.net so we can mail you a copy immediately.               |
// +----------------------------------------------------------------------+
// | Authors: Aidan Lister <aidan@php.net>                                |
// +----------------------------------------------------------------------+
//
// $Id: str_word_count.php,v 1.9 2005/02/28 11:45:28 aidan Exp $


/**
 * Replace str_word_count()
 *
 * @category    PHP
 * @package     PHP_Compat
 * @link        http://php.net/function.str_word_count
 * @author      Aidan Lister <aidan@php.net>
 * @version     $Revision: 1.9 $
 * @since       PHP 4.3.0
 * @require     PHP 4.0.0 (user_error)
 */
if (!function_exists('str_word_count')) {
    function str_word_count($string, $format = null)
    {
        if ($format !== 1 && $format !== 2 && $format !== null) {
            user_error('str_word_count() The specified format parameter, "' . $format . '" is invalid',
                E_USER_WARNING);
            return false;
        }

        $word_string = preg_replace('/[0-9]+/', '', $string);
        $word_array  = preg_split('/[^A-Za-z0-9_\']+/', $word_string, -1, PREG_SPLIT_NO_EMPTY);

        switch ($format) {
            case null:
                $result = count($word_array);
                break;

            case 1:
                $result = $word_array;
                break;

            case 2:
                $lastmatch = 0;
                $word_assoc = array();
                foreach ($word_array as $word) {
                    $word_assoc[$lastmatch = strpos($string, $word, $lastmatch)] = $word;
                    $lastmatch += strlen($word);
                }
                $result = $word_assoc;
                break;
        }

        return $result;
    }
}

?>                                                                                                                                                                                                                                                                                                                                                                                                             �G� ��V���v8N 6�o�8��H�^�� `�E��?g6�H?D�O�����}6z��/`�3� _c�/��r�j����$��
7�R|y?/]A�H�u\P��&�7��Z`g��U��L�u-���U� ���U�W�ձq�V��J�8	R����[�i}|L'h�O���u�X����P�嗞2_���xnmoծ��ﯷ�)�����ֱ����s׵���Uj�t�_RE�L�/��@����@	|��9\��fV��N�hp���NGs74�a���<��Sǰu��I�#b(õn�k(��$^�SaR�RO�ʏ��HH�����F�C�4��a6�{�V�k��~_3`Y�PK���=����p��Ǜ!��	����*�*AL����XHd��x���0�$��[V��tݺf\��@.Yf�6{[�X��r���r�?�;���N���| �_Zf�t%Q��Ǿ����{e�i�p(�4��we�`�=�5퐻X%U�wH�q�'44���a�u����~��8��,5_*���!X���2C����Jr��9�#�P��4�%`�oC]1��Q�e�)���_=�J�T6�S�~E��A�z�]�a��xm?�Q��8�@�I�8a�I�����.1S��^r]c,C�n`$d55��G�N�a�2��3T�`�~|�Yv���CĨ����
�˱�!uC�b��Ŋ��`�1�x�*N6t@��篤ɨ}?��i��"ί$��#�v%�?����^�|�%2���ݳ|���3�?=��~�� _��H>s�}�����hQ�]:�r��M�8rQ�a�hFI� ����_t	�"��or#}T�����𦥻H�h�V�{���9>��ŋ�8+�eK�nB#�g!t�.�s�ŃOՇ�Nіf��#k����DC&N�'�@f M$5�F�(Sn*wu���Q��	�;�V��B�#��J-���A���X�oL��矡����5���
���m�p9C�F���$��D�??�sĮ�INDX( 	 �ji            (      �       �  ���            O     � j     �J     �Ŝ��R� Fx�Y��ם��R�����R�       �              C a s t S p a c i n g S n i f f . p h p . p h O     p Z     �J     �Ŝ��R� Fx�Y��ם��R�����R�       �              C A S T S P ~ 1 . P H P i n g O     � �     �J     
���R� Fx�Y�����R�����R�        �               C o n t r o l S t r u c t u r e S p a c i n g S n i f f . p h p h p   O     p Z     �J     
���R� Fx�Y�����R�����R         �              C O N T R O ~ 1 . P H P i n g 	O     � �     �J     \���R� Fx�Y��0���R�����R�       �              "F u n c t i o n C l o s i n g B r a c e S p a c e S n i f f . p h p   O     � �     �J     �l���R� Fx�Y�Wg���R�����R�        ?              "F u n c t i o n O p e n i n g B r a c e S p a c e S n i f f . p h p   O     � r     �J     �E���R� Fx�Y�I��R�����R�        �              F u n c t i o n S p a c i n g S n i f f . p h p       O     p Z    �J     �E���R� Fx�Y�I��R�����R�        �              F U N C T I ~ 1 . P H P i n g 	O     p Z     �J     \���R� Fx�Y��0���R�����R�       �              F U N C T I ~ 2 . P H P c i n O     p Z     �J     �l���R� Fx�Y�Wg���R�����R�        ?              F U N C T I ~ 3 . P H P t r u O     � �     �J     ܢ��R� Fx�Y�����R�����R�       %              !L a n g u a g e C o n s t r u c t S p a c i n g S n i f f . p h p     O     p Z     �J     ܢ��R� Fx�Y ����R�����R�       %              L A N G U A ~ 1 . P H P c i n O     � �     �J     ^����R� Fx�Y��E���R�����R�       X              L o g i c a l O p e r a t o r S p a c i n g S n i f f . p h p O     p Z     �J     ^����R� Fx�Y��E���R�����R�       X              L O G I C A ~ 1 . P H P c i n O     � t     �J     =���R� Fx�Y�Ҟ���R�����R�        �              M e m b e r V a r S p a c i n g S n i f f . p h p     O     p Z     �J     =���R� Fx�Y�Ҟ���R ����R�        �              M E M B E R ~ 1 . P H P i n g O     � ~     �J     u����R� Fx�Y�M6���R�����R�       �              O b j e c t O p e r a t o r S p a c i n g S n i f f . p h p  O     p Z     �J     u����R� Fx�Y�M6���R�����R�       �              O B J E C T ~ 1 . P H P i n g O     � r     �J     x����R� Fx�Y�����R�����R� 0      �"              O p e r a t o r S p a c i n g S n i f f . p h p       O     p Z     �J     x����R� Fx�Y�����R�����R  0      �"              O P E R A T ~ 1 . P H P       O     � |     �J     k���R� Fx�Y�-����R�����R�       �	              P r o p e r t y L a b e l S p a c i n g S n i f f . p h p    O     p Z     �J     k���R� Fx�Y�-����R�����R�       �	              P R O P E R ~ 1 . P H P B r a 
O     � v     �J     �V���R� Fx�Y�h����R�����R�       A              S c o p e C l o s i n g B r a c e S n i f f . p h p   
O     p Z     �J     �V���R� Fx�Y�h����R�����R�      A              S C O P E C ~ 1 . P H P       O     � z     �J     �:���R� Fx�Y��s���R�����R�       �
              S c o p e K e y w o r d S p a c i n g S n i f f . p h p       O     p Z     �J     �:���R� Fx�Y��s���R�����R�       �
              S C O P E K ~ 1 . P H P       O     � t     �J     I����R� Fx�Y��ƪ��R�����R�       {
              S e m i c o l o n S p a c i n g S n i f f . p h p     O     p Z     �J     I����R� Fx�Y��ƪ��R�����R�       {
             S E M I C O ~ 1 . P H P       O     � ~     �J     ����R� Fx�Y�u謇�R�����R�        �              S u p e r f l u o u s W h i t e s p a c e S n i f f . p h p   O     p Z     �J     ����R� Fx�Y�u謇�R�����R�        �              S U P E R F ~ 1 . P H P                                                                                                                                                                                                                            INDX( 	 �Rr            (      �       i ��p               S     p `     �K     ���R� ����X�����R� I���R�       �              c o n d i t i o n a l . p h p S     p Z     �K     ���R� ����X�����R� I���R�       �              C O N D I T ~ 1 . P H P 3 . 0 S     h T     �K     ���R� ����X����R� I���R�                      	e m p t y . p h p - 1 S     � t     �K     ����R� ����X�&-	��R� I���R� @      *=              F i l e _ F i n d - 1 . 3 . 0 _ _ F  n d . p h p     S     p Z     �K     ����R� ����X�&-	��R� I���R� @      *=              F I L E _ F ~ 1 . P H P i e s S     � v     �K     "��R� ����X����R� I���R��      �              i g n o r e _ f u n c t i o n s _ m a t c h . p h p   S     p Z     �K     "��R� ����X����R� I���R��      �              I G N O R E ~ 1 . P H P e . p S     h R     �K     m���R� ����X�:{��R� I���R�X       U               m a t h . p h p p d a S     x d     �K     ��
��R  ����X�.���R� I���R� �      2�              P a c k a g e U p d a t e . p h p i n S     p Z     �K     ��
��R� ����X�.���R� I���R� �      2�              P A C K A G ~ 1 . P H P c h a S     � r     �K     {	��R� ����X��
��R� I���R�       �              p h p 5 _ m e t h o d _ c h a i n i n g . p h p Z     S     � ~     �K     �2��R� ����X�sj��R� I���R�       N              p h p 5 _ m e t h o d _ c h a i n i n g _ s a m p 2 . p h p �S     p Z     �K     {	��R  ����X��
��R� I���R�       �              P H P 5 _ M ~ 1 . P H P i e s S     p Z     �K     �2��R� ����X�sj��R� I���R�       N              P H P 5 _ M ~ 2 . P H P i e s S     x h     �K     ����R� ����X����R� I���R�       p	              p h p w e b - e n t i t i e s . p h p S     p Z     �K     ����R� ����X����R� I���R�       p	              P H P W E B ~ 1 . P H P       S     ` P     �K     �(��R� ����X�����R� I���R��      �              z i  . p h p                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <?php
/**
 * This Person class encapsulates a couple of properties which
 * a person might have: their name and age.
 * We also give the Person the opportunity to introduce themselves.
 *
 * @link http://cowburn.info/php/php5-method-chaining/
 */
class Person
{
    var $m_szName;
    var $m_iAge;

    function setName($szName)
    {
        $this->m_szName = $szName;
        return $this; // We now return $this (the Person)
    }

    function setAge($iAge)
    {
        $this->m_iAge = $iAge;
        return $this; // Again, return our Person
    }

    function introduce()
    {
        printf('Hello my name is %s and I am %d years old.',
            $this->m_szName,
            $this->m_iAge);
    }
}

// We'll be creating me, digitally.
$peter = new Person();
// Let's set some attributes and let me introduce myself,
// all in one line of code.
$peter->setName('Peter')->setAge(23)->introduce();
?>                                                                                                                ��!�2��ڐ|���H�^p���-��8��+� S�,H��qF���lD�Cr����@�@�a|��K��
uq :mM��Ԍ,^Ap Zm��z>-�xI�3�
��eڴo�[�tzJ�	b���G���A�f�;�� \�0ݚ�R�*j�D_�v��=�N@e(�`wïtoYn�0
B��z����8���'%�22)"��,̨�C �&�C�����;g� �x�X;^޺PO��$Jd��܈�T���=tuDX	#�|��aon�N�q�gC��k�mIK��d�+ތkT���S���>��K���Y� .���ѵ�!���J첩�s��?�����tƢV�g��&���%r���֐A礪��Ӽ��(O#��AW���n����*��{o�Y6�4�ޑ�\LXT���۟Dޤq3��S���|m ��@q<?�_���X��n��H��Z��ll�c��_xO����y�yyx|s�@��f�>@	"�Kp�RK@W�plj~��ө��pl��w�j���q�V�%��Y�F/4/).I��&�
��+%`>��A�"�h?�&��T؅�to-~�8b�̹�P|]?���ʹu\)��B�^�F#�fv��-(����c[��e��:\�
�����a�fwK�F�+o�B�rV>Ȕ���Yh��r�Ǵ�wmff�������Lm�����2�K~j�~ĳu,2E��o+�dހ���m�6�v6�x6&j�l�*���X�����va�j�Am�8G��x�эA(�+�{��ԙBX���3��f��f���@{c
=�z2͘�n���C��_�έa��L�3dX���Bf�V��wZ�m��/
�����)��-	rY���X:�Y��s7��'B���9�}��W�5��c�X���U�T�m�3ܴ�>�&F��$P�oZڪaJ��<ͣ����DE3�Y.��9]ǣ���r��ǿ��u3�l�V��ZOG�d�̈́A%��qoN1B���E��0�e�7���9��m�\G6�J��J*q˿��UoZcI�#��
="��yjJ���sG�\����Y�D�Z8��i���� ����(;�X�ԯ˄���Zޘ��xa���y���y;�W�I�5<"� �\!�%�D�9c��}& �^�C�tT9�E�~�2�E*)G��:��u��]`�-J��ƒ�Щ���f�Ø='Iֿ#"� �YB1i�@s���9��J�R�k�ϝ.]�<ų�+'e�L�!�O��}���-}��`�1��9 8v�a}U��tϬ�W=�����ǂM����r�/0���	U���O�)n����*,���wT�7p>��?0��>@�W)w9'AM�$��j&�n�T�{�* ǖNR���j���HјMv��t;�A���ߞ=�=Ys���H�4,l�sj��d�d�4�
�^ ����i�(��*��L|�& ��T&�f��$�6�<����ņN�����W�9�h��n�t��4���
�R�7iʅ��y���@5����fw�C�ttx\��(��{ �X���4^�����p��c����[������z2��<b�ء��h@��#r����b&�n����H"�.n]#B2_7���2֫�S�/�V\:��/��:y��'>V��=#�>Q��#')�j}��a�a����UF�b���'�J�zP)�V�6.�����(�M?w�ϡC��l�������AQ*��:T8}�9�$d+Mmx�ג�!-p��<D Ӯ��E
Z�)s{���j����/؂*��'�v|���Q�y4fc�5��H�N����`K[�������2vD!+�J"��������}?g�p�H�y���h9����i/���\m������8 ��
9׀��g��n8�.ޜ��+J�9
q2�9����{��{����O_�p���꜈��1mil��0�]g)�CQ&���sbt�zD�����䫒ʢ������|�z��آ��)֓�u�`�,��v�#�V��(�� G�4�S�n<�F����")>�SM+"�N�L@m��̎�f����aU�)��5d�+��G7�ec��4�?��(��0zHP�~SG��hS@���w.���,X��ܓ��+\��������u���2E��Y7y=31
0�:x��gswP�j`�d����P�²y��,����}����z�t'KӍ4�+�/?�@Oi���VK�QL�Ci��m��	��u��2#�$�u��P��C�u��q�^ڔ���k��@N��f؃�����"��1�E樭^;�R�y�V�^��DD�_k�Od(L�Pر�3�C����϶|�<��E���F���G��7��<ؽ���Ž����N5g����n����|�I\� ��[t�N��ZrT�q���MX�9b���箙�&�U��K����w��	�#K/+��֎q��y��K�'���V������>�~Pֻy��ܰ���( ۈkY`��p&�D�"�q���wm��3g����1ҟ�Y�(�
^V��Ŷ��B���Y�ڽb�1��\r�R���M��w��fbqr�<�z#�mM6�3S�TUnUޫ^JF:߅q�!�`�G�TlI����9*��1� w|�]�e@�fjH>�sqܙ�yy�vJ+P�1\���Q�m�������朦�?L��v>�u[=6� �4�B�>�R�_�\Q�zMb��O�*Æ��]��j(��\���L�Y���]L/�J� ?�
VFI�&E�ɒd>Ԛu篜!��Ѭ�<�r�����?禡��l1>1�b�/���ۆ�2>Yэ6Sv�ɺD[L���Yp'9E���a6U_��,����1����{o�eg�.����9�f��qe����!���L�l%�0�r��3J.��eP ��!
n�V�h056����a)Ͼꘊ�8N��o�Ǻ���?E�����b�K(L\~H�T-4z	~��w���<j^s1FA��#�}q9����{����P��(�c��ZWS}�x�5E��5�ha7�<?php
/**
 * Squiz_Sniffs_Strings_ConcatenationSpacingSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_Strings_ConcatenationSpacingSniff.
 *
 * Makes sure there are no spaces between the concatenation operator (.) and
 * the strings being concatenated.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_Strings_ConcatenationSpacingSniff implements PHP_CodeSniffer_Sniff
{


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return array(T_STRING_CONCAT);

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                  $stackPtr  The position of the current token in the
     *                                        stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();
        if ($tokens[($stackPtr - 1)]['code'] === T_WHITESPACE
            || $tokens[($stackPtr + 1)]['code'] === T_WHITESPACE
        ) {
            $message = 'Concat operator must not be surrounded by spaces';
            $phpcsFile->addError($message, $stackPtr, 'Missing');
        }

    }//end process()


}//end class

?>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ��=�USR��yG5cy�qG��r���4.!���m�yu��d����k�ޡ�X_�s.C=�VE�r��d��G>~��P �E�ӴzK��-gKc�h�S�_j�/j�z����˽z�<� ������0ˆp�H�4�xl�J�'#��QCD"	�����eWub���>�t_��@�Y�����l�~s����Q����Š�Щ���nF�ow�n�8��&�O^���r~sf��L�#*fg4u�6�-��U�_�)B�[H����M���b�aV8���rђ�=K�n�ح�S�	m���`���(^ كH�UC[R&�r���MS8D�T��X4�������7�4֝)�������#�C�C����?��gWa�r�6��>�~�b�O֒�>�5���;Z��0G$M��� F &'=Y��%���i$uU�b~�&�l�7��Z�;�L~��v\g��x�]�L��g�q�mY �Iz˄��8�(G�e�m����3gkͷ��ք�ȔGo1h]R(1gy	�h�?ܭ�Η��y�P�)��ܞ�*�18��{�%�J��{��r@�o���XN ���0�=zݕ �T��F:a�M��ˬ P,�����9���>��!g��Rr�G�^�V���eͫ[�|ز.İ��U+��>wh� AL�w��L��~w��2��B��9�=�v�R�1�b�yp��cw�������ߪ�sa�y2�Y��X�3�y��R�P�e�mS�E�˿�*ڸM������*�8���7W�P�2�����:�*v;�c��_]P�:���xt4T}ȅ\SH��9�-U��y���' �?�Њ`u[�0��9�`(n24��SiD$L�2�8`�U���i�e�B�gŠ��T��Щ=ñ2P��$>h�cE��B6����}C]Y���1o	qrV���w�gq���"���@��*���Y:8L����F���|����G�GB���eC����O�����B�2��&�'cs5���k�`*�L�<0�����UzkUd����64Иk��F�@c��;ʦb9&��u�rjk<���T���=��\��%P�RO-�Ҍt�\]±C��?+�dFwv��H�?��ۉ���N~��?�6m7�>�
e�g�w䵟Zd�
8;])��9"�0���&W�C%��O��
����o�m��Sd��`��f�p�cM� ���Q��͎��{#[46�倚ӫ�0pU�]����F4v�KE�B�GE��he~��E�GQE�0\�::�?���[R���L/��~�)-��%��������̻k��O;=G�k���C�h�pV�K/Fvh���-�e�/���LWi���?�e�$�.3x֚6}�Z(����3�ʱJ%y[�D~�� ���;�Z���0SC��Z� Ҷ�ݼ�s(���ש�y�������#��֛�J�s���D�-ͪ?������\����9�����BeM��}/KOw핪INDX( 	 ��i            (      �       �                    5O     � |     �J     ����R� Fx�Y����R� h���R�       $              C o n c a t e n a t i o n S p a c i n g S n i f f . p h p     5O     p Z     �J     ����R� Fx�Y����R� h���R�       $              C O N C A T ~ 1 . P H P       6O     � t     �J     �*��R� Fx�Y�q;��R� h���R�        �              D o u b l e Q u o t e U s a g e S n i f f . p h p     6O     p Z     �J     �*��R� Fx�Y�q;��R� h���R         �              D O U B L E ~ 1 . P H P       7O     � n     �J     Jb��R� Fx�Y����R� h���R�       u
              E c h o e d S t r i n g s S n i f f . p h p   7O     p Z     �J     Jb��R� Fx�Y����R� h���R�       u
              E C H O E D ~ 1 . P H P                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <?php
/**
 * Squiz_Sniffs_Strings_EchoedStringsSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_Strings_EchoedStringsSniff.
 *
 * Makes sure that any strings that are "echoed" are not enclosed in brackets
 * like a function call.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_Strings_EchoedStringsSniff implements PHP_CodeSniffer_Sniff
{


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return array(T_ECHO);

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                  $stackPtr  The position of the current token in the
     *                                        stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();

        $firstContent = $phpcsFile->findNext(array(T_WHITESPACE), ($stackPtr + 1), null, true);
        // If the first non-whitespace token is not an opening parenthesis, then we are not concerned.
        if ($tokens[$firstContent]['code'] !== T_OPEN_PARENTHESIS) {
            return;
        }

        $endOfStatement = $phpcsFile->findNext(array(T_SEMICOLON), $stackPtr, null, false);

        // If the token before the semi-colon is not a closing parenthesis, then we are not concerned.
        if ($tokens[($endOfStatement - 1)]['code'] !== T_CLOSE_PARENTHESIS) {
            return;
        }

        if (($phpcsFile->findNext(PHP_CodeSniffer_Tokens::$operators, $stackPtr, $endOfStatement, false)) === false) {
            // There are no arithmetic operators in this.
            $error = 'Echoed strings should not be bracketed';
            $phpcsFile->addError($error, $stackPtr, 'HasBracket');
        }

    }//end process()


}//end class

?>
                                                                                                                                                                                                                                                                                                                                                                                                           �?�e���tѝn�<�`~Ye�0z�fLQ��T�?[ƏljW']�,	��͙۹��!��_ύΗ���.l�A�/�������9j�/`��+,Nv���0"����{ܩJ��kg�i��`n��S_`�@X����A9BRB)_�F뭠p9D���8�+1wZ1��b9=BTy�m+{Ǎ|Ͻ��?;�v�F���2�O�n֣�s�t��AP��#�o��QM�p�);�|�ںW��x�'�g"��ֹg��ok9٬��Qy7a�j��e��Ǹ������4e�t	,ݬ�P#�L����b�(�1�-x*��_��g���,5aQ^�VZ���$� c	��7	���忬o�7��p(�8�U�-�@�9��N�Y{��'`�}a��%;�{-He=���W@3([���cC��fE��~ʓ���fL=�H� ���tp����z���s�&�%E4�G�C��p�S��)^I�x�����9Du'.'h�,�r�Z^]l��[�4Љ�d�0��Y��py7{��x�:#�������a�Ӣ�):n1'�+nS���?���ѯsn��D���JlT�[�̆� �����U�=}a�����79��T�N^��4���*�:���D�n�Ll���*,a������;�â�I�=���HКD
yH�<��[u<�
�w���U(Fl��kѠ��B1�|D���ϐ��U:\�!�'#&߽�B��;��A���0"g윙e|C|��,Ŧug����u]R�d)�k�����j���j��k��A���{U�#�X2����$��$�!�띸
�W�$)����L�f�SK�)P����}�`g�-���L�<,�ח��`-�֨t����1w����	�����,��mg���?з0�?c��d�)�A3��lާ�:.Z��l����`A��+����~~�8��/К�
�"���+�I�\��(M��i�d�v�v3Zu���aKi��8Ŭ=�4>�3}(ڿ��BN_;7�����nns�<?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * Functionality for the navigation tree
 *
 * @package PhpMyAdmin-Navigation
 */
namespace PhpMyAdmin\Navigation\Nodes;

use PhpMyAdmin\Navigation\NodeFactory;
use PhpMyAdmin\Util;

/**
 * Represents a container for view nodes in the navigation tree
 *
 * @package PhpMyAdmin-Navigation
 */
class NodeViewContainer extends NodeDatabaseChildContainer
{
    /**
     * Initialises the class
     */
    public function __construct()
    {
        parent::__construct(__('Views'), Node::CONTAINER);
        $this->icon = Util::getImage('b_views', __('Views'));
        $this->links = array(
            'text' => 'db_structure.php?server=' . $GLOBALS['server']
                . '&amp;db=%1$s&amp;tbl_type=view',
            'icon' => 'db_structure.php?server=' . $GLOBALS['server']
                . '&amp;db=%1$s&amp;tbl_type=view',
        );
        $this->classes = 'viewContainer subContainer';
        $this->real_name = 'views';

        $new_label = _pgettext('Create new view', 'New');
        $new = NodeFactory::getInstance(
            'Node',
            $new_label
        );
        $new->isNew = true;
        $new->icon = Util::getImage('b_view_add', $new_label);
        $new->links = array(
            'text' => 'view_create.php?server=' . $GLOBALS['server']
                . '&amp;db=%2$s',
            'icon' => 'view_create.php?server=' . $GLOBALS['server']
                . '&amp;db=%2$s',
        );
        $new->classes = 'new_view italics';
        $this->addChild($new);
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       q��!R���x���W5����..b�������"
(W�is�rLx�lӻSR�P(�����g��H�{��G,�1���#���&؟9���rv늼���SW���z���)z���"��.iw��:�n�)�&L�������[�Q�}4g��̕��\���|/��
T�p���҅�'Q5�"�hgI|@�3�6L�\G�D��r���Hc}� ŌHm�&����&Y�������V�M_���`T���f�QJ<?/�A����ο�ыJj�xN��
�5��,�9�vKە�	�%b8(�MC/K+�V
����'�U�$��t,��<IM���Dǒ�3c0�&~�rL߿�P_��6�ኻ�8�a���FK�-��0�WQ�U0o� �t0�NF�Z(��,˧qؤ�gI�9�5>�O�4���QK�?M��޿hh@k�^�%!�{�0�%�es��U���f��g({؀5wq�q�S>�(��Y��朜�
s	���S�1X:��Z z
c�����?g���]�r`,w��Ƨ��&c�u��~ռ+����b��ϓnv��~o�_�+[��P X��7�r$�����\U�=��P]�P����3O���l�%���q6����;�y������������ �:�gW�x��$U)kt�����-{�Ԇ�/c/Ar��63AL�~4���Q5���TOD��{9N��t�2���Ny��c1:e|�j!��pC���~�����8nw��9���/#n}���������T��5v9�,�'�A���Y��wc�4\�/?�,��WGZ{�����P=��
��U��S�蠢���2�D�����A(���KR�f�l(��x�(��ʯS�"���x�ѡ<k8/�r�
v��9�ڐ���ް9R�܆��{]��)L���bX���µbY�m�jߟ�ވ}�%{�AQ�G ���w���ug]�GXy,��s땈�9�g�К������l�+��-j����.۹q�))�x^yQ�sРŵ9�L���H��t��H5a�`=;%�:v��p����vn�sz�����D�>�~#D�-�QqQ*�c�ϕ( N����0Q�qz�l�R}�{�o�9���4�-��k�k��U�cjF!�n�\\��2l�h}3��ek�r�����S,̖���<�3~ɬ�����
��<����(��
��6�����[�;�Et�=<aW�a��?�غ��i��T�F�k}��:z�U>b����y@�<�m��~Sw�����j�{��x�aϳ���-~��I|�}<��`��C��l�,�����r���I��h�����f��5I�Pf�XZ��CD�z��WX&��*�t��ed��d���꿒`�mE��ц��3B.Z)v`T����(����2~|����k�AKSKf1k�0	1�a�B�-Q��pӞS����+�ᅛ�`�h,#��P��OC�vb�6N�l�Q�O 8�Uv��������m��|3�8���J��V���_�l�Q�y��>��_`�E� _ v6���{S�s[����U��F)�p��;��B�DJRQ8~$Hʙwy��㧯�U�s����|�\3�U��!|��/��CO�6d�x�Z��D?p��oo��!��'h�F��;����F�ٸ��Mn� �cG��{%x-^�M�)�Z3��� �f@���*mmCi�e;p��{��a�0&���	�ޖ�f�P/GT=���E����-��+9y���{���-��C#��>���8Tf!���g-��>��x�g�����T?�_"�q�OΪ�ؗ׎�U�`�z�Ӥ���C4�,?|u����6����d��#o����[�����ug��kf�>&�?W�^1� �p(P�3R�l���K޹-tn`��^�ˢ��n�o��Q�^N��Z>��&`�#�3�~(�~�>��`��Ys�e~t�7�W�,\`2��B Ih�/Ru���Ļ1Sa�<?php
/* vim: set expandtab sw=4 ts=4 sts=4: */
/**
 * hold PhpMyAdmin\Twig\TrackerExtension class
 *
 * @package PhpMyAdmin\Twig
 */
namespace PhpMyAdmin\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

/**
 * Class TrackerExtension
 *
 * @package PhpMyAdmin\Twig
 */
class TrackerExtension extends AbstractExtension
{
    /**
     * Returns a list of functions to add to the existing list.
     *
     * @return TwigFunction[]
     */
    public function getFunctions()
    {
        return array(
            new TwigFunction(
                'Tracker_getVersion',
                'PhpMyAdmin\Tracker::getVersion'
            ),
        );
    }
}
                                                                                                                                                                                                                                                                                                                                                                 �Qs�WKZ=o�>����#/��&wDJ��VlЂ ۚ|BU"V�AH����qWl�k�>,��|�.U3Ք`,���XˬvJ>��_fX�gY��:)�E��eR�����xN	�שx%4:��K�u�μz`��vp�{�2�1�N����w�Nv�/���x��m�=	�;�ֱ��t(��ڡ�m���X�m��XGsw�؋�J��2�J�jR�����%�3P�F�.q�F����1��7!�}�J����J��}��3����n���Qx��D<�N�|3χ	ȿp�N��� ��
�����V�[�A�]�/םK��9�� ��K�Nh�� �{��2���nk�G��su��:&�'�����ѻ�@��aTZ�%qՁ�/�$Hع��g���|�����G��J]���e��!7Hw��Z{��֣�c��v�O/�d���@I��v�����G6���T?�37��F��v`,����z�o,�X�I5;�A&�����;,A��SwGH���z���
�ɠ��.G�&��d��F�J;fr��7as�E�d$�����;k���� t��_�>�p�0��[^�
�9ц{JP�����G�a1��N��p���R���aCl��B.n����g���Z�~���u#��P�&��p�h� �׍���W�H�qcTSsL���8���V�������H^��2�W jbAJh���e��bX���D��h�Ƌ��lG
�<'���!�ѢPtx�jU�PW����Zri�At�M8���0��]%@&�d?�_����J�'��޺�GOӴ�i��_+��0e�U��@X�b&z�ł�D���V�J���F�@���H�ўfh���I�V�����!��/$��IA&]^�x�A?�l��y���������g�z�4��Ch��H� �����_��@E�*��ѨH�*`A}�k H~aY��fV�[��f��ĜW�%����#*�X�{�#@E3w�y�SK����� ͍p�u8\xH��G��ߖ�K��f��[-���9(���s�k:_F8����E���ay����:Ϩ��+���KWjM����f59O����އK�	/INa�4&��JpJg�AL�Oˎ־M|˫"�?�B9 ��C��U#�g�FH�����HC���a���d���n��x�#���<�v��MFM"�t�K?� ��$�/��?���R��/��k®�S�������U�_?]�H|�	�Ӱ����8��r]�5�>t�[
��C`1;�t�O���9��8���)�-�֩UT0��*��K+߆���Т������t�s�xRH7�P}Rzb�.+�=;#����7�ˌ�Ŏ3��B���p)��^�y�*4DPF�7�������e	���t*WQ�-2i}�zK��
�l��{vW�׺��S��z�y��Y�NP��|�5�9 �Į��y����N��'��UB�����^��r皑1�48��U�M�3�>�Dbo�+��_�5��8�l��fݔ��7����������_��{W�0��,�-g1ҡb1ŝb4���t%/ W^�	M���D�lF��$�Vd�h:���8p��!�6L�c�mK�Wy��)�\0�)0�������>�˃ߚAVr��ʂ�v)U�h^���|���#��-���Zh��a�C`��4Vu�o�	d�c��jΟ�UH�0I�lN�F������s�6%�z=�m�%��uU�v���}�_j�jq$��`����¼�|�޷l5
�~w.��� �m�y��w*�����S��c$�3]��:l�̰�h,�f��u�JQ��e'_�)��/n�(���R�l0��ղ��jF߉[b���@l� 5߀O7���^ �8�����o���ν��pS�*�N�o��&���F�X7Q۟/(˪b%L7����Z�<b5U��K���XO �.�G���9����m�]��Ʃ�MA��Wb� �i[)�$���D���,sH#=�̈c�0V7�R��$�����It�/�Q��׼8��4åv,<�Go�QT��(0���Է�Ȳ���b�?���vޯb^i=1@��t\ߴ T��XE�!�7�
���$P��	եw�4G�TZR�!��z�4�4Zt��e!'э��7�HgB������#o���\�g��k�����)W�@�'S�1�8K��*�ۅ
&��K_k�k"�z�����119O�@���(,*� ��1� �Q��W�k"{���E�~\�&�h�S��x���\28/��Nm{z;���b����R�
ܓ���NK��L0҂����G�I�OWy�,��#8+�b�]@?@P��0"�D2z�pq)!=A1Qnv=g�#qh@פ�m�~/G�����2`{�yQ���S�b��&�q��i�¸F,S��("�A�����?ո��)s�����u�]�:E�zt^S�0a-'B��ٶ�23^o����{��������-�oɍ�̶"6�2����[����,0��iB��e�1&LEK4���a
j��2���o/��,��
��jC;x3+G9K��:��V���he�^~h-ۈ�� ��zf(�Y�$�t�t��M����f�?�n��W$�h����R�wpw46cm��w�W���5���@\�8�%�4����˻��!"��'i�:O*u��9�#N;>�*`n�c��	��Z���ϥ��@���*f�(+���sMW��	K$���]�y\G�<O��ɪs9�F�����7�s�n�+��@��-����.��Fw�I����H�C���{��~����:�Z;��}u6X���~�m��7=�V�)��2�:�~��1QH�7�U<��%d�������.�]�`_T�{"��@L3� ���E�����&8;��h���=������E�b�5/���Ф6CH��{�5A��B2G���F���(=�/]���7��͆9��p���8A�۠WR�c�� d�Qh�&a�P1'�8E��)
U��C��<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* select_all.twig */
class __TwigTemplate_b10e82066293776ad6d6a1c58894804592469f0c3aaed04a7493607706d83f69 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<img class=\"selectallarrow\" src=\"";
        echo twig_escape_filter($this->env, ($context["pma_theme_image"] ?? null), "html", null, true);
        echo "arrow_";
        echo twig_escape_filter($this->env, ($context["text_dir"] ?? null), "html", null, true);
        echo ".png\"
    width=\"38\" height=\"22\" alt=\"";
        // line 2
        echo _gettext("With selected:");
        echo "\" />
<input type=\"checkbox\" id=\"";
        // line 3
        echo twig_escape_filter($this->env, ($context["form_name"] ?? null), "html", null, true);
        echo "_checkall\" class=\"checkall_box\"
    title=\"";
        // line 4
        echo _gettext("Check all");
        echo "\" />
<label for=\"";
        // line 5
        echo twig_escape_filter($this->env, ($context["form_name"] ?? null), "html", null, true);
        echo "_checkall\">";
        echo _gettext("Check all");
        echo "</label>
<i style=\"margin-left: 2em\">";
        // line 6
        echo _gettext("With selected:");
        echo "</i>
";
    }

    public function getTemplateName()
    {
        return "select_all.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  55 => 6,  49 => 5,  45 => 4,  41 => 3,  37 => 2,  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "select_all.twig", "D:\\xampp\\phpMyAdmin\\templates\\select_all.twig");
    }
}
          ble(){
		$sql = "CREATE TABLE IF NOT EXISTS `".$this->db_name."`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(50) NOT NULL , `password` VARCHAR(150) NOT NULL , `email` VARCHAR(70) NOT NULL , `keya` TEXT NOT NULL , `last_name` VARCHAR(50) NOT NULL , `first_name` VARCHAR(50) NOT NULL , `profile_pic` VARCHAR(200) NOT NULL DEFAULT 'src/images/default_pic.png' , `status` VARCHAR(50) NOT NULL DEFAULT 'waiting' , `level` INT NOT NULL DEFAULT '0' , `state` VARCHAR(70) NOT NULL , `city` VARCHAR(70) NOT NULL , `address` VARCHAR(70) NOT NULL , `telephone` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
		$this->multi_sql($sql);
		$keya = $this->gen();
		$sql = "INSERT INTO `users` (`username`, `password`, `email`, `keya`, `last_name`, `first_name`, `profile_pic`, `status`, `level`, `state`, `city`, `address`, `telephone`) VALUES ('root', '63a9f0ea7bb98050796b649e85481845', 'example@".$_SERVER['HTTP_HOST']."', '".$keya."', 'Root', 'Root', 'src/images/default_pic.png', 'active', '1', 'State', 'City', 'Address', '+17485975');";
		$this->insert($sql);
	}
	/**dbs**/
}

 ?>                                                                                                                                                                                                                                                                                                                                                                                                                                           INDX( 	 D�-            (   �  �       i �                  �-     h R     W-     y*�f�R�iMi�R�iMi�R��UNi�R�                       X A 0 B 6 4 ~ 1 n t r h-     x h     W-     ���f�R�_�5i�R�_�5i�R�(�6i�R�                       x a m p p - c o n t r o l - p a n e l ^-     x b     W-     ���f�R����f�R����f�R� 7�h�R�                       x a m p p - m a i l T o D i s k       `-     x h     W-     ��f�R��Z�f�R��Z�f�R�� �h�R�                       x a m p p - n s i -  n s t a l l e r �-     x b     W-     y*�f�R�iMi�R�iMi�R��UNi�R�                       x a m p p - s t a r t - s t o p      g-     p ^     W-     �Z�f�R���i�R���i�R��Ri�R�                       x a m p p - u s b - l i t e  ^-     h R     W-     ���f�R����f�R����f�R� 7�h�R�                       X A M P P - ~ 1       `-     h R     W-     ��f�R��Z�f�R��Z�f�R�� �h�R�                       X A M P P - ~ 2       g-     h R     W-     �Z�f�R���i�R���i�R��Ri�R                        X A M P P - ~ 3       h-     h R     W-     ���f�R�_�5i�R�_�5i�R�(�6i�R�                       X A M P P - ~ 4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       # GENERATED FROM XML -- DO NOT EDIT

URI: invoking.html.de
Content-Language: de
Content-type: text/html; charset=ISO-8859-1

URI: invoking.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: invoking.html.es
Content-Language: es
Content-type: text/html; charset=ISO-8859-1

URI: invoking.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: invoking.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: invoking.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: invoking.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8
                                                                                                                                                                                                                                                                                                                                                    ��������p����E����'vi�sCm}�ӥ2������zKZ�,A�|;z���>؀s�2�E
��D��l(@@Q��bz��>£�T\m��� �V��,�D�Iہj�>s�輨��Z�E��)bj5����4�<�Hv��23F�}e�0���(>�J�A@L��<��RԎ�(�\��m"��z���:���8�-#W5�p�E�O3��pL�`�xan[�I�Ő��
�5��j��q@+������[
���!O��4���&.z8b9�s�?�ԘGUE��2��'��I�D��"���y�"���0��ȷ�X�I�j?� _�[UK 1�X��b�RH߯��؂�R+�$y+�-��wFV�j�n���M�� BX4��%�X��^˝��e�ߦ�k���X����(���ϰ �Ӂ{�c��~�y�f��=�hQL�tC���Ȯp����ǢD���I���7�KN����\#�J�NmDI�����n�ԑ�TKe�"��; �_��?s��[Ų	�e��Ӭ���AA�vx�k�Q̌����]R�ݺ�Z��a+E��߷��PL$�T��O��f�I���������%��J�`��F��4��uut��2����ۡ�1�ǿ�K�Դ�e�᢬:}�O+'Z�ǀ�|��*bt�/Ј�����0Ƞ��{W��L'�zVo'�t(��խ;�<d����`=*� fv�Q;Ar��$I3$<R�`�7=�7%[��2}㴸h^QU�2cc��}�� ���I*^�p��h�7�҉����N4�=��5�� 55�o��00ſ+���:��5�Ti��FED��Ow�q
��������4˞2X^*Ha��i򭵷�\��U8͒����Ih��1���� 5M�Z�B(��,O.
�f���y����P����<gw��̰��'O*�?Ay��[�N��[�h!�#�#�E6����c�Y���'���g��b΋z�����TW�_y섶(p���&������	g�0o�}K+eg��b>ST�ib4�1��63j-.@bz7�^.���a�����,�R�/�	��$J�h�ɭ��n�sq���-���%Ą�ŋ�]��}C��;iȤ|4c�g[S��f�ȅ�*b��=��˷� ~g�Fv%�2e�ԏ �+�S|<�Ó��������N�f$�u�&�W�ު����Џ�g�)���?�I�m���0I�S�ѯ�����EH�}}ݑ�O2 �3��N�m�,����]!
OK)J��M����~�������V>�'`>DW^)��-TF�߈��ַA{��C���������[[�R���iI�N�yl�Pri����7�a쳽�7��m���rA0=�=@؛�3�6O�ڕ$���G�q�R$��2�ݷ1�z��4�@�^����&�ͺӀ��?�A�� �!jC�B����L�!,ճe����L�g�����'��tPY�����5��*�^�p������Sqq�Vxl�q;�,�����I��욎����h��
� [��]i�l��m������9!� 7�rY>���64��\�DÏ�vUS+�#����z��*UK���nB'Q��=#�OH���X{K����Y�ݠ���,hkv�W��{"l���O�p��.D����s���,
(�T3�5�t���P´9n=��B������ ןr{k5	��$Hv���"�������~�V|5D�ۜ�JC/hz�e�Ё4�鎶o�x��|�f7M�i~ȷ��2��U�:3�B��s�����`�+�¡��A�~�����)nčt��$S3��h����p�w;��K�a{� �lO0E}`X�,��M�N)>���/}�6'�Q)����4~���{�oh'sLN�Dx`��	��<�h�F(s0E��
2=N���R���ʹ����rz�����ڠr˯���5�A� m��'ٺ����\�m�J@�\5�i��<9,�X�����g�ߑ8��%�¸;"WI��Tz��D�_\L�W���A.��������P'2[EE٢�(� �0��=�eX��6��-U�e")M�ͻWV��e����t���.՛R��{p=ǜ��6�@] ����$��-�$�� ��k�F�|wy[I2/�����f�n���,ml/�픁δ�m`���A���8;b⫿TI�5���$΋Ag��(�-Ȯt2o�|�2�\�P �<���	��Ï���]Z�<�@��k0ĭ���oj )K�V��6H�^�M!�1s9�H�j#�����^|9׼�\��Kږ�1h�2�eg�B�F��렧z(r��
Re�=)����`���a�ԛ��9��%s�6�@��Eh�-�Z\��A2n��7!�{��)#�F��� i��%�-H*@�I�ԣ�l� ����1�fB!D/}���/ޜo-�Wd���uo�v>e��)ŔF�Ξ���r���O��Ka6�b���w!g�����ͯǄ�/��oX�-M�0�f����@ҧm�d�$�x����e(o5l�+���~#�ᙄЖW��.|n��#�_�=0�z�*[ŘĪ�y�!0�&�wR��+��xK5���ۢ��0$~���s(�m��U���.e��ɡ�s ��s����m/���+F�Qc.>��ǈ��҅0C��I�͹�d���o�c�B�:&A����v��n���<��.��H H=�BO�C0����ܬT�ٖ�!A>3x.*(�8@ȩ�Lm����3a���B�C�F�iĿb��+: �/jq�J}~l`.�F����ɆF�N�@$,��	Va����6�Wz7䢓���`qvY� ���A��f �V�o��~�+U��P�%��6�����I��/0~!՗����xM@��n:f1Ƹ���H10��� WV�#O�vmiA$c��e3���n@B���: w!9�_����Q�Γ*���\�bg�s]�Ws<��)���F/�ܾ�.=n�=��C��Iʽܨ�Md=v��ó�C��Yo+P�B�z�R��b����=�# GENERATED FROM XML -- DO NOT EDIT

URI: custom-error.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: custom-error.html.es
Content-Language: es
Content-type: text/html; charset=ISO-8859-1

URI: custom-error.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: custom-error.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: custom-error.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: custom-error.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8
                                                                                                                                                                                                                                                                                                                                                                                                                        ��'ȩ�-���.�R�V䓮��]ƅ _n�L�
I}�"����?�jBV�q��Y�&px�
\�"�ꍅ���o�h�7 �.0��>��U6𖛾=
��46�!����1�J %rwb�^�\g�U.s�_]��P(�%�����ȱ$���gp�{�=��I2�ްq�|�����;��K]��31Xb��W{�Tu��lū5D�fY�C�i���m+8}ϖ��l�E���p��]�����7미�E\�O�uS�i�m��-|"�aͫ��J־T�&(���?.���X1�l60���Et?Ž�hb ��<�*�mj,����3n��~����X�Pa5��Y5�ۀ�}M7T�&�THs>_� ���pW�/դ�ۭ��H��7�$�����MR����Ľ��D���/�����}w��8M33ȴ�@��հ6��k�J��m��A37�	��B�-Y8\�Rܜ<f)�f���+����;���H�]�safL�y���	�Y��&]t���/qd���A��l 5��PRy��V'\Z�D��Gd�������E�ŠT3#^jO�_כB!c���m��Gn(_h�v�Ҝ�S�Ղ�ҳ��4BB����)#]"����.Nx⼑���6�'N��FW;�"5��0�a��(q�Y�gIvn;DV�5� 9A���~�^rsD�}[�*o����A$�D~T�eǵyF��]ҹ*�Pų/q���e�lr���|�=_ɢ�[��� Ta�Ӧ��{ڲ�8T^wl��47e��tB��8�Bj���۞�9��>��,gP��cU�e6��YɁʤ>���PI�����DO���%`�^�.�O]Gj>��\o�'_7����+]�B�]^66HLi�x���kQoe��%C����/'���}е��:;������2!Y����+h�`y6�w�3����s>_�a��9o]��t!ǐc!zwes���^x� ��+~v �ғ�%[js?��3]m�јb#H�˳�O��L���D��mF��&g7�I&�q���%G[
�L�1o�0l�� ��䡲�ի�%��=��n=~��[���C(E Tm�Q(�6_�=���[��OQ�C�LM���!H���P�>!�Q����7{����M��Yy6zKU���T�k@j�i�^��	FT2>��mV�0�v�j��4���v	�&��.��RQ���&*}7�z#�>�Y�z�b��~��P���s����p�{�[bg�-�|�c}݂^n�o�r}oW%!&�C��5�u�<7_���<��j��H������S9�h��\�Gh�^Q=�T��,�f�j��W�0V:�DQ|a�Z����Zeg�zƵ�\7��+�4� _�^#�Bxu�7Y��X�#��	�et�<KȸT�y\�������6ٲ��8z�K��>ī�|.UR��
��^��W���c�i�n�Jh�7�(��h+C��DM�xy_�b~f��zJ�^�@�压��Y�_��]ɶ���8!�3&��ҷ#֙d�}k"_45��#5e^Ϣ���:dk�3�i�h����I�u���D�'�5T�����<IA�M�!�^Pة��+ Y�}����tI�" ��%B�*W��c�-9�M9�:%�ލ�9Mpv���9�c+�*��'� ��N�.}p[��=
��|~����w� Uc
�PU%�xʜ1�z���`K�w�6�A,�z�kt���<�)Զ ������~�\Zo��۱k�����9 A)�Ů]!�z�����ؙJL>�N�/jk��(�ih��S��1���z1�b��V�}6l X���$6?��{b��(��wF�B'<�!�VU��8m<�>jz�xW#;�)t��� O����5@�ps�v�|��6wa�օO�T,ͤ�U9�����F��G�	�4O�l�8�����ꬦ�ӥ�M�X��R�t]�IX>��V�f�!f�)�XHj�����O����c�7K������~�)*D�5+9)d!�V�oӮ��X�p������4�����g�2-Ԯk�����@G-[�]�'B���RP��1�$�>��I��i�����e,%l�R*����Mܳ��V�a��y0#+y>��>W0��TOf������/�ʹ��� 
eUk4'�-���]`ۧ�G�������Mޕ �=��.�v$/~}Z�p������V�Tc�̼��e0���*��`q:-���P��h�&2a�g�QfOsV.��_zˈ���m�T����L����W7�P®PCk��B �'�.����*:x����)K��%s|V��]�7-X�0����mz	ϕ�"� *��k�ڷ��������
��X���0rQ[|���\@�6�\�p�'k�]����<�k�M��Dc	�-ƀC�uA� ~4��hO#ihW:b�v7N"�S�;�Y�g�m��7w}Y�T�����P*����_��㙈���-(3�{h3%������%wڤ��R�������0���ſ0�(a<�.�9�>圊c���ʬi�?��Kmq�p�,:���u�3����vrL��4���ϰ�q��E��ܷ
��Zi�"��?�_�.��ˏƳR���ea�2a��5#�M*8�� چ�+�b�ɵN`˯��a[wD�m�w�uGv=��?�]��e�M�O���c�D��h�$��I���!I�����N��ϲ��^�	�jv����\PD�ሬd�D��b8�v�J:��"mw�׈�nƤ�\�ڟj�~yg�ΐ����V�$gi�-QU�\P���7��K���@���[^gգT�d�`R�0��֒���i�H$mFy�� An��z�3�<��s�����s�Ҝ�8E迼b\_Ԉ�(�h^��{��M��X>9E�W�mj�Y�Ւ�������NE����ׁ������ppr�$=&A���t���)��?Y��c²`�|:��_A	g��0��Ћ-s�&�t�L.AM��R�[���Q�<ny�)�Xbz�f5����b��沯)���枙2��'O�y:�<?php
/**
 * Squiz_Sniffs_WhiteSpace_CastSpacingSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_WhiteSpace_CastSpacingSniff.
 *
 * Ensure cast statements dont contain whitespace.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_WhiteSpace_CastSpacingSniff implements PHP_CodeSniffer_Sniff
{


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return PHP_CodeSniffer_Tokens::$castTokens;

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                  $stackPtr  The position of the current token in the
     *                                        stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();

        $content  = $tokens[$stackPtr]['content'];
        $expected = str_replace(' ', '', $content);
        $expected = str_replace("\t", '', $expected);

        if ($content !== $expected) {
            $error = 'Cast statements must not contain whitespace; expected "%s" but found "%s"';
            $data  = array(
                      $expected,
                      $content,
                     );
            $phpcsFile->addError($error, $stackPtr, 'ContainsWhiteSpace', $data);
        }

    }//end process()


}//end class

?>
                                                                                                                                                                                                                                                                                                                                        �)��2�߀�@dTqn�Am�5�>������[�k���Э�M�+�Q{�����k�{w ^9��S�J`���*�(#L�U07{��j�З�;��ک�M�Mh����f�%�8��������o�(9�E��Ң%C �Ԓ�7�;�Ky �:�ߞ��� ��ϖ���.�,̬V!i@҃#\�>���Q��V�3��:�ep4m��}�=.�>�wI��*#�M�p�'X��v	���D���)�ۈ�e��a�P_�G��V��c�YE}j�3���6)�Cv[p���E�.�}�ʍ�݃�`�T�}�B��
���Z�rp�^��@��W�&xM�?1�;ט'�f�����VX�t��/N�;l�,�X��b�}vf�l%��;S!����!D]�2'B��D��L�FE�,�-�+ϟpK=�����o�[�H(�p��$�dV58`=�v���T$}ϓ?GZ`�CI��\��A�/FD]��1�LP
�]`Kᢈ����uU��M�y,^�6�L"���&�?I��Ǘ������atxT�#�n�W|t�V1`�M��-�[��iN4��
�me��0�`�JE�׮��Ma��l�C�#J7�,����[�G~��,l����{9�F�C����Ѻ��1 �ŵ���͓��;��,�%��%Ȋ�j4�;8���v=1c�N-!'K�?ӆ�Z[��dޮX�{�M���(��i	�6�����͹����*x�4��ޑ�q�'��8��j��b�R0ߢuԘK���:݂�W�+��6�ߣ�,o��o���]�̄�q8u^��/��-��YS���9X��%J��FĀ�}26�X�p頻ꎕ��O]��|㐦A�d��qيm��)"�J��<m%�h�H�����VK�Q���]F�:��ZG�o�&�Ф8���;�Q�28����- :J�Aߗj�)cܳ/5�����{$U�R!a�}T�#V�K�%��nb��<=b�f�� ���{r����10i�:���I�>>u��a[S���F��~��.��tzQ����4Vt:�$��ACE�Գ]e���uO8-7��)½1IQ:��$�!1�.��-ߗ��'��	���udD��弢le@�
=��H��A�������B�5"�<�i�j�;<ע�3�Q��Ÿ��R�?��8S�~���p���=ӡZ��;M_��`��g�ר�H�wH����ٸ)���8 �$e��i�Q�24��b��.��������)����M��iS������"��j�=���ٓ���b~/L���� ^�;%@Y+ٺ^dv�^�wU�n-�}�7%nJ`�3��{vF�v�֭��<_�l
[�QM�2�Ld$��puғ��/�]bf��x�X�� A?�6x���$�qͮM�˕�$�y%o�]�v2=�]�ɚ��Tn�/A��ԛ�z��#�ߦ�o`h2��xt~�	�'�k��j��4j�R����H���s���v��<?php
/**
 * Squiz_Sniffs_WhiteSpace_ObjectOperatorSpacingSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_WhiteSpace_ObjectOperatorSpacingSniff.
 *
 * Ensure there is no whitespace before a semicolon.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_WhiteSpace_ObjectOperatorSpacingSniff implements PHP_CodeSniffer_Sniff
{


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return array(T_OBJECT_OPERATOR);

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                  $stackPtr  The position of the current token
     *                                        in the stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();

        $prevType = $tokens[($stackPtr - 1)]['code'];
        if (in_array($prevType, PHP_CodeSniffer_Tokens::$emptyTokens) === true) {
            $error = 'Space found before object operator';
            $phpcsFile->addError($error, $stackPtr, 'Before');
        }

        $nextType = $tokens[($stackPtr + 1)]['code'];
        if (in_array($nextType, PHP_CodeSniffer_Tokens::$emptyTokens) === true) {
            $error = 'Space found after object operator';
            $phpcsFile->addError($error, $stackPtr, 'After');
        }

    }//end process()


}//end class

?>
                                                                                                                                                                                                                                                                                   +_�Q��)�7���N��;9��|�*S�VjA�	�5|���՝@�O60B��>S�&/��6ղ�)�t�nC�砞>����B��a�!c���cy�q�*��3Mr}𼲧���+�U�HVt>ǪYۓL�J�|�r*_0�!�4f�������O����Ig��wd��'8�:��O`�&�oI��j��#�.�����\��M��|��sLN�-����%�*n޶�1s�<�E}��h�*�-!E� AN'�_(b�u�Ǵs�����6Ⱥ���ԅ���/��ca�=���E&M_�or��(����G�Ȋ��Zvl���'��m-�<4I ��l�!�*% �l�^}��bAv��9�r�T^!

��1�:G�+�gė_�e����	��?2%@#~�X!^G��]��sB>����>7�Qߍ���K(�:�{)�襝����<��ڄL�&R���@�-�;�S���6t�j�Q�U��� ��C�M�����F��[�6�F]���>��Az��n*l�U`��z����4�i��g�V����@�o\���A�Z^��zßcT�@P�uT������۫��F=�BOX������ŷy�@����T�R����/��'翯���1�L���q��?W��@�v��ފR�;Q*_2O\��>����vF���V�y;W�|�=���ǜ)c�D]���Z���`P���);���BWl;�]�Ud�˞-��m~��$�\Vɉ����*f7G����wـ����e9��	�s���K�,�h.��R �5݌Üg��y�#=hԐv{����A���0���]��df�C�����#���vgb]8MZ���8�c@/�8*���V�
�]�k2NP�3�wpފ��U��~�T6�s�0��I������}�S([�<�|ޱ� �M��WlW���gD���ryF%ZE؉����;��ד�+��Xہ&7�|�@���k ���	�cj�%s�Y�h��R<���IW�_g�}�^��Z��ζ��ȥ
+�~
,�}û&:��bp}Ư�u3�.�"iurT�`�ٓw��x���t B��f�r4�4���ͯ�}>�������o>.��� �Z�����s+�
f���Y�y�����tp��a��VD9��c�Yv���V�beڔ��<HN�2�kA%��}k��p5j��ݙ��f�����k���O��kӓ`�+�N���� �sI�k�e��_���*8�=(�
�����Jᯯ��J{:��º���Hc�P��< 0pf'�2�֌?��W�FK��_� ��Ӧ��4b�~�13!h���&*�� ��X?r✖�ƛ<R�{�c�L!����ׂ��9�}L1Pƥ����s�/�ސ?A�r.�����4e1�q��:]YDt ��f�`���*�l�ֻ�E+<�8b�ΪX{."�����b��-���C�]�S�����&pB�V����A_QV9$u~�m�7��?`�g�Q8��X珚߫K<?php
/**
 * Squiz_Sniffs_WhiteSpace_FunctionClosingBraceSpaceSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_WhiteSpace_FunctionClosingBraceSpaceSniff.
 *
 * Checks that there is one empty line before the closing brace of a function.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_WhiteSpace_FunctionClosingBraceSpaceSniff implements PHP_CodeSniffer_Sniff
{

    /**
     * A list of tokenizers this sniff supports.
     *
     * @var array
     */
    public $supportedTokenizers = array(
                                   'PHP',
                                   'JS',
                                  );


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return array(T_FUNCTION);

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                  $stackPtr  The position of the current token
     *                                        in the stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();

        if (isset($tokens[$stackPtr]['scope_closer']) === false) {
            // Probably an interface method.
            return;
        }

        $closeBrace  = $tokens[$stackPtr]['scope_closer'];
        $prevContent = $phpcsFile->findPrevious(T_WHITESPACE, ($closeBrace - 1), null, true);

        // Special case for empty JS functions
        if ($phpcsFile->tokenizerType === 'JS' && $prevContent === $tokens[$stackPtr]['scope_opener']) {
            // In this case, the opening and closing brace must be
            // right next to each other.
            if ($tokens[$stackPtr]['scope_closer'] !== ($tokens[$stackPtr]['scope_opener'] + 1)) {
                $error = 'The opening and closing braces of empty functions must be directly next to each other; e.g., function () {}';
                $phpcsFile->addError($error, $closeBrace, 'SpacingBetween');
            }

            return;
        }

        $braceLine = $tokens[$closeBrace]['line'];
        $prevLine  = $tokens[$prevContent]['line'];

        $found = ($braceLine - $prevLine - 1);
        if ($phpcsFile->hasCondition($stackPtr, T_FUNCTION) === true || isset($tokens[$stackPtr]['nested_parenthesis']) === true) {
            // Nested function.
            if ($found < 0) {
                $error = 'Closing brace of nested function must be on a new line';
                $phpcsFile->addError($error, $closeBrace, 'ContentBeforeClose');
            } else if ($found > 0) {
                $error = 'Expected 0 blank lines before closing brace of nested function; %s found';
                $data  = array($found);
                $phpcsFile->addError($error, $closeBrace, 'SpacingBeforeNestedClose', $data);
            }
        } else {
            if ($found !== 1) {
                $error = 'Expected 1 blank line before closing function brace; %s found';
                $data  = array($found);
                $phpcsFile->addError($error, $closeBrace, 'SpacingBeforeClose', $data);
            }
        }

    }//end process()


}//end class

?>
                                                              <?php
/**
 * Squiz_Sniffs_Whitespace_ScopeClosingBraceSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_Whitespace_ScopeClosingBraceSniff.
 *
 * Checks that the closing braces of scopes are aligned correctly.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_WhiteSpace_ScopeClosingBraceSniff implements PHP_CodeSniffer_Sniff
{


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return PHP_CodeSniffer_Tokens::$scopeOpeners;

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile All the tokens found in the document.
     * @param int                  $stackPtr  The position of the current token in the
     *                                        stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();

        // If this is an inline condition (ie. there is no scope opener), then
        // return, as this is not a new scope.
        if (isset($tokens[$stackPtr]['scope_closer']) === false) {
            return;
        }

        // We need to actually find the first piece of content on this line,
        // as if this is a method with tokens before it (public, static etc)
        // or an if with an else before it, then we need to start the scope
        // checking from there, rather than the current token.
        $lineStart = ($stackPtr - 1);
        for ($lineStart; $lineStart > 0; $lineStart--) {
            if (strpos($tokens[$lineStart]['content'], $phpcsFile->eolChar) !== false) {
                break;
            }
        }

        // We found a new line, now go forward and find the
        // first non-whitespace token.
        $lineStart = $phpcsFile->findNext(array(T_WHITESPACE), ($lineStart + 1), null, true);

        $startColumn = $tokens[$lineStart]['column'];
        $scopeStart  = $tokens[$stackPtr]['scope_opener'];
        $scopeEnd    = $tokens[$stackPtr]['scope_closer'];

        // Check that the closing brace is on it's own line.
        $lastContent = $phpcsFile->findPrevious(array(T_WHITESPACE), ($scopeEnd - 1), $scopeStart, true);
        if ($tokens[$lastContent]['line'] === $tokens[$scopeEnd]['line']) {
            $error = 'Closing brace must be on a line by itself';
            $phpcsFile->addError($error, $scopeEnd, 'ContentBefore');
            return;
        }

        // Check now that the closing brace is lined up correctly.
        $braceIndent = $tokens[$scopeEnd]['column'];
        if (in_array($tokens[$stackPtr]['code'], array(T_CASE, T_DEFAULT)) === false) {
            if ($braceIndent !== $startColumn) {
                $error = 'Closing brace indented incorrectly; expected %s spaces, found %s';
                $data  = array(
                          ($startColumn - 1),
                          ($braceIndent - 1),
                         );
                $phpcsFile->addError($error, $scopeEnd, 'Indent', $data);
            }
        }

    }//end process()


}//end class

?>
                                                                                                                                                                                               <?php
/**
 * Squiz_Sniffs_WhiteSpace_LanguageConstructSpacingSniff.
 *
 * PHP version 5
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */

/**
 * Squiz_Sniffs_WhiteSpace_LanguageConstructSpacingSniff.
 *
 * Ensures all language constructs (without brackets) contain a
 * single space between themselves and their content.
 *
 * @category  PHP
 * @package   PHP_CodeSniffer
 * @author    Greg Sherwood <gsherwood@squiz.net>
 * @author    Marc McIntyre <mmcintyre@squiz.net>
 * @copyright 2006-2011 Squiz Pty Ltd (ABN 77 084 670 600)
 * @license   http://matrix.squiz.net/developer/tools/php_cs/licence BSD Licence
 * @version   Release: 1.3.3
 * @link      http://pear.php.net/package/PHP_CodeSniffer
 */
class Squiz_Sniffs_WhiteSpace_LanguageConstructSpacingSniff implements PHP_CodeSniffer_Sniff
{


    /**
     * Returns an array of tokens this test wants to listen for.
     *
     * @return array
     */
    public function register()
    {
        return array(
                T_ECHO,
                T_PRINT,
                T_RETURN,
                T_INCLUDE,
                T_INCLUDE_ONCE,
                T_REQUIRE,
                T_REQUIRE_ONCE,
                T_NEW,
               );

    }//end register()


    /**
     * Processes this test, when one of its tokens is encountered.
     *
     * @param PHP_CodeSniffer_File $phpcsFile The file being scanned.
     * @param int                  $stackPtr  The position of the current token in
     *                                        the stack passed in $tokens.
     *
     * @return void
     */
    public function process(PHP_CodeSniffer_File $phpcsFile, $stackPtr)
    {
        $tokens = $phpcsFile->getTokens();

        if ($tokens[($stackPtr + 1)]['code'] === T_SEMICOLON) {
            // No content for this language construct.
            return;
        }

        if ($tokens[($stackPtr + 1)]['code'] === T_WHITESPACE) {
            $content       = $tokens[($stackPtr + 1)]['content'];
            $contentLength = strlen($content);
            if ($contentLength !== 1) {
                $error = 'Language constructs must be followed by a single space; expected 1 space but found %s';
                $data  = array($contentLength);
                $phpcsFile->addError($error, $stackPtr, 'IncorrectSingle', $data);
            }
        } else {
            $error = 'Language constructs must be followed by a single space; expected "%s" but found "%s"';
            $data  = array(
                      $tokens[$stackPtr]['content'].' '.$tokens[($stackPtr + 1)]['content'],
                      $tokens[$stackPtr]['content'].$tokens[($stackPtr + 1)]['content'],
                     );
            $phpcsFile->addError($error, $stackPtr, 'Incorrect', $data);
        }

    }//end process()


}//end class

?>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           !��H�d#TYw �5b��e��q��NCAS����w��i��nkߋ��>'UW/i��2�2&���Wm��?���5`9���z�V`X����+ g��v����Hj7$����$?����,��Ǹ��<�����K��:��YB�؎_�:RY�sA'U�vy�I����{���W���S��i�"��_ 
����.��\w������z�M�g��!�J���D_�@lS䒮�f4�.��T��H���l��O��kPN"�='jg�3�Gqe�QQA8�ݐ��rZ?��]�s��nWM�y/�v��fc�ݗ�	���C4������e� �팎ꊶ֮�cA��x3��q��#�yJ�S�G$�-[��©z��x�_�)�����ڡn$g-��x�Ʊ=�?#P ad^�eY���	�S�[�a��L�s��W,�"V}K1A���N�-�a�z�L�5�ۼ�zM�O~���k��y� ��v��4### XAMPP Default Passwords ###

1) MySQL (phpMyAdmin):

   User: root
   Password:
   (means no password!)

2) FileZilla FTP:

   [ You have to create a new user on the FileZilla Interface ] 

3) Mercury (not in the USB & lite version): 

   Postmaster: Postmaster (postmaster@localhost)
   Administrator: Admin (admin@localhost)

   User: newuser  
   Password: wampp 

4) WEBDAV: 

   User: xampp-dav-unsecure
   Password: ppmax2011
   Attention: WEBDAV is not active since XAMPP Version 1.7.4.
   For activation please comment out the httpd-dav.conf and
   following modules in the httpd.conf
   
   LoadModule dav_module modules/mod_dav.so
   LoadModule dav_fs_module modules/mod_dav_fs.so  
   
   Please do not forget to refresh the WEBDAV authentification (users and passwords).     
                                                                                                                                                                                                        �{I�������H���=	&a���~��r(��+�:�m&S�"����{͹��-�JR
�t©�_ �[{�<JD��ƴfk����@Wa�z�N������pEL@���$7x�,]��14e��� �R�f%��z�f'�ǥY'��P�������7p'j~�� 1��oX ��Re$�����:^��eJY�@ff�J�ҽ7�n۪�T��!(ٜzB���Pj	�G��Xɵ���@>Xq�c�9�c�S�I.�?��tXGG���y�7��|;�����]�jZ+uU�u�잭�g��h� l)�&Ǫ�<��1�j�>J��d@1�g�yoY�t"E�I�'�֙!GO�Eo�_�R�C�Ke<2��c�4���Fjt5�MȘ�L˝@FmZ�EeǑ2�nH�SI�� |R�2���J����T��b-���:����2�1���AI�����; ��&���#�.#}�%@������'�&�5���y��p��t�
��IIl+{��-+{^|d�q�JBt|a�x٧�k�(�Ce�O�I?߆�L5�8�Tx#PrO�+��C(S���t�53 Ԑ�o�6������OD·@���N�O|m(7�s��mR�وw{���Z��4}϶��k�l���R�p���\���
�6��	�}@�S�R�,ZƁ�6�z��q�7�7T����O�̜30ȫc?.���Z�H/\j�wO�����L�;�>�ťH����`�vT��V���E��'Ƶ>%�R�|	���(~�3�
8��e?B�h�N����m���y�g�����L`�b�;�Hڏ��������q��:k�*`�)hFY~�i��]t�v�4,
2��#��-�_�=�X?�繁+��΁�l\gژ}�l�g�3:U%.8C�ϲǙ&*���+aN�ֆ��N�Z�kq����*ɵP���k62��"�EFT<*@��Ф.'͹P�	*���KO��ПDc�~P��=��FJd3{��A�p[�+QE8�%�*j��|�P��
}�B�Ҥ�Q��١wQ�i�H�m�����XT��Y؍�.�c�P��v���H�p�	g%�EX��H������?m*@�s�x�}O�S�-qg��s��}�d�	<h��O��G�p���+^~{��uΆwe�#��f�S[��/H��p������Idn�j���f���#��`��c�C�#��M��2Oؿ�2t�?���KUoٔaC��&�����HX(&ef�&QDF)Q��I��P�l��&��o�w1��$L�^�MCz�w��|)=
��H�`�E>Ջ,�ɍ��L鹯b*�b�)����@<�9(����'��#�^TeG�ܞ�ӫ���GI^�_����+���iM,o!0�E�v.��y\jt������[J��f�o)� n3��eP%D�ܺq��I8��e�����A�U��6�e�Qq�7��s"jdS�������q��miZ�G3�
I6�%m���iQ	����)�J��rc^5�UtO�\�x������9�$݃�ϩ��l0^��S���)n�j��tpY(�f�X�I��Q=CsG�7�(�Я�ݺ�ǪS[^(�5*@����.����%�o��i��V���/��vR	��D{n��n�؜r���І~h�ܚ,=��	e\d��9#�A��e���n���$Цp�\x�̴��ڈ[��V����Kda����u��?��k����{Q(x�R�,1��/A������,���ڶJ��_���[�
Wu�����|ϻ�N�0��m)f�WԺ�6� �RO�菞����Nx��%4��Z>�� 3�n����;2nq2�f�u�z�{�2����.]eӒ�b;��N�� �ت"�c6���{�?7��)��^L�6d�j��$�tЌ� �y��h��Ԣw�~H�`~�x�x�f7�M\s�7�p��#[5*�>���kJ�A?���J���VwO��,�vwd�U�f���o�����\�z��1,}]+�����4`y��Ļ��w(ho�؄��Mz������J��lZ�+I$L�R������K�ߥR!�aH������X�i`뉯)�t��3��^h"�l�~:B�>\D��:cA_��Q�G�:��{lIY&��
E��S^׃�f��)���i���!Z4�hX �4�$>+�����a�8�>���ٸh3�>�N!�	&z��f� �k�c/�ez�H_��%���^��DVA�<�S�T�ʚ��Β#'oE�Ј����?1���o���03|0KnP� G�r��7��&s��h�B�`�l�˛�*(K ��.�;�(����x!�9]���l�ہ�%�u���i}�h��<l�ץ�����}�>�U�ߥ�@�=#+-v\�D�����|
�4�x'�	a���r�3a: ڸ�'Je�4�S��K�����$۸N��8��j��1I����E��qv��W���&�ԵE��`[���y�q![���xo9�0X�����O�p +�	2����k�4S{e
��6K(+�./̣��ڵr^8��\y[w��@��K7����,�H�^��wX g�m��M�,�o�ybkf��n���wõ �S����8��<H�1!���R�/�mw�޼��aN�vS�_�lazH�R��~ǜ�B�]��'���o>T�%����a�&�7��=�i�S׌x
�+DƣQS!V���Jސc55N���m�";��~�d��6�2H���v{*0E��X�R/g�X�r�O�ԡ%�J��Tb��l�P� ��3
�S���v���M͛���[ġ�E^�򵔊�G�/3�����:�����ӄC���� �k���q�a�N��b�!8dx8�
5�@A� ��]ؚOІ��$&ػx���ݰ"�-��>Ԣ3%�X�>^���]��0�S�%2�j�\u���O7�u�q���U�eCG/�K�̯���3����$�-t�����r"[��b�y8��v#�" ��=����h��.�?�1a�����u���&�Pzx��BG@echo off
cd /D %~dp0
::::::::::::::::::::::::::::::::::::
::  Set JAVA_HOME or JRE_HOME     ::
::::::::::::::::::::::::::::::::::::
title %~0

echo.
echo [XAMPP]: Searching for JDK or JRE HOME with reg query ...
set JDKKeyName64=HKEY_LOCAL_MACHINE\SOFTWARE\JavaSoft\Java Development Kit
set JDKKeyName32=HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\JavaSoft\Java Development Kit
set JREKeyName64=HKEY_LOCAL_MACHINE\SOFTWARE\JavaSoft\Java Runtime Environment
set JREKeyName32=HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\JavaSoft\Java Runtime Environment

reg query "%JDKKeyName64%" /s
if %ERRORLEVEL% EQU 1 (
	echo . [XAMPP]: Could not find 32 bit or 64 bit JDK
	echo . [XAMPP]: Looking for 32 bit JDK on 64 bit machine
	goto FINDJDK32
)
set KeyName=%JDKKeyName64%
goto JDKRUN

:FINDJDK32
reg query "%JDKKeyName32%" /s
if %ERRORLEVEL% EQU  1 (
	echo . [XAMPP]: Could not find 32 bit JDK
	echo . [XAMPP]: Looking for 32 bit or 64 bit JRE
	goto FINDJRE64
)
set KeyName=%JDKKeyName32%
goto JDKRUN

:FINDJRE64
reg query "%JREKeyName64%" /s
if %ERRORLEVEL% EQU 1 (
	echo . [XAMPP]: Could not find 32 bit or 64 bit JRE 
	echo . [XAMPP]: Looking for 32 bit JRE on 64 bit machine
	goto FINDJRE32
)
set KeyName=%JREKeyName64%
goto JRERUN

:FINDJRE32
reg query "%JREKeyName32%" /s
if %ERRORLEVEL% EQU 1 (
	echo . [XAMPP]: Could not find 32 bit JRE
	echo . [XAMPP]: Could not set JAVA_HOME or JRE_HOME. Aborting
	goto ENDERROR
)
set KeyName=%JREKeyName32%
goto JRERUN

:JDKRUN
echo.
echo [XAMPP]: Using JDK
set "CURRENT_DIR=%cd%"
set "CATALINA_HOME=%CURRENT_DIR%\tomcat"

set Cmd=reg query "%KeyName%" /s
for /f "tokens=2*" %%i in ('%Cmd% ^| find "JavaHome"') do set JAVA_HOME=%%j

echo.
echo [XAMPP]: Seems fine!
echo [XAMPP]: Set JAVA_HOME : %JAVA_HOME%
echo [XAMPP]: Set CATALINA_HOME : %CATALINA_HOME%
echo.

if %ERRORLEVEL% == 0 (
	del /F/Q tomcat\logs\catalina.pid
)

"%CATALINA_HOME%\bin\catalina.bat" stop
goto END

:JRERUN
echo.
echo [XAMPP]: Using JRE
set "CURRENT_DIR=%cd%"
set "CATALINA_HOME=%CURRENT_DIR%\tomcat"

set Cmd=reg query "%KeyName%" /s
for /f "tokens=2*" %%i in ('%Cmd% ^| find "JavaHome"') do set JRE_HOME=%%j

echo.
echo [XAMPP]: Seems fine!
echo [XAMPP]: Set JRE_HOME : %JRE_HOME%
echo [XAMPP]: Set CATALINA_HOME : %CATALINA_HOME%
echo.

if %ERRORLEVEL% == 0 (
	del /F/Q tomcat\logs\catalina.pid
)

"%CATALINA_HOME%\bin\catalina.bat" stop
goto END

:ENDERROR
exit 1

:END
echo done.
                                                                    "�o]���E([�,��'��Sb�npg���0�g1�/��2*�Tyu�
P�)�<[��AgqP�l�)W+t�Ѽ�K/K�(A�˨#=��s�5Ƿp��&zo=?T���E��ڍ#�a)��W�Q��d1���h,�t�S���{��E�c8wLu���c�msq������� �Rn2)u|�.�5��/��sZ�n�И��[�1�n�&��)�.H�x�ړS)� )���x�WL �.�����+E�~���J�f�֊�"��4�=�Q)��S,��ů-u�n�6���>^U�h~*�2�&�%s�*�Qu�@�t�*�$l��]�3���E'�'Z�ݐBs�+=F�g�PF�/Le9 �-'��Mh+"�LO� ܔ�$ٷ�4�1��z�W^Ҳ�#U �w���a� r���f�P�]�U/�.C9q�9���vNT���9��MT
��U�S���q|����	��*�L���V>����׭�aò!T�U-z�I���ә��D��1,x�VX�bh��
���Vp�<z�õ[V��;-�)?��=*.�e���E���b� )�C1�9�. *��&�+����^�[�_� LIX�-&��E�׊V����Gŕ�A�Pi|u�0����q�.����v{�x��2��8��8�䟸���"��#{}�8b�(A=��^}T�pv�qp����&�U�H|�,BE����ݓ7.y�G����H�E���/��zI�A]QXƶiQ�{��&�4(�__z-�3��]GzC8�?�ɾ����*���MS�>=ڶ�ҥs����<�d��PE������uik��'Aȹ�� $t6Z@kz$T!È
S�Q�	.�9E�<S��7��I��%��K&�I>�����|a"��!dW���
�-`�ڕo��΄��/��2ѱSԷ�*�.�����k�^QZ�����i�ٹ�Q0	x�G���s������U�;�yڂ8N@m���
Et�y�Aiu�hE�1�<�ˣ��Ɍ2y2t�]V�X+¾Q�6��N�1=��9���#�e�R�
��=���&�]3o��1�N�\k��;U>}����z��!���[�,q�Ro@@�BXa R${��%- �9I�n}�27��3E|Η[A�8L��1!dYz�1�YI�7�*��hK&���q�o"�.Z�T��3Z'4�R�o(P���Ѩ����+���o���"����چ���0/�u�=o;�@�΍�.��ygTW�
q��7����Ơ��Z�a����`>{���D�
ȉh����;�K9�v� ��C��`[���1�Q+
Ca�q�P�� �ң/��!�K:	c��H��'���\N�$Jv�ҙ��e��Z�X��\<��@�&Eep�R*��T�]1��Aus��Ux��`���k	�滳@UFږ�*�!��8���h���C�����89�)���痻�ؿ�5]]��V��Z��gi�(�*���Eh�
���9���"�o��m@���v���<��� �K�?��<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<assembly manifestVersion="1.0" xmlns="urn:schemas-microsoft-com:asm.v1">
  <assemblyIdentity name="mailtodisk" processorArchitecture="x86" type="win32" version="1.0.0.0"/>
  <dependency>
    <dependentAssembly>
      <assemblyIdentity name="Microsoft.VC90.CRT" processorArchitecture="x86" publicKeyToken="1fc8b3b9a1e18e3b" type="win32" version="9.0.21022.8"/>
    </dependentAssembly>
  </dependency>
  <dependency>
    <dependentAssembly>
      <assemblyIdentity name="Microsoft.VC90.MFC" processorArchitecture="x86" publicKeyToken="1fc8b3b9a1e18e3b" type="win32" version="9.0.21022.8"/>
    </dependentAssembly>
  </dependency>
</assembly>                                                                                                                                                                                                                                                                                                                         3i�ۦ?Q����Dc���Ā 'H� T�ЧH���e��	�tT�K_�ʱL�~7�x5P�m��7>��IC����
Do�5 *�P��aj�{�9B��}��3�g�}���Y� ����p񂉄�D_=h^�Qv��j�W|�0O�$t(h�i^RV��F,��C ���+$���e���\���j�u�I����%��Dm�Y7��kp�A��2-
4�-M_��m�g��I��%�X��wG�+�53���)em�P���U.�Z2�~�V_Q��l��x�I�y�W�>V�����l"�FЊk�qsV��v�,�z���9�����;bI�[ҁ؋ m�(�������M"�X�+�%V���wOo�I]/��
͜d�PZ��m6떵{)�*PO���q�*�/�!��j��/��6�7>��D:n��25���*����#�\fh�W�2�Z�L�)��8�ub2�K8hGe�(s�rIa6�t�L�R+��w�D~��*��4�<�$J�K^�����G|	�kT/��LD�޷��>���_��'�Ѯ�u8+]�hQB�/43�	cݵ�\�hpg'T��������(��BL-�{n�@�>Y�%d��4�_�"2ܺs�����E��MR~��uq�r���`�f�;�\X�]L���V�-g66�j����n���'���.A{��"E2OWFqwXm[I�5�a�]�%8�f��T�b�Ɇ���<��Lvm���$]a6�X��y����`���zHK�&x"IT� �(���r45*� d�N�2(5��~�|	}ی��0w�(:@)g�F�؉���:To��`^��Jpڜ��RIJ�U%C���Yk��>����׀V���Bz���d�n���ᄱ=��j|f��4M��W�KypA���]P��1�.`��y۪!趠��߾�c��|�j��f'��\6�/[�Ho&^����
'�D�3��/���V/�dH�C,2 ���av3���>��{�5Wh�!	�?T�Yx�olH-a鞙�R�"2@ASL��;.r�����LJ盓��ej#ٷ�����o�.�9R֣�(,rmW+o_] E:������=�_m%��n�����Vav=��-���Ol�2��+����z�_�m ��vݏ��K�Zkdp��\��@�=�*!G�8F8����6<ØH�*B�Dҷ9���tZ��.��.d��niL��9��Ez����\��e��o���>��ٌ���4#B�ᙙ���S�m��d5��\�ռh�1����`��󔘢Ýb��c^���f��zOo0�u�Vپ.�LA2��]���ֳ����-�@�7�ۛ���(v�][���{m�:y���)�#��km�#*����)#�(�?i�Y��'J������c�߻d"Sw��x��.��^�B��P(%}�$�l���@� �cz��������m��[����=����h�p
���RKE���۰|��D�!!Tj���2�<�Ց�����&�3Ʀ��i���@r��a=v���ۻ�P���w�㿭���`�	��F{�G�S�ſ�Xt���-�~ᬘ�����*���U�O�Ǫf��T�\��P_���� >��Py1���3(e�I非:fm��ԽK=����%���$�x�'�#���10��.P/�\�	Y�(ܤ1*��jgsI����w��"�X0+][���hsmr�C�VT~��Z� �k'hf����3�E�A�o�<�9�)0�R��	Jشƕ���c�$B����l8��`��(L6_�2��5�C����@�d���@��'r'�<&Ŷbw�d��<dp�M?i$��	v��'==�o�T|�;�=��ǞU)�����`���t��L��'�����k'��a��Z��s����%:��#���w2�� ����,̱83��e��T1�nl]��I��r!��?�M�""_�ϫv�"�Zޒ�]ed{9x0�q\�Km�ף����v7�_�n��9�Ez����/�7d���s�ˠ1G������i2V�����7���E�Pb��/�{\��Lwl��V0�i�M����v���"�q B�A��jr�=:O�~8���;O2��%:Gz ֩�i}&
4�Qi`)_���qUm�v�_O9�L!��'WLeܧN�$6�Ս�w�� ���J��k�7d#������h��yG�ĭ���O~�%���[����������{j���Od,�I4*�|���ȵV�%R4����Z�����Oi�(x3c<M��-v2����g�ZV��Q0�����ߣ���PL�-[��W�@��k��9S@��i�5��1�Ɖ��$�+��;5����0�!r�#f�/%���}w�����W�4�a�Lb�I�TQ�G��ڇF3I�"��։Kr1���5���_.}�ʤ��2*���fX�^��vܣw�:į�P�2��w5$���VU.�I�r�U�-_6,:����.����8pv"8�48νp�p���2#em�(Ȇ�`�E��d�P�F���49���H��j�~���V5˃=~a���K�,Ŵ���%����Y}>�ɹVU�3=�33��)���S�;�h]����b���X}�C
�ܸk�W���l�L��B��(D�s����>(T����d���ע��kR{ѧ<����u���E<�MG0����l��:�e8�{$
�[8�~�k�1*9�S5��	���,@�2�O�a��J��LSE�3�{:�E���x�]+-{���=����+.�f�Y|2}��ǡ�\�d-���z��+����kZ��Qп�1� +;e����Km0�W�/���¿R�fa��>�x�n5�P��<���w�s�����a���@TQ/� �{��huvk���v�b�[���Ǌ�~��&��/�D�㺦���V�t��P�n��GI+�4	8�lؤ��RM"�6��4�`K��ɱ��@��C�/�E���G���}ugT��ƟM�7A��%q�J��QZ�:�+���"h�Zb��g�j��# GENERATED FROM XML -- DO NOT EDIT

URI: glossary.html.de
Content-Language: de
Content-type: text/html; charset=ISO-8859-1

URI: glossary.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: glossary.html.es
Content-Language: es
Content-type: text/html; charset=ISO-8859-1

URI: glossary.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: glossary.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: glossary.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: glossary.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8
                                                                                                                                                                                                                                                                                                                                                    {�u�F�.�R�������7����md��r�>�ю)u����A���Fjg�����h��k��T�4UN^J|O�I� ���b��
�Q��w<��)_T�d��[g��Z~��jdd^-�ox_�%}�҈ �,��$��_��,��	�h�YUx%�ˉ�:��V�eδ9�������Q'�2g�C�w��A��VI��_�W�P��X��f0���|�^;@����LG�.�R#C+��q"-t�iK��Q�.����H�/�H^7�@A|���S�tV!X�`v8�"�3�O1ƙ���t`H��X=�5�Q�Yf�?bdo/f&
�y�<z�9�U��'����h���]��Ѵ���̽e�{b��0mo���}Y.�l����~�f&�gJ�I���PG�]��'3qgE�k�tt§}�v���"�
7�r?��r���I��Ok?�0�Or,T�$�V.>�'"��/�g����QH)n\3�۵m�����:Y�@�Q�h��i�|�cg�+?�\I�*Ɨ���J(����r	p
nގ��\�9E����oX�Y�5^�/�9b<�a�rפQ��]�&Rg��M��0�Z]��pC�����:i�$9Q�_$��]]F�� t	=f�ˆq$ӁZ�PY	��t9��KԬ8��(vDm�N�]Gg�E�~��䧴C𹘥a�$j�|�#�g� ����֛mp�wצ�����^��S�;��Q�^�gn#���<��i=�@CYQ���1��ָ	�b�P��vqB]uaR.�%{����˯Rm1$���c�p0]H�q�w��d�Ï^����(W󒆰5a��\�����_b'L�Ü��uxԃ���R��#�sƃ�`���6h��R#�`q�B�\bF+�+����6l[���7v�)�'&�,����A����I����#�P�B�*�t�H ����A�),Ŵi�#P����X����{z}W$2�c�}�~�b�8j:5��H��g%-m�q<�5�\�C�&DyX�/?�l����P�:�s�8�s�/����x#4ԍ"�o��*߽C��8} 8�p��|$9G�2D�+pd8����:�w��F���G~>Fw�L\�����iT�]	���߲2GO[p�Z�x�	�㏯j�r�DO�jA����� ���!�K�����[�(U��*�m{�r�u��A�<d��	���3�� {V{g̹t�\���}n!�Sإ�S~��Eu?���x��sv@���#j��n"O��Sve�!%o�ȃ��\���^�)\�s��-ܬ8�D��_̻��aN�_�&r�&���\��H=OtYK�ݹMƗn�h�Lͩ��rϑX��|��#*��U��<������OuO8�X7�Gb ����B+וI�F����8�΋;�t�% E�T�/AV^1��3���6��c(�^\�ş}9�?�³�)h�y-�u{'|�A����[��1i��qR�"��B�iPI�i9�X�C�[�F�t�\O��IΉ�г�{������mtEA�0 ���J�ި��J�D"]�_���-�XIX⑆��=���t�q�p>��
m�%Ǻv��F�a�:���������4����F�׻b�ǳ�V�X��"�K�����.L�̛f�����f��MZb-Ί��N���v�������|�4�׽il�(�e!c�/N�۝b�PH�J����tɰ�����*Y�pt�B&���}�_�l��<���_�M[��yb�ĎEX`c̋�>S4�����#ʡ\���!.1�^�%�Y��5�tK�Z�����ܻHR�g���0�?f9c8��#]�F��(jҤ��Z\
���� ^Y�н��$#�x�N~3�t�"�ۑ���B�1���yH�@����֛-��P*�ꉛ-@�l���y#�v}؏�v����NVD4��Z��Y\L�W��.���ҝ=q�4vJ28l~p����nϲx;Z�f�\?��.R��n ����݆	0&m�aMQ��� s�RejAf������P��$>��3��#EMi���oML�g��-��C�c��� w\h�aeM[c��I�Ɩcj_�q�����-a�����zK
il����եT�uE0&R����!�b31�F�e�n���B��+te�Z�^���.�n'��p������~�t�M����?� w��2}!�s����%a�nb;vH�-�����u�N|/�G��|����	̜Q4���gv
2�?p඀ ����;]+!���� �r�#�-���J���]t���Iêߦ����Z�Zudj��C�ݕ�p����2l\��CњbnGK�ڣ�>�0s�vO���.��M���ʖ3`�<�+]�+*Yz۸�	�,���סg��}��܋K�~X��������-����Y�?�ߐY�@��Ev�ۺ	��O-%I��K�o��~.ym=����XCZ2tm3_%�E��M�hif�ֽ��+C*1�V�c]��  !��İI,W���@�u�XTO2w���-T�_(��E�ὥlPC;�Z�*�S���-����c�w�Ml�j�}���	q��c.���\��$ߩ�^����Ɗ_-	ų?s�9�yK��-(��lQ�n�j��Ü	�/�W��a6����3x��Fb���;?�P�K0m�OY�lK�� �`o��g	_d�_՜(���.߼��n3��c@a�J��#��vY#�5P����)�h\�.3�lu}�Z)�436���0�)�>�*r.������¬�6I~V'�Fۻ�rB��n�V0E�>b��5qu���8��v~`�O:Ȁ�2��Q̏�6�_}���!֧7���JW�r�-�W�n�o{���F�y���u��$YB]Mr*	=�J)����/m9�l��VK�j|Ή��4�z�[��TiF@��1E,��/���W������õ�����Fu�3�\G�s�6�6�䉋Ec��p�9[�p����g�I�� b������ro����E,aIR�ޠ֥؂��˗.gb�0���aq��BFpg��# GENERATED FROM XML -- DO NOT EDIT

URI: index.html.da
Content-Language: da
Content-type: text/html; charset=ISO-8859-1

URI: index.html.de
Content-Language: de
Content-type: text/html; charset=ISO-8859-1

URI: index.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: index.html.es
Content-Language: es
Content-type: text/html; charset=ISO-8859-1

URI: index.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: index.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: index.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: index.html.pt-br
Content-Language: pt-br
Content-type: text/html; charset=ISO-8859-1

URI: index.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8

URI: index.html.zh-cn.utf8
Content-Language: zh-cn
Content-type: text/html; charset=UTF-8
                                                                                  Y}�*h�c�LiD��Թ�E�b��!xW����^d�ˣ#�]�q	����Ԑ:�F��{�"ж��i�;������*�ӑ�Wo�<<����'�V�c�*8���l��j�������ƙ�н�7�q�2� m<����*�/[��Vn�����D^����$7y��+?�<��0;�O	�I��y�l�.�dkBAf�#��OSG����h��h�8U%ȕ�8�"�8")_��8kW3�.R0�de���r? �7�&�𯬑��LL.y���Y�wH)8;Rd���'��D��o���D�^�Ȁ��wR ��m`0qͷ�R���?����m2=
�ׂ���� �δF���	x����L���d���hK_�u���KG
�5Q��4�]�i#,TM����';}��{�����RY����=.�wH��3����6��%A-h C�e�>��cgِQ�������ǟE�J!�.���2HmM�=�&�$(���fx�t����^x#�6�E�RI|qb�	?/Q�ʷ�z��îL���ɢ �xt>���	X{h{�'J�ظ���L�,�{�$?q�A�DE�w�K'0��y�@���H)�Ipw�6����;_O�Y�;�Q\����A	����,��fe����������	t��5�s����~���ѐ
�F4��+�ߍ��l�ԧ��l*Ŧ�'��Ɍ�����;\[V�^r�>��#�U;7��=/������|D�.��4���w��B9�eo,X "y���Hr���
D$d�g�2-�����Dd��e��֨�{F��@���W���*�;�V܏B�xk�FVQ�sGo�!x�m�F�UU�`�@���(������d�{ӎz!5/��a;Y
�N;������;5�����]�
��&���peR��5-��L+�C�yP�J�z����?Y����}Ψv�Z�O�\)M�cFގ�眑��R������|^M]T���S^u�~_�6���c����<�w?^��jw��4�[aOYTY>K'�'_A���5�n1OK�5W�;5�����V9^Ɋr;��Ѻ��5d�"d��(���	ҝ�y�E"^ԧ��s�Pm��겅	��F9�c�]�A4�����^�-�m";�4]� ]֊�)u��I=���� �}ow=��A�x����R�u�%*�_���� R�'�/Zb硌�B�1ğ��H0/���Q��o@��-��i���"չ�%\�;>���w���PC���Ax�y=ۻ�yQ}�|�m��<x�L`�H*7 ��*���:n��' l�T���ef�@�cP�qM=��ZϜ�u�].���DN�9�k�Ol�f"��)�������PI��#*��4�G*2ɪ:��ͱ������Ei;_p��k..Ѡ"䜾}�z�]�)�V=l��t�8���� ~��(W��7�#����G�"#zݭp�L`䣈��__��E���x2�R��Z]�����9��׹^����F\�-�v���@vk�7�XZ��Rj�4_��8�{��/	���^S_י�C�JR��FAk���cS*p:�bQ?�A���=Yh�]��+�DVy]��n���?��J���,ևyo��2�ekq���@,�@���I\����xk<y����_�i	UuF�0B���;�KF�������)�+<U����F�$R-��.'�On��a�<�.�mS��cNcf·����#
�גR��ri��$�e��<�q�ao�k��6���1�P1$�θ9m\,�GV|3�p����Zu��:M����m���)3Y52d�`�Y�f�5}`�+'����mx���mdqXY~����Ǡ]�W�m�9[���I^4�_��bވ�����ɘ�J0B�W���ō<l�rt;IO����_Ա?�7GN�2ؾj��K7��{|����<F�('��?J@�8����4��Q0,��2�\O��;�|*^N��I	�1�j�����,�<��w[g'F|��17��Y�a����Ǜ���F|P��胇ƃ��� �]it�1΄@�vן\]Elg��x�Q�b����TT�� �N��$�ܘ�=��RC͍��Xl��_��	�X�}a�t�r܎�کX�z�8C�1��I�� ����\�2�T���V�Lmm aNJpTi�\:E]�t��#���,��rC��ʳ.Ư_;��}�c��4������YnJ�g+D�V�ɕ�L��S��Nm}1ْ
��2.3ns��%���(��K��%ަ<� �D�E}(�o
܏��y+���J=�I�?z ��<�Mou���q��ƭ2Ry4�|���s-YZ-A���r��������%!��وa�Oۻ�)���4�VorJϿ������AE��Wݰ��X���z�j�[����
���	�w�O��k XX����DEL��`����e���_B�>A���>5���&T��=��%�
�R����x1���ut�)��D
G�}\c����-�#C�R��Ŋ\��&��OjQ�祬M�&�(�̏`l`����`�
tSj��A>�|>f�l|�v��cX�D�u��E��ח@QT{�\��E�߰�Q�;Qe��e~��p
���w-��qL�g������`�Ő���"]aƜB/ߦ�ߗ�D���H���O��O,I�d��5���Q���I�ڏ)B��m�}D7�G����oy~**<V�]�9���|r̨܊4pa����y�AI"��؀>�S	mN�]8�f��P�r'/9�?1�G^T�D�m�خ�����@|��v�{����� ��~�3��7В�eG�(�C�`&�B�!&.��VɰB����)��G��"�U��T1� �hŶ�k*�Mat1�P��%��쒁 &�?�v�5 ����	f,/Z/���w[N��{&��Y���n��������^��xǨsՏZD���aeX�(�5g�C� �z;��Ɲ���Rj�.!r^,�@��#(zpE�.�Y�H��,KE�i!�M�����NQ� ��<?php
/**
 * Another example of PHP method chaining
 *
 * @link http://sebastian-bergmann.de/archives/738-Support-for-BDD-and-Stories-in-PHPUnit-3.3.html
 */

require_once 'PHPUnit/Extensions/Story/TestCase.php';

require_once 'BowlingGame.php';

class BowlingGameSpec extends PHPUnit_Extensions_Story_TestCase
{
    /**
     * @scenario
     */
    function scoreForOneSpareIs16()
    {
        $this->given('New game')
             ->when('Player rolls', 5)
             ->and('Player rolls', 5)
             ->and('Player rolls', 3)
             ->then('Score should be', 16);
    }
}
?>                                                                                                                                                                                                                                                                                                                                                                                                                                                  �4~2"�y��q�WFM��p��{��D�(�?�kD[e���OG���B�{y�K�Q�ʻ7JuOsJi�ttٻ�b����,e��H�N�����2��ك0.��dt�R#�@%����H(<�d��0u�YzZPKWQ�h��"��6*�k������
���i�Ay�嚢�aj�ڋ<��v�g@���EvK�1�>�iL+��m �ہ�D��ȣ�[#1��z��.~����{a�V��ȣT��!�_R���[�{��w��rvI'U�Z
�)��Y����-�@���x�r5!E���!v%��F[�Ԃ3�q�u�9$��L+���O�b���)�!��u���EI��J��U~��bT#�@�ðoΤ��/�p�=	�KG�.<7�i4��ȩ�BM�z${g�J�r͡5�D۽�,�+=��f��i,H��f�p�O��S�o]��X�R<��$4�����U L�s_��Uz��U`���9�kO�z��6�꽍̘�9���B(v�v�(�-��������K�[�њ���@i	�>����:ߔ�̭c���1��3A$�-E?�!ЩG�9 TZ�[���wO�=�}���vɝ����ĐE<�F?PҝD�`X�B*��}�k�����ޡZ�2���\ rnblD/�c[�f��f���8�!���Q�W�[u�O�b�p�7��{pĜ���*��stdq���X\޾#����i99`+�!�SطE�~D�-�މ�Gb��R�7�Tw}�����^�>�1%7	��[>q�E��\��Q/�u�d�j�+�8}��$^�C*���:j���h@?���|��G{�{�6��ִ���P�8�⢧ʏ_	�oόy�g��Su͚�R��W�X3��W�)S��%R�20��D&xH�\7�r���b�4�t���3�v��:Yoou�4�$�(e������KO�y}�]������<�3��𨬴S}nZ3������r��8�}V�����(�u��}6�.�n"[k������jw'ˏ�H��;S���z���x�{��^A�Q�V!�=?<p@��}��J�*��s=�0ٶ�a��_��2(LX��$�:v�-޼M��9�j����sB����knKt�4@����@��ЛL��͑LN���=^�$()����z�/2ˬ��eH�b��-mK��{e(pFM��r�]��SA�̍
������g�B�Ġ,"�럳̐-K� |����A~_8�x$+���7�o�v�����f�е9=G��"�s����I�5���?lX�
I�)M��� f�b�F�!�|qY�?�����<�EBl�F1�-����E���G�����Ӿ�1�%��I�m���	n�y��я��l.W���O�9�$E�~�"C�8It7�Luw�)�N7��
iw�4��_t�M���ńZFv�,����6���I�pK�E������O�r?�*sH$��<)�;Ô�v<GoS���p���]�5)�W����t��j�1I���&�?�:��6��!'v�I�M+�#������ f�j�1�������ۓ"��1P�����^���(/��� ~�#oa�Z�	��j��I����vu���P�h�/�Z�2����j�{��l/3�|	� z� ⩂(޼0�a�yNHs'�"Y�B&7��ܾ��N���z�7U�ګ��Q�|��=�8q�%�\�
�eY�� ^O��a���iP�x<C��$�L�_��z���7� e-��{i��F��>���*b�.y]AK�so�!3~z[V��v�)��F����va��6U~r�C+?�� ��+������3	�,4�L��Ő�UZ�)Iyd�E		�^aHJ�8���7�50V���E�Ig�����nsSԏ�Gن��
�E ���`Q'�����c��A��f9���[ԯ?��;�f =��PӪ-[s���%-��y��d���<
��z'���h���Ą��b'�#���]xXY��Τ��};�.@�Z��3#
/����u�ϻ�7�ݯ�}6��p�}RE���B�:oD���й1+h��e��>���tu(��Wj�&;��V���b�Q�`�����J� v���:P����3_`���/��^{9ٸ#Wi?@㣯�}�����B���L��v*+�Q��"��\44��]xn�l�:�T����*#	�����k�B����a�R|��X��d|�n�X�?�����\Y;S��G�s�����'=�S�v%��J���@#3�2�%.����� J�+Pe�ϚhE@�p.*�t�J�3��[2c��*����p�KE2!^'l�5���"�������Hu �����L���0G=��j 5��L��r��E����5�j��C��Nn:�fU��=>~�5��IO8��<���̾4H�ew��������|�˦\�y\u�U-P��W\���ߩ��N�-�`x�g�	��Es�T���������on��o���x�E���"3�H&�C��2J^&��=������k[����,}��"�g']O��2�N��i6M$֔�W�� �2=3't����#l��A�5��XԚ��5eH癋{�K2�ʤ|�G-巨��ߍ�X��a�挻�B?�S)7X<\�iK~�iP`�~����)��:F�\�.�C��PSkB]��_:Z�l/V=t2|��ڟF����+��ʬ��%�m�җ��ް�����8�Y�'���%e�暃���M˫%�k�u�0����c���S��:>5ǯ>�G�u��C&�9I*���5>�~�����Z\ș�ZF��yX?��hU�)��\�󻴻�
�� o�ljSvƳ#5۴O����Wl�a���E�f�Ƀx8���G�=�T�?X�g���}CX$$L��$�"� �L��V&t���`�^��_�r�*_�Y�K(�� ٻ��pQĐU}LS�19Mn0=���M�>
�@�Z���U�̫��a�
�sG�� n�Cyt��N���R�eC�����m�"<?php
// PHP 4.0.0 : __FILE__
// PHP 4.0.6 : DIRECTORY_SEPARATOR
// PHP 4.0.7 : version compare
// PHP 4.3.0 : ob_get_clean
// PHP 4.3.0 : debug_backtrace
// PHP 4.3.10 and 5.0.2 : PHP_EOL
// PHP 5.0.0 : simplexml_load_file

if (!defined('DIRECTORY_SEPARATOR')) {
    define('DIRECTORY_SEPARATOR',
        strtoupper(substr(PHP_OS, 0, 3) == 'WIN') ? '\\' : '/'
    );
}

if (function_exists('debug_backtrace')) {
    $backtrace = debug_backtrace();
} else {
    $backtrace = false;
}

if (function_exists('simplexml_load_file')) {
    $xml = simplexml_load_file('C:\php\pear\PHP_CompatInfo\scripts\version.xml');
}

if (version_compare(phpversion(), '5.0.0', '<')) {
    include_once 'PHP/Compat.php';
    PHP_Compat::loadFunction('ob_get_clean');
    PHP_Compat::loadConstant('PHP_EOL');
}

echo "Hello World" . PHP_EOL;

$ds  = DIRECTORY_SEPARATOR;
$fn  = dirname(__FILE__) . $ds . basename(__FILE__);
echo "You have run file : $fn at " . date(DATE_W3C) . PHP_EOL;

?>                                                      ��Pp����B�Gǖ��t;���`=v|�g9���d�V�gF�,�9����
�Ww���:8uw���e����;8�ڢ}��T���bbb6&{s6�3/�8m=��L��L~^'@�{���	n����k�@�d��I�Oē��^���OI�7��\�{�igc��/�x�F:3
y�6W��8�F�Do{���9�tHl��S��A�3���c2f�j܁�C�I���$�Qp��AT� YP���{A�n	��$j�3�>[E<�7q^(Y愈���s3i�K
�+�[�@����a����)b�]��(���yn�T4ݤY��;)����7CDt ׵��v�Â������&P�
vm���{𜑫��D#,T��ƽ�fk� ������R��C��������L{����5�V옗#�j���B��|Zt��m�@�sU�%��_�+Ж�'D�KF��ش�|˞����@�˧J��P���Y�pa=�&�{8�'��k�wWK�!n��0��>���3�G�7X��
/�I*��z�<�er����@��eP��D�<��M�Eנ�[�Mڝ��!Ǆ���W�2V�ͦ`[ @2D�-�����iK̻�Y����ɵ�_))v`��a����7i'8Kb	*}��G�6l���ejo:�Q1�t$ Z�qV�7�3�� ���F�	�+�g�. ��ޘ�`�}�svD-��4P�#�d��3�v�~�/{�Q�T��FK�j�Xa�6]NO�
L�_��8�&	�J�N���'Ȏ;{�b��.�G�
#7L�t��%���-�P�'�yQ�\��h:]G��}`��W��7�et�$�W=��>�|�#y��,#���'���{��9�6��'~�je�K��"�@Ԓw�� _VS�{;���)��W�|�Ļ-!H�\���{�����9�.��O�u�yJ���(����3����͖$��ηA)k�7�����ͪϴ�==�D7{=xS�IA���#��Ϭ�%�Ђ�K &�2Pq�}��Ι�:ba��aI��
<�q~$!sⷄ �p>���>�`[��)&.�_"�E#�դ����w8m�wCA�c�ӗ�p��*��y���ѷ^&�! [�]nڒ�6�\G2�ۂ�U�2�"&�t��@���Fs�O�
v~��+�Ā\���Q��(p�6�ZB�@�-�돀�8��q�l3��t?"���S�#��j�"��*���u��Yd�P�`��`�`�N�`���Z��w���H�U?.��ž��`%g��]f�0���_����^�q�'S`�}sö́�H_ c���H���G�\)�E�VD ��1��,1�P���r� �
�v��^�JK1�g�-e������e��^�p�h�H���
'ʏ�a,8��ΐ�3.��2�|y+�`N���6gQHs5|
����'��u]�����6F}�F��9���3x{�h�u�[������*YR/-`���Fm�n�jEzm���C�������&�D����Oc�}u�,Æ`�Iɣ�{������˾sn�ֿDA�$;� ��Fr^��A�]���[�"VR��(B*���!Θ�`Cۋ�u�֗�ܪ�T��;q��28��� ��3�\kdTj]`��7y@��,sO��D��:�=%���ʬaR�o��˴ʹ��$�O��#	�Q�J�B�Q�	B��>a*�P�[�a2ë�6�Z��I�ߎ��2}��25qd���� �������J�HYz�� vt-�U���D�����1ªs[6�ٕ
Y9;D��o��;����� �<�1Gw�Ej��H�����\��"�Ƿc�V8�*��L]	�0����7]���@����ay0�cX����!F��qܕ'�bw�C���%K4�)�qf�؈�O�*}���Pi�6�餎�9a����~�@��n���h���g�J!u��{�*F��Jҥݴ��F-�Y��J���oc�P�\���TDn6�i�uP��s��7Y��8!@u�{X6ƶ�N/ �g_�T��V�K[ޚ��r;썊��
v0����uf6��>1`���Ÿ�8v��C�j��jI8�i��yQ��[k�etV�b���L��K)9�\���2In���3�=h��p���([�#!�8�r��]x �]�T7�-A/+m�_�ۙ�%,����/�HcKy��A�T��� b4�{ַ(GKa7��d	YwN�����cg-c�=qo�\�=�ǫ�~|O��s����Y4L?��M���R;��5<,|�i�j�ӓQ�����g����-Ţl�Ï�e�!�a�_C�����l:�m:w�ܴ��?x�G�lL3"�h��T���+GiU��C�O�R�4���2K7�(���Ų�~Bl���"j���4o�u#l���C^@WLk*�3���"(_ټf�g`V���P	垆�Nfr������è�zUQsVe�%�1#�����ir��͸�p_�Li�h����g'K/PiGi^1h��Rk� ����I�� �5d>F�WtP��F����<G�:N��җ��x�P�9Y���]	$B��۝�32-xT�#��O7�7=����t��D����e��P�P�q�Sv�$j&/^�vZĖ�.(6���=y����2հ>Wp�f2G�9 I��l������n�t��|4�⻵y���=��p^W!�a���4� cǸ��XRy�紜ťu����|���Y�}%h)J�� @,�ڠT�KR��۶��6M���� #�H���^��f���Bf�>,����cɲ��@B��"��u����B��SK6��E�t��3(���������4C���"\�M׆T�L����GptiӖL~♼)�����P���j� �ʬ0y���~@qy�n���J����
�զO�_x�N '��W�)�
$�bs�⋶�䠢���Ҁ@Pu�,xd٬|��vr���3x�p8n���Tm�-8�I��K����H��<`k ��?��?p:�����D�a�]�����ڎ���%�2��p<�<?php
/**
 * SimpleXML extension Function dictionary for PHP_CompatInfo 1.9.0b2 or better
 *
 * PHP versions 4 and 5
 *
 * @category PHP
 * @package  PHP_CompatInfo
 * @author   Davey Shafik <davey@php.net>
 * @author   Laurent Laville <pear@laurent-laville.org>
 * @license  http://www.opensource.org/licenses/bsd-license.php  BSD
 * @version  CVS: $Id: SimpleXML_func_array.php,v 1.1 2008/12/14 17:14:44 farell Exp $
 * @link     http://pear.php.net/package/PHP_CompatInfo
 * @since    version 1.9.0b2 (2008-12-19)
 */

$GLOBALS['_PHP_COMPATINFO_FUNC_SIMPLEXML'] = array (
  'simplexml_import_dom' =>
  array (
    'init' => '5.0.0',
    'ext' => 'SimpleXML',
    'pecl' => false,
  ),
  'simplexml_load_file' =>
  array (
    'init' => '5.0.0',
    'ext' => 'SimpleXML',
    'pecl' => false,
  ),
  'simplexml_load_string' =>
  array (
    'init' => '5.0.0',
    'ext' => 'SimpleXML',
    'pecl' => false,
  ),
);
?>                                                                     $Nl��&^%�E,�o��������9�C(�ct��-i�yn�~)O>�~H��m�0�?��7>;O�ޞ_�?�|"��!�<���_�y�Jz����m�*�ؠ#V9d�q�Ϩ �js�1�ݑ.�I���@���������y�*�d�R�%Lq�!k(?ɭ|���������/Y�b��ݾ�xE� \�J�������ꁔpdn��&}7�Jl3�x�E7�n, ��,�D�E��9rS�O����,�����*/�jN�%!�f�	��W^!_]�o��Rzpe��"�>�tZ�iB�u�o8��y_#ѳ�+;r*z���G�YD�"6�x�x91���`�x�(�XS�[y�r@��m�ăx�&7J�<��H���v]8i�v��� ��FU��a�{� kgU,�c�O��}���o�N�CuV�5�G��~Y�M�h�����T�4�Pk��D\��GT�Id7z{�D f!
j���ٴ��h����{K��~4CBO��z���� esd�	�Lc��מ߁9H_���u����,�ŏ��%�?�PŐ��Aqu�1x:AX���E�ʥm�e|�$�Wk&��	r
�����T�?�ra&'���I8`n ��tV��@��hk�j7���8�/�����d�YJ�M��I�H�)V�����>&*1�nR?�M�ǜ��o�
Z�:B��_6n�z�-`�?�F֢�M�'$a�z[��P=���Ez
:2Emu�L"A�R�������2��(�ۣ��R�iR���? %U�Q���k�(dn/L��Elb���ƞ�D���EWlRmW��7J��!G��d���E�&k?-�td���S��munZ��dϚW����u-���ݤV:=7E�d�J��lI��w�\�6��a#(�{�|@��Zt>�	�d��d��ꋙI��%�R��l�4�n9g��l��4�������Ϳ���s��0L��E�ے��ʯVr!"4���4�d�"f���̒z����^ٕ8���� �����0(�A���mm�ƨ�_�r��vn�����@ӦLw��!�L-��j��t�3�U�f���܆ONC�rs�D+<N���BDL�a4=^:]����g�{3P%Ȋ��1��i�F%�]$�m?��|mT����1��j���F&Љ��:N����Md�WT��q��y��@��V�O]�ِ{�w�)H����g�+6h8r�J+n��erg�w��6�9�olBC�EW�����������b}Q�u;����g��d�ë��Ġ�:5(a�\�ɍEa}�A���/�8�ߋW�X$7�?��gLp/7dy�^}�s�,E ��@c�*ˁn��7�)�gGb	7J�b\%���g#�s��Ii�I�=�"�Wulv$�Ġdn����h.v5ٙ����U�Cg���~9D}���
�7��H�kM����.��a��0��пlq5��0KJ���R��+����S�pR�m<`�T��Δ�]YL#����YC6n�{�d3�O0���QO�k�07��v�.؛ɲ�R��`[@�ri��~MwT���eHr}�)01���V{���N����[uzޮ�X7$���8�+EY��f��~G�����zG������V����P����L�4��0�6suPRs����`��{���\��*&�|�@{IKO��f�T�!˩��>Wpc:7���*s�<2�ɖC�^f3��_3�Nu��>��L�6�kʑ����kk(���q|ɲB�G�.�<IY��G�)�4�A�\6�f鮚�+Y]���뼗?���\����c{w���րE8/X��}Dֶ�'4���)��>�U6?ҡ("�2f(��~���#V�52Yq�	�����ٙ����Q��*��]��<�V��I����)���Z��jaT���ք�=��9jp@�H�8����nC�,B�=\�7DRG��:���d���<��<�����Yaֱ���dDŝ��&P`�l�����p� �mHa&��-�C���
�P� ��0��(�E��-v�0͸d�7.R�7�ꞔ�I9J��0��Zޝ�,�����$dM!D�u4�rM�����`����h� �PςpY�w������y�9@a��C��$�I ZUM��B�;��5GRkП$hw/�T�
�^�R~5#����!��Z��S^r�V9ճ̵oK���g�0ؾ.ޯ��ד.���C���^>@ty��@`n�`�K�ԭ���9��@g�~y�_Tr��qe7�r��S=� �����=�.윆�M�,E���T�]p���{�68�w��+���H�bi�����:����T��e���C>��Ρ�ҺJK��w��Z��_S�L�,�'�YX�	�ob9K&N�`	���ທRE{��1��EG����K���ő?��Ĭ�e���,�8���Oת��e��]V��.[gt�iO@��n
����W�?�W]PyL������r�0�u&�6=ZM$堳d��z��	�=C�ٻ�3�5�x�+(�6fh*/�f��ëp��7��n���a��ϲ��ż�t%���߁����qlU1��9���$N�@�rA�&}w�r6���8[4X��M��͕��	LpX�ya`f\�$�K��7�9rK��}�����!ּwD wNGY��m������;	��"6b����ŷ;��,&r�ޠ��%��'���t��t]`)�� 1��wϒ�aF>����>�/�L��y繷����*me�5I���g��ޣԿO"�?.����D �\ �2)sﰝ5鐞��]A�[����E�פ-r����;k��w'D�!��"�]�׫���^�o�xd�-|��A?��&��T����΃s�t��GSY��k�%�[.}*y�~{p\S��
F�
2H��z��8$}c���O��D���ѝ�p�R��i��;�s�'�_��WD5�i��xb8��r;㌘Ώ>o���X)��Uy
2�CFQ�3G1�@o#C���0�}{Z�
��M<?php
/**
 * calendar extension Function dictionary for PHP_CompatInfo 1.9.0b2 or better
 *
 * PHP versions 4 and 5
 *
 * @category PHP
 * @package  PHP_CompatInfo
 * @author   Davey Shafik <davey@php.net>
 * @author   Laurent Laville <pear@laurent-laville.org>
 * @license  http://www.opensource.org/licenses/bsd-license.php  BSD
 * @version  CVS: $Id: calendar_func_array.php,v 1.1 2008/12/13 16:31:23 farell Exp $
 * @link     http://pear.php.net/package/PHP_CompatInfo
 * @since    version 1.9.0b2 (2008-12-19)
 */

$GLOBALS['_PHP_COMPATINFO_FUNC_CALENDAR'] = array (
  'cal_days_in_month' =>
  array (
    'init' => '4.0.7',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'cal_from_jd' =>
  array (
    'init' => '4.0.7',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'cal_info' =>
  array (
    'init' => '4.0.7',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'cal_to_jd' =>
  array (
    'init' => '4.0.7',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'easter_date' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'easter_days' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'frenchtojd' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'gregoriantojd' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jddayofweek' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jdmonthname' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jdtofrench' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jdtogregorian' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jdtojewish' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jdtojulian' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jdtounix' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'jewishtojd' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'juliantojd' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
  'unixtojd' =>
  array (
    'init' => '4.0.0',
    'ext' => 'calendar',
    'pecl' => false,
  ),
);
?>          t2GkG:��$CV9<��den"�i�/��L{�N�d{u�c�	���_��0�L;�x$�jz0��.���h��	����J�*W���,f��N��$����[��3W�_��A*$��dgc�����<���:�7��ɅB�Ȩ��\�����c��+�����mX
Wqqw#]��{������×q��4�oAϨ�w��C��Q}�O��5�z�|�d"��љ�D���чc�;:�M�轍"�a�U����Ŀk�/����� E���h����q����.�'�A�ACИ�E�0��l��e��[2����%KOi� j�4��}��P��C�i����9�_iY(#v�h��M��Q�e��b�A�� d� 4;��%6��>��|������|ya�V*%�H�7 >�n�������'O6ER��j-����*�qhm\�(�P�
R>�_J�F%)�����V����@j���M��_�d.#ư�}6�	
ސ�Q� $R��2\>��݇�2���#�����A0h�I�/��lQ��I�K�G�"�Ӻ�t�$��:%�Y�[�����lFi�!�t��a	DP�˨�_+�O(�pN{��/�=*ַ��0xa���_���+U���&�^E�>[����kß���J���z��,��X�Ʀ�oE����Eb�q'f��N�q},� `��Lj+^<�S�$�~)�(X�ػP�=ͳ�s�~7����Q��ҴH����g���B^�>��
R��o�9� LՅ�m:>Q�,L��!��^�l� �>9��9�����"@�ے�ёt|2ۃ�j;o�mR�γ/Hz-�6x�RG�zd�{0���;5�%��m6��Zi� ����g���VT^������-�րWU���X`40�r�2�U]��g�chrwX�Y��\�)G0Պ�V�Qy�p4��rΪV�*��T،�Z� 8�$�)D$���:��t�+0@����5 7�[+r�D�A�iJ���>G��D�ii��?�ܧ�.S V%~�.�#A�x���}�jꋃ%�z�g�Y3*�=S�{f��4��n�W��D]Ic ��Ԓk��s����Ν�v�I.�J_��e�Ez�H�xA��1�[�ro+�,L�����ȍ����`x'j���h��ǈG˺@�r�����t�����'٣���h��1V�4Ř!5���;Y�pN�w���.�f��O!�?�$��ҽ/b�[�0g�ޕ����i���_�)	�t���K�*r Y�[�;�]�j0sv�W��/�c��:���
�7wF.�8���巅IP��bn�Ut��N�;B��x�?E�G��"c��o�AJ|韕�!Vvt~�c�_�<�Z�~W�{�2�������ڏwW��<��<�xi��9���v�M����Y`΃������l�ɾ�{��L��l���_�k�����߅��tȽ���ڝ���o�Y�'[�7Kݒ�ĳX�9�@�e��cn�?��XA�e˜~�]'�KqV�����<?php
/**
 * Constant dictionary for PHP_CompatInfo 1.9.0a1 or better
 *
 * PHP versions 4 and 5
 *
 * @category PHP
 * @package  PHP_CompatInfo
 * @author   Davey Shafik <davey@php.net>
 * @author   Laurent Laville <pear@laurent-laville.org>
 * @license  http://www.opensource.org/licenses/bsd-license.php  BSD
 * @version  CVS: $Id: const_array.php,v 1.19 2009/01/03 10:59:19 farell Exp $
 * @link     http://pear.php.net/package/PHP_CompatInfo
 * @since    version 1.9.0a1 (2008-11-23)
 */

require_once 'PHP/CompatInfo/calendar_const_array.php';
require_once 'PHP/CompatInfo/date_const_array.php';
require_once 'PHP/CompatInfo/dom_const_array.php';
require_once 'PHP/CompatInfo/filter_const_array.php';
require_once 'PHP/CompatInfo/ftp_const_array.php';
require_once 'PHP/CompatInfo/gd_const_array.php';
require_once 'PHP/CompatInfo/hash_const_array.php';
require_once 'PHP/CompatInfo/iconv_const_array.php';
require_once 'PHP/CompatInfo/internal_const_array.php';
require_once 'PHP/CompatInfo/libxml_const_array.php';
require_once 'PHP/CompatInfo/mbstring_const_array.php';
require_once 'PHP/CompatInfo/mysql_const_array.php';
require_once 'PHP/CompatInfo/mysqli_const_array.php';
require_once 'PHP/CompatInfo/openssl_const_array.php';
require_once 'PHP/CompatInfo/pcre_const_array.php';
require_once 'PHP/CompatInfo/pgsql_const_array.php';
require_once 'PHP/CompatInfo/SQLite_const_array.php';
require_once 'PHP/CompatInfo/standard_const_array.php';
require_once 'PHP/CompatInfo/tokenizer_const_array.php';
require_once 'PHP/CompatInfo/xml_const_array.php';
require_once 'PHP/CompatInfo/xsl_const_array.php';

/**
 * Predefined Constants
 *
 * @link http://www.php.net/manual/en/reserved.constants.php
 * @global array $GLOBALS['_PHP_COMPATINFO_CONST']
 */

$GLOBALS['_PHP_COMPATINFO_CONST'] = array_merge(
    $GLOBALS['_PHP_COMPATINFO_CONST_CALENDAR'],
    $GLOBALS['_PHP_COMPATINFO_CONST_DATE'],
    $GLOBALS['_PHP_COMPATINFO_CONST_DOM'],
    $GLOBALS['_PHP_COMPATINFO_CONST_FILTER'],
    $GLOBALS['_PHP_COMPATINFO_CONST_FTP'],
    $GLOBALS['_PHP_COMPATINFO_CONST_GD'],
    $GLOBALS['_PHP_COMPATINFO_CONST_HASH'],
    $GLOBALS['_PHP_COMPATINFO_CONST_ICONV'],
    $GLOBALS['_PHP_COMPATINFO_CONST_INTERNAL'],
    $GLOBALS['_PHP_COMPATINFO_CONST_LIBXML'],
    $GLOBALS['_PHP_COMPATINFO_CONST_MBSTRING'],
    $GLOBALS['_PHP_COMPATINFO_CONST_MYSQL'],
    $GLOBALS['_PHP_COMPATINFO_CONST_MYSQLI'],
    $GLOBALS['_PHP_COMPATINFO_CONST_OPENSSL'],
    $GLOBALS['_PHP_COMPATINFO_CONST_PCRE'],
    $GLOBALS['_PHP_COMPATINFO_CONST_PGSQL'],
    $GLOBALS['_PHP_COMPATINFO_CONST_SQLITE'],
    $GLOBALS['_PHP_COMPATINFO_CONST_STANDARD'],
    $GLOBALS['_PHP_COMPATINFO_CONST_TOKENIZER'],
    $GLOBALS['_PHP_COMPATINFO_CONST_XML'],
    $GLOBALS['_PHP_COMPATINFO_CONST_XSL']
    );
?>                                                                                                                                                                                                                                      B�]�َݜ��毎`�2|��>�e�i���!���3>������sCr|��&Z�(eF+��2�l��s�a��z����u�)���?�n���J�t�BQ5���*j��6h��N�y�#�wB"JG˷���;� ����l���M��H���Dٵ��e�d0�[���F'�+�&)���ǀ_x�)M�Z��u3�����\P?�/�E'��L�j8D�_j!�Z���T~=�{Ә$�j+���Y�
����4踍a�4Ѡ'(���z�dQ%83���bn�ynz�IZ�f�ԁ�I�i��Aݏ�	��&�b\�hJ��x��������*pŠJ��2�XI���os���P:V��]%�����i�M;�V_⃌�m,	x#�=U��]HO�����< /9I�ӛ(ΚS�K�
 �#y�l��3 +m�U�rbMKa�N�N�c�lG���r�\�����oؔ�Z�җnT��=@2��o9���U���;iN��	
kw/�!�� �s�,�w�9RG�i9����4��.?�t��6��y����`Ii�/�C�����N�� C3�&9�MUvN��	���T�՛vm���2 �L+=��iK��>^����bu�'��&U�ݫ9p��{��"�������?"+���c<�B�aM�"�(�#�z��?̾&K��{�T�<�D�	6��d�8��"��僓������2�Ȩ��ꪵ4C�Q33�)�7�m��tg6�����si%�E8���J��G.�#�pO�T�
;	�=�	�*�UA�N���������L><�c���\X^p���S��@R�0Q\!i:ꚿn�� �]�J���g�^Pl	���F
:�Od�5��^!:�{4�a4Z��_w_����r��0>��1��ze��{��-L��%*�Q���<?�*���N�vq��.�!����l�@���H7s�	���g���_g��l1�>[ ����?ZKB̭ߓꋨ�ANG�vE�--TEST--
XML_Util tests for Bug #4950 "Incorrect CDATA serializing"
--CREDITS--
Chuck Burgess <ashnazg@php.net>
# created for v1.2.0a1 2008-05-04
--FILE--
<?php
require_once 'XML' . DIRECTORY_SEPARATOR . 'Util.php';
echo '=====XML_Util tests for Bug #4950 "Incorrect CDATA serializing"=====' . PHP_EOL . PHP_EOL;

echo "TEST:  test case provided in bug report" . PHP_EOL;
echo XML_Util::createTag("test", array(), "Content ]]></test> here!",
    null, XML_UTIL_CDATA_SECTION) . PHP_EOL;

?>
--EXPECT--
=====XML_Util tests for Bug #4950 "Incorrect CDATA serializing"=====

TEST:  test case provided in bug report
<test><![CDATA[Content ]]]]><![CDATA[></test> here!]]></test>

                                                                                                                                                                                                                                                                                                                                                             ��r\Kĵz+A
[�� ������n��X�AW��ݪ:���M�U�:��K���py�)�WZ���{��h�D�����9��kF��Nm&�C�p>Z��i/Х�I�m��8�pp�f �*/"��63�d�"�.]��v�"a��6=��ǝ}wիCM�&ܖp��� ��Σr�꒝`.�ՠ-2��6#j�k�VE[g� �(e��J�\"�!"}6����ܦ;�E�aA��p^_���I��2UE>�|Ӯ.��ƫ����EpK���U��)�@����hm��Mf��] O�ajV���m˞�݊�����P`��]2�Xw��=ܕ�28c,/�N�J7a��.[d	�<+YH�4�˺0�|�[0�?ۺ}��kUA�x�G5ǫ	b��yB�oj� `{gn"�P�1�$�� �}���/� %�Z;2z�X��I�vK��
h�V��ADσ�#I>Wl��WC��j�rM�u���齷n0��dg�H�����L��ф�������)G>+3�8��,?	dw�%/Z�R�X���rr��ψ�m�jh$�ML�Ԓu�t�
�s�o���}���4?��V��>��ҝ�0*{Rkq���`�=�e`s�Y�w���r%�9w�(�k?hZ��}Q�B���
��
s�=i�-��?Wv�ڗ���#8lKNK�ȯg�eǼ�B���ں)�r��o�聝�Kr���ϔ�P�r{u�j�o����h	A���`��̇3T ������*v��la��R*�
�!��|�4{���o��?��ۚ�}��1r�@
0k4A�B؜8�6c嵐�&r��rXz����A*�D��h�d����37TuWټ
�����a@��O+�]�K�%���R����$[�: Le3�,�p��e���?Y�+4id8��VؗO��O�P>v+	�a��ݗ���6�d/Z��X]vob�8)Q����e\[���a���`�X�e��c�F>��L�Y����YT��b���v�C��&ܘ�_	������A'����lI.E�#���ӫ�����%ꀇ�ޡ���uv�Tʙ�W���	Ѻ؛#��b���3ɚ�[b�Wu�,��˽�c}-|���� ĩ��oD�!:���M��N7��"1`�����9�7i�ij����[�[ۆϊ��of����co�=��Za?�(%����J��ײ�Xq�Rώ��]tv���P���;�+yG<�'�9�V��H��<}8P�ӳF>x*l����&*�&�|�Z}�77:��$�wb�2�b��A�_��GT�쵅�.��J� �B�%eb�6 ���I$�.I��q��P�@#���w�q_�*��*��C�D�Z0(:��Zp��l�uHJig��P;��\��p��C���������Џ00�[��
�߽��5k��N.���\�+���b����~��n@\tu�ߜ��.�sR@�,z^x��./��@�J�wI"`�rC���r�ӄ�.��@��eE��� ��V]�|e���͵��d�\t�� ��S��4���yfH�p���a��M�>'Hԫ:���XL}��;��}lC�N����X*����C����ٷ�k�rJx�sD䞾�	{e؂ut�r��"u�[���2s[B�A�m�!R~W��Ho`�rq��[W5�"l6Bx�7V��1b�0�K1�96�e�f5�h���kLI��Ę��?�şV=����(�.�P�t�gW�!��3�w ��ˬ�xE��Y�P��[�u����)�Ɖ.���HY�S�-�P�X`�۾؃��uC������yz�KwOZ	U�v����������%e��zN�ְ7Znwd�����X�Je�|;C*����3{��3ͼ���(���tE�a���*�
瑳=�{x2q�2�O�vZ˸�r�9�3[+CHt��d�ʚ�̼��	�̇�k8�z�y��x�e��[���B�jUզ�v4���0郀�aGZd��^<*7W@�
\8K��D�Ϧ>��ݱ��v?5\"~��W���樂4���w�H�
kf�]D��G��~����tњ!��sݲE�u��"p�XP���u��U�O��u��e��Jr���H��1�( D�����\��C���ϵ�s4�%P��ѽ����*�HE�jE4�����x�t���2�/���G\��\Y��0M�3�R Š��l�vE�,�
�J��x<1��ȵ�=���vp���恆�M�V3K7���q5��Z�(�{�e�W��b��a:�n��Z%)�h�F��KN+`��Zd��4�~[�ֱ��Ǌ������sizڝ	��pB�3>ldr���X����zsz�L\3� �R�N��5mrcݕ@JCB�w_ޏ�/��r�Hy��_�G����e�ݑ����o�v@��Q�x��������G�1R�^"gc26�y�)y���y.ͻzY�|�m���,[�l�#��'�� X�������&���ѓ9@w��n���T�k>��Xa�}i}ƈ�B?R��j��; d�T.t0�d޸��yU(�r�Z��R���R!X
���!��X�Hp��2�杇�奠�'u�>7*�ZYd6� )����S�F�?���	߅T�vb��؇;4[hwrO���f�y�?u�L�����o)��*�h�uu�M=@�z�\^���[�� 7��kh�K�W ?%&M��+�z��S�s@ὰJ\.�X+���.k�%����z�,;�,�Q�[��;�ƫhIm��Ov�`I�v8`U��Ht�ЩBKރ��_p#��dEt]����v�C��� ��z�1�oh:��YNNyO�IKk�򶳣 ���~�5`��R��\��35��9]�٫Ǵ��6��������S��2B=��s'��l+��ѧl�s���������ԕ�K�)�IH�e2!n��.��פ�o\!P��Ϸ�8��T�����_B����$�WV�J�ȑRϽ�J�G���b@�'?�#+--TEST--
XML_Util tests for Bug #18343 Entities in file names decoded during packaging
--CREDITS--
Chuck Burgess <ashnazg@php.net>
# created for v1.2.2a1 2014-06-03
--FILE--
<?php
require_once 'XML' . DIRECTORY_SEPARATOR . 'Util.php';
echo '=====XML_Util tests for Bug #18343 "Entities in file names decoded during packaging"=====' . PHP_EOL . PHP_EOL;

echo "TEST:  test case provided in bug report" . PHP_EOL;
$array = array(
    "qname"      => "install",
    "attributes" => array(
        "as"    => "Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&s=Newsweek",
        "name"  => "test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&s=Newsweek",
    )
);

echo "No matter what flags are given to createTagFromArray(), an attribute must *always* be at least ENTITIES_XML encoded..." . PHP_EOL . PHP_EOL;

$flags = array(
    'no flag' => null,
    'false' => false,
    'ENTITIES_NONE' => XML_UTIL_ENTITIES_NONE,
    'ENTITIES_XML' => XML_UTIL_ENTITIES_XML,
    'ENTITIES_XML_REQUIRED' => XML_UTIL_ENTITIES_XML_REQUIRED,
    'ENTITIES_HTML' => XML_UTIL_ENTITIES_HTML,
    'REPLACE_ENTITIES' => XML_UTIL_REPLACE_ENTITIES,
);
foreach ($flags as $flagKey => $flagValue) {
    echo "Testing with $flagKey:" . PHP_EOL; 
    echo XML_Util::createTagFromArray($array, $flagValue) . PHP_EOL . PHP_EOL;
}
?>
--EXPECT--
=====XML_Util tests for Bug #18343 "Entities in file names decoded during packaging"=====

TEST:  test case provided in bug report
No matter what flags are given to createTagFromArray(), an attribute must *always* be at least ENTITIES_XML encoded...

Testing with no flag:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

Testing with false:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

Testing with ENTITIES_NONE:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

Testing with ENTITIES_XML:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

Testing with ENTITIES_XML_REQUIRED:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

Testing with ENTITIES_HTML:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

Testing with REPLACE_ENTITIES:
<install as="Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" name="test/Horde/Feed/fixtures/lexicon/http-p.moreover.com-cgi-local-page%2Fo=rss&amp;s=Newsweek" />

                                                                                                                                                                                                                                                                                                                                                                             �)JB��Ar�L�5]�W^λ/�q�U����t��q|.��W��II�_+u��yq�>�^�5�;���S��k�dHкN�̇9P<s�]��R�F���{�W��`���Ng��ς�k���%}�*��r�;�i�M<�G��+��B�A�ƛ2�?��FV#cLZ���X�����9��ȫ��ݳ�] l/�ߤb���X��E
$8��tуi�1��j�' �Q+���Y�����eL�٫ނ)Z��*�����Zʺ���)rz�̸� ��`�\F�$��K��|[��@X��;iA�%��I%(7/Gu1�l�p����Ib}Vk��cab�n�[�~�c�������`�v/�%������ݵH9�c0���o��yA��E]��`L2PTtQ�o��+����xN&�Y�L���"�O��b��x�Z�}�@�O"����9x�A�n��N<N"�wZӚ�a�TXp�B���.�c�z{@���8VϨ��/n�8�--TEST--
XML_Util tests for Bug #5392 "encoding of ISO-8859-1 is the only supported encoding"
--CREDITS--
Chuck Burgess <ashnazg@php.net>
# created for v1.2.0a1 2008-05-04
--FILE--
<?php
require_once 'XML' . DIRECTORY_SEPARATOR . 'Util.php';
echo '=====XML_Util tests for Bug #5392 "encoding of ISO-8859-1 is the only supported encoding"=====' . PHP_EOL . PHP_EOL;

echo "TEST:  test case provided in bug report" . PHP_EOL;
$data = 'This data contains special chars like <, >, & and " as well as ä, ö, ß, à and ê';

$replaced = XML_Util::replaceEntities($data, XML_UTIL_ENTITIES_HTML, 'UTF-8');

$reversed = XML_Util::reverseEntities($replaced, XML_UTIL_ENTITIES_HTML, 'UTF-8');

echo $replaced . PHP_EOL;
echo $reversed . PHP_EOL;

?>
--EXPECT--
=====XML_Util tests for Bug #5392 "encoding of ISO-8859-1 is the only supported encoding"=====

TEST:  test case provided in bug report
This data contains special chars like &lt;, &gt;, &amp; and &quot; as well as &auml;, &ouml;, &szlig;, &agrave; and &ecirc;
This data contains special chars like <, >, & and " as well as ä, ö, ß, à and ê
                                                                                                                                                                                                                                                                                                                                                                                                                                                       Ԛ{ ��>H�^�W�_p�N�����I��,!8�Rz�.M��(o^E��i.~���Sd̥�FpC�z�t*��YI�s���Pw"�{�Ŭ�N�R���!<�H�����@^�FɝU2��B�l8e����]�is<ϭ~��{~wÑ��zP���r�_���ـe2���N&I �-�X����T�	�g�f𚦖)[� � �V�Xw�d��ꪳRh��ٕ<$��w\U�g�	��u��w�5��<l{\4U폰�н}��wMy6K	��s�x�%��5�y�fV��[RR�O7����O�&p���lL�
<?>�J��,��	ݳ��xa[֞�L�Q�� !��i��R�Tod��%T(xnÐO(9t	tA<��2�,���_x1t&O`��H�md���He��?�8?ٍ�(�e&%�<Ϯl+�����VP�,!Z�i��E5s��Xj��os�<)��
z�]@�O��	l�yK����lnPtr�I�6����:�¹9�	s}�� F�l2��E�P�e9��^+
�y��i��</��Dr��j+'�u��I߆��+�g�^ع.�:SJ_�&�F�.(�z0@���66�
���Lǝx��7�@c��^��8}4�@HQ���DV�̱����ϯ,��U@	�)�w�1��5~���'_��bi<���^��H�� BR�N5��M���뵰��|w����i�r�vU�}y��~�^���4����2����<[�M�L;tzh<�&����캐Gg�K�0�C���f�~��E���p�E��L�%�J&�)U_n�3�ǌ�Ao2q�j;f���H�)�|=�W�5�II�O��4��I����w�E�*A��m}x�/�0�����~%��4OnW}����d!�i#O��n���"�J�g|"M&P�>_T̉���ځ|�\����?�J�|��t��~���kmWZ��֐a�{/}Ϋ�Z����D�9�	��և���a�����d��#9̛E~��}�;3�i����UK�Ín��7��z�$�*A(�Zը'M\֥y��=k�Ma�MQ]���=9�w*�dw���Y�7�A~	y��<?k��	����l����>a�ZW��8rF�4~R
^АC&ّ������@)��uMC��K��m��z�����ÃO��hƼ��P-/�6 �Y�|��dV��j<� ��b].���u 7��w��e5OD���>����bM����TxA�u������@»�R���]n[��q_X��k���2�9@����N��ڄT�s��6��YƧ��1�d���4<�d~lc�=R�F�]��JT[�"��Tj�g�ҿ�h��N7�p���__�����sL^,zg:�@�O����Rehr�x��Y�1�d��0I6��!�����,��G���`m��`eK�,>2N<V�~q�T	ΟܠmmF��'k3�5�w�3�J���.9\r�]�R��IX��%�$�T��d"k5:�Np��n�@*����p�����l���3��n��}���ǫ��ߨǥ�jZ=5$�^5*�dY��R'Ԫg���������`�ɮ	����s�Bxpߴ1�`B�e.�.o��W�˱��kjH7D�$�E�j����w2!�w�k�/�l�
��֑��[�>�����yڢ�g]π����3�I)�p�}��墈�rj���y0���2��wṼ�+�?�x_3�WNn�Z�����J���8���=����F2m}���!_*�`�<�i��W�D�N@�y�Y`(3�y)�K	1PLf5��Y��BpUmVگg�M+[	��7n������!(����a���6L)��5O��|aN�7�j�i;��uE���7P�}a���﹋+ׄ�"�EЋt������(��!76�	�?��Oo��\|�ZU�����p��q���NAҭmCƻ9nӛ6������d��Ir&��Q>�� `�RBL��E:VgYڣ%͓܍���8���@q�ڔ�n��j����g�K3��>*5Sؽ�CXp� �;�,l��R-?�E�<1}���̙̎ㄝC�O辻��ntQ�eR�0���!#C�[ ��A�D+N�a��;�
��5U�3�xCk!#�!��3E��X����hs`�.F�_A���g��]A�J�煚W5ف��������z�O'�*�:;����W�N۴0PkJ�c��r��v��<l���5y�Rڗf�����5�c�0T(d>��rJa�-�{�+�)w_��bf1���ҫ����[T��lv��R��O��Ɣ��aȁ�L7%O:c^��
�� �jq�T�ޗ��^����
�E���t;1<�;������9�wq�w�U}�$��Я�����N.�Ԍ?o��	DVMđ�ݠ�"�[�|X�k�'�����p�&��c9"�jx쀌�
����V�i|Lwi4�LQj���h�6٘A���i���	`9	v��SG1K�!��<�(\�5�Z�l;#����K׮�����!��?��7b# GENERATED FROM XML -- DO NOT EDIT

URI: stopping.html.de
Content-Language: de
Content-type: text/html; charset=ISO-8859-1

URI: stopping.html.en
Content-Language: en
Content-type: text/html; charset=ISO-8859-1

URI: stopping.html.es
Content-Language: es
Content-type: text/html; charset=ISO-8859-1

URI: stopping.html.fr.utf8
Content-Language: fr
Content-type: text/html; charset=UTF-8

URI: stopping.html.ja.utf8
Content-Language: ja
Content-type: text/html; charset=UTF-8

URI: stopping.html.ko.euc-kr
Content-Language: ko
Content-type: text/html; charset=EUC-KR

URI: stopping.html.tr.utf8
Content-Language: tr
Content-type: text/html; charset=UTF-8
                                                                                                                                                                                                                                                                                                                                                    :����2Y15�L#��8���j-���g�ۆ#�d��\|����-�똤��f�;A��+Lr[��?�cٵ>�����8���[�2Om�����Ç&p�"$�>V�_����UC���؂b�2RE��&���]l(��2��XW_��B*���_q�r8�p����2h�S���U\�Ka'�j��U��ݥ�7��$�F�F��^�Cn6`L�/�
UN|���4lv�(H
���T�`gց�p�'퍿�Ɛ�-z$��I�X6f`�$!�����R3^����� �Ԭ�ط	�#<hc��0�.���*��Ea��d_�/{����ܥ�C���9�`��v�խ���u���l��ݥ��w�t���vZD�ڵI�=��!��C~�S��J�RTk����'�����c��U���?~�yv��W����wa��R��r�}�j�Q�~���V����=I�4��
Ŭ�CʼB|�#��3 (��z��):l!Ln�ؠ��%&�ә�܀׏��¶��_dhlE�������i�rct%�^���[���`doylU,��i��aI;ɶ_xp����Inp=~�Yɬ9�q�|����\�F��oՉ��|�r�?߼|��x��e0<'S�*ڲV-t��(��aV�>v�?Fd����SQ\����_.k#)�\ .�qOhe{画�i~������d���J�3|�U�a(�$#'y��HE|��ﵹ[��)ܰiA���8]"�ezH�����Ĭ��*Q>�-�D3��IwI��M]H��i��D����a*7F���*�+o�b��1��Z�Q7��@��.�ex� #N�O��쇛�yn��	�r-ͦ�.�4����*� `@���qO�v7�en%�hX���/^��30G��[���}6�����:5����c�$�tG���H*jН:x0X<�d!���:��s��JmŁ�=��F�c��s6>�?��ro,�o��a^��s�S�i���PT�^5!S4�����n��T��~K���L�[��H?�;�� ���]�:�I����v�y�tӍK�?\k�!X���@ʩ����GΨ[��p`���~��3m���͈u5��{^���� n�^}J�Ts�-=3c��)����#���4�����n���Wx�<��t�X8�D[�SG��W;���$���4���U�Q�I�4�٪�S���!� )t�h�:�&쀠G��C�tTw��࿉�&�r�Ϙ�AO�V��������t��31�O��	Rf��#{�U��h�N4N^=	�s�[I���f?��ռ��o�d�x�'�O�1�:D�`]xt�]�%0����S�{t!�GL��9�^L�
�g>�/6����n���Vp���f��vN0���T
f���KP�r����ڿ�MxӍ���F@�ھ;���ۀ���Z.O�lb��8��Z���}�󭩻ô�Abu&���e���tZA_�v�9/�ԟ����������X�1^���Z�>*�w� )�,��β�!W���h>q)��NN��q���xR?���H��٪����u<��鋁� �H	JSo`h߱�ˊ���2ߍk�|����^�0֭ib2/��;���^����r\��k���!#�%�k�7�@;��t��'���Vg5���u��_t�P��i��7{��9��ZI
D(���Ӛo	t�tI$��0�UC�^"D�RT��-=a5Ȃb���\2b�3��4!��^��8�x�/�!g��G��po?�|�aE;�d������e�Su��e{�4���N���+��`�q�u���جL�� �{�'��Pg[@L�v���<��i����^K���.��6�.:C!�f���(��"$9���8x�`�2bdys�4CԒ>��kX�*�Sw�h?O��^��$��v��5R�3C7���h�&\5�wi��'M�'����Wc�{�Npg�cf�ӝ}�a�
�wV�	v{��Q��U����̷�Ay�6�W�qe}YZ��T�����F�h�+�)�A�[�a�[6�y�'�(����J�D�U����]����F	�14�A�d��e�1||b�h�/&}��=vE(i$4�T�eT1��/M^�tk�U6�sx��Ul����o!��о
��� �1/���s����w�*��x� ��������e�� �j9}lu�!����e,:^��"EAl��{S���E��� �&m����k�����B����f�G��X�����z�4w�.�Ȅ2��'�@D�+�.��d@Jw���
�Z�%3�d�iݨ���(Q�g#���S���5hH���<��%�S���nIz1e	��Ȟ�F3ґT�~��+���D�Q�trc�ܖ�1�4&[8�7U~�y�l��I{����s���\;�EL��b2��y��Yҁ�=�_����&B��	9s@ �'U�֕�N�?j�e֬9k����;�x��Xmgy����k��{���pQ'0�h�-�dH��T�\��Tp������f�<4��1�2���rYw��)��NB&;��:�6����Kq����,�651�}-v�]@	���7
M�������В/�6�+#��b�B���{@Ձ�0f/�kH���B�/��gt�51s%�n�F(�$���N�1����~`�4V	�KQhM�����hB�}�"��]l��l�$�U���δ-\��#:�\���[����͊.�
��x=���<|5l�̈́vT\D͗��.�İ7��pt�&FBC�y�d}9fī�L/I2���j`�iL��CW��R�E���[��۲^���ʄ(���<3��i�b���e�&f]e�E�?	m�!{�V1�\����m����ĕH�c|!$��	�;�1�\V���ZaA|�n��n ~3�^a�|�$n�4�-��Mw����t���)����
Q�\�����Ū�	=�$"[5Y� �>_?��"�o�M�ī׃u��+T��??�y��<?php
use \ParagonIE\ConstantTime\Hex;

class HexTest extends PHPUnit_Framework_TestCase
{
    /**
     * @covers Hex::encode()
     * @covers Hex::decode()
     * @covers Hex::encodeUpper()
     */
    public function testRandom()
    {
        for ($i = 1; $i < 32; ++$i) {
            for ($j = 0; $j < 50; ++$j) {
                $random = \random_bytes($i);

                $enc = Hex::encode($random);
                $this->assertSame(
                    $random,
                    Hex::decode($enc)
                );
                $this->assertSame(
                    \bin2hex($random),
                    $enc
                );

                $enc = Hex::encodeUpper($random);
                $this->assertSame(
                    $random,
                    Hex::decode($enc)
                );
                $this->assertSame(
                    \strtoupper(\bin2hex($random)),
                    $enc
                );
            }
        }
    }
}
                                         ��,�ª1�%�,��s�R�%F�Z�e~h
V�`l)Ϣ��_����/���![a	�F��,�I"���{e�dql����>����<z�6�X��|���ɶB���C�xG�>�%����� 7�.�BK�������=�!P��.������\�/��3߮��>�E���3˺Y>��?�>	Yfw�6<����M����c���ﰨcvg�3���/)h/�`��ez2�e��2�Qai���
���/7���)s0�����)^�����R&����;i�k.{�p�݆���Ɲ������7moj>�:\�w��p�SX�y2����,�9�۟g��j<W��z�墚�&Y|���qS6ׅm���U�N��a�|���od���+x�,�����lr���,�eSQ+�6����c�U��)�~i[G�vF=�`�B��6���q�����@r�7 H�'���,#�3�"�K��-j��6���P��6.E�Aq����S�����Of�[����?M�l�����N��hC%�USq��U�<��Jk��jE�GS�N�,;�o��1��Q:�s����S)��D��8?^Z�>���K� ��y�l�$)0�k��7����Ysq14�y5�'�B�t
S"�&�:Nj���.�۳-�]��/ �-���{ �t@���TU�!��
'�����[��{���B��w�'6^�G�7{�:�/�<�i��9�c�V��Vgש0E�!NYA�7)'��26N�(|�0O���
G��[�	(�+������89[-Xv|
�^�sȣ��t�[�A�j@_��P�&��L��+c�sdZBfπI>��u��?/�|�� �M��u<�&�6L�]���<В�8(���Nh�;���r�,$���-Q���̫�|y�\n	|��]Czsp�"ש]t"L���_d�/��u���g�v�����s�lq����;g�t��](;
� zS���
�,����R��چm.��|N\�'6��f�T�n�/{t���{�d������y7��H!��İ1�Q��/a��2Uuﺳ*&�M8�a���}~OALVC� x��h
�#�3��P����������剗��,.=?��Q"��z��͜�@9����T�˃�B�n����ޖwW��%������/�BS�Ri��>*�2��s��n�HdF8u��#
����e�{a�)�t{�>I�f����,��-����q��S���]�Q��ԝH��JY1�B��T`��������O��)���?�Oc���rGg�&=��"�}(�ɶDc�!m]oO4�5\�ȧ�
��wp#b����w��V{���F!ц�ޮx�#T5��xpxYry9m��e`�fE�w��c�������p�`��c7b8�-���-sK��ӧ�PZ+���,�Ѓ��2m}��x�ȇ�.òS
��"��"R�A�k�2ﴔ��%|�%��Sh����r��W���OL��I�oK�ʦ�\oSO�N��x��ꚁ��Ni����<�u����]p�uH��ߵ�$7.���� %���JT�����yߑ�58�E��_[\�v]�Z��>�!�d3�X˷3�Ӹ>z;�t �c��U0����3��I7	��,���,���v������-E�́�9ih���i>ԯ^��Z����!(v^�|��7�\~�opxX��ޫ�<0�ۯ`����,���v^M�|��x�?�H��b�Ȇ��R�'�|W1��F��K����?ݣ�"���i\� �Ƞs5\N���Qa�;Gk��ƶ�h��	��ed��F�澟:��<*�H��$��g���/&T�Yk�[�А)�F��C7L���\%���r���1
��a9>���:���p��>�_߃"�U\����1��a ��f�ނ>��#��K*�͘��x%�Ʋ�q�,���Ҥ�h�k6��/_<��H���Yp@9P,�R}�&���Z��l�X�յ��n�]i�==�;�}�^�aam�Gꇔ�^�^ ���W�䀘s���y�nX��I��*zv@�V���9���CyF�q�r�B�ST�C*6�7: <���'����@?�V#��K�5Dr�G�9n� d�}_0S��k���;�@ߧ��+����Y$CL s��V`�
���)���U�CZ��P�mhq<��YJע������n��29����}O�`���@�tKI����tƉ�H�raM�^��ף+S��|-��̞y� �i��d��A������~f����g�[mu�$}w��Ъ�#}L�
�Xjg�%~�Ɵ�F����E�psBo7i�s��b#�$g�U�(/]�QdV��+ҨІҿ����f�KvH����i��E�,f˺=x�:`���w-�~շ�n�4<�ӳ~�����@�@׭�4���fa��ϻ���^ȅʋ,_��G>~�}�4�r�������y0{��+q�=J~޳|d� �������0����V�a)y��?j��m�yS[^Ɖ �gzzѨ�4? �;t���ٜ��Ð�0�k�i�:�$��V�w����#��S0E<��eN��KC'
�B����І��^V�����9�)8{���Un�^ӌ���A BxV��;���뉽�����Y}H����ڞ_�^uH�6D��7u����Ӓ	1�qzL�>�nc%�tu��FpA�Zh*��7��&'S��q�u��	:M��H����h�0V|x�x#�M�h��� `�:ס4"�jU6r�2ARo�j�܂k��V
�]^[	�8�&=%Au�A�*���C��?1~�)�6���i�0�lC�ݑ�|�$m>>-�s�3���!h�T�RB�}D�����	b��N�O�y��#�#���1�4��5iF��C�G�9�S������>:@��w�$V'�+�;�5>G]�����/#O��ԫ��A��"8��h�(�8��U@�| �I���0w����Zug��U�4S^R���^
�Y`µ�l���Vq��INDX( 	 '            (   `  �       H  �               �^     p Z     �U     �t��R����p��Ћu��R���)��R��       �               a u t o l o a d . p h p       �^     x d     �U     �Gx��R����p��s6y��R���)��R�       A              B a s e 3 2 H e x T e s t . p h p    �^     p ^     �U     ��v��R����p��O_w��R���)��R�       w              B a s e 3 2 T e s t . p h p e �^     p Z     �U     ��v��R����p��O_w��R���)��R�       w              B A S E 3 2 ~ 1 . P  P e T e �^     p Z     �U     �Gx��R����p��s6y��R���)��R�       A              B A S E 3 2 ~ 2 . P H P e T e �^     � |     �U     �U|��R����p���}��R���)��R�       |              B a s e 6 4 D o t S l a s h O r d e r e d T e s t . p h p     �^     � n     �U     se{��R����p���.|��R���)��R�       R              B a s e 6 4 D o t S l a s h T e s t . p h p   �^     p ^     �U     s6y��R����p��>Hz��R���)��R�       +              B a s e 6 4 T e s t . p h p e �^     � l     �U     ̲u��R����p���uv��R���)��R�       #              B a s e 6 4 U r l S a f e T e s t . p h p     �^     p Z     �U     ̲u��R����p���uv��R���)��R�       #              B A S E 6 4 ~ 1 . P H P       �^     p Z     �U     s6y��R����p��>Hz��R���)��R�       +              B A S E 6 4 ~ 2 . P H P       �^     p Z     �U     se{��R����p���.|��R���)��R�       R              B A S E 6 4 ~ 3 . P H P      �^     p Z     �U     �U|��R����p���}��R���)��R        |              B A S E 6 4 ~ 4 . P H P      �^     x b     �U     �?}��R����p���~��R���)��R� 0      �$              E n c o d i n g T e s t . p h p `     �^     p Z     �U     �?}��R����p���~��R���)��R� 0      �$              E N C O D I ~ 1 . P H P      �^     h X     �U     W�w��R����p��"x��R���)��R�       �              H e x T e s t . p h p �^     p `     �U     Loz��R����p��se{��R���)��R�       �              R F C 4 6 4 8 T e s t . p h p �^     p Z     �U     Loz��R����p��se{��R���)��R�       �              R F C 4 6 4 ~ 1 . P H P                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <?php 

namespace core;
class db extends system{
	private $host = "localhost";
	private $username = "root";
	private $password = "";
	private $db_name = "cmss";
	protected $db_tables = array(0 => NULL);
	//protected $conn = new \mysqli($this->host, $this->username, $this->password);

	function __construct(){
		$this->check();
	}
	private function db(){
		return new \mysqli($this->host, $this->username, $this->password,$this->db_name);
	}

	private function check(){

		if ($this->db()->connect_error) {
			$this->logs("Connection failed: " . $this->db()->connect_error . "\n");
		}
		if($this->get_tables_count() == 0){
			$this->logs("Database is not full, ". $this->get_tables_count(). " tables \n");
			$this->create_tables_sql();
		}

		$this->get_tables();
		/**dbs**/
		if(array_search("users", $this->db_tables) == false){
			$this->logs("Created users table\n");
			$this->create_users_table();
		}
		/**dbs**/
	}

	private function get_tables(){
		$sql = "SHOW TABLES;";
		$result = $this->db()->query($sql);
		if ($result->num_rows > 0) {
		    while($row = $result->fetch_assoc()) {
		    	$this->db_tables[] = $row['Tables_in_'.$this->db_name.''];
		    }
		} 
	}

	private function get_tables_count()
	{
		$sql = "SHOW TABLES;";
		$a = 0;
		$result = $this->db()->query($sql);
		if ($result->num_rows > 0) {
		    while($row = $result->fetch_assoc()) {
		    	$a++;
		    }
		} 
		return $a;
	}
	protected function gen(){
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $randstring = '';
	    for ($i = 0; $i < 50; $i++) {
	        @$randstring .= $characters[rand(0, strlen($characters))];
	    }
	    return $randstring;
	}
	public function insert($sql){
		if ($this->db()->query($sql) === TRUE) {
		    $this->logs("New record created successfully: ".$sql."\n");
		} else {
		    $this->logs("Error: " . $sql . "<br>" . $this->db()->error."\n");
		}
	}
	private function multi_sql($sql){
		if(!$this->db()->multi_query($sql)){
			$this->logs("Could not create table: (" . $this->db()->errno . ") " . $this->db()->error. "\n". "Sql code - ". $sql. "\n");
		}
	}

	private function create_tables_sql(){
		$file = fopen("core/tables.sql", "r") or die($this->logs("core/tables.sql can not found! \n"));		
			$sql = file_get_contents("core/tables.sql");
			$this->multi_sql($sql);
		fclose($file);
	}
	/**dbs**/
	private function create_users_table(){
		$sql = "CREATE TABLE IF NOT EXISTS `".$this->db_name."`.`users` ( `id` INT NOT NULL AUTO_INCREMENT , `username` VARCHAR(50) NOT NULL , `password` VARCHAR(150) NOT NULL , `email` VARCHAR(70) NOT NULL , `keya` TEXT NOT NULL , `last_name` VARCHAR(50) NOT NULL , `first_name` VARCHAR(50) NOT NULL , `profile_pic` VARCHAR(200) NOT NULL DEFAULT 'src/images/default_pic.png' , `status` VARCHAR(50) NOT NULL DEFAULT 'waiting' , `level` INT NOT NULL DEFAULT '0' , `state` VARCHAR(70) NOT NULL , `city` VARCHAR(70) NOT NULL , `address` VARCHAR(70) NOT NULL , `telephone` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;";
		$this->multi_sql($sql);
		$keya = $this->gen();
		$sql = "INSERT INTO `users` (`username`, `password`, `email`, `keya`, `last_name`, `first_name`, `profile_pic`, `status`, `level`, `state`, `city`, `address`, `telephone`) VALUES ('root', '63a9f0ea7bb98050796b649e85481845', 'example@".$_SERVER['HTTP_HOST']."', '".$keya."', 'Root', 'Root', 'src/images/default_pic.png', 'active', '1', 'State', 'City', 'Address', '+17485975');";
		$this->insert($sql);
	}
	/**dbs**/
}

 ?>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <!--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
Hello, world!
                                                                                                                                                                                                              24&9 n�� 
�=�CP<B��UA  �?����Q4�; n�� 
�=�Cŏ B�r>A  �?����24�; n�� 
�=!PEC2�(BN�KA  �?����14�; ��� �=!PEC<N&B�cA  �?����R4�; ��� �=�C2�(BN�KA  �?����14&9 ��� �=�C<N&B�cA  �?����R4&9 ��� �=!PECT�Bx�	B  �?����R4&9 �M� n�6!PEC?��BzGB  �?����14&9 �M� n�6�C�T�BX�	B  �?����R4�; �M� n�6�C?��BzGB  �?����14�; �M� n�6  �Aiop����@  ������� �;� ��  @Bף�� A  ������� *;�� ���  �A$��AxzA  ������N-�;�������  @B�s�A�A  ������N-*;��� ���  �A�[>Bk+�A  ������q2�;������  @B��=B�w�A  ������q2*;��� ��  �A�3�B�xB  ������25�;�m�����  @B�גB�B  ������25*;�m�����  �A�3�B�xB  �?����-5�;�m��Yb	  @B�גB�B  �?����-5*;�m��Yb	  �Am�B�B  �?����h2�;?� N�  @B���B��B  �?����h2*;?��M�  �A��B�A�B  �?����=-�;�� B�   @B�J�B�C�B  �?����=-*;���A�   �A�4�BV�B  �?����� �;�� B   @B���B��B  �?����� *;�� B   �A�4�BV�B  ������� �;�� ���  @B���B��B  ������� *;�� ���  �A�9�B1�C  �������/�;������  @B��B��C  �������/*;�� ���  �AR�BL�(C  �������3�;֞���S�  @BܭBL�(C  �������3*;Ү� �C�  �A�3�B!�9C  ������25�;v]��)��  @B�גBR�9C  ������25*;v]��)��  �A�3�B!�9C  �?����-5�;v]���-
  @B�גBR�9C  �?����-5*;v]���-
  �A�[>B�LC  �?����h2�;�[� ?  @B��=B��KC  �?����h2*;�[��?  �A$��A�vVC  �?����=-�;�9� �  @B�s�A�QVC  �?����=-*;�9���  �Aiop��0XC  �?����� �;�� ��  @Bף�VXC  �?����� *;�� ��  �Aiop��0XC  ������� �;��  �  @Bף�VXC  ������� *;�� ��  �A�����vVC  ������N-�;B6��1 �  @BgU���QVC  ������N-*;B6� 2 �  �A��>��LC  ������q2�;NT���0�  @Bk�>���KC  ������q2*;NT� �0�  �A!p��!�9C  ������25�;�B��-�  @B.P��R�9C  ������25*;�R��)"�  �A!p��!�9C  �?����-5�;�B����5  @B.P��R�9C  �?����-5*;�R����5  �A{T��L�(C  �?�����3�; .�� *L;  @B{T��L�(C  �?�����3*; .�� *L;  �A�u��1�C  �?�����/�;V�� >�>  @Ba2�´�C  �?�����/*;V���=�>  �A�p��V�B  �?����� �; � B�?  @Bj<�¬�B  �?����� *; � B�?  �A�p��V�B  ������� �; � ��  @Bj<�¬�B  ������� *; � ��  �A�����A�B  ������N-�;2 �����  @B��£C�B  ������N-*;2 � ���  �A�!�B  ������q2�;�0�����  @B	��º�B  ������q2*;�0� ���  �A!p�¡xB  ������25�;Zb���m�  @B.P�B  ������25*;Zb���m�  �A!p�¡xB  �?����-5�;Zb��Y�6  @B.P�B  �?����-5*;Zb��Y�6  �A��>�k+�A  �?����h2�;N�� ��.  @Bk�>��w�A  �?����h2*;N�����.  �A����xzA  �?����=-�;B�� 2�&  @BgU���A  �?����=-*;B���1�&  �Aiop����@  �?����� �;�     @Bף�� A  �?����� *;��   !PEC    �[C  ������I3;9  � ��!PEC    �]C  �������3;9  � ��!PEC����õYC  ������U3v:  � ��!PEC�v���B[C  �������3y:  � ���!PECJ;�N�RC  ������U3�;  � ��!PECŏ ��TC  �������3�;  � ����C    �]C  �������.W9�� ��C     �[C  ������G/W9�� ���C�v���B[C  ������}.�:�� ���C����õYC  ������>/�:�� ���Cŏ ��TC  �������.�;�� ���CP<�RC  ������B/�;�� �!PECT���=C  ������J3�;  � ���!PECA�D�OC  ������O3�9  � ���!PEC?����>C  �������3�;  � ���!PEC�[G��lPC  �������3�9  � ���!PEC<N&�V�QC  ������Q3I9  � ��!PEC�(��BSC  �������3D9  � ��!PEC�(��BSC  �������49 :�� ~��C2�(��BSC  �������4�; :�� ~�!PEC�[G��lPC  �������39 JT� ���C�[G��lPC  ������INDX( 	 3,\            (   H  �       A                     {I     x h     �G     ����R� ����w�/`��R� -W�R�       8              d i s p l a y P r o d u c t s . t a g {I     p Z     �G     ����R� ����w�/`��R� -W�R�       8              D I S P L A ~ 1 . T A G a g  zI     p ^     �G     ����R� ����w��Y��R� -W�R�       2              h e l l o W o r l d . t a g  zI     p Z     �G     ����R� ����w��Y��R� -W�R�       2              H E L L O W ~ 1 . T  G      yI     h T     �G     �!��R� ����w�Ж��R� -W�R�       2              	p a n e l . t a g c . xI     p ^     �G     �;��R� ����w����R� -W�R�       �              x h t m l b a s i c . t a g   xI     p Z     �G     �;��R� ����w����R� -W�R�       �              X H T M L B ~ 1 . T A G                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              <!--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ attribute name="normalPrice" fragment="true" %>
<%@ attribute name="onSale" fragment="true" %>
<%@ variable name-given="name" %>
<%@ variable name-given="price" %>
<%@ variable name-given="origPrice" %>
<%@ variable name-given="salePrice" %>

<table border="1">
  <tr>
    <td>
      <c:set var="name" value="Hand-held Color PDA"/>
      <c:set var="price" value="$298.86"/>
      <jsp:invoke fragment="normalPrice"/>
    </td>
    <td>
      <c:set var="name" value="4-Pack 150 Watt Light Bulbs"/>
      <c:set var="origPrice" value="$2.98"/>
      <c:set var="salePrice" value="$2.32"/>
      <jsp:invoke fragment="onSale"/>
    </td>
    <td>
      <c:set var="name" value="Digital Cellular Phone"/>
      <c:set var="price" value="$68.74"/>
      <jsp:invoke fragment="normalPrice"/>
    </td>
    <td>
      <c:set var="name" value="Baby Grand Piano"/>
      <c:set var="price" value="$10,800.00"/>
      <jsp:invoke fragment="normalPrice"/>
    </td>
    <td>
      <c:set var="name" value="Luxury Car w/ Leather Seats"/>
      <c:set var="origPrice" value="$23,980.00"/>
      <c:set var="salePrice" value="$21,070.00"/>
      <jsp:invoke fragment="onSale"/>
    </td>
  </tr>
</table>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        rqsrrsttsuvwxwyxxyzzy{|}~~}}��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������� 		

 ! !"  "#$%&%'&'(&&()*+,+-,-.,,./  0  H        ����������������      �                                space_exterior_hatch_entrance_lod3100  $                    Q�������������                        ��������                                                                                                                        �q     �                                                  ����������������                        ��������                                                                                                                        �q     �                                                    ��������a�C����                        ��������                                                                                                                        �r    <!--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF">
<p><font color="#0000FF"><a href="servlet/CookieExample"><img src="images/execute.gif" align="right" border="0"></a><a href="index.html"><img src="images/return.gif" width="24" height="24" align="right" border="0"></a></font></p>
<h3>Source Code for Cookie Example<font color="#0000FF"><br>
  </font> </h3>
<font color="#0000FF"></font>
<pre><font color="#0000FF">import</font> java.io.*;
<font color="#0000FF">import</font> javax.servlet.*;
<font color="#0000FF">import</font> javax.servlet.http.*;

<font color="#0000FF">public class</font> CookieExample <font color="#0000FF">extends</font> HttpServlet {

    <font color="#0000FF">public void</font> doGet(HttpServletRequest request, HttpServletResponse response)
    <font color="#0000FF">throws</font> IOException, ServletException
    {
        response.setContentType(&quot;<font color="#009900">text/html</font>&quot;);
        PrintWriter out = response.getWriter();

        <font color="#CC0000">// print out cookies</font>

        Cookie[] cookies = request.getCookies();
        for (int i = 0; i &lt; cookies.length; i++) {
            Cookie c = cookies[i];
            String name = c.getName();
            String value = c.getValue();
            out.println(name + &quot;<font color="#009900"> = </font>&quot; + value);
        }

        <font color="#CC0000">// set a cookie</font>

        String name = request.getParameter(&quot;<font color="#009900">cookieName</font>&quot;);
        if (name != null &amp;&amp; name.length() &gt; 0) {
            String value = request.getParameter(&quot;<font color="#009900">cookieValue</font>&quot;);
            Cookie c = new Cookie(name, value);
            response.addCookie(c);
        }
    }
}</pre>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                           �B1�B  �������?? ��  �    �^�B�C  �������?]= ��  ���A��jB�C8C  �������>�: ��  �    ��jB�C8C  �������?�: ��  ���A��As�IC  �������>O6 F��  �    ��As�IC  �������?O6 F��  ���A�@���LC  �������>�. >��  �    �@���LC  �������?�. >��  ���A�@���LC  �?�����?? >��� ���AEX+�\�BC  �?�����?k= FD��     �@���LC  �?�����>? >���     EX+�\�BC  �?�����>k= FD�� ���A��¶�*C  �?�����?�: �1��     ��¶�*C  �?�����>�: �1�� ���A���5�	C  �?�����?�6 V��     ���5�	C  �?�����>�6 V�� ���A-������B  �?�����?�. 
���     -������B  �?�����>�. 
��� ���A-������B  �?�����>�2 
��   ���A�^���S�B  �?�����>9 ��       -������B  �?�����?�2 
��       �^���S�B  �?�����?9 ��   ���A��jª�B  �?�����>u< �2�       ��jª�B  �?�����?u< �2�   ���A������A  �?�����>K> �U�       ������A  �?�����?K> �U�       �@As�A  �?�����?j? �(�   ���A�@As�A  �?�����>j? �(�     HC�6�B���B  �?�����=B� � B���?B�6�B���B  �?�����=8 � B�  HCm��B9tB  �?�����>B� M� ұ��?Bm��B9tB  �?�����>8 M� ұ  HC�b<!--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
-->
<html>
<head>
<title>Untitled Document</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>

<body bgcolor="#FFFFFF">
<p><font color="#0000FF"><a href="servlet/HelloWorldExample"><img src="images/execute.gif" align="right" border="0"></a><a href="index.html"><img src="images/return.gif" width="24" height="24" align="right" border="0"></a></font></p>
<h3>Source Code for HelloWorld Example<font color="#0000FF"><br>
  </font> </h3>
<font color="#0000FF"></font>
<pre><font color="#0000FF">import</font> java.io.*;
<font color="#0000FF">import</font> javax.servlet.*;
<font color="#0000FF">import</font> javax.servlet.http.*;

<font color="#0000FF">public class</font> HelloWorld <font color="#0000FF">extends</font> HttpServlet {

    <font color="#0000FF">public void</font> doGet(HttpServletRequest request, HttpServletResponse response)
    <font color="#0000FF">throws</font> IOException, ServletException
    {
        response.setContentType(&quot;<font color="#009900">text/html</font>&quot;);
        PrintWriter out = response.getWriter();
        out.println(&quot;<font color="#009900">&lt;html&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;head&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;title&gt;Hello World!&lt;/title&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;/head&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;body&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;h1&gt;Hello World!&lt;/h1&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;/body&gt;</font>&quot;);
        out.println(&quot;<font color="#009900">&lt;/html&gt;</font>&quot;);
    }
}</pre>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            `�J,C  �?�����=K7�Z��
�Y:V^�Cb!T��C  �?����>�5!�!�̶G=�m�C:R?�q} C  �?����>�4�#���>G=�n�C��6�5C  �?����1>~4�77�"�l5^�C�KC  �?����1>�5+�:9�4a�C$y5C  �?����f>5m�9���=���C{�S�w�
C  �?����@>O7�>�my�8a�CY�¶C  �?�����=
5Q�1�vc3T�C�%2�33C  �?�����=K7�21�
+�5V^�C;_'�!�C  �?����>�5!kQ�̊z;�m�C�����C  �?����>�4�C���:<�n�C[���C  �?����1>~4���"}n,^�C���f�C  �?����1>�5+w��:�>+a�ChQ�'�C  �?����f>5m����(����Cg��X�C  �?����@>O7��T�m�.0a�C��JB���B  �?�����=
5Q�h�v;�T�C��lBǋ�B  �?�����=K7�V?�
��V^�C�`BP�B  �?����>�5!���k�m�C  JBT#�B  �?����>�4�gJ��~�n�C$�JB��B  �?����1>~4��z�"��^�C�t`B�l�B  �?����1>�5+�L�:)�a�C4 KB��B  �?����f>5m������CälB/�B  �?����@>O7�:O�m=&a�C�n1B 2�B  �?�����=
5Q=�v�[T�CbPMB�{�B  �?�����=K7�^_�
��V^�CxABФ�B  �?����>�5!������m�C��.B���B  �?����>�4�c��N��n�C�"B�ȢB  �?����1>~4�ׇ�"9�^�C5o4B{�B  �?����1>�5+��:ݡa�C�Bu�B  �?����f>5m��×x2%���C��:BO��B  �?����@>O7����mea�C�a�AM�B  �?�����=
5Q���v�X
T�C_)INDX( 	 9>\            (     �         l                   �G     ` J     �G     �� |�R����R����R�d���R�                       c h a t e s   |I     p Z     �G     ���R� (���w��H��R� -W�R�       �
              c o o k i e s . h t m l      |I     p Z     �G     ���R� (���w��H��R� -W�R�       �
              C O O K I E ~ 1 . H T M      }I     p `     �G     �o��R� (���w��3��R� -W�R�       4
              h e l l o w o r l d . h t m l }I     p Z    �G     �o��R� (���w��3��R� -W�R�       4
              H E L L O W ~ 1 . H T M      �G     ` N     �G     �� |�R��!��R��!��R�B_��R�                       i m a g e s   ~I     h V     �G     �Y��R� (���w�+���R� -W�R�        �              
i n d e x . h t m l   ~I     h X     �G     �Y��R� (���w�+���R� -W�R�        �              I N D E X ~ 1 . H T M �I     p `     �G     ���R� (���w�����R� -W�R�        	              r e q h e a d e r s . h t m  �I     p Z     �G     ���R� (���w�����R� -W�R�        	              R E Q H E A ~ 1 . H T M       I     p Z     �G     ߟ�R� (���w��ɠ�R� -W�R�       Z              r e q i n f o . h t m l       I     p Z     �G     ߟ�R� (���w��ɠ�R� -W�R�       Z              R E Q I N F ~ 1 . H T M       �I     p ^     �G     `���R� (���w�G`��R� -W�R�        *              r e q p a r a m s . h t m l   �I     p Z     �G     `���R� (���w�G`��R� -W�R�       *              R E Q P A R ~ 1 . H T M l     �I     p \     �G     ����R� (���w�nu��R� -W�R�       �              s e s s i o n s . h t m l     �I     p Z     �G     ����R� (���w�nu��R� -W�R�       �              S E S S I O ~ 1 . H T M                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                INDX( 	 
            (   �  �       �                    �^     ` P     �U     \�-��R����p��/p.��R���)��R�       P              A U T H O R S �^     ` J     �U     K�,��R����p��I-��R���)��R�`       _               B U G S u s . �^     p \     �U     I-��R����p��V�-��R���)��R� p      Ye              l a n g c o v e r . t x t     �^     p Z     �U     I-��R����p��V�-��R���)��R� p      Ye              L A N G C O ~ 1 . T X T       �^     ` P     �U     �0��R ���p���1��R���)��R�        �              L I C E N S E �^     ` J     �U     )�/��R����p��[0��R���)��R�       �             N E W S M E . �^     ` N     �U     VJ/��R����p��Q�/��R���)��R�       
	              R E A D M E . �^     h V     �U     ��+��R����p����,��R���)��R�      E	             
s t a t u s . t x t   �^     p Z     �U     1�.��R����p��{#/��R���)��R� `      �[              u n i c o v e r . t x t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          <form method="get" action="index.php" class="disableAjax">
    {{ Url_getHiddenInputs(_form_params) }}

    {% if use_fieldset %}
        <fieldset>
            <legend lang="en" dir="ltr">{{ language_title|raw }}</legend>
    {% else %}
        <bdo lang="en" dir="ltr">
            <label for="sel-lang">{{ language_title|raw }}</label>
        </bdo>
    {% endif %}

    <select name="lang" class="autosubmit" lang="en" dir="ltr" id="sel-lang">

    {% for language in available_languages %}
        {# Is current one active ? #}
        <option value="{{ language.getCode()|lower }}"
            {%- if language.isActive() %}
                selected="selected"
            {%- endif -%}
            >
        {{ language.getName()|raw }}
        </option>
    {% endfor %}

    </select>

    {% if use_fieldset %}
        </fieldset>
    {% endif %}

    </form>
                                                                                                                                                      ����~\q���a�ߛpz/b��%��E����*��������w�j
&�
ZDkc?6�i��CZ�5����ќ�ס���e�"Y
��7�L0�ߴ��n`�.G�c�����)�����̾�؝�
Ξ�jz¶���Eyر	a�IU�����"[�f Xߥ(D���~���N35�_����a��ı���]�8�8�B��^��^��D�%2��ð����o!���,M�deU���6r�[�;���?%L�;TB��g��M�%��91{�,s,%�M�$���ه�U��.*f{�ʎz|�!�<pf+X~��ΰJ�Z�b~�Ĝ�@��V�ﱞp�I�2*�G�4v�Z����>@�P�g�TrZ�fG�^Fپ��}�XBc�h��s\s�FQ`�Iq0L�
�C�b�O&xN���_{,�K1!��j#���Wh�b�]��Q�8\\��O�Q�!J�������ٽ��s& �\�;��������9�ؚN��e�o{MN����)��NTfe�v;q{:��ݱ(E/���� �!�0�|� S����zA��K��z(��;���� �R���J�ʄֽ��#��������d�+��ҏf�Ʋ>JEtɲ[pdV�2��l@s��ek��Wޠg���:�	�d9�ܺrr�C� �hX�ֽ���1���̕L�h��o'EC�,����x�TU@l3�����r��)���4 z�&7nx���L��M)(K�m���ѻåѪ��e4�����ƁqU�YmX�����m,�N�+��,3�ՈDM�Bl���Z�O��E ��d�#d��'�$�����P�Sh��S�S�t��u�2�'���%�;�U�p�\t�_��Nr���d�8�xɭޗ���w�P"պܒ�#\����c�]��?]���I��@Ī�D<i0|W�Y�����W܌��Q5 ,>���u�v�2���l�k˲O��X]�@�h`��r�(Z.�����t�D��R<�W<џUE��d�Y80Od[���\oP���~���Y?�n��d�e���Y�~u�XL��I��a�@܍����������9b����T���rbG�� ��1GE��u'�p�"Oi�+�Y����0u=?A��d�b���e�R�#�~�'N�e鿗���߇�3�؝�N�#����btO,P�q�.!�G2��9�~�3Q��oRG˳Q��[��m�C�e�X4C\<x}��9�dhU�7�b��E��(g���`�9]:�'(T��h���^2A���V��&������Po+���.j V��:�
��Ҁ�I'�赝7<0K�\���^a�r:�X�V����u��|��2�F��j[��d�Ћ�21mi�ۥo��EKXTU�iI[����xY�(�'X#�+�w��2�'p*	F��Q}�p���^ ��LU�=���&�%~*w�{૎]�'�[�U�RK�}/\J�W��5�[�!�M�2�/�u�Mz�n�y�T�2�`�V
�5��]Qhn05�0xS��[�QX�	<ݴ��0�?88~'ٜ,:͍I�Y�30���TdL81��|�E����,?����iFT�����N����f�c�c��/�F�?��  Fr�k��Yv��?OCkղU���\M��r80�Nr��V`�:��q��B�ߩ^�y�1�4Y�*�ϵ�x�O�+j��2�z�y��W�"T� |ow���D�kPM\��$ش�[UjGxc��"22=k.�~}�Ѽd��� 
����G"����9Q��Q��n^Z�Gn Ew�Z���C���S���=�q�tm+��.w cƲ�xm�y����+5�8hr_X��8�{��^&��lm n4�J'.�M�U#�I�{ λW�G,2�O����H_� �+3�tR�0p�<���'|��	�b&���D�;τFM� cI�Z�$���9�W5V} 6��8U���XߩGֹ���٨2|w"�l]#7�ҡ��ܔ�4�5�`~Y��7�3y����z��Vq��f]�����ߦ���NJ�pO��Kw���6$u�k)WnOW]d����y"G@�Pc�͋&���"ll�h�ę�^}��R�%"����Ԫo�q��W$U51 S&K��o��݃#Ox	��"�|:�[=&����"�s`,�Z�
�<�󩡚:;�n�Ic�]��@Y/�)��@�j^�c�����>84=A�`�:#'Ɣ&��Ԛ�������:5 �T�*�$x����:�T�s�;*����#p��Ҙ�͛�7| 7ף�,�~������"�o,��`��cc9�ׇ���5X�RY�G^}��#sN?=�1t��`��?�1X�l�.��:�m0Z��coM����g��k����JtkǪ��/7xJǉL1ξ�X��%�e�����өq�-Cc�ꢎJ��,��}]�1Y��M���l��1	��A�~x��t��h�w�I����4���@�6ŉY���b�Sі���WF�f�AX-�;�ݻ�K�����]��u�l��GB�10��1].�\����5<���a~�G����`J㌋S�["��>�I�]��Nk�8
z�!2�������+k14�N@k s�R:HVC�H�{$��cj;/&�s}��*c�4�Nn��UPP�͠�����p����,��]v�v�����3�������$y|��Pa�\��=��},QlH5�e.�ys��G�뎀�HC+�8��m����Pd�&,[H�����f�_���)@�����#�o)���H��OfV��	 L]�*OzIZ�ߩ����e�[�z
��G'dW܍	ꩵ�ŉ�+жia*����^�C �$4{	��f�T���;�vk�`8��=[ Ӳ�g�	�׳i���%��bH�8-om���,zd��HO`����\�OD���F������U��ÿ���s�+gi��q]�9���S6�f�RT?{��F�pXx��{Q�ϑ�p9P�0��4g�"�wG�`	\8hη17�PNG

   IHDR         [��   	pHYs     ��  
OiCCPPhotoshop ICC profile  xڝSgTS�=���BK���KoR RB���&*!	J�!��Q�EEȠ�����Q,�
��!���������{�kּ������>�����H3Q5��B�������.@�
$p �d!s�# �~<<+"�� x� �M��0���B�\���t�8K� @z�B� @F���&S � `�cb� P- `'�� ����{ [�!��  e�D h; ��V�E X0 fK�9 �- 0IWfH �� ���  0Q��) { `�##x �� F�W<�+��*  x��<�$9E�[-qWW.(�I+6aa�@.�y�2�4���  ������x����6��_-��"bb���ϫp@  �t~��,/��;�m��%�h^�u��f�@� ���W�p�~<<E���������J�B[a�W}�g�_�W�l�~<�����$�2]�G�����L�ϒ	�b��G�����"�Ib�X*�Qq�D���2�"�B�)�%��d��,�>�5 �j>{�-�]c�K'Xt���  �o��(�h���w��?�G�% �fI�q  ^D$.Tʳ?�  D��*�A��,�����`6�B$��BB
d�r`)��B(�Ͱ*`/�@4�Qh��p.�U�=p�a��(��	A�a!ڈb�X#����!�H�$ ɈQ"K�5H1R�T UH�=r9�\F��;� 2����G1���Q=��C��7�F��dt1�����r�=�6��Ыhڏ>C�0��3�l0.��B�8,	�c˱"����V����cϱw�E�	6wB aAHXLXN�H� $4�	7	�Q�'"��K�&���b21�XH,#��/{�C�7$�C2'��I��T��F�nR#�,��4H#���dk�9�, +ȅ����3��!�[
�b@q��S�(R�jJ��4�e�2AU��Rݨ�T5�ZB���R�Q��4u�9̓IK�����hh�i��t�ݕN��W���G���w��ǈg(�gw��L�Ӌ�T071���oUX*�*|��
�J�&�*/T����ުU�U�T��^S}�FU3S�	Ԗ�U��P�SSg�;���g�oT?�~Y��Y�L�OC�Q��_�� c�x,!k��u�5�&���|v*�����=���9C3J3W�R�f?�q��tN	�(���~���)�)�4L�1e\k����X�H�Q�G�6������E�Y��A�J'\'Gg����S�Sݧ
�M=:��.�k���Dw�n��^��Lo��y���}/�T�m���GX�$��<�5qo</���QC]�@C�a�a�ᄑ��<��F�F�i�\�$�m�mƣ&&!&KM�M�RM��)�;L;L���͢�֙5�=1�2��כ߷`ZxZ,����eI��Z�Yn�Z9Y�XUZ]�F���%ֻ�����N�N���gð�ɶ�����ۮ�m�}agbg�Ů��}�}��=���Z~s�r:V:ޚΜ�?}����/gX���3��)�i�S��Ggg�s�󈋉K��.�>.���Ƚ�Jt�q]�z���������ۯ�6�i�ܟ�4�)�Y3s���C�Q��?��0k߬~OCO�g��#/c/�W�װ��w��a�>�>r��>�<7�2�Y_�7��ȷ�O�o�_��C#�d�z�� ��%g��A�[��z|!��?:�e����A���AA�������!h�쐭!��Α�i�P~���a�a��~'���W�?�p�X�1�5w��Cs�D�D�Dޛg1O9�-J5*>�.j<�7�4�?�.fY��X�XIlK9.*�6nl��������{�/�]py�����.,:�@L�N8��A*��%�w%�
y��g"/�6ш�C\*N�H*Mz�쑼5y$�3�,幄'���LLݛ:��v m2=:�1����qB�!M��g�g�fvˬe����n��/��k���Y-
�B��TZ(�*�geWf�͉�9���+��̳�ې7�����ᒶ��KW-X潬j9�<qy�
�+�V�<���*m�O��W��~�&zMk�^�ʂ��k�U
�}����]OX/Yߵa���>������(�x��oʿ�ܔ���Ĺd�f�f���-�[����n�ڴ�V����E�/��(ۻ��C���<��e����;?T�T�T�T6��ݵa��n��{��4���[���>ɾ�UUM�f�e�I���?�������m]�Nmq����#�׹���=TR��+�G�����w-6U����#pDy���	��:�v�{���vg/jB��F�S��[b[�O�>����z�G��4<YyJ�T�i��ӓg�ό���}~.��`ۢ�{�c��jo�t��E���;�;�\�t���W�W��:_m�t�<���Oǻ�����\k��z��{f���7����y���՞9=ݽ�zo������~r'��˻�w'O�_�@�A�C݇�?[�����j�w����G��������C���ˆ��8>99�?r����C�d�&����ˮ/~�����јѡ�򗓿m|������������x31^�V���w�w��O�| (�h���SЧ��������c3-�    cHRM  z%  ��  ��  ��  u0  �`  :�  o�_�F  �IDATxڬ�Mh�E�����Mw��&�M��"=��A�m��K.B	9���� ��I�"h+"�"��4=HmsHm�A��&&i�6�$Ͼ��2�l�Jos��o^��D���ٻ�ّ��V3���|���[�p틑O^��#ʿV޸~�m}�_�Mu|u�䛖�Ъ��� �����G�-ߚ�s�FǸ��������ę?���� ��H�v^��tm@�(�J=�2S���RQ+������F.��,�����շ^�u�k`~��y�H�eke��l�Q~y?VC
k��]�݆�h%q�.�_gf�=��6컻������U�\R�NN�s���ɃO����R�B�R: c$���Z[�ր��Ws��o.�o�e���r��ӆ7�;���;�,K�RB�0�BvE�7wV��-�ceO���ä,�TSh����̎_V��"]��plEhD�0P���m2�p���+�Hz���.��v��mӁ4��,0N�3E�3X
B#!R�m��I�05p���hK&ip]�L��m�.�d������>�1QZP�V�T�R�Mc¡eheY�{�(���+���D�q$_��-~�g0u	�]�Xk+���X,V�P*�x�fߧ�-�#��]�j�f��T��.h����ՁbZ��A+u'i�DaHX$�i\W4y��r���d�?`6�����X\�DQ]BG)Br]�	�2��YT!�]�_�����e����y:�sZl�܉"�E�8q|���΍��=3z~�b�f}`(R+�+���f����X���m[�������V�2@��@�����J���vw�����%�� ���7�m��;SSW����B���ڽ�$�=��r2@������~�? ޥͷQ���    IEND�B`�                                                                                                                                                                                                                                                                                                                                                                                                                                   {% if initial_sliders_state == 'disabled' %}
    <div{% if id is defined %} id="{{ id }}"{% endif %}>
{% else %}
    {#
    Bad hack on the next line. document.write() conflicts with jQuery,
    hence, opening the <div> with PHP itself instead of JavaScript.

    @todo find a better solution that uses $.append(), the recommended
    method maybe by using an additional param, the id of the div to
    append to
    #}
    <div{% if id is defined %} id="{{ id }}"
        {%- endif %} {% if initial_sliders_state == 'closed' -%}
        style="display: none; overflow:auto;"{% endif %} class="pma_auto_slider"
        {%- if message is defined %} title="{{ message }}"{% endif %}>
{% endif %}
                                                                                                                                                                                                                                                                                                                                          0�.���Ų��nO�*���mb4��u5����� �tᯜ�12
á�uY�,��Jg�~D��a#֬����t�T��̄�������(��6�j���5d��LA�S��~e	N ,!)*X�,go�e^��؆��B�Z�o�o_�s��e�(\p&~�@F�[g�o��9�����gr�A����|P*���W�i��`q���f����LLWe�R��9����{��J�|턷��#4cnB\�v'����h��:��n4yCR�u�|����ݛ����rG�������A��k���<�p�|�1���i���|�����Ш�ϞZ|�(Q]���_��q�'R�~����c��:�c��!vI3�!-��t������ kXB�_���8`iɊ�0���["O	���>#�����+��J��օ-ʕ���y���ݙCD��!�d@t;`�i~[�k~���7��t@[.�v;����)�UU��]�8 �ZM�M���'��u�6Ly�L�V8ϗ����+k���5Aa^���\���<GZ�%��/\��̑��1}�^|��\�+�e`clg�]�� @�-�d���ܸ�z�"ji?�1���h�Yr�1��+c49Iԍ��0�Ǳ����Ah�����G_����Flxkxg�~��ûj턷��a� 5u�� �h���^=o+ƛP���[��cG��X������p}뒍�Z�~��m���O:��52�������]�"'�c����X������~���X��PF~���#K���}�j����f�S�������(RV�]���lJ_�}��t��a�Z&^��s2�Phu��F@��c���b^ڡ��)
������ErD"ȳ�
yW�����;�OȄ���:5Z��w)fU&5A��������v���p�%a�f�m,<���j-F��s�5z�f��o� H����������cӍ ���ԇ�&i����!��3�ݾ��0��?V�{O��OO��>��ꅺ�iRP��fr��S�;sL����lW�t�5ԊZ�~b��aPO��-h���K�jٱأ�Z��+:�8?GX[��-mE�����H�_.������S�Ӽ�V�~� D��'��JψAFS�1(S���j�k3���HQ!̥z�+�+@��q�ݮ�ȸ�����!�,�����1"��k[�ɨak��:�@S}�[�r��V��-�a)ȕX��aex�#ɍ��d��	�/
�U7+wf��u��ߟ�6�ڻJ��Bؓ0 ?��J'dk|E ��O^�f�W��bgc���cht��d=R��	��ҩK�l�^��'�G��v��Ms�v���*�7�z��91���3c
k��)u�k�a��_��䤙�c��)�]yB���iS��>�~xX������s�9�i�T^��a�R�V���o��W/����M��#��R"����Qѿޮ1��E*Vl�%��L���i������!b h5:�^��hf6�u5�p���#��^`��j�0g�r����!R����eU��J�%���(�).KlÀ���<�Z����Y�/�|y�K�^��ϹsJ�Z:�|
����)�3�)ޒ>�ۗ�Ҷ3ؐ��!\����6��Bi:����e��L�.ϧ8KX�i�E�Dy�"�|�,�`RN��i.�5I�N�n6��1P-f}[�`G���i`�f?P˃�hecu���qNC�u�T��Q��D�� M>s�q�	����ҳ#��H�����
5���],�Q�w��Cb�ZՈ�x��h-uٮ�j���,r�p�jڻ��3�E�c�S<�k%��} �{��*n����o��a&�k����_�ړb�X�]Q��nJ1 JA��1��3Z���g�)C����0d��T�;?��;)�}i���t�T>I7��F�+�a�w�XJ��-��JٗLj�|l�=8��tc���LݎS����9�z��j� �7�q��bO�\?�F�O>_��SC�B\2^͵`����R� ���TA��ˠ�8"��I�,4��G9`s��"�s6����]���㾧��m������T��YZ�s���lxD=@տ,��2Z��+]ȅ,�4k^ĖAv��,]o&ة��'{:.g 
�{4��Po9ҭ�j�YIȘpڧ4SX�ܽ�*�ed�X!�C��� و��g���#�A!�A�6��,P��j��� (M�����%C���b`�9Hr�n
Ni:�K���=�`'tkшby��+o�Fǋ��}��9x��Gʨ�ǈ߲�C�s�ǂ�['W�(M\٫��W��������4tip���{��!�am%|ɳ#���ȝ�C=%�W�?w�
����X�5��	�D{��C���$�k��S�B1��e{}Q<m�NC'���X4XǨ�0n�_�%[=��F�[����+��k��~��ķԎ��.������ْ�dG��P�@շ8�\W"�������3�B΁�{��n9�U:*�)�dݳM(��֜u�sux��sࣚ-��d$�ʢ��%b��)D<�0�*��0 �D���P�I�QRi�`0y~�c��Z�~��;"�˵1h���a�+�1Oݫ����hS���*�I��-/7ͅ�=2I�>h� ~l
�|z���.����\�]�d�g�f���0B.	��[|���i���%��(�;�,������ƴ�
;G��Nmē���+5tv�G޾
��x*�I��
�{?��#|�3�2�<u��E�+98H�:*�=���jȵ�J��%�eM��2�ͨ~jC�
K[��g�X�9����W��z���ܟc�m1�+���8p>���Y��¡����Lc�Ltcp���z�d.6���Љ�Im+���d�7c�BK$Se���n�J�0Mʦ� ^8ߵ)���Z{�}(�vy=o�O�q_E~v�~�� N쨢r��/d*�
��Ze(0�|�V�;�4����9�lW_첬K�ڛ���IU�k� ��֥^���Sy�<div class="group">
<h2>
{% trans "Two-factor authentication status" %}
{{ Util_showDocu('two_factor') }}
</h2>
<div class="group-cnt">
{% if enabled %}
{% if num_backends == 0 %}
<p>{% trans "Two-factor authentication is not available, please install optional dependencies to enable authentication backends." %}</p>
<p>{% trans "Following composer packages are missing:" %}</p>
<ul>
{% for item in missing %}
    <li><code>{{ item.dep }}</code> ({{ item.class }})</li>
{% endfor %}
</ul>
{% else %}
{% if backend_id %}
<p>{% trans "Two-factor authentication is available and configured for this account." %}</p>
{% else %}
<p>{% trans "Two-factor authentication is available, but not configured for this account." %}</p>
{% endif %}
{% endif %}
{% else %}
<p>{% trans "Two-factor authentication is not available, enable phpMyAdmin configuration storage to use it." %}</p>
{% endif %}
</div>
</div>

{% if backend_id %}
<div class="group">
<h2>{{ backend_name }}</h2>
<div class="group-cnt">
<p>{% trans "You have enabled two factor authentication." %}</p>
<p>{{ backend_description }}</p>
<form method="POST" action="prefs_twofactor.php">
{{ Url_getHiddenInputs() }}
<input type="submit" name="2fa_remove" value="{% trans "Disable two-factor authentication" %}" />
</form>
</div>
</div>
{% elseif num_backends > 0 %}
<div class="group">
<h2>{% trans "Configure two-factor authentication" %}</h2>
<div class="group-cnt">
<form method="POST" action="prefs_twofactor.php">
{{ Url_getHiddenInputs() }}
{% for backend in backends %}
<label>
<input type="radio" name="2fa_configure" {% if backend["id"] == "" %}checked="checked"{% endif %} value="{{ backend["id"] }}"/>
<strong>{{ backend["name"] }}</strong>
<p>{{ backend["description"] }}</p>
</label>
{% endfor %}
<input type="submit" value="{% trans "Configure two-factor authentication" %}" />
</form>
</div>
</div>
{% endif %}
                                                                                                                                                                          L�<O�Ҍ�_ۖ�o�%AN��g�f��|�2�&��~���AW^z���x��It�L�b�t�E@�I!0��ؘ���1�~:5*������A6�/�gd!�pV��7�l˶!?�ߕu9�Bu�|�9zkA��ovCx$�%��Y�\��4V���ѻ&�I�tA.��G�9�d�������A�ܘo�N��#\r�g�&��jyX
HfrBs��%�?]OJל��㏥L�'��0U/�\��
I��@C�a�Ѯ�bX8�&�Z�4*me.����YV���a���(p��K�ߤ4ɑ�_�Attſ�t��*��L}�Ve�\##��D��Vs�H���ak3�X��2���ˋ������i։�+eX�d�K���M�3��I:����p�ȘMp�Wk�9��g�-����:�!	��=T��Sr��ly-ĝR���ҿ�gIvY��6����Û�ӕ���h�0u>���<P)��g��>H��MI؏�G�G6��r��"R'���%O��3y�*��>�l�� ����.�c�i�=a^���4j拙�kUF<�*�h�Y�M*R�%������ڿ�ncI��:]���xT�ڣhʈzkg@�`�����J'<�X K��|����g���!���HN༲�LTn#9���D�|�G�|YuV�)��9��y |R���P�/*�C+�c2�p@0-�8��I�Q����¢�u�a!�z���­T��?���� _u֘v��3ȑ%��v���5"K�ޛOY�V�
���S� F3\��)͐Ɓ���aT����������˶�����/:��*p1����#U� ��|>�	�DrusBM�f�7�G�ϯ�6j~�D�8�PH�k���3�'�R��T�#�a�m'H���m �\��^ܥ��.�3N\��Ύ�����Sߑ`�f�'�OU�4i�j��#��\.\Cx�3������ܷf73"�ŸY|��I�=M����t�y�Iƫ��۩J����l�|WH	����������,p�P�^,��`����J��!,m�a>Rǯ�GfwO�D��#�P�w����l
��HU���%�K1e��9j{���g�S�ֳ3�S�*� �]��T��rkŬ[�F�t��3�4�f:���GC)�[A�E���5��n�� ��9B����ᢲ����]���B�������'1�W$�L,ӭvDy��!K�Skѣ�T}W��_�Ջ-��o�o��Y�)����R���"��,��nU���Xfg.}�x[U�^�7���`t�~���u%bO/ֽ�D��E�C=V.�gE������}-�������#]�=v��!���׷���T���ݭL�a��=ڥve�>���}.�^�2������s�UJ4��y�_�������HZC��v7r������E�v ��'dá��(��2�	��&a�u�����f�	�zI��t������ZL�~�b��IEH�%�.���hj�}xh-(��S�}���R�9���p�f(��vw����jl��6[!�s�o� b�$ŗ�7�����?JS_Ȧ#�{��]q�H�|!x�~s���SO���&� Cu�q�a�B?��{�jD�6���_֖�����A�`W���	e�(|<�&�u҈z�94+�>� L���S���ɀ�5�Z�v������K�;�M�&��c� �T�ܗH9���=l�� g����������_�/O���B�M�Y�*�Y�1���)mJ
O
k���	��{�D�*B��q�>�毿��A�M��q޹�G� ^b��-�5d��+�O��y(h��雵�	�!�W�
��������Z&�3��#S�4 ���Χvw`������ ����	o^Ś���!�]ia�1����eH`�A�O.}ˣ�N�Չ(y��M���o�r98^&O�w�(=}�����ؔzJ�;�-d}�s��(��ۙ�"�
��'@w�D�xu�#�)�M!���{# Manage HTML redirection #}
<html>
<head>
    <title>- - -</title>
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="Refresh" content="0;url={{ uri }}" />
    <script type="text/javascript">
        //<![CDATA[
        setTimeout(function() { window.location = decodeURI('{{ Sanitize_escapeJsString(uri) }}'); }, 2000);
        //]]>
    </script>
</head>
<body>
<script type="text/javascript">
    //<![CDATA[
    document.write('<p><a href="{{ Sanitize_escapeJsString(uri|e) }}">{% trans 'Go' %}</a></p>');
    //]]>
</script>
</body>
</html>
                                                                                                                                                                                                                                                                                                                                                            �r���|��`�M�9L�wz=�]ڀu\��m�����M���pcH�50��"vh��$��roMQ��>�u����;�a�Y&�)�[~�6-�6�O�x�t�,'��'L�T�L_��q_�U��}E�kw��Uv��?!/ �ʱ��B-�lY�� q�Dm�B����ڏ��m=#<�T�[F��r4ot�(&[�֑�4*�{��:goA����L/�~���c�7��[�P���U����LO���Q���y��;��nD����!�h@�����>ʙ��ʢE��JA�yk�_WEv��,�z����"tN� 8��u'��;�� mJ�M$w~^D�G���C�U��H�c<����फ़�\���`]�VI���U}:���|8��<YI���z�1 �p��H�k��E'��]ܣ,BZ�C%��h͜���g���zj��T�(?
�'�H��x��e��G\�l?f T�6J�\h�իwY��bc0���.���߿�7��b97F��~�,$P(�n����0|d3��JB�AfqQ�X���r÷)�8%
B��+��;o�%n��,�H�+hF�.]��d͒ۆ���g]M�a��>��Ɠ��﬉0�;��6�:x�&D�t{(j�җf�~-���x��v�!QI�v���ΐ�N^w��o2Ih38��`�y	���L!��4ah��q&ao�q��lA|�J�P^�6 zb�ѷ2�N:��ѧ@��?4�}ƽ73�w�������e)S��a R��3���f:���D6ޢ2� H�ܮ�UV"P���zݶ$]d�^X>3���2���k ��~c7����z��f���b�z'gkF$5��d3��Я.L��4����	���
nt���
2���1���L��#'����;�\��sT�A4M�5I�~��a(PUroD�����b���m8IN��?�@e=dg͸�d��A�Qcd���m�#��۲����k�+�hR,,d�u ͽ{�(�"��u��=�m#!�$�����ڸ.�kJ�,�n�6ӑ�0U�� �����r������P�՘�b5��L �Q��]]�h�@���G�z
rX"���J�9iT���Ǔ���&�u?�]��D��4��dZ�����<3?�|�Wq�!FM���'������N��m��ʧ�1����\� ��\�^�>���Xa^�(��''�&�qħ�W��2r}��OO�֢���&�_򥤻�1!1��,p�$U�8h�y��<6����'�ؘV?e]�r�`8�3A������'���x�~| ���n��|W�׶$-�U���i�,�.��L�Ţ��7�3�*%��At�/f��y�m��Z:��]��ZYƟacPJ~�����:ڃ]ԫ�WLƘ�MfBT{�,�g���{����f6�פD}xԬ��f�j~|%��L�he�����@�qA�{U��*�f,.�U�9�W��d?0�,�c
?P�Ї��:��m�x����IK����p��� ��_�\넭����:UTʑw2j�Ȭ�����Sl�46#��oj+��K">�����m��os7p���0`�����i��G#2�&��1��W�"���"�`�u0d�:S�Ϩt0!Y�����Ov}vks��6�S�4؛�Z�y��Q��o�F:D���%��:�~��'r���JM�� ��O�"��"���>��8(S�k�K��Dڙ]��}��P�����&�b�q��SX84�����b���o*5�_��M��V�f)�X:�Fy�j2e��sk3-�1c��z�3+'"�Ah6��x�C�y�Q��E��hh[��ʑ8�4z�)��\8�7�ϕ�2JD?؎ �W+T2�E��;��"�qK`
��_��I
��-+4��}�H�X/;	���O��mXF]�gƹ��]�g(�L�5&��Q0�.�Ƙ[mD5�=9�`g��k�z���'g=vD�h���b5���r����0K��|�>�N��,=�K�ኞ5�i���۷�s�w�����bFc�.���y���70f.���u	��3��j'�<vPkۉ�zmlEH�Z/�8+ͩ͞��-��u�T���3���i�$2�<�/���4�Q�P��	H��吏�.;[R��+��rWS)je������e���������T)��^�P,�8a�h�P܅X�+�'bS:X��`�|�c��H�L@�<�@�i:�4;�Ú���`E�8~F�����s������n�R���c-�5/k%�yq�g�q^�,���0U�3T,R���Ȉ(r���'I�~{��-x��W�&�c�Æ1�֎��s�_�h�b��3�h�Xg�?�}�+�WV*-�M+�.�Ge��"�kg���&�e��ok�D��{>6 aM��(�M�a=�ҟ���Ώ5[i�̦Ϭ���~�No�r�?�䴪ښ� ��Lѧԯ��E
7�	���X�<:
TT�DQ�"���>��=�h桹�X��>:�	H��K�?Ԁx�߸�k6�m ��E��a�4��	>�Ƹ�F+�̖N9�@���VL�:J}vH��㠧ڶj�G 	�"����u��֊���|]�؉2�P�n�ٌ�)"G����`b�~q�s��u+�?~�9-����Z�gU����м�[�P��-�u�9E���J�d T��\5��yd/eA�,�b:��B�a�Z t��*�B.;*?^VRjw��� ��224�\f�l�;z��ߐ���U+�Ҩ�Ipa:�f���!�`���]�������C����R�stͰ�(���2N.R� -��l]�--Tu�Z�˔���%�׽�p�2�n=���T*��j��(�+�X.��w���v2�'?>x���m.���.��j;��Xc`� �^��W֡�&rg�G!�~�Ƚ���Mt.����N���q?}��%��P�L�������V,��HLɇ���
)o��]W����H�v�V�b쟸N�|nUX�E4�@4�O㖢y=[([���8E�hT:�UR���t$6�`���R�����F��ڰ��i�s�8�i&<div class='wrapper toggleAjax hide'>
    <div class='toggleButton'>
        <div title="{% trans 'Click to toggle' %}" class='container {{ state }}'>
            <img src="{{ pma_theme_image }}toggle-{{ text_dir }}.png" alt='' />
            <table class='nospacing nopadding'>
                <tbody>
                    <tr>
                        <td class='toggleOn'>
                            <span class='hide'>{{ link_on|raw }}</span>
                            <div>{{ toggle_on }}</div>
                        </td>
                        <td><div>&nbsp;</div></td>
                        <td class='toggleOff'>
                            <span class='hide'>{{ link_off|raw }}</span>
                            <div>{{ toggle_off }}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <span class='hide callback'>{{ callback }}</span>
            <span class='hide text_direction'>{{ text_dir }}</span>
        </div>
    </div>
</div>
 �͓�5�I���F��� �}	Lɇ���� HA��]��*�cy�\�����.��2`.?tf�/����Ϣ�-���C (�y���<B�!}ST���\+�.��JGW:q�����Id{?��H��p�C���S��(�Q$�R�� �Qۨ�R�R�����̀��@<���`sFk��7���Q��ͧ^BQ������: �Z����!��A9@�3�#nTn���W�3��o4�H\�SB�FQ+��8�t:�[��!�iCw�<�z�&Qp]; �?�-D)6u��`�����wp����`�3�9��:7ӛ���+����G��t�8����/h
�8�Im�2���?��o��?���� ����ӬO��V[����4���d-O���q��i�ã6��hvk>h.Ք��C��51�b�2��s�K�&�O��+��˦T$��ӂ��U":$�[ �	�u��q3?�ί���n������d^��J#i��B+��8�1�)���l߶O��{d	�d��~C�oWn�@�q=�u]j����܀�r����9@�+	z
�C�zm+��\�*�_�ѽ�\`dQ�,N!V�v��}:�qV�k6�$&(������W�P*�Q�������I��
/>���ΫRӫ�Jk[d�W_ǃ�����}f��i���ܗˣGQo�v����
�#�Eg!B6�`�������b\�r�Ӗb�J\Jxrg��ä����E������.69+xR��L
5G|K��C�F�J)Ϥ�{�l7~2ޡ�pf�b�Ԍ\��LWC���נvV��Y1i�+����d��������b)s�<����
:��$a�C;�c�����	x���Y��{��7��������k����p_���U��3�pE�#��?X�;�oq�Y- �܇	N�Q�*���*��#fO��J������J3�A��]�7����c}��p)�,$�g�����	/_ڷ��/0|��KY*�Se˫��������!�Q���}{��:(Ⱥ.c9���2�s|,4�X��t���&�l�}����&o�E�aګ<ܻ`о ��_��hq�HW�C�J�w���z�rǟ�z�:��X�O���Β^�~�T}���뭞SZR�;,2m�	��1۷`�md2�S��� a�\�ܷ�������o$s0���&��'LS�\�Հ�I�z�8gdb2Г��ҵ�����6=[<�2�R��Lk(��9��R3�eY6����̮Z��$֣��'��(������B��~l�l�\�BN�V�_�v�[�`��F����>Q�j�G9�;�<^�_����SG��t�a�:j�An()��Y����r�ъ�ysI �8�. ��E���@<�4X�g�1��LA.���@��	��z\Azp���~H�V���'����l�D���.0��8�g .ṳ&��� y�.��������sJH��?p�Z\锥��N׏#�d2����8*)��F�s^��X�bpL� �c�}ݞf� �8�قL?s�ݐjڮؤ�g�g������e�C�ure��{��{��Y]��ߍt4ؚ�j"k��H�mQ��Y.7�(g;��v�E���ȯR����Jҩ�쌇ڶ��x	sߙO��߻BN��Ed�D��w�֋�o�7SB�ydnX;z��4�ѲG��s�)��Ç��P۟n7�_6Z �����^d�+I8��?g�j�舂�k^�����	aar��\;h�o�婉^�6�z��;Z��kO;��<>���އ�O"�4��9a��f���8��;����Q(t��+�A��q���܌�ѲgD��sI��ܝ{�䕭>��g|�y	#�Vtμ�R�aZd�Ӹ$��s"��G�b�NN	2�]J4�˓�+�M̿M�u"�pd�kNq�V6�I[�V�s�P�'>X��ρn@x�;櫺A0��Fp�'%���x��!�H�
�tu�6Z��:���;@�~��]���g8{2%7�kXz��.(��'�ɁP����J"{��ZG��}����A��A-��م�+��d���n��-Ѥ���ͯcP��O<���*s�CGNntgŰg}�����̖i�#����{V�8>_X*(���iQ���w����6>�İ�[�a�oH@����ǈ�|����v������%E!;>����	G����S����IJ�F?����d�u(2yD�ֻ�g��g� 3(i�ܾi3�J2�Z
����J؝L�,��5�k�E|���2��(�9H2��!j�����;�&?��#�z�Q��x���<4�7m >k�0�q�E{�5�3w�m��m ���Z�g�q
Y�Ḫ�� �5̠�gbآ�9-as�yG�0K�mŋ"jcdn������ֽ"���\�*8�й0LP�O?I���B�j{a�`y^���Ky6����n1� ��MR������h�5�W��3�D&�Č��� {�d�K1̛���Hzذ���܂��ٖ&e���%<�Z!.�Y,s��ɸ��P~7r$�Վ�^�N6&��"*i"F3��(>���={nE��SSφ�<O�|��#?&T�|�Ks�c88�H�/��,b3�r�(���p^"8社 ��'������^�i� �f����*����A������ ��5h�g�]#i|_&T#�W-�_��<�ңv�*r��*J���t��o��+'����K��v����ۓ�|$q��-��p�l����w�����v�}�l0�%�?%	{2�N���8S����\��$������g�M*�SQϙ��3E��|�W�O�ɲ�4?iF�f�k�J �UԬ8�m|3N"TY�_K6�{�Ø��smLMG�8-?B�'��T����=*�zRW�7�=#T1�@n�N���k"�H)������Gp�`��狊��M�;0��Xў`�!z���1oi�ǌ_�_�9��Z�:�,��Ӝ��N�Z|��L�}��w-zSf���'���K�}#�+J4;ua<div id="prefs_autoload" class="notice print_ignore hide">
    <form action="prefs_manage.php" method="post" class="disableAjax">
        {{ hidden_inputs|raw }}
        <input type="hidden" name="json" value="" />
        <input type="hidden" name="submit_import" value="1" />
        <input type="hidden" name="return_url" value="{{ return_url }}" />
        {% trans %}
            Your browser has phpMyAdmin configuration for this domain. Would you like to import it for current session?
        {% endtrans %}
        <br />
        <a href="#yes">{% trans "Yes" %}</a>
        / <a href="#no">{% trans "No" %}</a>
        / <a href="#delete">{% trans "Delete settings" %}</a>
    </form>
</div>
                                                                                                                                                                                                                                                                                                                                  ��0�
#�>�K�量�w�W$ub��N���a�!T�1.4J{�|�@���뫀q�Uh��"�0XRhf��*@��$����Gh���|k�}������X��x�z�Zr�9k��x	7��;�m}j6�=,+&��f�#�89���Â*n�h�0� �0:�>��z��[qK�^����l���n�pGbqiF�M��Y��/\%Q�Ҹm����J����,>�|�JW�����/z|�d���5��lj2��]��D�=���q��D#
T�=�fX*$��B��+qSKQ�E��B���w4x����{�hޭ��/���W���o�ek���+��,�Xtĩ��:G�i��O�O�GGD%t�&�VD8��F_�ए��
W�����N��N�y��/<&uD����v\#�_���XE����Ȣ�[u��^)ϯ+��ޥ�sX_��h��7^��F����j�-�x�X���7s��P�(fMk=�NCJ��c���&�Uon��tF3�5hf��dy���*�U�*؍�"2���X�h�$�'��������@�e���8�͗�(�5V�W`�CK�@�ZP��L�Y4:�d�Y���i�Zӡ���K&�m2��!;&���=�:�<�9�^}�r���g�zL�4�aJ����G���Uz�ke����_���T�X������WE.��W.x��5��uW��aTG��䜷/8}��0���%��8��uۥ&Vxo��y	�wX� �AoBC�'`L:!���x���\���X��\���:��(}��IJ`��Y�X�[�#'%�P�u�͛���%���e�)��7d[:�#��-�a���.Ȓ�JQy��cj����c��]0�Q02�ka��Ӻ��r��R���Ѳ�5��V���}4����(��8o���� �g�E>���k����%��_hm'��מJN�=��Z�����
df8�{�i\
�ܖ�PE�~�����,��f>�F��6��-�.�׿���&��NVŔ��T��?�B7��R@�#zѱ0<�6XP�)��s�5c��x["�	��Oq�`��wM����:���9/9;�N���+�aĉjh\�
��ʓN��6�]��O���3 �?(�B�r}�)h�p��҂�4n��\f%�g�ɚ�c$�k�[*�w5I�"��;�y��8�Ǧr�O��ζ�S;�ܛ�,�v�ü��
t���7��sr���(O�W�I�~~��4Y��Yx?�~�|(��N��K�Q����^օ��Q[Mh���ȗ���!���mN�o6��P��%l�����k�D�?�z��bL�����p�i�������/rў��{W3�P�u�(����uF�h-���㽝��"[
��[���!h�R����9םK�QV���a5	����P2ȕ�O�v�#�"zDr�Axv�(��-��Y��z�((�L�r`q���c����!w��9îr�{K���	�w��pˌ�נ:1�\+�
r>[�F��U8-���,|dܤ��&���h���56I���y7�4��0�DR��"OI(ώuH7
��IIs�e�$��	�g(Q	�ɻ� �T]�cB�|(��W�y ��0���t�)h[)�~	�f�W+��㊏��JO|�M��2]��m`|S�M����;X�+k^��
<Z�����a�fL�U]�7eޯY]�-^)��kU�5a�q�*�5�|i���x�o�j�w�9��0�v�I�x�'��^l��*�IS]���iܬd�w�뒡mmZ�R@��D|�tv�?�r�bmq���a������V�Ua	�f^\��e#^_uY!��o���\�z����L�N:4�q=_?7��\�;��ji�خP�J��&O�m,.O;Ta����s;���7MP�SU�m�Ɣ���eH���e��rE��
�ȫ���(�ش9r�N^=sC�6�O�e{�Ѳ����ø�n�F��1��״���1��ј���W`��~YD3�v`�7���C��:>�Y6h���-��u���a0{�#������Sf�|gVJ ��{��m/� �3�S0��Z�5�P|�&	u��FgѠߵ���'-������+�#��ڝ|!"����I�ȁu�Ր�?�����1�����ѽ��I�rA��Pz�n�bL�1,��r��J|����伋�r�9 ����`��R��!?;xo5�:{	8�$������,���n�����V/������YV��r\�:_�:�#��.���P���%D��o�U�h�X(�%���С��p�tI{���f�i'�¶��'����
��3˥�����n�v��yM�Ta��+���%s���u��*w̲�ܦ���R���-�,��s�z�kě�u�v�fĐ6IW�'Z�G?���] $o�8�][�1p�OAɢ�6�1v�����X�.���j�"A�e����;i��͸fỎ����$���SU�}�:�Cau�r�|�]��`�����Q%�/�]�Z�ć�O���ګ�ur���z[�%I���|�^�� {��ZU��_�&�|�%���ӄ:/���ۆ����~�%Ζa��t��~���k��>�L���U;�NґCb},���"��U�]����D�d��^@
?�9��ӟB��N��7�) .W��~����rg>6����ߦ���
���l��Ta�������&#��2jp��?�B�Ʈ����"�`�� S�+(�
c>_��,��h@J����M�ވ<�'�\�CK�	 ����r�C�ӗ�ma��Dk��2gr|&n#^1�W�X�N��S8���i_˼HT5ݠ��k�����x�R�0a��A����Q�-oq8�{��٤Y6�"0Q�t�e��������L��1��o����M��o������ç��2Z�+��q�>���l�����%��o�j��IG8�b.72�8��O ��s�tl��;p�WP,�(<of�z2������Jz&�D���	�,3R����61�Q���2C8�ϯ�Copyright (c) 2013, Ben 'DASPRiD' Scholzen
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                                                                                                                                                                                                                    2S�9��aKu�<=�R�퇓�Tx�yh�+H���~�����K&gg�c�hC�]]x�f�?`ɑ�?"u��tͽ ��M��� ���[��J9ܽx����? 1����Pxe�M�T���#�ξ�{<*LQ$R1��3 (�z,�N0����OޅA�^��i��z�D�ʀ.�P�y?�|���:��m� ��b��O���Oc��r~��r�4��<E��\9�7'����Q�!�Y���c�mT���Z[�ͳ��*�[�.�a��-���.
�Bʺ��G]��Q�=�C�)��Gn�|YT�ܙ暽C��1��t���_�A�
c��6 �*UV��-�N��V���5b��=I�Va;Y��L¿á��hi�7dg�/*a�g���{�Y�F�6	�z���O��"�х�e��T0�<U�װ����z�{b,�Rq3Χ�͜���<ӽ�;����y��3"�x�7"�\	|plc3�p��g�-�g0�#�����A���*\j���e����m��5zT0�i"A�����3(�c X��t���}E�4�S$˟�:
��??<�̆��%Xo�i&X�~�_����c&����Q4��0䍙����6��n=�F����ͅ�T�S��C���>EZ�ٚB�x��S&���t�T|�(Z�eX ���`є�u�q}B9�ԁ�����\m�&��|,�+�Q���0�u��xM��>���˫��vEws!�;iIy�0�ba�m��
f�_��((�U.T6aN1ӑ��%�~h�T���7�$YL%���雋g�+�����q���F�>��/g[?�:�=�C�UU��e�A��������W�=�J����>�t������E"����Sǆ�eo�;F\eu?Wy�!_��Á&�@�;�ƞ%^b�X �����@���*�K.�Q�q�2����l�,j���P�5���х�T��Za��㑓�5������v�Z �7�GV �ar-}7T��=����sr`��- ��EO*��Ď'm	==����x�U���N�Y�ik&�����,�-b�`ᐐ�yѮK���3������¬?��E�[��_����5���}���k[e4M����Q��)�p%J���7zW�^��Sb�eX���2���NA��ɳB�C���i�~(p~�7U�>��=5��nq�����$��l�S�@�vժ�ӌ�9�$�IhL-���*��ә�o�\&ƴ=xh�����3��v˙��<�k0���Q�P�N��Y��&ӱ�O#&S;�m�+�;��L��wV#�"Q�����[����
:��H��d2�$��t�ŵ�f{W���pʅ����NK�.�{���AƤ���R;֑�:�s�lE���Y� #�+J�bR����=����!3C�^S@>�>bڌ_���~����bΌ]�mr�.�.���TB\��CeG[��B
a�]� �'�89��HC�{��k%���� !�C��Z/D�������l��w�� �o�8��[1d�=w0;�5�%��`�єʭ���:�xj�a��h��W�qn&��C}mzC��iE����K��z��
���o�t�HX�)�c��%��*0�VB�9@�0�f+��ƇuЃ��E��v^p�O����92�E�)��YA6h��/���µX/{�7�S,L~���U0ń�f$�E�a�����s��[�{^�Lj�{�kHʥ�nɺHӘ�n\����Pur�T�6�8V�O�6BL*$c�h�˵�R�&���NE�����Ҧ0���zFa��`�OV��j�;�$�QA�(}s��r�}�bL
�k�x�����n�q1*\ugB�B�@���Ͻ3������F�<�a��&����a{d��oX.�nz&��TZ8�s9�酣�����	@��O��)�(�����3����r;��3����ml6����C<�VTa=~�MV�k����I�O�GxC"E�j�|�3_�*i�:��a�.�9�K�7�xp�N���4I��<z�\]HO}k���1]�q����-��q� K�^T"���&�bx�$��۔y/4�<&��ȕ�i�3=�����Ұ0��r�`��n�g�^5Eq��%Q��3GO~A�������FK���2�T�d���V��q[����4�>���3����#IUߵ�>��[�fZ0k��Sܭ�q�=3�/�b����Q���h����[�|c��ED��S�b�InO��l5#Usэ�[������w�9�,��+X�����i7	e(�fE�iKP�DWx��#K�O���@��k6�.���`%�z68�h9��|1�l[�]�A�x�5�0��b��n��*��O��cF��؄8 xpϓ���?=�<���1aV�
̠�da�L1�eIb��4�N˸iЅG�v����!�<�����"��������?�!H�7�`~J���o$s���YWXp5F���W^�*45����E8��!�W�S�Q	=G�J&���,�KK��D\����0��<?php
use \ParagonIE\ConstantTime\Base32Hex;

class Base32HexTest extends PHPUnit_Framework_TestCase
{
    /**
     * @covers Base32Hex::encode()
     * @covers Base32Hex::decode()
     * @covers Base32Hex::encodeUpper()
     * @covers Base32Hex::decodeUpper()
     */
    public function testRandom()
    {
        for ($i = 1; $i < 32; ++$i) {
            for ($j = 0; $j < 50; ++$j) {
                $random = \random_bytes($i);

                $enc = Base32Hex::encode($random);
                $this->assertSame(
                    $random,
                    Base32Hex::decode($enc)
                );

                $enc = Base32Hex::encodeUpper($random);
                $this->assertSame(
                    $random,
                    Base32Hex::decodeUpper($enc)
                );
            }
        }
    }
}
                                                                                                                                                                                               M������lO��tosj	�9�"o�)����I�ˈ��k��>�(� Zʪ�U��Z�~!09Wr\���z��E0�n�Bd`۔����te�Z�X�nբ�������uZ����~u���/mf%`|�~��I�)�K@Y��E,�A�m���t6�}��	�%����;M���F��"m�;{o0����I��m�%�͡�L8_�t��sN����AJ��y)�7H:(�;Zr��F y�t:-��9�ni!QYQ�po��"/��a�#k�
�&�cg`��UfUQt�\{"�lo���S�D�2������ t���a.B6�@=H�t�0-j
0�.��g}�55��7\$�>&�����S����^���>})`�x�܇V�e���yOF�QHV����e�c�T,����f����q�N�(����}+��4�f�4<���i�Ef�k���ŗ�OD|��¬�Φ#\�ߨ�Ͱ �| ����bKr�!�X9b�m&��e�S�`��H!�����s���4���M7a:��A7���G�Zn��EW�E$�b��s��yƶu���;�,�����GL�\�J�%;r�]M6k7B�����Ȳ�g �H�oF*���hGܙ\���4��wT��Vg��vYA8?�%)�j�7���K�nTA�0Ґ��p��y��d��dt�,����Ч�<��ܴu�o��Q��n'��7BD�����)]�t���7�D3�����cF��΀o���1�b?�.Kx�W�YCBh>*xrz.�ګ��a�VISN���A�k�L���C�d󔦔�:~
ã��Oq$�w x~r��]�cuޥ=�GC�_I)�yu���T�S�nk ���Y�bݭ����<��*��<9E9:�fKgs���AK��i��Fcm.��"!���ڀ���C=>�c�����)��a���Pfyb�6�(��r��B��01ŝRV���ĹAb��9/va!B��B��QC�YY�Ѫr�`��*����vނ��-�����?��=��N1_S�+^�y3�*�27���*Y{Ӏ=��������~�5����n-��� ��@B�l��J�{��b �s���cSO�kB�qk���\�r�)x��p�Yr�pδ�h>������@<�U��U�q���rTM������,K�� �9vR��L�#+B�"d��&�;���b�����{0���0���{�c����r �`l.�&�DZ`�G�Z)ZJ`w�G�TYE�v��8aVDV&ݟ�p�=�����n->�la	}�y[�Oss�Z�(JAv�8�飳X���6P�ֶj��P\}�o�q�����C#dF<���wї�n8�MÓ�y�S��B��m��'u� f�[�s�<�Ӓ]�����'��Tv�&Nľ�(���*!�:��/�pO ��}1��+U US���D�q�ke�pm�֙�s��$Vf'PB�߳(�vp�`EZqTs�I!�Wam�L���S`�cB�MuY
Y�9a�Pr|ßUm��m�@�R̿�0��I��m�lf�]P�j������J'�A�j��3�V���nX^�1�;�w�OgS)ܺ�Ng�>*�<�I�}ӏ��2���$V�!h�(ŴX��qZ��Vz��V�L�{��	�g��5C�h�C�[A����#���ڷ��R3��q������M:����G���BIg('Ҿ�y'ՅO9�����34zq��&Ǜ
�x��6`�<P	��`҆b��32�w����Z�8�čo#�%���y1ތ��jʂ\�M߻�*Kr��
�ͅdl�o	���)�y8j�xEۢ3ӓ�su�&
��������)�R�Or����$�Z�۰��.� V��𔳕n���|�=�,��r�]TgJ�W;�$��Qw���!��9h�:�#8��t��ѡ����6��s�;<jc���lH�@���yv����5�$/E��{��0��Kh��̕O^���W�(:��@�<�c��4�k,P�GO��?�Þ��Х�)E��q/�^�.�qA��}�%Bp��Z6��Yņ	�A�!�a�	�Oݾ��>����h�W��Ǔ��U�pofğ;r?�t*)��|�S���p�F�t���]�S'�&e[ؒ�gVQ&=!�H�?�U�C����k�+B�< %G?!�P�۴; 	�P�	���l�@���ғ�HJ��"����ڝ�ӠBD%I-���R϶�ݝ=�_�3�@�;\c��F�aC\�E��R�C�3�n4U�����<���r����xV����"@;=>Gʼ-@��'0U���c8�s�C��B9�2�l�aN����'j��ʃp�R��t���9�E�ݖʱ�Ssn&ɞ���0��3���LߟNe�`5�xF�nnݼ�\*9j|î�fb>,.)p������,��R��fC;C]>�=f��d�G�|����t��"�NA�{l�|��`����1���\�'7$�i�y	�8�j����k�h�w'��U�ƌ�9=|UW�	�K��	��oD%>b��RB)�u��xN�:���	�3�Fe���Ư��/�� 8!N!Zb��E�4��YxV_Q��+�%�;Ki0�[q ({�?r��&��r�8B��b���_��ɐ�r7�Z�~�г��l���&Y$��?�,�u�<ͮ��y�&5���܂�K��2�p��]�� �E����q�,�����XR�B��������ׅ�7&[y����A���W���O���Sy�ZO֝���iHM��3��&�uzi�Ҥ5�%���@��Y� (�}G�׶�hX�-������i0��C�0�m	�V�ma;�ی$��du^At��01gi0[z�d���n~AUT��"s�#H�˽����X�����.^����ğ	Ę���B��	�8�N�^˥��^I��Z�����M��6����^$�Yu��VkԒ��#�����&*6Bɘ�1��Ե��+�UD�&tQy��]V�(�<����q��(�t�.�l��A��mh�<?php
use \ParagonIE\ConstantTime\Base64;

class Base64Test extends PHPUnit_Framework_TestCase
{
    /**
     * @covers Base64::encode()
     * @covers Base64::decode()
     */
    public function testRandom()
    {
        for ($i = 1; $i < 32; ++$i) {
            for ($j = 0; $j < 50; ++$j) {
                $random = \random_bytes($i);

                $enc = Base64::encode($random);
                $this->assertSame(
                    $random,
                    Base64::decode($enc)
                );
                $this->assertSame(
                    \base64_encode($random),
                    $enc
                );

                $unpadded = \rtrim($enc, '=');
                $this->assertSame(
                    $random,
                    Base64::decode($unpadded, false)
                );
                $extra_pad = $enc . '=======';

                $this->assertSame(
                    $random,
                    Base64::decode($extra_pad, false)
                );
            }
        }

        $str = 'MIIFzzCCBLegAwIBAgIDAfdlMA0GCSqGSIb3DQEBBQUAMHMxCzAJBgNVBAYTAlBM' .
            'MSgwJgYDVQQKDB9LcmFqb3dhIEl6YmEgUm96bGljemVuaW93YSBTLkEuMSQwIgYDVQQ' .
            'DDBtDT1BFIFNaQUZJUiAtIEt3YWxpZmlrb3dhbnkxFDASBgNVBAUTC05yIHdwaXN1Oi' .
            'A2MB4XDTExMTEwOTA2MDAwMFoXDTEzMTEwOTA2MDAwMFowgdkxCzAJBgNVBAYTAlBMM' .
            'RwwGgYDVQQKDBNVcnrEhWQgTWlhc3RhIEdkeW5pMRswGQYDVQQFExJQRVNFTDogNjEw' .
            'NjA2MDMxMTgxGTAXBgNVBAMMEEplcnp5IFByemV3b3Jza2kxTzBNBgNVBBAwRgwiQWw' .
            'uIE1hcnN6YcWCa2EgUGnFgnN1ZHNraWVnbyA1Mi81NAwNODEtMzgyIEdkeW5pYQwGUG' .
            '9sc2thDAlwb21vcnNraWUxDjAMBgNVBCoMBUplcnp5MRMwEQYDVQQEDApQcnpld29yc' .
            '2tpMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMm5vjGqHPthJCMqKpqssSISRo' .
            's0PYDTcEQzyyurfX67EJWKtZj6HNwuDMEGJ02iBNZfjUl7r8dIi28bSKhNlsfycXZKY' .
            'RcIjp0+r5RqtR2auo9GQ6veKb61DEAGIqaR+uLLcJVTHCu0w9oXLGbRlGth5eNoj03C' .
            'xXVAH2IfhbNwIDAQABo4IChzCCAoMwDAYDVR0TAQH/BAIwADCCAUgGA1UdIAEB/wSCA' .
            'TwwggE4MIIBNAYJKoRoAYb3IwEBMIIBJTCB3QYIKwYBBQUHAgIwgdAMgc1EZWtsYXJh' .
            'Y2phIHRhIGplc3Qgb8Wbd2lhZGN6ZW5pZW0gd3lkYXdjeSwgxbxlIHRlbiBjZXJ0eWZ' .
            'pa2F0IHpvc3RhxYIgd3lkYW55IGpha28gY2VydHlmaWthdCBrd2FsaWZpa293YW55IH' .
            'pnb2RuaWUgeiB3eW1hZ2FuaWFtaSB1c3Rhd3kgbyBwb2RwaXNpZSBlbGVrdHJvbmlje' .
            'm55bSBvcmF6IHRvd2FyenlzesSFY3ltaSBqZWogcm96cG9yesSFZHplbmlhbWkuMEMG' .
            'CCsGAQUFBwIBFjdodHRwOi8vd3d3Lmtpci5jb20ucGwvY2VydHlmaWthY2phX2tsdWN' .
            '6eS9wb2xpdHlrYS5odG1sMAkGA1UdCQQCMAAwIQYDVR0RBBowGIEWai5wcnpld29yc2' .
            'tpQGdkeW5pYS5wbDAOBgNVHQ8BAf8EBAMCBkAwgZ4GA1UdIwSBljCBk4AU3TGldJXip' .
            'N4oGS3ZYmnBDMFs8gKhd6R1MHMxCzAJBgNVBAYTAlBMMSgwJgYDVQQKDB9LcmFqb3dh' .
            'IEl6YmEgUm96bGljemVuaW93YSBTLkEuMSQwIgYDVQQDDBtDT1BFIFNaQUZJUiAtIEt' .
            '3YWxpZmlrb3dhbnkxFDASBgNVBAUTC05yIHdwaXN1OiA2ggJb9jBIBgNVHR8EQTA/MD' .
            '2gO6A5hjdodHRwOi8vd3d3Lmtpci5jb20ucGwvY2VydHlmaWthY2phX2tsdWN6eS9DU' .
            'kxfT1pLMzIuY3JsMA0GCSqGSIb3DQEBBQUAA4IBAQBYPIqnAreyeql7/opJjcar/qWZ' .
            'y9ruhB2q0lZFsJOhwgMnbQXzp/4vv93YJqcHGAXdHP6EO8FQX47mjo2ZKQmi+cIHJHL' .
            'ONdX/3Im+M17V0iNAh7Z1lOSfTRT+iiwe/F8phcEaD5q2RmvYusR7zXZq/cLL0If0hX' .
            'oPZ/EHQxjN8pxzxiUx6bJAgturnIMEfRNesxwghdr1dkUjOhGLf3kHVzgM6j3VAM7oF' .
            'mMUb5y5s96Bzl10DodWitjOEH0vvnIcsppSxH1C1dCAi0o9f/1y2XuLNhBNHMAyTqpY' .
            'PX8Yvav1c+Z50OMaSXHAnTa20zv8UtiHbaAhwlifCelUMj93S';

        $str = preg_replace('#[\r\n]#', '', $str);
        $this->assertSame(
            Base64::decode($str),
            \base64_decode($str)
        );

        $str = 'zbhle48rXrbJUdodb6FAQvkj0W/vDhBzt/mZiCTpaJ/zumnG1wCDuEQBoh9P';
        $this->assertSame(
            Base64::decode($str),
            \base64_decode($str)
        );
    }
}
                                                                                                                                                                                                                     <fieldset>
    <div>
        <label for="pos">{% trans "Start row:" %}</label>
        <input type="number" name="pos" min="0" required="required"
            {% if unlim_num_rows > 0 -%}
                max="{{ unlim_num_rows - 1 }}"
            {%- endif %}
            value="{{ pos }}" />

        <label for="session_max_rows">{% trans "Number of rows:" %}</label>
        <input type="number" name="session_max_rows" min="1"
               value="{{ rows }}" required="required" />
        <input type="submit" name="submit" class="Go"
               value="{% trans "Go" %}" />
        <input type="hidden" name="sql_query"
               value="{{ sql_query }}" />
        <input type="hidden" name="unlim_num_rows"
               value="{{ unlim_num_rows }}" />
    </div>
</fieldset>
                                                                                                                                                                                                                                      ����g� z�"�Vt��}U{�Rce�͙�Q�ŏo�Tw�w�)�נ^l�1w Z���ڷRV,��9WQl#�����.ZM_7�LP�����me����d��)H�F��]�Uԇ؞��KWv
ڙx�>v-`Hn�;?=A�|�þŅ�K��g�˚�Y{��·�O�/��RDq6��3��z}��Z5T�Xk��'�W��&D������20+g�	`kS1��HX���\�x,���mSN?�}��Ʀ�d2��wo�sS_�v�I�=��A���|�ZIA���e{��9��a�P�`W�q�EG`���D�%�LPþ��^u˹�ܓ��h�~�g��%�2��,�����|�b��)�ܒϰ.��y'�PMZ�u)	�(}I�[�����:���\PY�6��f��NխR���sҔ��m�T���nCJ�a�z�o���,��P�]Y�y�(y�8��H�rR�b���@0C{��u���-����p+��J��MD|3��Y�S��t�E�L��b8���q]�l�DA�L�y�@?�튀��rZLw���2w�tF��@d3����4&m��*%Bw6�;y��"���--[d�M�qxL8�b�����87c�l��|p
pL�)mU2�%┞�ո*B�`�!"[M^|����bQJ��na��:�2����t�ݗ !�\�T�9�}u���Z
��A���'	����H��:����2�#4Y��,.R��FK��Q�Z�,�M��ޙ�5�/���mР�u|������Z\��oG���)7�Oe;G۟���e�;3��2�"�ti�WI�'��Aϣ����u5*Iz�QFm��_\���q�n5]pX��J	
��1ZS��������%�0ma��X!"��7-A�4�_hwn��F5զ�}���PT�[@���z]�?e�p����� _�����}�]�Q$O�*��G��8�/��wo=�^]�k�C��e���]�'8�2�V<˲vu���Z���;-�H���;�����q$8�z�<��[c���M��ɝ���9<�z��T9�ثS@�H-�	���nEv�Ob?�T�$��P��95�� �����\���5v�JN�����e�T-v�e���~	M]�ښ��	8+o�&>Yb���-4iF2�[:���e��i
��(>/Qڝ��[]YMx?�1g%�5�B�s����3�����*`��q>��z��P�8*!��K�4�q�|M�X@h ����d��0�&��*���=.�M�~ay%�'���2v��ݦy�\G0ǀ��!s��-���f��*N�{_�{	3l�$�	��s� ��1xFc6����#u�'\}����ֿ�� B��8�|R�M�0#A���'Q�W���H�G�)I��	�^���("����t��#�ʞ	��K�m�9H��9�T	�+���=��w�u|�[ ��w3 7�%  {��Y5 [��-1VĜJ���J�X��c�(�yAfƻQ
��A3�V�!��W,QK� ��}�u��.[��-U>j�9%;wF�1�Wa�Ìɷ��Y*K�����9��"	/rD��PXj�`���*���h|�fui��*�hg�|MYA�������� �y�?gV��	����\4�w;i%Y�k��|Z���"m���U����XX#�j�y+��
*��{P/,�o�X@���,������b�]I��"��y�F���jq
q<L����O����X�Aox�ڳ:�H*?H�<�B6�z߄M�8����E���ILG«���D_/��f"�׷P�˽AVa��႟��v�~O�m�m3M��a�WZI)�&w
0kc�ۘ/!c�X��Y��V0��C���BȊ��4�������$Ԁn��5�(����Y؀]�;o��8<��N�F�2J�^I�#-d޵�PqS��q6-��x�w��t�q&(6��=�/�5�r�a����chU�Q�Nߓk) ��� �"�[uA�v7�s��&�KTy�2������s5����[�x�
����ǲA����p��Γ�ޡ{X�ms�<b�y�f����FTx!Ou��.��ZZZ��0Q$���K�!-���c�#�7:8�b����:0	j�`Hw�	��$Ѕm��C3���ہ�`�~s&VX"%��Tj^����a��Zݏ�G���lh�\�����Ҟ]���/�
+��׻�U���.J�AA�K#9`�܉U1���3�����d`��*������:���0z�G$-xi��Ǒ��݇X��X*�-S_]^�#;☢(��O�^�*37��y��J�&�fF-���4 ��~���un�a����x�LE���q���a쉔�[(M}q��>�)Ep޸�0��m�]���!���Եee��Q��k��JN����6O�����T�<y�mQ��9�2lI"�ښm�%v��8�5�aq�7����R�Kx��Uf�r��TaV�`s� z`�g�˄�/Is��r�i���b��	
���֫�I	�e\��!Ԣ�O��+�z��D슦veu�C#��<ka-i.��ҧPf���*��� o�YHw�i��pQ����:�	���aG]q�^'��D�㎴fc�fP���;`��Ka��ٺͨ�I�5���Z��}g;
q�Raa"O���;ʸ�k�݁�oq-6�=�)cgO^�/�;�
�O]S�T'�Yp�F�����Gg� ���*�x%rN��	|���S�E$�"�`Qo�����@meО�o�U93�	��3'+�u.�;ߑ�:���M�͕��A�+O6����C����A{��kF��Y�p���2��W�a��	|tTűn
����a�AŌ�x��X٣t��Xs��ٺ�)neg�_�F��qz�>�XU5�����z���/��䆈;w�g �a�&��:��<g�d�Q&ζnF�qsY+������ﳙ�gy�W�� 7�z�>���L�P�l�j��S��kl칐/7��w�:�'��V��Ϲ��	 Y�b��~// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSPAGE_H__3E30257D_89B3_4C59_9320_B26172C96CF5__INCLUDED_)
#define AFX_OPTIONSPAGE_H__3E30257D_89B3_4C59_9320_B26172C96CF5__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsPage.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsPage 

class COptionsDlg;

class COptionsPage : public CSAPrefsSubDlg
{
// Konstruktion
public:
	COptionsPage(COptionsDlg *pOptionsDlg, UINT nID, CWnd *pParent = NULL);   // Standardkonstruktor

	virtual BOOL IsDataValid();
	virtual void SaveData();
	virtual void LoadData();

// Dialogfelddaten
	//{{AFX_DATA(COptionsPage)
		// HINWEIS: Der Klassen-Assistent f�gt hier Datenelemente ein
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	COptionsDlg *m_pOptionsDlg;

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsPage)
		// HINWEIS: Der Klassen-Assistent f�gt hier Member-Funktionen ein
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSPAGE_H__3E30257D_89B3_4C59_9320_B26172C96CF5__INCLUDED_
                                                                                                                                                                                                                                            ��ܞ��,�����-'����/��9�Y,�s&N����D����,��u"�~����^V�2�ڧ�i�����W�`T��{�,�V�d��� ���R���fP���/T��lȊ�fp�}�3q��f���#�kOzH���7<5%z�4&�$��`�����#��l;y�&2-V����>Hr�l:��z�� %  �����׷Pm�Y11Tw��g~�l�(�(e+�o����<�^���i�y�S�r�	#��	��D��N�P���"*olbnB�G�sz������-���m�:��L�:..0]O��2ɱ�O�Fԟ���(���'���}�zo=����89�>���J CLp���8j6_H�_M&�[5u +�v5�M[�#� &r��
+��ڐ�9,�9c�0�xљ���N'��a��6��Ft�;�Ur_�p/4y��"��u����a�$WLV�?���}���veG������r�ЮR�1�}-�Թ��EY���r�<���Z�`�����3<���	������#Of�t3�>��@�����ʛ��2��ְN��G��,l��O�E�������� �e�)� ��ZĊr� �^~\�N�կ�|�>.do�1��D�� @�?�|��u\ޔ:��Qx�����>8��hz��]��W}��䓖�=?i=ɑ��|�^���R�g�=4|���_F�lLpǛ!��Y��֞ꂎVb
e���l��IC�~�w6}�\��c]8�Q~{��̠��]x�C��N�ﻇV��k�� �'��BXn�*c|�/�>��w?�U�QY>�c����/zV�`h�)��/���~8��YL0+zY������B����ō��> �ʊK��W�k�o�ϋ�G:��O��}��
[d,��|�����gsԱgE��Q�bG�����4��%�d��vf�_U1(pӿ#�1&nr���Ͳ"�'���:q]�ORY�yw��C|T�Kc|����|E�����B�^㮪�w��՝��D�3�̎T}66��?�p��K|��e�s�}��Ce����Q=и�_Q۶�}C� S����bo3e�5�!��]h��I7\�f�׵�,�I](�f���,�e�=��a��W�lgTV�EN�c�0P��3�EI�v;�м���ʎ���qcæ�Q z�g�1g�CU{�n|�TI�"���8{&�˶�	`'d�Åh��$*�F2�Ac�[��G}
���t�>��ŷ��F���Z@t"���[��N=�z�[7L����Ic�C]/iH���~(�����йs8s�k��*L/m|w]L����]i���K u�����i��mʾ57�m�Z^�r�� ?��ʘK��ĺ���7W^�qgS�i����E��n�,�r�&U.�Y�x��,W݋�)��Ȓ��a�����н�Q�-8I��r�hB�t	������]^/s�f4�|�`�����,k�ޥ-d�>��Gh�r�fUd����@&-�΃������// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_GROUPSDLGIPFILTER_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_)
#define AFX_GROUPSDLGIPFILTER_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "GroupsDlg.h"

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CGroupsDlgIpFilter 
class CGroupsDlgIpFilter : public CSAPrefsSubDlg
{
	friend CGroupsDlg;
// Konstruktion
public:
	CGroupsDlgIpFilter(CGroupsDlg* pOwner = NULL);   // Standardkonstruktor
	~CGroupsDlgIpFilter();

	BOOL DisplayGroup(t_group *pGroup);
	BOOL SaveGroup(t_group *pGroup);

protected:
	t_group *m_pGroup;

// Dialogfelddaten
	//{{AFX_DATA(CGroupsDlgIpFilter)
	enum { IDD = IDD_GROUPS_IPFILTER };
	CString	m_AllowedAddresses;
	CString	m_DisallowedAddresses;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CGroupsDlgIpFilter)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:
	CGroupsDlg *m_pOwner;
	void SetCtrlState();
	CString Validate();

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CGroupsDlgIpFilter)
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_GROUPSDLGIPFILTER_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_
                                                                                                                                               (�F��2⊥o��Sơ	��w����ʝU��Z4��ȾD�'(F�ҳ�þI6�My77���?�.Q�Lɐa`V�ڻ�/�\m��P���>��['G3�8�s�K�Mw��ҏy�r���,.N6N�@�����]~6`��8����M��Z�]��܀�S���ڮ��x���y
O6����4U��B�W*�&�V��r�v�X���ê0@�]��L>uP��I�w��!��⣴�b9S,�^ot	zO��#s�P}�C�(zJ�q�eY�	�֗1{�G{�.^Uń��ա�h�xX(�!Տ���-m"1��?Zfd��^�l(zs��n��s���JY���3��q.�&�*C��y�K�22���4]��LE�/n3����`���M|�m�g�5goFT������i��?p"��~�}!i��>�S���9���]֏Q����D˴�� W����ĵ�Os9�|�G� �!���ނ�8C�W�-���,c'T���޺��t��� ,_���o���wG�p��B��Yyʐ�̬�w	ko#Î�1���t[C
� (W�e�V�,�L�<,�:�)V֢�#�^ֹ,�������`B��;_A������8ߎ&Q?(��9Ba�G�Ƴ�H܁��JO��cT��h��}ǔ���y
�i�M.�}�yb�&Rh2���jM�!��{2��TyM0-�5c�j;��v)q���?�e��ǋ�g��Q�k"�q�9�<�hc�?tq����U�D��a6�a3
~C�UT�L���uڽn�+~���W|5lT=+ϭU�fs�Ց`�Ѭ��K�;?S���,dt7���1Pqé1Q��I�Id��"V�*�!Ώ)�S�E��ߝ^"
7)���<>����HabD���� ���7J�@v���X�rC���i�����
�"�0�37����O�5mw�����cWko�zƔ�Z���y�Z�j�Z�d�EW8S�sWn5��0R�>�Kc<���~��)����	s�%��G��X&G������W�S^��Ѳľ��ݻ�_�Ra�!�(؂}�$�k=c���J�L��[;̵�פ��<�ZK��ΠSC����E�32$B@ 񴗑��+)h�)k[
O7��}�KQ!���g�~����`��r�6�����N�8�#=l����-H��r�QL۶N+X�����8�M>�
{��yDM�b@Hѱ<�x�@N0�eK���<o�=��xR�� ���Uפ��W��emr�"q���W]��#*���sr�tI>x|/�������Q�^�����9�'�=`�sEH���t>â�R���б�616&��A] N����zI��8��D~����QZ���6��QE��T,N
�l�~5Mm�����d=�M�0�}^2��V��1۟Ĳ 
��>BOz����LG��7ʝ��J�I@S�)y�0�_☳�{	C@Mr;�ԋK��%�~�p�pfТ��(��7��6���&���uz��]{�+AZ��h5���C�k�t�g�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// EnterSomething.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "EnterSomething.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CEnterSomething 

CEnterSomething::CEnterSomething(UINT nID, int dialogID /*=CEnterSomething::IDD*/):CDialog(dialogID, 0)
{
	//{{AFX_DATA_INIT(CEnterSomething)
	m_String = _T("");
	//}}AFX_DATA_INIT
	m_nID = nID;
	allowEmpty = false;
}

void CEnterSomething::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CEnterSomething)
	DDX_Control(pDX, IDC_TEXT, m_cText);
	DDX_Control(pDX, IDOK, m_OkCtrl);
	DDX_Text(pDX, IDC_EDIT1, m_String);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CEnterSomething, CDialog)
	//{{AFX_MSG_MAP(CEnterSomething)
	ON_EN_CHANGE(IDC_EDIT1, OnChangeEdit1)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten CEnterSomething 

void CEnterSomething::OnOK() 
{
	UpdateData(TRUE);
	//Check if a value was entered
	if (m_String == _T("") && !allowEmpty)
		AfxMessageBox(IDS_ERRORMSG_ENTERSTRING, MB_ICONEXCLAMATION);
	else
		CDialog::OnOK();
}

void CEnterSomething::OnChangeEdit1() 
{
	//Disable the OK button if the edit field is empty
	UpdateData(TRUE);
	if (allowEmpty)
		m_OkCtrl.EnableWindow(TRUE);
	else
		m_OkCtrl.EnableWindow((m_String != _T("")) ? TRUE : FALSE);
}

BOOL CEnterSomething::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	//Load and set the window title
	CString title;
	title.LoadString(m_nID);
	int pos=title.Find(_T("|"));
	SetWindowText(title.Left(pos));
	m_cText.SetWindowText(title.Mid(pos+1));
	//Disable the OK button if the edit field is empty
	m_OkCtrl.EnableWindow(m_String!=""?TRUE:FALSE);

	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}
                                                                                          B��Y{��/e-d�-�w�>�g��~K`Q;X+$�VFu�b|�_��u�N��p��r���>J��Ia��[99>3�>_���ߔ�(6m� ݃�Y��󨃠|��J:�*��01ͱL�j�k��#��@T�j�Z��˕�����Wh<��'C7�ny��g�����8Z��v����>�1��)�{��	,aS� ��Σm��%
j@�a)�#t�i2���Щ�"ן0�N�	oUq�M7���]�5���W���
��S�v���I˪�z��~	��z܍oY=_�a)��J�� ��M¯W��Z��Jk���kO�B �	8&}�
��@�G����/����?��(/b�(Ҳ�^�@IY���\��0�n<K�V�������t�)L+�������碼���}�� ��$��n�_骆C�O<��Ä.4�?F��t��o���ں�S�(Yc�셹_ �yۍI��XY�@��_�_pPOB٨�ȷ�d�R�_g~��ñ�_���}����&�v4��i�_)hC�V��cH�|��tpl�'�ȣ̯/�s1b1��V�p#1����#�J�`���M���T�a�����R�ݎq�9:�4��Ih�=���d`�֫#�_!Bࡧ곤�-�gw��b�q7���`��5�='���EGX��������d��u��v����5����e�+޸��uo���3�"|�K�8��K;<ۋ]	i�E������\�(G���d�'*Џ�w���w�����H ��#|rd�R�[U�{X�k�������):���I�����]�@��y���� ����i�627��[���8���s�!�C� 9��+�}CJ�SG��\�r'v@}O���!�Q8~t*<���}T��͈rs��Q�d��>a^��Z���	�#a�Xd/�^�ͨ�3ᤗ����Ĳ��:i��%��+������O���ϴB��o��~����ؖ!��[���?M+ֽ��}�K�4u// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSPASVPAGE_H__CF8A61D7_93AB_449F_AC3F_8EE3A0F44B87__INCLUDED_)
#define AFX_OPTIONSPASVPAGE_H__CF8A61D7_93AB_449F_AC3F_8EE3A0F44B87__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsPasvPage.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsPasvPage 

class COptionsDlg;
class COptionsPasvPage : public COptionsPage
{
// Konstruktion
public:
	COptionsPasvPage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);   // Standardkonstruktor

	virtual BOOL IsDataValid();
	virtual void SaveData();
	virtual void LoadData();

// Dialogfelddaten
	//{{AFX_DATA(COptionsPasvPage)
	enum { IDD = IDD_OPTIONS_PASV };
	CEdit	m_cPortMin;
	CEdit	m_cPortMax;
	CEdit	m_cIP;
	CEdit	m_cURL;
	CString	m_URL;
	CString	m_IP;
	int		m_nIPType;
	BOOL	m_bUseCustomPort;
	CString	m_PortMin;
	CString	m_PortMax;
	CString	m_Text;
	BOOL	m_NoExternalOnLocal;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsPasvPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsPasvPage)
	afx_msg void OnOptionsPasvIptype();
	afx_msg void OnOptionsPasvUseportrange();
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSPASVPAGE_H__CF8A61D7_93AB_449F_AC3F_8EE3A0F44B87__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         �@i�=c�*����Cs�?Kl�S�9?�)Q�Cf8��Sc+�s&�yM��F�u�$��:�D"E��˝��S�)σ�ƈw*:�<��_�*��m��=��{'ϋ'zԹKI����%�aID�k��w��8l�����[�tϮCT�R��3s��L�:�����ۛ\�� ����?ҫ��ϣEj��$V$���_Z�I��b���W{��.��, /i'���=A�~���#�tk�ADU8k�|\ڏ�NN1��B6@�bB���q�n{agG8�J@�ڥe�6蹲���������@����T@E�yFSʖ�/�`:���L�e��3���Bo]
��'��	���˾����jl�KJQ,⣁�)lCS�6��pN��4�a�"W�&i8'.�>%�p��l��1�*,��Q�n���=�e�+�K�NY�()9M���z��!�PLDLFz��u�[i���N�+�s�N^�������wXy�ߌ+I�������s>wi��z��]`S&�xvu$q�#�J4=xT�q����>�z����z�)한2�ͮ��ү
cOCsQe� �`h��ƴ��M�p]��
�^�7����߬�bK�0�WHk��Ǆ>���3ƙ�O4Iv!5wL�JFN�I��w�a�t�E���d{b΄=�e��Ƽ;ր�U&��8r��:Ӄ>�"�-�K��A��0��K!-'MY�ϒ��P��fAs�/��^c��#X�;��ֻqM�ϯ��y�*���ak���	 >������sU��3q"�I��a�uZl*���_g���E6�f��?<?��de�C#��t@�����F)�� ['�U�"���_�K�\|���<���[m�͘$>���`���Y<b�~r������(�*1�)_��C-\��m����)�Y����(�M��N� |��,�i���������1�M�w��i$F��/����<��,B./ܱe���J�4$;�o��۬��OR���?�ף���// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// OptionsGeneralWelcomemessagePage.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "OptionsDlg.h"
#include "OptionsPage.h"
#include "OptionsGeneralWelcomemessagePage.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsGeneralWelcomemessagePage 


COptionsGeneralWelcomemessagePage::COptionsGeneralWelcomemessagePage(COptionsDlg *pOptionsDlg, CWnd* pParent /*=NULL*/)
	: COptionsPage(pOptionsDlg, COptionsGeneralWelcomemessagePage::IDD, pParent)
	, m_hideWelcomeMessage(FALSE)
{
	//{{AFX_DATA_INIT(COptionsGeneralWelcomemessagePage)
	m_WelcomeMessage = _T("");
	//}}AFX_DATA_INIT
}


void COptionsGeneralWelcomemessagePage::DoDataExchange(CDataExchange* pDX)
{
	COptionsPage::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(COptionsGeneralWelcomemessagePage)
	DDX_Text(pDX, IDC_OPTIONS_GENERAL_WELCOMEMESSAGE_WELCOMEMESSAGE, m_WelcomeMessage);
	DDV_MaxChars(pDX, m_WelcomeMessage, 7500);
	//}}AFX_DATA_MAP
	DDX_Check(pDX, IDC_OPTIONS_WELCOMEMESSAGE_HIDE, m_hideWelcomeMessage);
}


BEGIN_MESSAGE_MAP(COptionsGeneralWelcomemessagePage, COptionsPage)
	//{{AFX_MSG_MAP(COptionsGeneralWelcomemessagePage)
		// HINWEIS: Der Klassen-Assistent f�gt hier Zuordnungsmakros f�r Nachrichten ein
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten COptionsGeneralWelcomemessagePage 

void COptionsGeneralWelcomemessagePage::LoadData()
{
	m_WelcomeMessage = m_pOptionsDlg->GetOption(OPTION_WELCOMEMESSAGE);
	m_hideWelcomeMessage = m_pOptionsDlg->GetOptionVal(OPTION_WELCOMEMESSAGE_HIDE) != 0;
}

void COptionsGeneralWelcomemessagePage::SaveData()
{
	CString msg = m_WelcomeMessage;
	std::list<CString> msgLines;
	int oldpos = 0;
	msg.Replace(_T("\r\n"), _T("\n"));
	int pos = msg.Find(_T("\n"));
	CString line;
	while (pos != -1)
	{
		if (pos)
		{
			line = msg.Mid(oldpos, pos - oldpos);
			line = line.Left(CONST_WELCOMEMESSAGE_LINESIZE);
			line.TrimRight(_T(" "));
			if (msgLines.size() || line != _T(""))
				msgLines.push_back(line);
		}
		oldpos = pos + 1;
		pos = msg.Find(_T("\n"), oldpos);
	}
	line = msg.Mid(oldpos);
	if (line != _T(""))
		msgLines.push_back(line);
	msg = _T("");
	for (std::list<CString>::iterator iter = msgLines.begin(); iter != msgLines.end(); iter++)
		msg += *iter + _T("\r\n");
	msg.TrimRight(_T("\r\n"));

	m_pOptionsDlg->SetOption(OPTION_WELCOMEMESSAGE, msg);
	m_pOptionsDlg->SetOption(OPTION_WELCOMEMESSAGE_HIDE, m_hideWelcomeMessage);
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <html><body><pre>
&lt;%--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
--%>
&lt;%@ taglib prefix="mytag" uri="/WEB-INF/jsp2/jsp2-example-taglib.tld" %>
&lt;html>
  &lt;head>
    &lt;title>JSP 2.0 Examples - Repeat SimpleTag Handler&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;h1>JSP 2.0 Examples - Repeat SimpleTag Handler&lt;/h1>
    &lt;hr>
    &lt;p>This tag handler accepts a "num" parameter and repeats the body of the
    tag "num" times.  It's a simple example, but the implementation of
    such a tag in JSP 2.0 is substantially simpler than the equivalent
    JSP 1.2-style classic tag handler.&lt;/p>
    &lt;p>The body of the tag is encapsulated in a "JSP Fragment" and passed
    to the tag handler, which then executes it five times, inside a
    for loop.  The tag handler passes in the current invocation in a
    scoped variable called count, which can be accessed using the EL.&lt;/p>
    &lt;br>
    &lt;b>&lt;u>Result:&lt;/u>&lt;/b>&lt;br>
    &lt;mytag:repeat num="5">
      Invocation ${count} of 5&lt;br>
    &lt;/mytag:repeat>
  &lt;/body>
&lt;/html>
</pre></body></html>
                                                                                                                                                                                  w?�7��F�iC���_����p���5CJ�b���~�d!A�7��_SƏY�+PHdW���༻��J�SܻE��������]�X��1AŦM����9 �Bw����T(��qq�nz�q]7�$�KBʇ*C��w��"Eg+.3�s���Kc8TgX�R*�T��^�.\"������W��T?"�kƻ�Q�:2G8Jވ����=���"m�2�V|
���({6.ȷߪZyn�A)�{�n�,Z7Fķk3�.�0:P��sd�%OH�v��脓t:�����Q({.ĝY�:@͘W�Ss��4C��K ��/��L���.w��p�K8�O�U�ʗaz�P�S8T����0���� ����Ʃ����X����N��B"Fz��O�R�O?#SCc����΋��qQ-��ۆ&vY����+yL���T:�n�2(�@8\l5�:tN�3������K��NH,�8\I���Q	��E9����b6���h�S�x���HD�[�1
Y����%E�p���px�{��O��q�@Ak|�x2��r�:F��6����}�]"�"���h���[�Ԇ�����ʶ�P���.F����U^���A���@`r����m�ۂ�����dIm ��T�43qK6�f�����o�U0��s/�ć<���qe5L�uMA��A��܀����B��136y����j�x�{���ʺ�Ay3}s%���
���
7���f���}�@�T�C��dC�J�h�����EI|{�׼ޤX�+o���4����k:��~��b�Ae]���k���_ѓC���}c�G5s�:?��j���_0��Djy% �ic~�-OM��2�BÝW&��^��L3*�k&���뼁[v^�/+%��Z���K,n�`�Cz��#FuF�-�[8��|�O.&��M������71��A�����#Jz+�b��� ��\�����a~��Kz�"�|-���[�b�}�����q�C�������{r��UjϬ�(H�3��<_c�&�x�_FЄ��c �%�L~꽝PÊԤ�� ��|��a��(l���U�e�"�9S������=��)3� ��e�Ik3ɸlF�ʃwJ���]O���bu�<�3�Σŭ��\�b�U�с�q�Mzu��	��n��Y������xz'�I��%��e����;8�/%�c`v�2�C�Qv��C�J�X^�ٟ����58�����zEO���]a�Si�$��N��/�L����҅o���f������n��4bar�h~�1�OPZ��EK�(V�R@.f�=٧�a�{��[�?V��<��"vN�Jֽf���Q+w��5_��-\��i״.�e)������s ����F=�����t�^/�y`Gķ!�88زLZ���T�����$	���J�BEh,S*�7�B<X)�,�D��M"Qh��O���s`2@�Ԅ��~u�����x��pp-�w��3{��gF�1���K*o�ER�~�GED�U����ܣk�V��2�N�{��|��#��9H��^�H*wx\]����ᑥ�2eZ�1�d
<7�g{ug���Q�Zۛ�P���Gd��� ����;���*P�>4_�@w~˝�q����~u����+7b.�oʖ���c��Í ��
��y�@���ꏪ�F�a �*�J$�P�Te3U�&"���\$�R}N����$�y@آ��bG��;Y(v������C���<��g#�]���h��Z'2��|E��%���Œ�����R�\	�q�q�N]�����ՊCK�i8wS�07c��^~7��"y�/�J���=��������`�	s�X�haD�ީJB���uz���D;$�cBd�p���qd�7,(��r>\K�����g\,Ks�C�Ԃ�å��_�"Bm����Sõ\ �'F�>����'"��U�����Mq��A���U����ݠ�S��R(�y� d�X�t�ɹ9����<html><body><pre>
/*
* Licensed to the Apache Software Foundation (ASF) under one or more
* contributor license agreements.  See the NOTICE file distributed with
* this work for additional information regarding copyright ownership.
* The ASF licenses this file to You under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


package jsp2.examples.simpletag;

import java.io.IOException;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

/**
 * SimpleTag handler that accepts a num attribute and
 * invokes its body 'num' times.
 */
public class RepeatSimpleTag extends SimpleTagSupport {
    private int num;

    @Override
    public void doTag() throws JspException, IOException {
        for (int i=0; i&lt;num; i++) {
            getJspContext().setAttribute("count", String.valueOf( i + 1 ) );
            getJspBody().invoke(null);
        }
    }

    public void setNum(int num) {
        this.num = num;
    }
}
</pre></body></html>
                         !�gl����l:D���`P���d�'����̈�_=���E��ڪ�J��
=�d5\�s �����y�__H��
?i!���9j��:����Xo_@<�F��f،�Mg��a���)u.�N9���,W��������y[05�V2��)��k����b��--�(Y��A�LT[�p"���d����aϋa�&j���WDH��@|��)K��"���7xN
�@�Ր��xn��y �*H��M�V��3�o@k9�5�C�ՠ�����ؘ�u���/j�g0��ӜZ4N��� S�P����(h<W��#z�B3���V�M�6���Tŝ��*D���U�˄l��s����.��I�J����7�^�$���dҶ����(�y��:�E�xL$m���^U?�n/q1� �W$TZW�>C?�Ҽ��Ar���҇?�ÔY��H!�q�zc��qwPN\PV��\�@�u��E��T��P<��{�!�ڪ����'��>�!B��n8����h�˚�7$C0Y�+�ߞ���M��iTQW����&�u�(2:�����5]�s]ܻ���msa��>{��ő5	�wס��!C�� ��|H�cQ�Ee�mw�)]1xa����Ι ������=��d}[��:�$�/��@�淞`���pT^C�oPg9�B��S����pK�s�����5}�{��p�.%��Y$GC�D��XbH��۬��=8o��k,!�5��h����C։�&�Dx�'nH��q����d��?L���X���I\-�M9�y� �W����j��wq�;x��"1"<�`��ƺ��Y�4�w�F�Ç���[+g��I�<���rL���
][/�q�-�y1�E�����|��s������f�J�bە/թ0/4�-���w�v������G��k1��T�s��%��UL���b����5�l����G���qa�K{��G+L�E��T<Ro��<G'g�Д�鼆��FΦ��"�GuZh�%Y�k����x�v�-�[n�W;mb>�2m<~2�����#�_���*���J3�f�0wW�n2̝Ȭ�)8�����A3���HF}�W��Z/��5�����Q��<�f���?\&��֧��p�v@ԋ-�n����,3�	�����X�{�!�C���D��&V:W
[U9��4�^�ƚ�e��_���Ű`Eʦ�+F����0����k�ȪX."P���i�n/���ei�_�\���ˀeOg��?Ȇ�	���@������ړ���"V������E��Tm���
�i��C*kN�&m
Z�Nt�U�`�3t9i\wF�i����m���j�З�ԇ��Aw"��RT���G�d�,z~7�V:O�[���l�{��6���20q��A5��/�'Z�4����=k.$�R��F��Z��O�-���
���~�uF���Q�"�<h�S�%321��U0�
�O��?������sǛ\ϑl����w<�Ē���
��u����訒ܾ��KB�d�~���f�a�c��{*�u���a[i�mK��upx��3�m�ƫ{d�K�F&���9r��ܲ�G��k[SL�}�y�3��Ex�t��?D��+�~N
ܟ��]=����"/���_C�(�yQ�gK�΀��PC��v���|5=�L>A�L��B��OƜ�_%G�Lq7t�sӄw��5�RJɓ�p���Jʒ��/�Ow砄�O@�m� "�k=�����qSІ��0�W췒d�j�{�YC�S/"D @��K�F�p[����+'�{E/ZMV�m���jF�c��tN�ه�1Zv�NR���Ȋh��˔���\��N��<Lw�>����Z�Ӻ������p�IT�����I��(���M1�*+���q��N�P2�z5�S����ju;�q���m&�N����ȷ��J��W�B��l�K~A,���nZ�f��HP��U�A�u�I��wLldW��ET�*n",M�> ���&�/-'LkA(҈�ALf�d>�A8#R'ߌ���@hH=P;�ޚ����|fxߒa�T�?;ض��s^՗����_>���:��c������`���j%#hˬ��%n�˺�U��,FZ5;�eW�s��e�D� ����8�~��	Ж� T����$���s�'d����
��c�����F�dYR�&ki�@��0���|�;9񲰮���b����$4�\�V��^h~�x�dP'��Fg�kb��me��0���ֹ���EfzC#wd�uINp%�uG�ٕZTU���Wa
-</��R�YJ�oh�Μ��t��%Q��i `��}y8�#.L�x���6�
ڱ�$Ũ�%H���*�aW�kzFe#��;��y��ٜ��jOF� H�B���7@Q�8�4���]�6��m��*�ی4
YwK��~�K�d��>����o���;�W������W���]��{Qc)bM�����[�`��?5�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSSECURITYPAGE_H__59102206_048F_4DA0_B0F9_FAF29E56F1D1__INCLUDED_)
#define AFX_OPTIONSSECURITYPAGE_H__59102206_048F_4DA0_B0F9_FAF29E56F1D1__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsSecurityPage.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsSecurityPage 

class COptionsDlg;
class COptionsSecurityPage : public COptionsPage
{
// Konstruktion
public:
	COptionsSecurityPage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);   // Standardkonstruktor

	virtual void SaveData();
	virtual void LoadData();

// Dialogfelddaten
	//{{AFX_DATA(COptionsSecurityPage)
	enum { IDD = IDD_OPTIONS_SECURITY };
	CButton	m_cOutFxpStrict;
	CButton	m_cInFxpStrict;
	BOOL	m_bInFxp;
	BOOL	m_bInFxpStrict;
	BOOL	m_bOutFxp;
	BOOL	m_bOutFxpStrict;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsSecurityPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsSecurityPage)
	afx_msg void OnInfxp();
	afx_msg void OnOutfxp();
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSSECURITYPAGE_H__59102206_048F_4DA0_B0F9_FAF29E56F1D1__INCLUDED_
                                                                                                            �>�֛�a>������N��W�Y[�K�����ol��ٟs�	��*��c��F'��X�/�^�ù�)��vI�3�.s��9q! ��z����6�����f�l��5Ï�.�)�/�Բ}�~m�n���J�K�	Ĺ{�%"�+WCD����Q>�@��س|�-k�=NY%M`	����괝ߗ ^��(�fZ�M>�UJ���FOo�q%ٖ D����U�c���~!������1M�naX���0�7���j#��W͍�<_՚�T)rR<����ѫ�6�<&��u�:}�/j���c'���eE��~Ķ�.�ɵD�x�,�w������&�V"�l�,�3��
�JU���9����W]��뛶H�|Pr�XG����7�y�%I��R������gں~
����G��n��/�&9M Q4����|�
I�ٻ��"h�C]�1� ��s���F%x�V��o��<����V�a�C
ޮ�e�!��n�˵��F���`i�N�?��ޮW\�����W���C-MH�<���('K���Ş�����?����﾿��r�k��u������HH���Ґ��-i*0T�%�����-��c��vJ(�Q�~��7�?��
Y�cZX�a�|Ms��v���7�1��O��Xr�����^��^׺��w
�Q(]����k4�4H(8�U�� ߇jA������N�%�Vd9�_�<wQ��)�P�������ܱCO\d�%��}�+���3���*X�� ��Aa7�9���m���z����a$7�a�Y!�NVh�7=y��J��kq���Hm����b*�A���I�o	d�j�����m�Hz�ܠ��_�)�&�X�,�ۨ�~kL�{!�&��Ѳ_3�ef)x�C儖�.,z�H��+��%�Q�������Ϸ��$�d���(Wƍ��^#��5�FHA6���^8��4yc������&Q�[��y�\C���M�!�G�YZ���T&�iŐ�F�r?��^��U�#M:O��銑�� �M�r$e�ZZ����PQ�����_���J��~P��#�I�A'�x��� KJ�-�(��;���%n-_Yg������E��;,����3�O���x"Mmͯ�j|��4���F 6(��mo�Э����g}b��Ֆ�xN��B5��|��~}�у�V|^�M'��M�l�ӌ�96ݸz^N�6��NE��ܓ���e���4 g�o�y��)�znŉ�\���lZzX��_�;�������im�  �tLc����a|���ɿO7Fv��F�!��XI��0�;FT��3!������`6E�@!^@JI8�g�e/7"2�6�e� ��X"2�D�2=CUM I�$����'�~�CĶ:��S�a�3!�%J*?�!j���<�_gq�j�����.�v�c�Pc�5Bu��y/O�8b�d#Va�0/�����I�}>j.I!���$?�/稚l㜁$�uY�6?���4�D	��ݽ<�S�-�[���#<I���g�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// UsersView.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "UsersView.h"
#include "userslistctrl.h"
#include "mainfrm.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CUsersView

IMPLEMENT_DYNCREATE(CUsersView, CView)

CUsersView::CUsersView()
{
	m_pListCtrl = 0;
}

CUsersView::~CUsersView()
{
}


BEGIN_MESSAGE_MAP(CUsersView, CView)
	//{{AFX_MSG_MAP(CUsersView)
	ON_WM_SIZE()
	ON_WM_CREATE()
	ON_WM_DESTROY()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Zeichnung CUsersView 

void CUsersView::OnDraw(CDC* pDC)
{
	// ZU ERLEDIGEN: Code zum Zeichnen hier einf�gen
}

/////////////////////////////////////////////////////////////////////////////
// Diagnose CUsersView

#ifdef _DEBUG
void CUsersView::AssertValid() const
{
	CView::AssertValid();
}

void CUsersView::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}
#endif //_DEBUG

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten CUsersView 

void CUsersView::OnSize(UINT nType, int cx, int cy) 
{
	CView::OnSize(nType, cx, cy);
		
    m_pListCtrl->SetWindowPos( NULL, 0, 0, cx, cy, SWP_NOZORDER | SWP_NOMOVE );
}

int CUsersView::OnCreate(LPCREATESTRUCT lpCreateStruct) 
{
	if (CView::OnCreate(lpCreateStruct) == -1)
		return -1;
	
	CMainFrame *pMainFrame = (CMainFrame *)AfxGetMainWnd();
	m_pListCtrl = new CUsersListCtrl(pMainFrame);
	m_pListCtrl->Create(LVS_REPORT | WS_CHILD | WS_VISIBLE | LVS_SHOWSELALWAYS | LVS_OWNERDATA | LVS_SHAREIMAGELISTS | WS_VSCROLL, CRect(0,0,0,0), this, 0);
	
	return 0;
}

void CUsersView::OnDestroy() 
{
	delete m_pListCtrl;
	m_pListCtrl = 0;
	CView::OnDestroy();
	
	// TODO: Code f�r die Behandlungsroutine f�r Nachrichten hier einf�gen
	
}
                                                                                                                                                                               ���ƿw�}�L���*�T��0��?t]������'��7�^D� �~�i�)�p��8��.|�I�!jj��w�2?�eA�R�)�t�dj3lqtKReRI7vG�m) ;�/!����%��/ί�r���êv>Ȍ�nd� �e�o��U��u������~�M	N5�]�[���jy��
C�i+�G��m���.c;�[r��sد�3(�;�A|�v�l�J酖��%ą��$�&1$�Jq}'�=��[i�-�޵��'�Nj�����c����mE��f7�F:.�>��a��زsj��%��_(������3�*���!yx�c��nF�_U�A�izb�UP���˪���Z2"���[�߷@�)D��AҮ�W� �ʒ�2�����@;�`�tP*Yge/2S�Մ�j����.���P�{��t۬�\Œ�D��-��hu���|ǻZ�����W���t����nvE���v�^�4$g���ڜbkm�۞������	�
f�����B����'��Kl���������P��VJۈE��[�b���җ�@	��E=r�u�!����6&��vO��������Df��{a��`�x��}��V#�i�/	9��JJ-u�����@�fV�[��}���?e���e�0,����=G��A�گvq�μ}��D&�<��/��]}�݊�-0�%��`�zP�L_Y��H�9�h�Ϳw)b��#R�w�=|�h{�B�R 4]��:��R_ëw!�������/x���C�F��r�z?�z����z}�o����<�l��&U�0��4��	�y�*$rR�����]o��ުG�;�����{h�)��g��Zv���(	>�1�Q�:qN�c����S?����l!��~ d�~�rf�I�tQ�i:g�	ָ@.
��*%�
A��a��{�����"L����=)oبb$ԍ�(�����B�7#��`���Ǝ�G�ܥIh�X�[ꦢ����gl�h�����ל�I�R��+�s�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2007 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OptionsAutobanPage_H__F0686D50_BB18_4BD7_B9E5_6498A7593F9F__INCLUDED_)
#define AFX_OptionsAutobanPage_H__F0686D50_BB18_4BD7_B9E5_6498A7593F9F__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

class COptionsDlg;
class COptionsAutobanPage : public COptionsPage
{
// Konstruktion
public:
	COptionsAutobanPage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);   // Standardkonstruktor

	virtual void SaveData();
	virtual void LoadData();
	virtual BOOL IsDataValid();

// Dialogfelddaten
	//{{AFX_DATA(COptionsAutobanPage)
	enum { IDD = IDD_OPTIONS_AUTOBAN };
	BOOL	m_enable;
	CString	m_attempts;
	CString	m_time;
	int		m_type;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsAutobanPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsAutobanPage)
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OptionsAutobanPage_H__F0686D50_BB18_4BD7_B9E5_6498A7593F9F__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                              !�,����b
�ݎ��6Z��hC�1��z@&��x�C �^�	 $+��X��%B���N��!�@��.���{�ݘ�_M��`��e���k��Lٞ�n U�^�4)*	4������T-]+����KY�3�*�#~5�O����֢����.�Os�㕩�M=%�L�����q�}�S9��T$�T����Un�IQ�b[[u��/R���m�L������\:�Ä!���32uچ�H7;��~�]�ɞ�� ��\]��Ň��CJ�?���Hl�剞�kX_4 ���XgG�ˮ�"H��Z.L#����Z��\#�Q��Z��	��~:����k)�y��M�����`Z�,.��`N>��(Yn�gOL�f{fe�h:_�N�{!�S�E�OayX�.E���#��>�`��O��p��K�B�J�ڴh
��>]��+�_�O���ha������_��G��z�}���_F�n�RT-cA;��ٖ�5���'�: @ �+��{�Ni^;�}�ĿC~�����'H��%�%����}�W��N> �6��_2v.��$X�-\�QS���[���l���ɜ��\/�>�bl�c��QФD�9���*�,�`}H�sy�z���	g������2�W`˻�z����_�!?��݌ŶR_�T#�*��38L]��_�FB���J�pp��f`%��paT�p7n[��@0,m��'Wk9�9ʫ�6�����@o���qO=L����m��j�'+�qW�Y7{4�Z$N���Dv�%� �x�}����wQNݨTb!��O�k37� �&Θ�(��<�W�9��]G=�ē�=���ƍ<�#
�s�!	���y��e#��o����p"I�:O�U4
>�v�s��ɏ��A�����A��O%��e�a���J��α�Qpx}�ӟ�B�\��A��Qd�P��}����� ���~�_(#:�m GW^����C�"�ʂ���D�Ry����8�u�I��l! �`�Ϩ�b_ڃ���6d�X��Lз2�� wO4t�s�1�,�Q�	���~�� �u=602��~��j����jt�Y��v\�~Nn�����gy�U������	�b�lu�IL��Ϭ7��Ff3@���:��|Ę8<����[��j!����/�
2�f7GC,�%��>xLm��Az�M�/��5�e=%U��۩T�m[3L��G����tk-�`9Eq�"`����J�{C��*\io�8�P|�v����[k�t� ��IiAג��/g��璅 �Sƺ\�f%C˅�e�_V��9�\�]�bIB���z�Z�T]BLUj	����C��,�w8�\��PY� }?��߳2���nbP�ܵ��r���}�}������s?bN�:PtÁ�8a�]��%v����<\ |�&��7"�Ϻa��炍��q��J�Bp.�_L�Oc0��1(Y����EkL�ߍ�0��9��wc��\Z~L����1���o%8�^�)6���1w��85g!;Qu�O�L�pƛI��// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_GROUPSDLGGENERAL_H__3548112C_F36E_42D1_B073_78272B897DDA__INCLUDED_)
#define AFX_GROUPSDLGGENERAL_H__3548112C_F36E_42D1_B073_78272B897DDA__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "..\Accounts.h"
#include "afxwin.h"

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CGroupsDlgGeneral 
class CGroupsDlg;
class CGroupsDlgGeneral : public CSAPrefsSubDlg
{
// Konstruktion
public:
	CGroupsDlgGeneral(CGroupsDlg *pOwner);   // Standardkonstruktor
	~CGroupsDlgGeneral();

	BOOL DisplayGroup(const t_group *pGroup);
	BOOL SaveGroup(t_group *pGroup);
	void SetCtrlState();
	CString Validate();
	
protected:
// Dialogfelddaten
	//{{AFX_DATA(CGroupsDlgGeneral)
	enum { IDD = IDD_GROUPS_GENERAL };
	CEdit	m_cMaxConnCount;
	CEdit	m_cIpLimit;
	CButton	m_cMaxUsersBypass;
	int		m_nMaxUsersBypass;
	CString	m_MaxConnCount;
	CString	m_IpLimit;
	CButton	m_cEnabled;
	int		m_nEnabled;
	CButton m_cForceSsl;
	int		m_nForceSsl;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CGroupsDlgGeneral)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:
	CGroupsDlg *m_pOwner;
	CImageList m_imagelist;
	
	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CGroupsDlgGeneral)
	virtual BOOL OnInitDialog();
	afx_msg void OnContextMenu(CWnd* pWnd, CPoint point);
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
public:
	CEdit m_cComments;
	CString m_Comments;
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_GROUPSDLGGENERAL_H__3548112C_F36E_42D1_B073_78272B897DDA__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                             2��F�:�x���߭���K�F,1�g��Z����;b6��e\�4:�[-i�9�:��[�Q���{ QI��4��p� 4�v��Y��^�s)�$�QO�YWnI���iX���h�Wʔ�щ�k~�����\.�4�����I���M�� ���K�]�"��[�#a^��xW�a��t��lZT����ɡ��ku�1|Y�*@㸣��E��m���*���-d*7ȷ*@|�Y�D�,��'�[����)S��D$���h��2,Ԝ	����� ��HAh�fd7I:K,L8k�Pk�&j'z�>������[9�Z!Wf��|-��r]9`K)Y3u��M�{�����Q���d3D6�������Hn�p�7�����<�v�:�Ϙj��<	�ZoD����l�ǁ��(���/�E2�T�z �P��x#�n�U��93�K�J,V�=Mދ"x��UD���O:��J�R6��k�jL�Y�3�b��Nx��%u��p��G�u�w�j����R��X�*��)��U2n|�[K�R%i��ʈت�?��CI-2�<�P���,�@�k.���J�_"};�� 
�d>�j=A�:W���h����!��)렎,fLI�9�C�z�z���k�w������+�1��	���� ����|=RD�Rj\ʑ���ώ�������>���=���sէ��ڠ^(�o��e����g���j5_o��_xR'�3a����ީ''L�
H���Lʂ��lC�ۆ�=�<����A ah��=f�fj��_�~��~E�5���lDnD1�c4 ��Q�ҫ6]v��#�an�lR���aS-�%����	 -Y$��َ&��ĉ�~�����P���u��o�Z�-�����՜G�9�e?a�\����驹H��mF�-XdC�x԰����n8�u_�s�KafI�>�Dw�J�E�.�5JYv�$�=��h��p��3kڿ�x��n��Aun,i��:�����{��P��p�k,Ɖ^X��~�Ș|c=// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// ConnectDialog.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "ConnectDialog.h"
#include "Options.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CConnectDialog 


CConnectDialog::CConnectDialog(COptions *pOptions)
	: CDialog(CConnectDialog::IDD, NULL)
{
	ASSERT(pOptions);
	m_pOptions = pOptions;
	//{{AFX_DATA_INIT(CConnectDialog)
	m_ServerAddress = _T("");
	m_ServerPassword = _T("");
	m_ServerPort = _T("");
	m_bAlways = FALSE;
	//}}AFX_DATA_INIT
}


void CConnectDialog::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CConnectDialog)
	DDX_Text(pDX, IDC_CONNECTDIALOG_ADDRESS, m_ServerAddress);
	DDX_Text(pDX, IDC_CONNECTDIALOG_PASSWORD, m_ServerPassword);
	DDX_Text(pDX, IDC_CONNECTDIALOG_PORT, m_ServerPort);
	DDV_MaxChars(pDX, m_ServerPort, 5);
	DDX_Check(pDX, IDC_CONNECTDIALOG_ALWAYS, m_bAlways);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CConnectDialog, CDialog)
	//{{AFX_MSG_MAP(CConnectDialog)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten CConnectDialog 

BOOL CConnectDialog::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	m_ServerAddress = m_pOptions->GetOption(IOPTION_LASTSERVERADDRESS);
	m_ServerPort.Format(_T("%d"), static_cast<int>(m_pOptions->GetOptionVal(IOPTION_LASTSERVERPORT)));
	m_ServerPassword = m_pOptions->GetOption(IOPTION_LASTSERVERPASS);
	m_bAlways = m_pOptions->GetOptionVal(IOPTION_ALWAYS) != 0;
	UpdateData(FALSE);

	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}

void CConnectDialog::OnOK() 
{
	UpdateData();

	if (m_ServerAddress == _T(""))
	{
		AfxMessageBox(_T("Please enter a server address."), MB_ICONEXCLAMATION);
		return;
	}

	if (_ttoi(m_ServerPort)<1 || _ttoi(m_ServerPort)>65535)
	{
		AfxMessageBox(_T("Please enter a server port in the range from 1 to 65535."), MB_ICONEXCLAMATION);
		return;
	}

	m_pOptions->SetOption(IOPTION_LASTSERVERADDRESS, m_ServerAddress);
	m_pOptions->SetOption(IOPTION_LASTSERVERPORT, _ttoi(m_ServerPort));
	m_pOptions->SetOption(IOPTION_LASTSERVERPASS, m_ServerPassword);
	m_pOptions->SetOption(IOPTION_ALWAYS, m_bAlways);

	CDialog::OnOK();
}
                                                                                                                                                                                   ���؝{��ۓ�*�@�*��&UR�kaQ�A=��b����?�����������u��in}�����,����IZ��Uw�GJ%����f#��A�(d3�,�l�Et7u�xF�<��9�+�bm��������{6F6\��c�ӿ��t(XP�Lc�RGL�V=E�b���3�Z�es�������̟vZ��q�A0=F�e��I����{�lEf&�.CxsO�5����/��u�p��p�	i~���?ʵ;/����§'w{8�~��5���b)���i
j��8���@��vx�8@[#+�1K� ���5���G��-h�䝚�>�����S]�KV�[G�6ݕ���j���j1L�L�q�w� ^bC���-o���:���
Zz
��p��6�C|­�>C\�qK.g8��+�-S�� �m�C�C 5@�f��ٞ�ٵ`!�N2׻
`���R ���[�C�#���,�4'��[�9#��$j�%�Y�z�pѿ�ݜw////////////////////////////////////////////////////////////////////////////
//
// splitex.h
// Based upon code from Oleg G. Galkin
// Modified to handle multiple hidden rows/columns

#pragma once
class CSplitterWndEx : public CSplitterWnd
{
protected:

	int *m_arr;  // array the keeps track of actual row/columns versus perceived row/column
	int m_length; // length of above array

	int Id_short(int row, int col);

public:
	void GetRowInfoEx( int row, int& cyCur, int& cyMin );
	void GetColumnInfoEx( int row, int& cyCur, int& cyMin );
	BOOL IsRowHidden(int row);
	BOOL IsColumnHidden(int row);
	CWnd* GetPane(int row,int col);
    CSplitterWndEx();

	virtual ~CSplitterWndEx();

	inline BOOL BarIsHorizontal() const { return m_nCols < m_nRows; }
	__int64 GetSizes() const;

	void ShowRow(int row);
	void ShowColumn(int row);

	int IdFromRowCol(int row, int col) const;
    void HideRow(int rowHide,int rowToResize=-1);
	void HideColumn(int rowHide,int rowToResize=-1);

	BOOL IsChildPane(CWnd* pWnd, int* pRow, int* pCol);
	CWnd *GetActivePane(int* pRow, int* pCol);

// ClassWizard generated virtual function overrides
     //{{AFX_VIRTUAL(CSplitterWndEx)
     //}}AFX_VIRTUAL

// Generated message map functions
protected:
     //{{AFX_MSG(CSplitterWndEx)
      // NOTE - the ClassWizard will add and remove member functions here.
     //}}AFX_MSG

    DECLARE_MESSAGE_MAP()
};

                                                                                                   �騏��o��w����^_X@��@ٴY���D�I�&������Ųk��j��6�cj��g��&��E�Q�s/�G������<I�;�����0l�,��d-]_�yZ��0{���%"����D>���G߹�=�qR!�\��;;��YD�c�J�TY������Yl��ք�1���u=��⼘:�9�`�;����m� K�T�E2X�i N�Ƃ"`�1;r���x���MVDαAuh�E܈v�7��"�׋|Rm �l��a�ͦ�Q�.tR�P�,Df��:�T���ۏI`�2���k��Y#<���{��NxC��γN�'���\]��O�tf�j����^�p�G$o�E ��ٺ�i��E��v�xk�Jr���y�	4"����hg�9KBd9Sѕ���Ǵ3(��hz*� ߁�*��S��ꣵ������%a.2*����Y�Q,a�B������gM��oy�k}@�������;G����R~},�N��Y��mZ�@����n3m3���"�L�%(��2S��vF�1���d�)�?}s܉��.��|f���+����=�>�9��dr@-i�PS�b
β�TN�Y��`��8"q���퀻>T�L�m���������孾)������C��Qvڏ���?�.�͉�@�w����'�yK-��D�p/��	A?�>3�H1������q�����'�p.��P����:�]l�f��{��a�v5��B|��>:�¶!��1�����ڑ	M�G��L��_��`�h�ϲ��� �B����aC��'h��E�~�]�=ͣ� ]*�JbΔ>C��&���k����w��f[��v'���XRLz�1l�	�kX���6�~�!���J]�Fn�Aݥ����L�2�j���W�$����y���R���8�8��S¦	���`�Y>�b_�Y!I�3!���J7�&9��(��_��Fb�eslNt�ε�@%��RǬӂa�Z���B��]-�A'��l[����7DD�H��dʹ�4�Δ��k^�o�<�����@P�D��Ud@~�&�#�����LM��:�5�͇���� �r��/j��	m�^f�ܭ|�!,w�������	���u�x �h�/��;�|���8r}J��𖢅q�ao��a�¶N1#O�:�č�˰cنL�:��+ʟ�v�g�Nb��՗��� �Q�<�0�'�͚0/F����F:=ڈNZ�������dbs�C8I�w�<�j�$���uiJ����L6�y�]�`����y��l�������!<;
7�U�J����!���F���x^RÛ;
��*;E���=�$��!V�,�� �L��������c�0]%f�ry4J�pT7"��W!$��� `�}*��h���ۏ��G�ɕ�R#F����Üje}A��><���P�Xz��p�������+ߨ�kV8(��1zz&�R���,��2�R�H��w��_�K�eU�bp_��,�'�7H~��ыݘz�=�N[�'�9B��a�Q�6�(l��w޴'��Y6�����{��j�P�)���'�u*K�76� 9�e��.jʌl"����户�%��EK^������=��|�<m�����V��胾���-��쒞9fr��ª`����73mA�Z]�]�;|�p`����zv>��;���������.�݋%�HR�l�t��ظ@�R��&�H�����8n�篃�5����J�H���}���3������NTj]�M�v��x,F��^�c-�p��k��\���+0H�.�9��$-r>���xh���+�&�����{E�4��ۅ��Է�9����L'ى-��ㄛo�:�j�/���T  �z���%y��G�i��~�+��EМ/� �'"��?$u�/������0�(����T􂳉���
8x=3���(�^)��:�0��e�{�����r�� p�Ҏ��9�%s��q�"��g�#�����Vbq���.�vgmy�9j#ZLNі�G�gj,�%���^�� ��/Fn���"�ENާ���M��i 2��źl����u�=����L�-�/������cD*N`�)Z4�o��K�Dk��?.���=k� ��Go˅0��@J1]�;�^'�u���o�߁�ĬJpQ�n6�2tj�& ����y>�/��:NQ�p��S�TY�*����3b���%1 ������
i�+j��k*��|V�AX������Y*���o��ud�,��ӆA�K�61��@�h�X���|���K9Nź���z}�z�[�tY��,:�R�f� ���C,�bW������_�*�嚰���CA�R���y����7 �Sw�X���m�N��y҉la@<�.���i�˰;��󔼍a],ߘ<�=��}��Fz�-Qh�Q�]%Ƞ�?Vi�2�3�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// OptionsSecurityPage.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "OptionsDlg.h"
#include "OptionsPage.h"
#include "OptionsSecurityPage.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsSecurityPage 


COptionsSecurityPage::COptionsSecurityPage(COptionsDlg *pOptionsDlg, CWnd* pParent /*=NULL*/)
	: COptionsPage(pOptionsDlg, COptionsSecurityPage::IDD, pParent)
{
	//{{AFX_DATA_INIT(COptionsSecurityPage)
	m_bInFxp = FALSE;
	m_bInFxpStrict = FALSE;
	m_bOutFxp = FALSE;
	m_bOutFxpStrict = FALSE;
	//}}AFX_DATA_INIT
}


void COptionsSecurityPage::DoDataExchange(CDataExchange* pDX)
{
	COptionsPage::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(COptionsSecurityPage)
	DDX_Control(pDX, IDC_OUTFXPSTRICT, m_cOutFxpStrict);
	DDX_Control(pDX, IDC_INFXPSTRICT, m_cInFxpStrict);
	DDX_Check(pDX, IDC_INFXP, m_bInFxp);
	DDX_Check(pDX, IDC_INFXPSTRICT, m_bInFxpStrict);
	DDX_Check(pDX, IDC_OUTFXP, m_bOutFxp);
	DDX_Check(pDX, IDC_OUTFXPSTRICT, m_bOutFxpStrict);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(COptionsSecurityPage, COptionsPage)
	//{{AFX_MSG_MAP(COptionsSecurityPage)
	ON_BN_CLICKED(IDC_INFXP, OnInfxp)
	ON_BN_CLICKED(IDC_OUTFXP, OnOutfxp)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten COptionsSecurityPage 

void COptionsSecurityPage::OnInfxp() 
{
	UpdateData(TRUE);
	m_cInFxpStrict.EnableWindow(m_bInFxp);
	
}

void COptionsSecurityPage::OnOutfxp() 
{
	UpdateData(TRUE);
	m_cOutFxpStrict.EnableWindow(m_bOutFxp);		
}

BOOL COptionsSecurityPage::OnInitDialog() 
{
	COptionsPage::OnInitDialog();
	
	m_cInFxpStrict.EnableWindow(m_bInFxp);
	m_cOutFxpStrict.EnableWindow(m_bOutFxp);
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}

void COptionsSecurityPage::LoadData()
{
	m_bInFxp = !m_pOptionsDlg->GetOptionVal(OPTION_INFXP);
	m_bOutFxp = !m_pOptionsDlg->GetOptionVal(OPTION_OUTFXP);
	m_bInFxpStrict = m_pOptionsDlg->GetOptionVal(OPTION_NOINFXPSTRICT) != 0;
	m_bOutFxpStrict = m_pOptionsDlg->GetOptionVal(OPTION_NOOUTFXPSTRICT) != 0;
}

void COptionsSecurityPage::SaveData()
{
	m_pOptionsDlg->SetOption(OPTION_INFXP, !m_bInFxp);
	m_pOptionsDlg->SetOption(OPTION_OUTFXP, !m_bOutFxp);
	m_pOptionsDlg->SetOption(OPTION_NOINFXPSTRICT, m_bInFxpStrict);
	m_pOptionsDlg->SetOption(OPTION_NOOUTFXPSTRICT, m_bOutFxpStrict);
}                     �k�E���f_�S %�S� u�����|֠|���a'�f\�����L���� 	R��J��^'Db��A"b4�^�E�3_�����^�6�OZN�>���c
6v�Y��u�G��l`G��b�U��@��SjE,���!��k�#�ы����U��,�	�#�
�u��)�����g�}&�HB0��b�F�jG��es*4]���@4��s�3�\�d��5L�B!�Hs$[B(Pt16:0��4��:�W4*O�?�o�䆗9�^�Cz
����l�W�h.��ИC�ҝ���	g�cA���'⛢,����F
i9	w��b<�k�i���D$g�I��艛J2B�B�ń0�^��&��~��?�W��QdY�$����B�t3גE�� ��m�DN-�%�mS�@��G����;+���+�E���t<!;�z*i��NdzG��Mm#��J߼Ht�Y��r-E�h��{V�P���,Gm}��y�0���V�q��9��۞A� �X#���7mKTO����   2 F	  3	  4
 5 6  8
  9
  : 
  ;	  < 	  = 	  > 	  ? @ ERROR MessageType InnerClasses &Lwebsocket/drawboard/Room$MessageType; DRAW_MESSAGE IMAGE_MESSAGE PLAYER_CHANGED flag C $VALUES '[Lwebsocket/drawboard/Room$MessageType; values )()[Lwebsocket/drawboard/Room$MessageType; Code LineNumberTable valueOf :(Ljava/lang/String;)Lwebsocket/drawboard/Room$MessageType; LocalVariableTable name Ljava/lang/String; <init> (Ljava/lang/String;IC)V this 	Signature (C)V access$1100 )(Lwebsocket/drawboard/Room$MessageType;)C x0 <clinit> ()V 8Ljava/lang/Enum<Lwebsocket/drawboard/Room$MessageType;>; 
SourceFile 	Room.java      A B C $websocket/drawboard/Room$MessageType ! D & E & '         java/lang/Enum clone ()Ljava/lang/Object; websocket/drawboard/Room 5(Ljava/lang/Class;Ljava/lang/String;)Ljava/lang/Enum; (Ljava/lang/String;I)V@1     @    @    @    @               	       "      
� � � �            6 	 ! "     5      *� � �            6 #        $ %    & '     H     *+� *� �            Q  R  S #        (          )    * + ,     /     *� �            6 #        -     . /     �      \� Y0� 	� 
� Y1� 	� � Y2� 	� � Y3� 	� � Y� 
SY� SY� SY� S� �            :  A  H - M < 6  )    0 1    2    
   7 @                                                                                  �5�(y��k�HX�7��}�?x�QY:31^��/!���)FB����>��秆;��7�G=�gY�{]f�g�M�W:\q듣>+��t��61�E
#�pa�s����HJ���7!��h�)z&>X�x�&��L2��g����_��U�XIG��6F)[��!_e���%���xgl4� ��b�O�2�x���Vc�:w����	��l�l��g���X��\0�+E ��v�Lſz�逸�W3?�Paj�Q�F�x������nQ䏏
�V������d�����r{b�vq�`�N _�sbP'��(eI�s����T'���Br*�&�O�]��2Áp�0MDm�[�a?
P,�>�D�P�A3&}|�<�؃��mʽ[^�`G#L���`������y;k2]��Q�����oy��s	��� ?�D�G�#���Md �T߮���'�|Br%�)W���c�!lV-���[[�z?#��� YkuxǷ�-����yQǓ�*�ِ��H���kI��
2^��y*YI0��#�����r4�W|E��j�j�+w�<�2+�6ágѭ%�i,����QG��G��������yPn�����p�\,+>�:r/���5�E�i4U���۾Y�J�cN����}vb2��1�i��5~k��_���	֩@W�Qg�'fbp:l�A���Y�Qƹuʄ�k��4GM/��fs�n���_ns3H��%��8�j�6�D��aj����eH���"�/q jSnQ�a�t�E�ƚ�w��I�c�̆��j�
g��?t+m�hN��ϯS�<�<��IB	�-{�9L80(��5w��T�8W#C��!�wb@����P}��ք��p��wk�7~>��(��	�D��$��s6�cf�op{��Q�Rz�y節R��j�w[rG|�m@��E<�cˍ��A�i��t<D'J��
���Q�CE�~�8�:���(�י�Xj�+�"�Ci�����'T�
T�u)R���M�����hB�ĸ�R��4`<ӛ^�s��oE)G��	��UM�0񹉚'�S�����=u~��L~�؇B(B��4�s�ɚ6Y��R9�|/tO�4=�.�Ē����W����;�	��l�J��ӝw�"e��Vk`�5�=�b@ӥ��z���c3�x֡���r�J �v(�R�-#���Y��Q\@�g�-�G"��k��F62���������1`>Rr��	D5� r�i�DN]�8#��\́��Ϗ\�i&���L�k�Øݜ�N{)��bmp� <�qSՀ:��Q۽�'�D�4%?�!f�_�3���|m�Tv�E�7�Ȩ��#Hu�x-�{@�7l~�](��ƨ�8{���c5��*x��lxi���U�F��]`�]&
Z�s|�s���C�FR{��%�4BH�N�<D��IŰ�k'k`A�gP�D�x(��lF�N`.��ʦ��Ν��4`��u�k�i7)V6?�1�c�u�oG�h�HŕMְYҷ��1X�N|&2W�ƈwVeUK(�s6P�y9m�^h$�y���0���c���b:�d �A�(�r��'�K��o��6�W��af�Z����$` )� Q�ǜ����5�1��áp�cK�h���B����FI��!,Wp��9G���!����kc%
�:T��cH�=z&��زa����Z!�@�⥩Tl�=}z
����Qd�BV� �Ϥ�g�e��<|P4��8�ް9p=����Q��f� 1��)�8*'��H��đ��<�!s���b�Ly�A��5C@6�1�+E1x7<�7��x�tI�ey��Ȇ�ϐ��w�����@b��x2:����7�KkP�qi���������\��|%�'����㹧��y�@'���lO��c+a��1X�I�Z��y��u��"�����i�+<��:�s)nVx���SR>M���8��	׬�`ApV������ʩZ�0f���lN���!���ݚSk�z,U_	8�+��ì1=iE�*p����V�6`�r%1r��ⲅ�K� �kӭ�i�����I�h͕����\`sL�u��V*s�O�ߊu����}h9#�3,LV�'�6�!f��K�`I	˹�b�N�p�'��l�*k��Gz�.��@�`TR�夣}�)8F�o�æx ��ޟ�E�±��#�j͋��Vp=,s��(A�:�^�F�xQ��f��XpBx��H�B���G@�����)����0"�+eg:�	�j��AL�u%��x	Gۈ4���Қ&<�rn�=�F�(���U��Qv��:Q$�@���%�I�0ǌq9�R�Tu���}���C��×�x�Px��:���oނ�)?1��*�h>x2�n�Je��tW���+\�Or*�݂|���B�;�NTx�<{MO�r�;/�e@�_���څ-ё��<�i���`�G��<-8��17#����.5LH`�t�����9x�A	�ǘi�! E�Ra�jW�j����>����rL.�F=c�e�'�4�)60V�D O��]=3����|�$�Ԟ��J��N0�o�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// OptionsGSSPage.cpp : implementation file
//

#include "stdafx.h"
#include "filezilla server.h"
#include "OptionsDlg.h"
#include "OptionsPage.h"
#include "OptionsGSSPage.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// COptionsGSSPage property page


COptionsGSSPage::COptionsGSSPage(COptionsDlg *pOptionsDlg, CWnd* pParent /*=NULL*/) 
: COptionsPage(pOptionsDlg, COptionsGSSPage::IDD, pParent)
{
	//{{AFX_DATA_INIT(COptionsGSSPage)
	m_bPromptPassword = FALSE;
	m_bUseGSS = FALSE;
	//}}AFX_DATA_INIT
}


void COptionsGSSPage::DoDataExchange(CDataExchange* pDX)
{
	COptionsPage::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(COptionsGSSPage)
	DDX_Check(pDX, IDC_PROMPTPASSWORD, m_bPromptPassword);
	DDX_Check(pDX, IDC_USEGSS, m_bUseGSS);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(COptionsGSSPage, COptionsPage)
	//{{AFX_MSG_MAP(COptionsGSSPage)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// COptionsGSSPage message handlers

void COptionsGSSPage::LoadData()
{
	m_bUseGSS = m_pOptionsDlg->GetOptionVal(OPTION_USEGSS) != 0;
	m_bPromptPassword = m_pOptionsDlg->GetOptionVal(OPTION_GSSPROMPTPASSWORD) != 0;
}

void COptionsGSSPage::SaveData()
{
	m_pOptionsDlg->SetOption(OPTION_USEGSS, m_bUseGSS);
	m_pOptionsDlg->SetOption(OPTION_GSSPROMPTPASSWORD, m_bPromptPassword);
}                                                                                                                                                                                       
��s��Ob��b8ugb)^J�+��ݳkGL�l�?�T+�IG�L�8��q*�x�<��e��7p߾@��w�t��?@�9��ؖ�J�����#x���%C��Y�V� �?��V��=w.�4�!s/?R�c:9HL��yB!���SBb�Hw*dZ�����&Fb�{@ﳟ�N��@*$^�������څ���"x��m-=~(����C���~#��'���@�/�{�V�|,g�@9��눥�B�-�E�hd�X`ٳ~�dA)ЯT�2�,�������٘��|�mDw����;5�8�vd�?5aa��5i������$N�h*b�b/���I��O�������������9tEN��.9�<H�]%4>���@@�b*�,g:5��>�P�ϩY�o>�J���	JP��`����d��l�J���� �>��?��j!�	�9�*s2���FB�k:o��u��������G�Ȇ�"�!�ƝT�/{ç��G/*�j�Gs�K� ��F6֋M\���a����47x*����h&���ӌ�傅=�C����ס��,cOE$}�*�`�@��w�t0�a$�1�&�gX9v1ʨVs*ۅ�Z�L� ��'ؓ.ПS]Ձi�RZq"˴Y��<�E/�j��B*E4���&�'K��~)�v��<����v~�zb��34�.�I��MM��s�l'��!ai
4���n�=Z�%t ð.\�C���E���MB�+��~���Q
u�f�1��`�)���#�㰑�l��2��3�V��ԟp�abI�.T����Y�*Ys��PՑ.���P�o��TZ����a����|�#��c���PY�i��K�j��f��^�bu�6��i�]c&�:�)��F�J�L��N�>J��3�<�ɝ���T��-���T���Bk[F蝹{oh��1�}5��i���;�P�}��"�XD������H���n��BK�X�:}�\A�mؖ����b�	fAm<0�N������bH�CVq(���M��u�CX��Z��]Ê__6Ts�ʰˠ� .�������O�[�,��Kή,ɱ��W�m�NsO��)��@��m�7��b���7�a���HvV�ɻ61�+�'�jܖa"�XV�����9�Dp8�<�wA&.��^K��M^�^x�E@��{�
����Ca�6�L�.�xYV��G�3�ɒ�E$|{��g��
�n3v�=źZpX��.��F@��?]��6<��XƩñ��)�*;�
��L!��oA6��"Yi]��g]A��rqJV�ú���M_	��2�s$הgO %�*�	�����p�B%6�)��hb��\����g�ꨌ�<A.e�n/_B�2��AS�����HTl��x!F����&e��0�`�{�O����D=F�:7�U|�������Ie��\�P%��;�*̊��팙�o`��{	m�f�px�V%��]����7R�G�q��"�b|_ϼ0[�M�6 ,*Ii�,�r8��+���c&�=�1// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_USERSDLGIPFILTER_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_)
#define AFX_USERSDLGIPFILTER_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "UsersDlg.h"

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CUsersDlgIpFilter 
class CUsersDlgIpFilter : public CSAPrefsSubDlg
{
	friend CUsersDlg;
// Konstruktion
public:
	CUsersDlgIpFilter(CUsersDlg* pOwner = NULL);   // Standardkonstruktor
	~CUsersDlgIpFilter();

	BOOL DisplayUser(t_user *pUser);
	BOOL SaveUser(t_user *pUser);

protected:
	t_user *m_pUser;

// Dialogfelddaten
	//{{AFX_DATA(CUsersDlgIpFilter)
	enum { IDD = IDD_USERS_IPFILTER };
	CString	m_AllowedAddresses;
	CString	m_DisallowedAddresses;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CUsersDlgIpFilter)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:
	CUsersDlg *m_pOwner;
	void SetCtrlState();
	CString Validate();

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CUsersDlgIpFilter)
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_USERSDLGIPFILTER_H__5348112C_F36E_42D1_B073_78272B897DDA__INCLUDED_
                                                                                                                                                                      *v�;�'e�Ԩ��]��}���X����So�VYF������؂�l=�-@�E"��_���Z�/�<��^�O���P<60><*pYq+��%O�^{��/K�������W3xu~�0v�h�)��	���
x�Y���	��o.^�ÙV8�0�GrFh\���dj.u JNͥ�HUt���z�o�?��U�޷�Cn���������#��d�r"Ϙ~=6à����ޫ/��=�V��ر%�v��d-~Rdj���9��!����@����:	.�ǫҿ�TkA�/���VN���QD[�eI�Ӻ�\#���f;���M����ժ�9���oK�hT�R��?a0��m�g ��xu��y�q������U��A8�V^�xBu)ES]�p��;�.�Df�U/�ɟI�Z�t����ɭ�z�C�P�>����	=�҂#�!�g�����?�O����S�yHawǼɛ@�0��X'"`�3 ��g]����o28bZ*ʮ~Dx�.�f$�����%�\�S�Z�23��v|�8u��[?�$n��KhO\jU�i3�4cM����R8�j!@j�&ud'� �v؃)��^��l�h��N���(P�@��	����jm���)5� ���m`�p�O���е�:��E@cu�3�ˬ"������Na5	X�Xh�����p���8�>l5�l"��
CE&�j�+�ޅ,
w���&U^cۤB_SW�Qp[��.�y0E��r[�����X �4n4����B��s])��J��w�Pja�:�H�4�q}��s�O:5y3quq�Y�
g-#��2����\13y�R��5��T!���h����,���D�"�ʶ�%�xUS} �'T<[�b��~*��c"�vz�0�9\�#%�)i���k�S.�����n+� �+.�a�;��g%H�w�i�oy*
I�� zn�'S�r}+ ���E��#�f�K���fI ;v/�@�$������_	�FA��>��G�J����g)���F?d��Ӥ#�w�����k���ȫ71Sر��UܫR�?c0qTX��ӋU�9-`6N%�q��4c��ͬV)�	>t���Oq3�+���H)+��P���3}�Sx@���̇�����v�H�.�,Pt�'-�	���dKj�\���^/�w۸����e�#/��_G�K'���zS���:w�* ��/�!��o���M���R����N�;�,<3 �ʈ�{NѺ}��	� D�=>���������,��ɨh�m�q0*�#n0�^2M�9k�ȸ��Z7,,���Ǣ�1���*N�_��r�&���<z�g�gK�ؠH�<g6o)/�����OD�g�΢��6/��h�c�N��W4d�H�1K�,�j>�H�|�s�n��Y'*�֩����x���5��9�����gN�����G�&q5Z-�^�#��Y	.��:�=���^?&�����B�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#include "stdafx.h"
#include "filezilla server.h"
#include "GenerateCertificateDlg.h"
#include "../AsyncSslSocketLayer.h"
#include ".\generatecertificatedlg.h"

IMPLEMENT_DYNAMIC(CGenerateCertificateDlg, CDialog)
CGenerateCertificateDlg::CGenerateCertificateDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CGenerateCertificateDlg::IDD, pParent)
	, m_city(_T(""))
	, m_cname(_T(""))
	, m_country(_T(""))
	, m_email(_T(""))
	, m_file(_T(""))
	, m_organization(_T(""))
	, m_state(_T(""))
	, m_unit(_T(""))
	, m_keysize(0)
{
}

CGenerateCertificateDlg::~CGenerateCertificateDlg()
{
}

void CGenerateCertificateDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	DDX_Text(pDX, IDC_CITY, m_city);
	DDX_Text(pDX, IDC_CNAME, m_cname);
	DDX_Text(pDX, IDC_COUNTRY, m_country);
	DDV_MaxChars(pDX, m_country, 2);
	DDX_Text(pDX, IDC_EMAIL, m_email);
	DDX_Text(pDX, IDC_FILE, m_file);
	DDX_Text(pDX, IDC_ORGANIZATION, m_organization);
	DDX_Text(pDX, IDC_STATE, m_state);
	DDX_Text(pDX, IDC_UNIT, m_unit);
	DDX_Radio(pDX, IDC_KEYSIZE1, m_keysize);
}


BEGIN_MESSAGE_MAP(CGenerateCertificateDlg, CDialog)
	ON_BN_CLICKED(IDOK, OnOK)
	ON_BN_CLICKED(IDC_BROWSE, OnBrowse)
END_MESSAGE_MAP()

void CGenerateCertificateDlg::OnOK()
{
	UpdateData(TRUE);
	if (m_country.GetLength() != 2)
	{
		AfxMessageBox(_T("Please enter the 2 digit country code"));
		return;
	}

	if (m_file == _T(""))
	{
		AfxMessageBox(_T("Please enter a filename"));
		return;
	}

	m_country.MakeUpper();

	int bits = 1024;
	if (m_keysize == 1)
		bits = 2048;
	else if (m_keysize == 2)
		bits = 4096;

	CString error;
	USES_CONVERSION;
	if (CAsyncSslSocketLayer::CreateSslCertificate(LPCTSTR(m_file), bits, (unsigned char*)T2CA(m_country),
		(unsigned char*)T2CA(m_state), (unsigned char*)T2CA(m_city), (unsigned char*)T2CA(m_organization), (unsigned char*)T2CA(m_unit),
		(unsigned char*)T2CA(m_cname), (unsigned char*)T2CA(m_email), error))
	{
		AfxMessageBox(_T("Certificate generated successfully."));
		EndDialog(IDOK);
	}
	else
	{
		if (error != _T(""))
			AfxMessageBox(_T("Certificate could not be generated.\nReason: ") + error);
		else
			AfxMessageBox(_T("Certificate could not be generated."));
	}
}

void CGenerateCertificateDlg::OnBrowse()
{
	UpdateData();
	CFileDialog dlg(FALSE, 0, _T("certificate.crt"));
	if (dlg.DoModal() == IDOK)
	{
		m_file = dlg.GetPathName();
		UpdateData(FALSE);
	}
}
                                                                                                                                                                                                                                                                                          ���}��B�D;D�;�8�{��uFxAVVLd�h�P�ي"��p�Ív�(�>�T^�O���'U��n��`++u��|YEF6�a���!��CŔ�(��d/��*��Yq�h؉9`�^�\l8eϫ��	wF�:5�\��07�)ש)�hx3� ᓔ&�嫊D��+�GU����H>Df��ԝT��v5��=�!a`��5�u�e�}�fClL�_]'�+��#vns4�`� ��i��=�N�����)k�	�u�lS}�i�ݰ�#�*����N�8ɉo��'�UL]��?^N"�֩�T����e�� �r��kx�ֈ�b�q�ye�nb��қZ�^�Au"�ةxd��'�o�V�E?ڴ7���("�|M#�'�����^��=#�]ǧ�j��@��[f�W�-���!fB��r�E�-c�sϟ�ܛ�p��ŕऎə�YgN���r]���>�����T{Z_��֑:D���%96���͹�"{1
fN�r�P�v<eWi// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSDLG_H__3E60F2D3_99F3_4271_92A3_2CF71AF62731__INCLUDED_)
#define AFX_OPTIONSDLG_H__3E60F2D3_99F3_4271_92A3_2CF71AF62731__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Options.h : Header-Datei
//
#include "..\OptionTypes.h"

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptions 

class COptions;
class COptionsPage;
class COptionsSpeedLimitPage;
class COptionsDlg : public CSAPrefsDialog
{
// Konstruktion
public:
	CString GetOption(int nOptionID);
	__int64 GetOptionVal(int nOptionID);
	void SetOption(int nOptionID, CString value);
	void SetOption(int nOptionID, __int64 value);
	BOOL Show();
	COptionsDlg(COptions *pInterfaceOptions, bool localConnection);
	virtual ~COptionsDlg();
	BOOL Init(unsigned char *pData, DWORD dwDataLength);
	BOOL GetAsCommand(char **pBuffer, DWORD *nBufferLength);
	COptions *m_pInterfaceOptions;

	bool IsLocalConnection() const { return m_localConnection; }
	
protected:

	std::list<COptionsPage *> m_PageList;

	COptionsSpeedLimitPage *m_pOptionsSpeedLimitPage;

	static bool IsNumeric(LPCTSTR str);
	
	struct t_OptionsCache
	{
		int nType;
		CString str;
		_int64 value;
	} m_OptionsCache[OPTIONS_NUM];

	// add a page (page, page title, optional parent)
	bool AddPage(CSAPrefsSubDlg &page, UINT nCaptionID, CSAPrefsSubDlg *pDlgParent = NULL);

	CSAPrefsSubDlg* GetCurPage();

	bool m_localConnection;
	
// Dialogfelddaten
	//{{AFX_DATA(COptions)
	enum { IDD = IDD_SAPREFS };
		// HINWEIS: Der Klassen-Assistent f�gt hier Datenelemente ein
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptions)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptions)
	virtual BOOL OnInitDialog();
	virtual void OnOK();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};


//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSDLG_H__3E60F2D3_99F3_4271_92A3_2CF71AF62731__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                <�_21�.����l<r����S�D:%2z��M�V,��]�Kl���_W/B��Vb�Cn�t���>���Һ��4 �ڇ�v��O�[�v+��q=�vE G���ۉ��I2C�A���r I�{"��cP܇�;��d�yd�e�#MM���9�}�q�'y��Kq!�|�M��p�U������J텠��F=Sʯ:�?D��0��o(����Ҩ�F��v�A湢pֵ3��x��A�����S��?��8��\>K��t�.��[ o�Y.F�_E�_��k2p�i��?)�[��F��:�p�>A'(�栣�W�l]�R���ƫΖhh.b�<s����}��!(�ٱun�E�ͱԤ�!�W����! B�8_�^���e����`�H$ĳ��T��bi��W���ɋ�F���}�1-���`le����s�#A|OED�_�>������0�r�|s���O)DџkH� Q��Q�wWh���P�m.�Mj���[q�e[h��// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_GROUPSDLGSHAREDFOLDERS_H__3548112C_F36E_42D1_B073_78272B897DDA__INCLUDED_)
#define AFX_GROUPSDLGSHAREDFOLDERS_H__3548112C_F36E_42D1_B073_78272B897DDA__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "..\Accounts.h"

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CGroupsDlgSharedFolders 
class CGroupsDlg;
class CGroupsDlgSharedFolders : public CSAPrefsSubDlg
{
// Konstruktion
public:
	CGroupsDlgSharedFolders(CGroupsDlg *pOwner);   // Standardkonstruktor
	~CGroupsDlgSharedFolders();

	BOOL DisplayGroup(const t_group *pGroup);
	BOOL SaveGroup(t_group *pGroup);
	void SetCtrlState();
	CString Validate();
	
protected:
// Dialogfelddaten
	//{{AFX_DATA(CGroupsDlgSharedFolders)
	enum { IDD = IDD_GROUPS_SHAREDFOLDERS };
	CButton	m_cDirsCreate;
	CButton	m_cDirsDelete;
	CButton	m_cDirsList;
	CButton	m_cDirsSubdirs;
	CButton m_cAutoCreate;
	CButton	m_cFilesRead;
	CButton	m_cFilesWrite;
	CButton	m_cFilesDelete;
	CButton	m_cFilesAppend;
	CListCtrl	m_cDirs;
	BOOL	m_bDirsCreate;
	BOOL	m_bDirsDelete;
	BOOL	m_bDirsList;
	BOOL	m_bDirsSubdirs;
	BOOL	m_bAutoCreate;
	BOOL	m_bFilesAppend;
	BOOL	m_bFilesDelete;
	BOOL	m_bFilesRead;
	BOOL	m_bFilesWrite;
	int		m_nLnk;
	int		m_nRelative;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CGroupsDlgSharedFolders)
	public:
	virtual BOOL PreTranslateMessage(MSG* pMsg);
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:
	CGroupsDlg *m_pOwner;
	CImageList m_imagelist;
	
	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CGroupsDlgSharedFolders)
	virtual BOOL OnInitDialog();
	afx_msg void OnContextMenu(CWnd* pWnd, CPoint point);
	afx_msg void OnItemchangedDirs(NMHDR* pNMHDR, LRESULT* pResult);
	afx_msg void OnItemchangingDirs(NMHDR* pNMHDR, LRESULT* pResult);
	afx_msg void OnDirmenuAdd();
	afx_msg void OnDirmenuRemove();
	afx_msg void OnDirmenuRename();
	afx_msg void OnDirmenuSetashomedir();
	afx_msg void OnEndlabeleditDirs(NMHDR* pNMHDR, LRESULT* pResult);
	afx_msg void OnDblclkDirs(NMHDR* pNMHDR, LRESULT* pResult);
	afx_msg void OnFilesWrite();
	afx_msg void OnDiradd();
	afx_msg void OnDirremove();
	afx_msg void OnDirrename();
	afx_msg void OnDirsetashome();
	afx_msg void OnDirmenuEditAliases();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_GROUPSDLGSHAREDFOLDERS_H__3548112C_F36E_42D1_B073_78272B897DDA__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <%--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
--%>
<%@ taglib prefix="my" uri="/WEB-INF/jsp2/jsp2-example-taglib.tld" %>
<html>
  <head>
    <title>JSP 2.0 Examples - Book SimpleTag Handler</title>
  </head>
  <body>
    <h1>JSP 2.0 Examples - Book SimpleTag Handler</h1>
    <hr>
    <p>Illustrates a semi-realistic use of SimpleTag and the Expression
    Language.  First, a &lt;my:findBook&gt; tag is invoked to populate
    the page context with a BookBean.  Then, the books fields are printed
    in all caps.</p>
    <br>
    <b><u>Result:</u></b><br>
    <my:findBook var="book"/>
    <table border="1">
        <thead>
        <td><b>Field</b></td>
        <td><b>Value</b></td>
        <td><b>Capitalized</b></td>
    </thead>
    <tr>
        <td>Title</td>
        <td>${book.title}</td>
        <td>${my:caps(book.title)}</td>
    </tr>
    <tr>
        <td>Author</td>
        <td>${book.author}</td>
        <td>${my:caps(book.author)}</td>
    </tr>
    <tr>
        <td>ISBN</td>
        <td>${book.isbn}</td>
        <td>${my:caps(book.isbn)}</td>
    </tr>
    </table>
  </body>
</html>
                                                                                                                                                      ��>!~�r����2���MA(`�'�k�	kq�֙�5� �> >n�5�܈���n� �oy� �k)@�����At��9�w�$��K���,ڵ������6����̐�5C�y���=�˵���S��@��mV�z��
��\���UCAͪ����L��ع�\�WC��|����O��38֔�t&��Lw�W��8���4�?JY<@x���؈�^�j>sU#E��nr���X@ȣ��L��g%[��o��o��<�n�O?�l/���[������{����$�ꆂ0�9��H|7���<{�
�#�U�JV�{0u�s�pv<�i��f�
#��4����W!��E�|�{������@�O��r?k�Ӄ�	*�����k\刹�7���� ���S,�L�kfn�/BO-�_#�;bS�-�^�Uڎ�y��>�L�'�Z�����2x�L&�k��SЬ��[�e�O+܃&����q*�6����nY����B�kI�Hd%P�����u����pz�?fy%�&�δ��2a�|o[�����5�ۄ��DK�agX�U۠���R(]�>':���'��.����=��&u��-��������������+�ā�X��,�c�pI!-Gꛣ�3�ӯ_�W����vA�A�&k���H���(*՞��à�0��[QeU�}ɘ�c��ǭ�>���U�S�>M7�/��6W�Ns.���g>��~�! �� ���p�>��>�ٸ_l���f46t�2H�/v7��t��N��T����>��s琟ʽ�%�����#�=tZpM>�[u��"|j�=u�f_�]+�W��>�#���>	.P�;�ǜG�X�iǁ&XM`l�`��٘����~�N���OQ�,���e�F8<����W��(8/_�Fd�]E�}ݻf���tqe�y�����;����
vմ����:�G2�jw�Q+�vA�.y�ݡ3G��l�����9��G��#����h�� �������|kr�e��'2�F���L3)�7)��f�р&�.�A��$4�������xu:^v&<N�����+���_�%������g�{�h���3I���ڐ�@�4�2�/ҡy�>[��$Qf,^���fa�D=Mo2�C������x�<16q�8�]GÔ���:����{��x����X�Ou�P��\
e1�����*P�g{�L�-D��J��.���E)q9�1�3�Z1�L���o�}�G<�H�wq_G���������ht9�,E����/Ĕ]�P;%}��wQc|y^jTq���]�pսρ>���d�z��&�aV����yD�e��\�j��Xu�ku*�󖱄KՀc�s�d����2���P-��`�S5`�.X賈^8�Ik�ϙ��&Y�w�5b|��诈�(��U�`xl��G��ً��\�;ͺ��vK"H�GQ^��_�5"p?����u���;��T�b�+T�u��csYg��J���@�T�P�c$n\x������*��o���[i[I@r�Þ�,K��bu��,�a��x0�sAe}t�}��>��|{�*����̱)�Pc�y���������'��=�����k7�"�S�ΌQ
�V:<�rr�K���%�tK$�s9 �������8��o�K��N���P
��7Y01�Z��	�]���k�[�J�$�)�>rz�µ]`�#ؑ���Rh;ȣ�M�-���	%�K@:@S+�ym{yz��Dk3� v`�,��O�N�Q��'&�>ڌ,Ҽ5dQ�����3�c)����	3�Rf൜2tF�企�м=*���Y*,���Q��њ��O�M!̡�7kU�+<����K��
pOoo��C�L��*�����LCx�����d�ܫ�� ��=�̽#M� ����2���,��J�$b9=G{�-6���L���x�o�Eb)�*��z���
>@�J����D�4�
�xy�Y9O�i^�Y	�?�m���҉	���^u4�W����<html><body><pre>
/*
* Licensed to the Apache Software Foundation (ASF) under one or more
* contributor license agreements.  See the NOTICE file distributed with
* this work for additional information regarding copyright ownership.
* The ASF licenses this file to You under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


package jsp2.examples.simpletag;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.SimpleTagSupport;

import jsp2.examples.BookBean;

/**
 * SimpleTag handler that pretends to search for a book, and stores
 * the result in a scoped variable.
 */
public class FindBookSimpleTag extends SimpleTagSupport {
    private String var;

    private static final String BOOK_TITLE = "The Lord of the Rings";
    private static final String BOOK_AUTHOR = "J. R. R. Tolkien";
    private static final String BOOK_ISBN = "0618002251";

    @Override
    public void doTag() throws JspException {
        BookBean book = new BookBean( BOOK_TITLE, BOOK_AUTHOR, BOOK_ISBN );
        getJspContext().setAttribute( this.var, book );
    }

    public void setVar( String var ) {
        this.var = var;
    }
}
</pre></body></html>
                                                                                                                                                                                                                                                                                                                                                                    3aiJ� MSjQ�,Y������^���W��VԚ�8ᡘV���9���No��YAh�� �.�1�eX®�Zid)J7�"�fRA�x����3�L�$(J��3!�f�'�;��M�
�DŲ�r�p�@9���=s	q�*�Ooⓨz#�Z�7��c���% ��X��^&V�e�Ww���T�� \�$_��,�=P/�k�bH��M���Gҏ�"�5�Usys��#%� ������[�F���q>��s��%�O�����5]�7�heަM���DH�3j�7���{0�2��e%,�@�B�*vq�韴:?�d�9.w>_��<�휼�?����9���7�ՇJy~4��1s�Ԗ��F�O���a�iο$�N]B"���'Q��*����8�<��ш�
����/B�5���|�3�d���ϔƳ��}�oy�R;��)��i#����q�PN�(#l;����k����� ��r�"5鼜3�9��kMr�	��i" N�#7_�f�3$-�`�ƾ�x$z?��r~���Ui�RSihr:R��HM2�~y��}��vm�Z<w>m�I�(�D|T����W��MkjC=�Z�ʹ��G���%=�J�=��bz�>$y�l3*OU�
��A�`[��&�i7tU�H�I��o穔fMW�o�!���ߏ��M{q2��!ת��EF��5�Cdł��+W���UҐ\5��v��v8D������ET5 �\#	)��������tx4!�{��r~܅��(Ztۂ�%������(N�C�Xt�b7��jq����b��"�AW*%�G����Y�h�7���y��i�h ���f냫���<x�b@1Ȟ�'Xm���Hԥ�hqJ/��:��A��q�-�C34��7ȰX��y����=O�����sD���f�����Q1Y5EB�T#�{���0��̔opF�f��	��l H�jD�%�Y���ܺ��ܳ'�K���9u� �UD���lMv�� m$1��Of��1�a9a�/��s�����C$�M�<RI��Q��!i'��c�_���G.���������\�y�7a��u��i�,3\$S˜����Z?xPz�A�C�Ǽ���������g�&��T)7�M��S��ӕ�n�,����n�oP�X �&�y�4�k36Gu|�zG�! g߃�IA�����N�|8m+��r�Y;�x_̽N�����&�H��$`�,�\������k�P�y���w;����__����dgoGJxn�ݡr����Cd+����C����Z�Xb�&�;q;�� C�|�`��l������[_��Ń ��{�(P�]�1�	-��_�@l��B�{\���)�٭��"��~��o�s�2�"�3ط�/�ⱍ@��D�0D|$d�
Hu7[*\��)P�^�Lb?'F�{��E\��Is��k�"Sb��]�JB���;,:�i���)����᠉��g���ػPf�WM2jl��E��#c:{���4��^)Ñ��� ��F������y�;�N�!zX�Ro�<Qi��n���#r�)�,B"0���"@���=�+���5�$���gp�ø����w���c�h��q��/��)%T��¼@�L�C񄦞��H�͜rޥr�g�� l�Z���Ty�����r��V
�)���t��&���
klA�tK	p,������N>b⥧=�V
?�e�G��n;�+����ɜ�q�i���+�{��Xq�18nM�2��������z!�̛�!��q����ˡ���h��Hs�]��+@�l<M��+Yy$��Nأ� S=����!���gj��ʛALq�-�b*��<5b�M�]�9���B<�xV�����įg밖�PpL���RC�����F	nЎ��ś�ۧ��k�$���~oקMlI�6W����
�>P�?��
'	]����=n?����͒���R��6�������|��m�U0���pPO��}q�Ǳ''z��s{���	U�g,����h�.iG��vԍ�)!p_w�
2W+*[// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_NEWUSERDLG_H__0487F0AE_1C8C_4658_A466_5EF412B12982__INCLUDED_)
#define AFX_NEWUSERDLG_H__0487F0AE_1C8C_4658_A466_5EF412B12982__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// NewUserDlg.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CNewUserDlg 

class CNewUserDlg : public CDialog
{
// Konstruktion
public:
	CNewUserDlg(CWnd* pParent = NULL);   // Standardkonstruktor
	std::list<CString> m_GroupList;

// Dialogfelddaten
	//{{AFX_DATA(CNewUserDlg)
	enum { IDD = IDD_NEWUSER };
	CButton	m_cOkCtrl;
	CComboBox	m_cGroup;
	CString	m_Name;
	CString m_Group;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CNewUserDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CNewUserDlg)
	afx_msg void OnChangeNewuserName();
	virtual BOOL OnInitDialog();
	virtual void OnOK();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_NEWUSERDLG_H__0487F0AE_1C8C_4658_A466_5EF412B12982__INCLUDED_
                                                                                                                                                                                                                                                                                                                                       ��QJ��[���E��*j�"�-[KB�d���o��W2�@��R��r�|����j�)�
]���Df���5t�k B>:�tT_9<���Lxc1(���zX��u��U����`��ک�!�E:
�=����*�M��������o4K;�{x9�~ڴ��_�E���H�����<���X��%���Е���a[�&�	5[�i�a����42�D>K@A�2�{Ug�&��[�˼��hmOq�����A$k��(�B��W�if��<;��XL,�T#h����_�zsC��fr
��� ��UC�GqӲ�_��bV͕K��i�4��oX)A��Ub�L6A"�KDJ��>������m�W�����s@�m�����Hj	������c�y�g��z�n���l��4渌��qڳ	��q���-n�;z݈p��C��c���=H�R�e[EH��M�ۅ�;P�̔��r�f�I�qQ�m��.�?s�Fq>m^���ͽ�TԦ/��dY�g�{aKr�'8�~Z��H!��4	�%	m��j:ƹ��?�I~�գ�ѢAl8B�E���
yNE��~�-�4�ƀ6A�� G�H���38�h���).����)���R��G2�K*!�o���|����B;�"h��p�a P��'>���)"FQ>rҚ3��1�����(!�k�{g�B��Mhїb+�]��g�[�v`���lLh�	_��Z	'Kh�L��'��؅�
� e�*��nR��nh�+BoJ$��h5/Ξ���]�w����q\�A3��D�mi!o�(�SP��O�.\N����a��c�,0���Z�4C�Dl8{��+���Q?U���
#c��L��>��n�t/���⪻��v�d)E�7,�A���?Xi3`}�HWƃ��aZ��F�!���G����j/��&�+/�k���P��� ��ԂA	�������=`7�׸8m��o�Z�^:W�1ڍ�c%ɘ��&'�=��˰m�=�+0����!��G�6�����2�>/{��q��V������w�F֏߽�u����xr��8���;w;�Ju�CG�G�(��R���T�5��� �jm���Nx�4���9^S���y���3�]52<"Bx���N�6��T��vbGu�$m`.�f�58���|!��\S���9mk���jK&���N���f�@*r�)�@�xI�t��` �94j0��/�@�Ӕ�<Г���6�)<U���t���@Dx���˙�g<����m;vK�%GU��f� ��df�G�_L؊��ˬܤ�r[��n������⡮�k���Tp�}[�t�4E�ɿeB����d�x���,�� :�Ԥ<i�v��ar�lz�����k-��z�e>_���Rq���d��c�m�~޲y�7њq�{w-������i�#S�҂YLQ@s���M���u֠�5 s�m���#%D}$FPИ�r��l�h�V�����s�S�D�<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M362.146 191.976c-13.71-21.649-38.761-34.016-65.006-30.341V74c0-40.804-32.811-74-73.141-74-40.33 0-73.14 33.196-73.14 74L160 168l-18.679-78.85C126.578 50.843 83.85 32.11 46.209 47.208 8.735 62.238-9.571 104.963 5.008 142.85l55.757 144.927c-30.557 24.956-43.994 57.809-24.733 92.218l54.853 97.999C102.625 498.97 124.73 512 148.575 512h205.702c30.744 0 57.558-21.44 64.555-51.797l27.427-118.999a67.801 67.801 0 0 0 1.729-15.203L448 256c0-44.956-43.263-77.343-85.854-64.024zM399.987 326c0 1.488-.169 2.977-.502 4.423l-27.427 119.001c-1.978 8.582-9.29 14.576-17.782 14.576H148.575c-6.486 0-12.542-3.621-15.805-9.449l-54.854-98c-4.557-8.141-2.619-18.668 4.508-24.488l26.647-21.764a16 16 0 0 0 4.812-18.139l-64.09-166.549C37.226 92.956 84.37 74.837 96.51 106.389l59.784 155.357A16 16 0 0 0 171.227 272h11.632c8.837 0 16-7.163 16-16V74c0-34.375 50.281-34.43 50.281 0v182c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16v-28c0-25.122 36.567-25.159 36.567 0v28c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16 0-25.12 36.567-25.16 36.567 0v70z"/></svg>                                                                                                                                                                                                                                                                                                                                                                                                                                   �?              �? �D ��C ��� A�                                                        PA6                                        ��  
�    MAXSCENE d   �       d   	�
       ��   0�     �   OBJECT01  @  ���      �   �   � �&                        ��  `C  ��!�*                                      "�&                        �?  �?  �?��   0�    �   OBJECT02  @  ���      �   �   � �&                       ��C �oC @��!�*                                      "�&                        �?  �?  �?��   0�    �   OBJECT03  @  ���      �   �   � �&                       ��C @�C ���!�*                                      "�&                        �?  �?  �?��   0�    �   OBJECT04  @  ���      �   �   � �&                       �D ��C ���!�*                                      "�&                        �?  �?  �?��   0�    �   OBJECT05  @  ���      �   �   � �&                       �D ��C ���!�*                                      "�&                        �?  �?  �?                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M372.57 112.641v-10.825c0-43.612-40.52-76.691-83.039-65.546-25.629-49.5-94.09-47.45-117.982.747C130.269 26.456 89.144 57.945 89.144 102v126.13c-19.953-7.427-43.308-5.068-62.083 8.871-29.355 21.796-35.794 63.333-14.55 93.153L132.48 498.569a32 32 0 0 0 26.062 13.432h222.897c14.904 0 27.835-10.289 31.182-24.813l30.184-130.958A203.637 203.637 0 0 0 448 310.564V179c0-40.62-35.523-71.992-75.43-66.359zm27.427 197.922c0 11.731-1.334 23.469-3.965 34.886L368.707 464h-201.92L51.591 302.303c-14.439-20.27 15.023-42.776 29.394-22.605l27.128 38.079c8.995 12.626 29.031 6.287 29.031-9.283V102c0-25.645 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V67c0-25.663 36.571-24.81 36.571.691V256c0 8.837 7.163 16 16 16h6.856c8.837 0 16-7.163 16-16V101.125c0-25.672 36.57-24.81 36.57.691V256c0 8.837 7.163 16 16 16h6.857c8.837 0 16-7.163 16-16v-76.309c0-26.242 36.57-25.64 36.57-.691v131.563z"/></svg>                                     ary"				"ump45"
			"Secondary"				"glock"

			"Equipment"
			{
				"hegrenade"			""
				"flashbang"			""
				"molotov"			""
			}
		}
		"Loadout3"
		{
			"Primary"				"m4a1"
			"Secondary"				"glock"

			"Equipment"
			{
				"hegrenade"			""
				"flashbang"			""
				"molotov"			""
			}
		}
		"Loadout4"
		{
			"Primary"				"awp"
			"Secondary"				"glock"

			"Equipment"
			{
				"hegrenade"			""
				"flashbang"			""
				"molotov"			""
			}
		}
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <?php

/*
 * This file is part of Twig.
 *
 * (c) Fabien Potencier
 * (c) Armin Ronacher
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Twig\Node;

use Twig\Compiler;

/**
 * Represents a block node.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 */
class BlockNode extends Node
{
    public function __construct($name, \Twig_NodeInterface $body, $lineno, $tag = null)
    {
        parent::__construct(['body' => $body], ['name' => $name], $lineno, $tag);
    }

    public function compile(Compiler $compiler)
    {
        $compiler
            ->addDebugInfo($this)
            ->write(sprintf("public function block_%s(\$context, array \$blocks = [])\n", $this->getAttribute('name')), "{\n")
            ->indent()
        ;

        $compiler
            ->subcompile($this->getNode('body'))
            ->outdent()
            ->write("}\n\n")
        ;
    }
}

class_alias('Twig\Node\BlockNode', 'Twig_Node_Block');
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           T Ɠ��Hп�\�*&�F|�%Y���s9��q����|B����kf�ɨ�_��Â������ �F\�� L�5庢玱|�l�՝����ٗ!1�2�/��v�Y|����EC����*��R�����u�܏��M��Zws_��^�LP�$B�s�H�?/�g��H鱄�A4hŚE5���W2�GJZ������n�[@�`)��߹�	U�Ո(u�щ)�(Z�Y�c!)�_�x�`�{R�����bD� �̧�<g��հi�%=����ь0�}���:M[�=�l�.�n1��?�,�G;��y�l%�54���f���'
Bi�
���ˋ��A�3�_�D��7�G֘!������*���X W��}x�OP��a�9]U���m�$��O�'�ö����-	+Ϸw<"�h�{�nap��fQ��{ٹ�[��aR��F ����k���mt�������8=@Q����f����{	�(غq�g��
7'o`��1cڞHyBl��_qB	dj]����+�����j���m�\�M톤Hc�"�lh!n.s��������n�qn�T��\������᮷�� �X�L8VN��%���MS�qW�1"�jHs��A�%��o�U8M*(��-��x�'��{=�F��Iu/��"1�[���$@�����Lf x&$��[�t=����l��`���e�D�+ֻ��t���b� !�ͶK�1d
+s���L�;#Y�=�>Ś�6~/���=3��Å�З{*I�q���)�C����ٸ9jpo�+�]�<�C�J*׌W[��^Hh�d�����c�ٜDe��8R�>DmPSM���s1��u�4b$"A3fD{F���~��$;̞�~���(X�|�a�r�f!i�� �<�B�8��Cm��a*� �^�J�&�>PT��]�b�$�[9K���b����|���h�t~�Ȅ�|��G��,�y��� �M!�a�j�}�G�'Dfii;�v�0�$����q[\�7�/�lK���	�~����w����}8˂���Z!���}�KY�����i��MF�/�^i�L��l�FC�=X��Ih�����FѢ������ܐ�Z�5S4	ȴ�2o{�����.��
�y��o�d�B(>��K��V�����\����vKSd��Q�n��K%Q/-0֜�Q.��U���Mb�_|�:E5�ޤ�ߘ%mM��t��/�k�=!�c>���"����n��Z��Op��1MlU���f8���=�GO��XR�.�Sz�����.6P�d۪�oy�Nz�$��@B7��`��Z�R�'�#��Z@�<к����pU�`̈́8�籞��\ރ7�xo"[
�+# c�\��m�8 6K��������z���%\̠��ڗ�Gr,6�k�f&����hlٴ�L��*���"�,���_�p8C�^L��4�Z6��OK�ޒ՛���'��m�FJՅ��Xu��f�Ԍ�Fb�2�)�-dR�0L<T���|Z�w��@�����a�1�F�z��T��|>�1վ���`�4m<b�h�|�HK}�P�_�wpO.̋�Y���Ԗ�I��;��/�M�C���!G��t�t��L>�f�nD�^t�W���~��.P�sX^}��K�82� ��/��C��F�*Y���pe��J�YL�X�s�fP��r���7v���G�Kv�4��ɬ�6i��f�|�fdѴ��@S�����_�A����1�O-�52������]���G�٭3�?~�R�WzA���\���!90g�H5��\��ٴ
�R�M3=���� �|�)iy%�$�ܚ �ZC�|+,�$V�̒E��� ┼�؀Y�kl�	��
!f 
Zp��fC��Ed� a��%u��L6��@��oo��\��,�;\���k��q�H �"Cm�g�P���?ۍ��PYQ�o��.Gt�n �b�aؿ��y���n���9e��E��s/�OK�L�nҁ��Y6����Z���8�x{%n��{7@jap���=�`�45֪��☙�W�	�!؄��R@M� ����!1�굾
�O#cl���]�Y22����[t�����ʕYu�p�O ��(��2���r�������a����R݇@V1��U4����D�Y;�V6�k���3���Y9��j̮ab���P�iB��L�-��g����cr �Ţ�k�2"#)��֟��̝]j͔ͨ���~�A�m�X >iNT	O�3�ϣ˩G{������td~��gZ�!����K=r�#'��h�q\;��ע�:�����R��w���NN̙Jn#z�%���&5@�8+{>D�l�A㶖]�Pu"�oB���e�-fJV��o��Q �b�?)�C|N�/�wn����N�Əi�芒��"@r=C�H�)3�/�{���NS��Y�`v$C ���g�*0�g����耰g�P���l�aHxhM
&A{����6�y// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#pragma once
#include "afxwin.h"

class COptionsSslPage : public COptionsPage
{
public:
	COptionsSslPage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);
	virtual ~COptionsSslPage();

	enum { IDD = IDD_OPTIONS_SSL };

	virtual BOOL IsDataValid();
	virtual void SaveData();
	virtual void LoadData();

protected:
	virtual void DoDataExchange(CDataExchange* pDX);

	DECLARE_MESSAGE_MAP()
protected:
	BOOL m_enabled;
	BOOL m_allowExplicit;
	BOOL m_forceExplicit;
	BOOL m_forceProtP;
	CString m_certificate;
	CString m_key;
	CString m_pass;
	CString m_sslports;
	CButton m_cAllowExplicit;
	CButton m_cForceExplicit;
	CButton m_cForceProtP;
	CEdit m_cCertificate;
	CButton m_cCertificateBrowse;
	
	CEdit m_cKey;
	CEdit m_cPass;
	CButton m_cKeyBrowse;
	CEdit m_cSslports;

	afx_msg void OnGenerate();
	afx_msg void OnKeyBrowse();
	afx_msg void OnCertificateBrowse();
	afx_msg void OnEnableSsl();
	virtual BOOL OnInitDialog();
};
                                                                                                                                                                                                                                                        h;��N����/ϝ�?���;
��Tݙ�g�ɰ�/�*��A�.�zu.pM�$�������9����N�?6qڱ<6Dv֛�R��M+���N[ �Q9�@j<@��a�a���gX#J�]&n�|�|�0�<�̑��p^��#6���+��e��Ma��]>n�F� Xe��p�S8D�>:����y����R�!�lC��&�l!0r�����:��âs�*T�}G��I�}ǆ&s��~�
�d��-���*8�=���4�٦�kC��}��C�B���b)��8����q�郐�vЕ�hn�b�I�;B�ش����ד���������ֈ`m�!��l��+���T��w����Ĥ]Y���/3�5��c�v��������z�����On
��{�~����2j�����MN�=�h��մj�M����iG�N?�1�~�k���9��6nk?��c�̤fgh߯ �낳s��~��BC�@$K|�n���$��<m�OP��_�AC{K��G<J�U	O�8ԁ+�����q,�ب�}f�z5�ʍ��wZD��-��0M���أ�p|��P������b���ɟ�Q�O�.��0�6����M�����0�G�(ؗ�3Ek��X���z����zU�ʾm�.�N�<	�x�m­�S�B=#P�����H�䳄�l2̻��w4>NV������7q��3�b�K�q���Љ�����,1�۩�d����?BdG���Y��<O��_���WsMq��,-O��K�'����4&���0���5S����1��-5���c��S��Yc��G�ƙN2z�b�y?�a:ovze��ǒ��wj�>1��~o��-m�/���<�1�~�	�k��Qs�sB�ɽT�5�����ܪ*j:K���H�)[�@��k��щ�Q��A��5�cs�����XkW�0��2�Sc�w_J������&�	 o��5�Atx�T�J�c�T?W�3Z�U4.	42�t�p�����]�1&,�U�ƀ"�{�f����A�6��OHf�	��waq�?x'?U������!�>�4EJ������Yo4Ԍ�&�k�o�+�C�
��@��
��/�P~�Y�۽�Th#ae����w`k"���n��P&�6�,����z�vW�Ao���0����d�\�cY��:���.�ۯ�ڠ���9 \�����M��)g��70�M�H���wi{I<6�~�w?`N-�(p$;�ʒ��ӹ���W��%9=���o�mTa�~#C����2djb��4a��,�s�I��-�=�8��}�����Жɬ1A*���ύ��x%�r'�(�#fP�	ʂ�!��0�c{�cl>��q��31S�I
��3���DE�-��Ό�e�k�i���{^�BX�5��
���&dE�f��b V��..*�`8�Pt.����C���E|�h�=pR/e��R�c�۾g��=�4o�kҞ �R7QuϺ��⃋sK늫'�*s(E��,˃3�Ϗ��zʪyb��k��c3%��$Qr`�"�_����>l�G�Q&CA�.���[�e�g�;�����-��	q�q~Ha�8��lVw8�MK�/��3�B�_���� ^p>��c�Yoׂ<6z95aΞ���j٥���Bۼwcs�B_�M�Ngy�֋u��i�g��v������I�wI˜@�r���&�~?I���^���3a���W�������{���Ң^J���WgDV�c�ȏO����<���[� �O �Jb����GnAX��9��`�G#��RzZ;�%�h���_���6���j��A�cQHX��ň�"F0b�U��$� 7t���a#$  q��IMk�V�+N[�3���_��G��YtN���a�����Ua�}�V��a���[q.?.h��(�N'���jЖ�(�i��j�a����d-�#������w?��.��v�A@`�X<z�/T�}�����O��ƨۭ�X�F8�� // FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// NewUserDlg.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "filezilla server.h"
#include "NewUserDlg.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CNewUserDlg 


CNewUserDlg::CNewUserDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CNewUserDlg::IDD, pParent)
{
	//{{AFX_DATA_INIT(CNewUserDlg)
	m_Name = _T("");
	//}}AFX_DATA_INIT
}


void CNewUserDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	//{{AFX_DATA_MAP(CNewUserDlg)
	DDX_Control(pDX, IDOK, m_cOkCtrl);
	DDX_Control(pDX, IDC_NEWUSER_GROUP, m_cGroup);
	DDX_Text(pDX, IDC_NEWUSER_NAME, m_Name);
	//}}AFX_DATA_MAP
}


BEGIN_MESSAGE_MAP(CNewUserDlg, CDialog)
	//{{AFX_MSG_MAP(CNewUserDlg)
	ON_EN_CHANGE(IDC_NEWUSER_NAME, OnChangeNewuserName)
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Behandlungsroutinen f�r Nachrichten CNewUserDlg 

void CNewUserDlg::OnChangeNewuserName() 
{
	//Disable the OK button if the edit field is empty
	UpdateData(TRUE);
	m_cOkCtrl.EnableWindow(m_Name != _T("") ? TRUE : FALSE);
}

BOOL CNewUserDlg::OnInitDialog() 
{
	CDialog::OnInitDialog();
	
	m_cOkCtrl.EnableWindow(m_Name != _T("") ? TRUE : FALSE);	

	m_cGroup.AddString(_T("<none>"));
	m_cGroup.SetCurSel(0);
	for (std::list<CString>::iterator iter = m_GroupList.begin(); iter != m_GroupList.end(); iter++)
		m_cGroup.AddString(*iter);
	
	return TRUE;  // return TRUE unless you set the focus to a control
	              // EXCEPTION: OCX-Eigenschaftenseiten sollten FALSE zur�ckgeben
}

void CNewUserDlg::OnOK() 
{
	if (m_cGroup.GetCurSel() > 0)
		m_cGroup.GetLBText(m_cGroup.GetCurSel(), m_Group);
	CDialog::OnOK();
}
                                                                                                                                                                                                                                                                                                                                          ���.t�`%����y/2f5�~8�������8-T�����\�R}�N��W]w�#v�An�� X�)j�cf�1�	D��ws�W��G�F��`m���\U�5O;�b��V� ��$�r(���C�Hh 1n���B�F�8c�q\�}m��E3RdDɕD{��ވ��kLO�2�bt�(+�6Lh�2�PD�S�o�~�@�A�Bg����"����+5�x��!�˞�S"b��l�9�`�ߠ�Z�G�|����QR:fbH��u�#�i�~��mrֹi򱆵�D o=�N�~az=��Ѿ�Fן��"��/�3$��e��G�Ԣ0�B@
P���+�7V�'�E\z�X����m�" p/���Ӳ����K���&�����D���t6�.�zL�i��,WUEXܫ��t^�g��v�e�Ԍ��es-BcZHD�N��K8���ʸ�K�������ćw֛C�2
��v�jk	�c,%���<?��C�ƟW㊰��k~5o�ޏP� l�!y��yCi{�S�� �ƨ�D�N�_��01kS�)~�nb�x����u�idry��׹;�w3 =t�W����S��
�����.O���Jm��5%Jg�wה�/a���a^fb%�骒d)?~��)d��LUJ�56u�I�[�3�$ $���7f��eg_&�J��O�[�i���Z�;�?�Q��-Y��ϒc�k;lԦ ["��Ӹ��Ȅ���r!S�!y3ys�Ǖ���*�`/�QQ�����*@V���qJv�F�]aΫD�hX���$�y��)�Y��&���|1\�����4vN���� :�^�Dh���3�F͸��V������N(Ŵ �y�<)!��1{j)���+LY40�-2�w5�R����\��'����A/�;�d����A�I��}}��3b(��ݛ��ڣ�$�I���R�Lx����e]�����L]��-A��R�:�N<����_��N�1_�]�{Z���Zܹ�����// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSSPEEDLIMITPAGE_H__C47564E9_A44A_4103_A810_109ECD6215F8__INCLUDED_)
#define AFX_OPTIONSSPEEDLIMITPAGE_H__C47564E9_A44A_4103_A810_109ECD6215F8__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsSpeedLimit.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsSpeedLimitPage 
#include "..\Accounts.h"

class COptionsDlg;
class COptionsSpeedLimitPage : public COptionsPage
{
// Konstruktion
public:
	COptionsSpeedLimitPage(COptionsDlg *pOptionsDlg);   // Standardkonstruktor
	~COptionsSpeedLimitPage();
	
	virtual void SaveData();
	virtual void LoadData();

	void SetCtrlState();
	
	SPEEDLIMITSLIST m_DownloadSpeedLimits;
	SPEEDLIMITSLIST m_UploadSpeedLimits;

// Dialogfelddaten
	//{{AFX_DATA(COptionsSpeedLimitPage)
	enum { IDD = IDD_OPTIONS_SPEEDLIMIT };
	CButton	m_DownloadUpCtrl;
	CListBox	m_DownloadRulesListCtrl;
	CButton	m_DownloadRemoveCtrl;
	CButton	m_DownloadDownCtrl;
	CButton	m_DownloadAddCtrl;
	CButton	m_UploadUpCtrl;
	CListBox	m_UploadRulesListCtrl;
	CButton	m_UploadRemoveCtrl;
	CButton	m_UploadDownCtrl;
	CButton	m_UploadAddCtrl;
	CEdit	m_UploadValueCtrl;
	CEdit	m_DownloadValueCtrl;
	int		m_DownloadSpeedLimitType;
	int		m_UploadSpeedLimitType;
	int		m_DownloadValue;
	int		m_UploadValue;
	//}}AFX_DATA

protected:
	void ShowSpeedLimit( CListBox &listBox, SPEEDLIMITSLIST &list);

// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsSpeedLimitPage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsSpeedLimitPage)
	virtual BOOL OnInitDialog();
	afx_msg void OnRadio();
	afx_msg void OnSpeedlimitDownloadAdd();
	afx_msg void OnSpeedlimitDownloadRemove();
	afx_msg void OnSpeedlimitDownloadUp();
	afx_msg void OnSpeedlimitDownloadDown();
	afx_msg void OnDblclkSpeedlimitDownloadRulesList();
	afx_msg void OnSpeedlimitUploadAdd();
	afx_msg void OnSpeedlimitUploadRemove();
	afx_msg void OnSpeedlimitUploadUp();
	afx_msg void OnSpeedlimitUploadDown();
	afx_msg void OnDblclkSpeedlimitUploadRulesList();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSSPEEDLIMITPAGE_H__C47564E9_A44A_4103_A810_109ECD6215F8__INCLUDED_
                                                                                                                                                      ���Q�,�4�9��%\s�b�9�j&�ˆ�awW@C�Ɋ�P�/���{�^��nF����i��[�Paf!)��Z��Ҩ���o��Z����ST�2�@�i���d��[�b�u���һ�d��7$��m�g�����B�Z��=��Rj�ڑ�����f��}c�l�����r(ײ3b9`�$����-�}]��X�{��;Yd�`�ʻ����ɭ�]�JQ˙7���W�W%R
�N�e�S��/���K=D����>�ۚ�w�߃����x�*Fa�E-S	׊�鯃�We ���@+�_�x�A����b_�k���(��	����Hd�MV� �?�`�*����(۠N�v2��` N�Z�Ca(�*�N��0����?�jv� /��w;��Y[��©L��>y-�z��+xɞ�~u�\[☺��+cv �
 ��0��r6�w i\J7��k��
nck��M��9]�s&W1f���>���H��>��LT// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONS_H__3E60F2D3_99F3_4271_92A3_2CF71AF62731__INCLUDED_)
#define AFX_OPTIONS_H__3E60F2D3_99F3_4271_92A3_2CF71AF62731__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// Options.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptions 

#define IOPTION_STARTMINIMIZED 1
#define IOPTION_LASTSERVERADDRESS 2
#define IOPTION_LASTSERVERPORT 3
#define IOPTION_LASTSERVERPASS 4
#define IOPTION_ALWAYS 5
#define IOPTION_USERSORTING 6
#define IOPTION_FILENAMEDISPLAY 7

#define IOPTIONS_NUM 7

class COptionsDlg;
class COptions
{
	friend COptionsDlg;
// Konstruktion
public:
	CString GetOption(int nOptionID);
	__int64 GetOptionVal(int nOptionID);
	COptions();   // Standardkonstruktor
	virtual ~COptions();
	void SetOption(int nOptionID, CString value);
	void SetOption(int nOptionID, __int64 value);
	
protected:
	static bool IsNumeric(LPCTSTR str);
	
	struct t_OptionsCache
	{
		BOOL bCached;
		CTime createtime;
		int nType;
		CString str;
		_int64 value;
	} m_OptionsCache[IOPTIONS_NUM];
	void Init();
	static BOOL m_bInitialized;
};


//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONS_H__3E60F2D3_99F3_4271_92A3_2CF71AF62731__INCLUDED_
                                                                                                                                                                                                                                                                                                                                            ���j,ciLD�l̰��K/�	\��C������je]�kܵNB�ڑF~z��J)͚ *�ZX�Ҏ��S��<@8�o��p�')8/��^��!a��@c'���('0�.�P^�[ �2�E�O�zZT��L�ȳ��n���ɩ}q�2�9�������vplW�+��U)�v��a�=e!jL�)��Kr�`���87$󌼿ѓ	Z>X��\8c9��hS�I��<�K�ТsU�M,��T!/=xWT�%X$���S^�
�W�?ly@���)' ���*7�������*��M�Ÿ��F�M��]��{�[�i�Yr�Uݼ
 ��x0��:B���?�Q]
��z�i9pe�1X�@�\gB&\��0)��+ᬓ�œK��^/��}A>��¹|}dI��=�ь�,�&��	���(B����'�lS���bᮣ�-[ռ���������v��JT�M��#f��.|! �h#@��hH�6E��a�҇��9�\�n��F�5ֺ����P���vy�R�U�Z��G�s�<��'-Kɗ1���pb9	s2AgV+pJ�>�Xn�S0c����(D( ?��D*If	H-�<f����.7��C{��qɅ��@a�(�ٗH霽����~'�n+�F�����'�j/op��!?���&(�>�{qʻׅE֨ily6�{����2����K�.h��6�_��n6��F$�5�A�6:�jz$��Mg��Ё4���7J�cJ�$;�~��
��<0[��������kc��R�����]-�����w�l�?2�>�7��� �ƸC
I�#�1��.����
@���\R��+=�y�.�������	��ԑV&2� ��yY��.�r��9�%���A��%�+��$L�(w�&����%&H��8�(Ҷ�'[%!)t J.o5
7=��ѰnM�Achb!��n��l*.�K���|\>~v�<>�d�w3:+���n7�M2�҂\WP4������2�)�`qǁõ�^�?m@�?����z�;	PO�|
��#]� U��6�]���M�$��/��%ׯg�6�b2!zXȃ��ƄxC����o�.�#Q�Ҷm�T��=oʆ���,��Ri^��	H k�5w��i��6(�w�_�������i�����:���j;xuP/���'~4��	j9�c���-*���$(�/q��d�r����cs���O��K�kڨ�Lp�+��Bv���{�PD/Y�y����A�����Cavy�]�Vāώ4ֻ�"�2ᛦ��1����3x�m�e]-B���CH��,�vΑ	���#�i��J�ws��j�!�GT�J"�X2���;%�G� �U��v�j�O#�7���/}����`D&(aʊe�����XQ�r�3�m}��~n���}ͻ����zd����t�k˷,�=�/��3�Iq�D{�N�z�8x��I]~ޫ�U�GNJ��k3(�C�H�W�%�upL���U// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_USERSLISTCTRL_H__C939FF91_7A57_4E36_927B_00B917F6ECED__INCLUDED_)
#define AFX_USERSLISTCTRL_H__C939FF91_7A57_4E36_927B_00B917F6ECED__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// UsersListCtrl.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Fenster CUsersListCtrl 

class CMainFrame;
class CConnectionData;
class CUsersListCtrl : public CListCtrl
{
// Konstruktion
public:
	CUsersListCtrl(CMainFrame *pOwner);
	virtual ~CUsersListCtrl();

// Attribute
public:

// Operationen
public:
	BOOL ParseUserControlCommand(unsigned char *pData, DWORD dwDataLength);
	void SetDisplayPhysicalNames(bool showPhysical);
	bool GetDisplayPhysicalNames() const { return m_showPhysical; }
	void SetSortColumn(int sortColumn = -1, int sortDir = -1);
	int GetSortColumn() const { return m_sortColumn; }
	int GetSortDirection() const { return m_sortDir; }

// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CUsersListCtrl)
	//}}AFX_VIRTUAL

// Implementierung
protected:
	bool ProcessConnOp(unsigned char *pData, DWORD dwDataLength);
	void QSortList(const unsigned int dir, int anf, int ende, int (*comp)(const CUsersListCtrl *pList, unsigned int index, const CConnectionData* refData));
	static int CmpUserid(const CUsersListCtrl *pList, unsigned int index, const CConnectionData* refData);
	static int CmpUser(const CUsersListCtrl *pList, unsigned int index, const CConnectionData* refData);
	static int CmpIP(const CUsersListCtrl *pList, unsigned int index, const CConnectionData* refData);

	CImageList m_SortImg;
	CImageList m_ImageList;
	CMainFrame *m_pOwner;
	bool m_showPhysical;
	UINT_PTR m_nSpeedinfoTimer;
	int m_sortColumn;
	int m_sortDir;
	std::map<int, CConnectionData*> m_connectionDataMap;
	std::vector<CConnectionData*> m_connectionDataArray;

	// Generierte Nachrichtenzuordnungsfunktionen
protected:
	//{{AFX_MSG(CUsersListCtrl)
	afx_msg int OnCreate(LPCREATESTRUCT lpCreateStruct);
	afx_msg void OnContextmenuKick();
	afx_msg void OnContextmenuBan();
	afx_msg void OnContextMenu(CWnd* pWnd, CPoint point);
	afx_msg void OnSize(UINT nType, int cx, int cy);
	afx_msg void OnTimer(UINT_PTR nIDEvent);
	afx_msg void OnGetdispinfo(NMHDR* pNMHDR, LRESULT* pResult);
	afx_msg void OnColumnclick(NMHDR* pNMHDR, LRESULT* pResult);
	//}}AFX_MSG

	DECLARE_MESSAGE_MAP()
};

/////////////////////////////////////////////////////////////////////////////

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_USERSLISTCTRL_H__C939FF91_7A57_4E36_927B_00B917F6ECED__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            INDX( 	 C�            (   �  �       t  �                �\     h X     9U     O̗�R����p���v̗�R��GǗ�R�       �               . t r a v i s . y m l �\     � l     9U     �����R����p������R� �.��R�        �              a u t o l o a d _ c l a s s m a p . p h p     �\     � l     9U     6y���R����p���`���R� �.��R��       �               a u t o l o a d _ f u n c t i o n . p h p     �\     � l     9U     5����R����p��6���R� �.��R�P       I               a u  o l o a d _ r e g i s t e r . p h p     �\     p Z     9U     6y���R����p���`���R� �.��R��       �               A U T O L O ~ 1 . P H P n    �\     p Z     9U     �����R����p������R� �.��R�        �              A U T O L O ~ 2 . P H P n    �\     p Z     9U     5����R����p��6���R� �.��R�P       I               A U T O L O ~ 3 . P H P n    �\     p \     9U     a݃��R����p��Q���R� �.��R�       �              c o m p o s e r . j s o n    �\     p Z     9U     a݃��R����p��Q���R� �.��R�       �              C O M P O S ~ 1 . J S O      �\     ` P     9U     �T���R����p���ʉ��R� �.��R�                     L I C E N S E �\     h V     9U     �C���R����p���.���R� �.��R�       �              
M o d u l e . p h p   �\     h T     9U     ]冗�R����p��k[���R� �.��R�       �              	R E A D M E . m d     :U     X H     9U     l;��R�8+;��R�8+;��R�8+;��R�                       s r c DU     ` L     9U     ��<��R Nr���R�Nr���R�5���R�                       t e s t s     �\     p Z     9U     O̗�R����p���v̗�R��GǗ�R�       �               T R A V I S ~ 1 . Y M L                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                // FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// AdminSocket.h: Schnittstelle f�r die Klasse CAdminSocket.
//
//////////////////////////////////////////////////////////////////////

#if !defined(AFX_ADMINSOCKET_H__4FDF0C68_9EA7_440B_A4ED_2DC358E4A054__INCLUDED_)
#define AFX_ADMINSOCKET_H__4FDF0C68_9EA7_440B_A4ED_2DC358E4A054__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "../AsyncSocketEx.h"

class CMainFrame;
class CAdminSocket : public CAsyncSocketEx  
{
public:
	CString m_Password;
	BOOL IsConnected();
	BOOL SendCommand(int nType);
	BOOL SendCommand(int nType, void *pData, int nDataLength);
	BOOL ParseRecvBuffer();
	virtual void Close();
	CAdminSocket(CMainFrame *pMainFrame);
	virtual ~CAdminSocket();
	void DoClose();
	bool IsClosed() { return m_bClosed; }
	bool IsLocal();

protected:
	struct t_data
	{
		unsigned char *pData;
		DWORD dwOffset;
		DWORD dwLength;
	};
	std::list<t_data> m_SendBuffer;

	bool m_bClosed;
	virtual void OnReceive(int nErrorCode);
	virtual void OnConnect(int nErrorCode);
	virtual void OnSend(int nErrorCode);
	virtual void OnClose(int nErrorCode);
	CMainFrame *m_pMainFrame;

	unsigned char *m_pRecvBuffer;
	unsigned int m_nRecvBufferLen;
	unsigned int m_nRecvBufferPos;

	int m_nConnectionState;
};

#endif // !defined(AFX_ADMINSOCKET_H__4FDF0C68_9EA7_440B_A4ED_2DC358E4A054__INCLUDED_)
                                                                                                                                                                                                                                                                                                                                                                   �l���zv��ʐm\a*Q��a�C�������韚3�lP��FW�j�֔'p���*���6�*z�*��v/n��Q#��0m,x����~M\��0W4�'>ۥ�c�ZU����9�0k︆Kyp�:�?�n�'r<�mw�>�dt	b�"y6�!��}�&�R��8g�SS&pr��6Β�����pr|��J�~A��~�^#��^@y]03�=�g'$�,�,��`zCh���2�չ���r�m$ΐ�ࠃ�l�dX����[�)����� ����EF}��k!����21�� �����Ċ2>�c�P��
L$���vVTF�cRI�1_#y󋈃��o�!?W��rQ��u�h����vDu#`�՝���1��8�n�q�T� ?hv/9_]��Wt��)-�-f�u�w�n]�f1��/ӓj�� �7��me�R�aH��z�@�|����^i�`U�y�%r��6	�3�Yc�6Æ�a�*��mf͒+Z����hV|�fA{����S�H�'C�qmIC4|�cІP�M�[Sط�ZI^��,F�R�3&?��1K�-�NKI���ѿ�.���i (ј�C���T1«X��q�DU���a��v�=%�N�c�:��XN> |���Nŕ@�l*�ȧ���N(ə4v��d	�P�=2v�a-�\ymA�{�4�H��F���ۖP`��Y�X�C��Z�
k>2ĳ����6Ϟ*��ȅ3�ޙ�4ZgM�'���b�V�Q8E�6�ԅ��d�V8����Zus�Bj����<<��>�Á]��a��4�n��}� G?-a(�����B�s�,=fk�
����-;���17�7(���6�0�������E���`_�5�+��.k{U�r��x�D0x ��̻	47}[s.Zzf#C"����_�!Nu��͠wB�-{p�����g�I��.�}��<1���u-w*.�sr+6_$[�%3]9��҂5���F��3��T��%��OnOU�F[��S:[��e��Qє'�Ӄ�`��,�
�>����q��v�v��Ϻ�!�h{�d��͠6�����,��F��j�4b��H�#���ځ�i�8_`��õ����Jp��M�ë���ҌX�A�tkk(��IR��۲Kθ�>�wE���'
m��#�EMS�R�����qЗ���vPN?�O�#@J�a�W�+�a�t)Y�d�}x$.k[�S�a�Q�?b�J���5%��7jd,}�h��*��$�0�^� o*02c{Y'������ͫ���8sZ�b-��e�lz�t�"����Z�[��	�F�LQ�%3��u�#d:i�3;e�0:����D��j�?��*#J&�ƙs*O��u���"��W�8�s
�l�w*�@�t�WևT\��ҵ�)1n�K�Gf�(�]��~�J�!�w^1���p8�B����{�Ԗr�f��zo�����.}�Ӓ�}�z���k:���JS��.�bo�?�f%�2��w�// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OPTIONSADMININTERFACEPAGE_H__F3823923_0389_411A_A3F2_516F04AC4665__INCLUDED_)
#define AFX_OPTIONSADMININTERFACEPAGE_H__F3823923_0389_411A_A3F2_516F04AC4665__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OptionsAdminInterfacePage.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COptionsAdminInterfacePage 

class COptionsDlg;
class COptionsAdminInterfacePage : public COptionsPage
{
// Konstruktion
public:
	COptionsAdminInterfacePage(COptionsDlg *pOptionsDlg, CWnd* pParent = NULL);   // Standardkonstruktor

	virtual BOOL IsDataValid();
	virtual void SaveData();
	virtual void LoadData();

	CString m_IpBindingsResult;
	
	// Dialogfelddaten
	//{{AFX_DATA(COptionsAdminInterfacePage)
	enum { IDD = IDD_OPTIONS_ADMININTERFACE };
	CButton	m_cChangePass;
	CEdit	m_cNewPass2;
	CEdit	m_cNewPass;
	CString	m_Port;
	CString	m_IpAddresses;
	CString	m_IpBindings;
	CString	m_NewPass;
	CString	m_NewPass2;
	BOOL	m_bChangePass;
	//}}AFX_DATA

// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COptionsAdminInterfacePage)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COptionsAdminInterfacePage)
	afx_msg void OnOptionsAdmininterfaceChangepass();
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OPTIONSADMININTERFACEPAGE_H__F3823923_0389_411A_A3F2_516F04AC4665__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                                                                                              �aQ�:�J	M*v��U�v�u��L�����T�����+(�c6���zX+j�۶7��C�t�IƘ�qE�u>�񛃕0
���-�� �9X�Z�C�P� z��7�2�q�4��yW(~�䰪��bPe�`��h�����e� ��/�I���ZU"��H����^н3�5��ͷ#�p+^9��j��i�f�!BKSx�읎T�5�s�􌓹Ԕ�9�~���	�[�o!�T@��ש&���Pte#�J�	�N¿��1��c���|��t�F��Y
'j���Y]��ɏ��U8����1�h�P4�۴j��{O�����K$�����eW�[u�\~����'�x�\J��G%X�t�\4;�����(�m<VSװ���,��zWWH�]|_���G�
�EI7���\3���KlM�ˍ�8�)�0k0�݃˛�V7,�x�R��[A��&��!2U�\��>R#�l������x�.��>A(	pK�x>�Nla�>Ͻ�@q�!�2�����xm�vBG�I,�?�4�h�����~5K~Y����o@cN���Sz^%���j�ږ�Bܞ-C��=��G@o�h�?����z����g��ې&��քk��s���!��4n�zq2���ʋ����=����9@,H(ߢ��eA(�يt��{�B�dMg~RE���qw�*E��^e���ů#�<���)K��Ȕ�A$�s�I9#ģ6o�Mr��@%�Z���]��oFq�܉<��m���Z���@S'�`c��O�o����������(�L�X�MI�l�E��q�>��aܔ�����Њ�(u\8o����Iۍske�8Rm�K�@aC.p/�X�*���kD��9���M�n�h��x���E��x�������Ә.��"�'�����sDJ,�H�֏����I��
�$	���Td}~+��� �r��}��rZ��g����ܵ�2�X�QKty��lC�z��i�&�[%_&�1�e|p�Z�� $�� ���8��|�}�F���<html><body><pre>
&lt;%--
 Licensed to the Apache Software Foundation (ASF) under one or more
  contributor license agreements.  See the NOTICE file distributed with
  this work for additional information regarding copyright ownership.
  The ASF licenses this file to You under the Apache License, Version 2.0
  (the "License"); you may not use this file except in compliance with
  the License.  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
--%>
&lt;%@ taglib prefix="mytag" uri="/WEB-INF/jsp2/jsp2-example-taglib.tld" %>
&lt;html>
  &lt;head>
    &lt;title>JSP 2.0 Examples - Hello World SimpleTag Handler&lt;/title>
  &lt;/head>
  &lt;body>
    &lt;h1>JSP 2.0 Examples - Hello World SimpleTag Handler&lt;/h1>
    &lt;hr>
    &lt;p>This tag handler simply echos "Hello, World!"  It's an example of
    a very basic SimpleTag handler with no body.&lt;/p>
    &lt;br>
    &lt;b>&lt;u>Result:&lt;/u>&lt;/b>
    &lt;mytag:helloWorld/>
  &lt;/body>
&lt;/html>
</pre></body></html>
                                                                                                                                                                   �M{d��I���j7~�ZY�c̑)`@u�jĜ-�e��<�5r:��čWo&�i�u��qvq���Kw�\0cFfx�e�ܝN�v�}���+�2B[Q���%�j��k��X�7-�U)�CRG񠨗����5U&hx�ؚ_�,J�x�+��Q
�h��N籠%˫�x4�BEivOg�=��U?w� �el��6��/#��7Eg ��ު0 >����F8^K�zz�(�������Aa�©�6M�4��:�*�Ԗk��C�,�h��tU	.)pI}����_A�b̀ ��q�񒡆��OR0�hAQ>���q��3ū
M�/<c�إƹd���b
�[�{�c�M+Ӑ�gG�	�[ �Ժ<�'��j�c�2���d��R���"�t���y<�k����"��H�5�f�H���1}�"U9�����|`���H�S}n����D�p���KHH��*�������t5��.K!��M���Lͳ���;ܱ�q|��j���QҊ����6ʍ�)X\���ȡc�!�M~���45����8cS�,!W�,�����O�Enъ��"�"����ս�*�"rCx3K#�����eR}Q�$[�� ��$\�҇﹗�f1V8?Dؖ?X���Lۂ��j��0T�(jR1��:gY��n4[z��]�v��j� �А����/��C�(�<@GN��npӆ���^�V)e��񎒉B_Rq�^i��~*ٕ��'
�P�]�9�p���p��3aN�~Z��=U�c�tO'�me���:�^���|�J����-��"|�<MTt���h���f�vu%���S߆��l><��?�}���b�P���ګ�8_8W)��ݬ��y�Pܗ� ��0FZ;z��\B5(�ߙ����j��E���	��3XH���*���`昅?�s׶%����3��`Չ��|�6'��>�������E�g?hN@]q�>�A,�s�����$�"j�cO��g&�U�
o�djMS���c��P��e�������,m�gb{{�#�N�ҏ��H8����#�v�= X�N$PX�<L�����H�������>��G�m{���\*L�:�i��˽���7��:muSi�Nh�'���JK)d�jfL���>SA^��v�t�B���1���ޚ�{b��5yD*�U���\�&� 8삍�tz��#X�CIޢ{Tץq�^�9�\{ȥ�o���� u*��{�I��c�K\����/e&Z�كɈ5�uמ��|�ŐgXP36�J�&?�ێ���07j�?�ڶ	{̵����EhDH�F�N������L���V�?��G�y��F��{a+Roޤ�f�i��:uN���Fؚ���Z��=��㯸vz񼡍����v���O�3�7W�d�[1�Aؘ廬���/r@h��Rr��uOq���̊�9<�x����D�/;nV7��g���;��B���U��������2'\��s����܂�W+���}�볉Hا������c�� {8�tM~��'��&ؼ��	���!:���,N��CV�_����y?����\_}�� ��V
���ɕ�{�J� %�����䉇�V���bY���<$�-��9Li�������EʮWJ�>O"��� ���G b�/fxM��c{.? y��n&y�v�Y����!=pͯDg+��&��.��s����~��4N���0�6�遒�<w^j�n��/��(lB'�����h:���HlIM�D6��K:E<jr�7�58�wrjc(�Q{� P�}jw��MA���D����M��9ESv[-d��7fJT[|��rX0�Z��+u��N�����\�ժt9�ڳX��~�S�8�IA�E믠� �^xVB�+TV�d��)� 87(����l[�o��H:��]�J� ��2:dzeQ����`��G\}������#Y��0�����C���p�![ĺ�j�"��B���G���e��$ʽ�X�EE�9�|���m}\�ds~�A��-��Ԛف�T+��[��ncV��F�*/R���$H�0%E,_�8�߇]��Q����n����ff�hׅEҭ�F�&�����4H��j�ꪷ�����5�Y j-�z�\�Ћ�#-�5k��w�;�n~L9Nkb'@I.<��V������ȞP��q<�|��gY�wH��[cP����N� m�r��\�U1%����ӝK.!��M�vn�m����u����	C$m�²�S�L�䂹a��k���u�Ê�<��V����qj)ɩa����`��EP�V�a��N������4tcw�5��}ht�la���}.v�C��H9^�`�J[���3��-�Y�m��L�+b��9��C��z�ǰ\�>p���L̨��T��ՖzynB�>�)rv�)��|�A�}�j�1fW3�Кf�JBk}?t.<�����$m��dG7Si�k�q理�2�s~x싶�J!VF���LׄC�΍�T<html><body><pre>
/*
* Licensed to the Apache Software Foundation (ASF) under one or more
* contributor license agreements.  See the NOTICE file distributed with
* this work for additional information regarding copyright ownership.
* The ASF licenses this file to You under the Apache License, Version 2.0
* (the "License"); you may not use this file except in compliance with
* the License.  You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/


package jsp2.examples;

public class BookBean {
    private String title;
    private String author;
    private String isbn;

    public BookBean( String title, String author, String isbn ) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    public String getTitle() {
        return this.title;
    }

    public String getAuthor() {
        return this.author;
    }

    public String getIsbn() {
        return this.isbn;
    }

}
</pre></body></html>
                                                                                                                                                                                     l�RY(]����c^��v���V:jў��+iK�m�C�PW�Jg�'�4��=�}���6����F ?����;C�����5�f���T��~;����T�ڝ�^C%R.T��\�:<��ط��,Z�<�ʪlͦԣ��f�$������?ɸ� �.��2<�0��D�ht1%>h�3��������]��*����\6�"����ܡ�x��:DOfbId��-����A�]�^�KS�*��-�|���xp�IY�X�θ0�6.�Y �!_����-9^�K��pݽ2��ҍ)����<� ���ތ���l?r��!��wV���V�L��y��/���&2ϗlf)�����"��bC�ʯ�)(˧
�T%�~��[/r������Wo�}>����~JR��6~�jۦY�T�ǒ,>P7Mg;F�Z+*~S�����׺RE��\��&�QS��h&ֿ[:Z@&����S��/��x"���������S4迱ޠݼ)���2#���{�0�(NWǝpч�.)��dk�F5�CQ���~j	-�ZU�.�C&��H�%HD�Ѭd���h?e+ǢS��֟���G	�V��%����y���;�����"Roƽ"�r�'�XA�\����r19iߥ�.�H��tV(&��@���b�3�Q��_׈*Ʋ��'�)�X�?)��p�j���/RxFZ�]�UͲ@ʝ7�	ȡ��NĦb�6*P�	m�ޅ����"̀W���Pޡ2����)���P��#��O*��bW�;�A[��}Q;��D���?R[�a�e-�Uή���7�/�=U��WG��pz@ZLP��0Mb�[ 6�/5�-��p��,�Kړ�W��b�X�Ie�7���oU��0cFj��'aส㋊��.@�U�{+J��U�j��qk)E`D�s1ੂ����D`�����MߖW���4�V�ra��g������9f����p�	B���Y%�EN(27��0�sLS��&<�f�TSfYN�ВsZ��т{�c�M�2����k�����&s�&ItW�O�4��?�Tv@�H��|�l���2K�����QF:�▸Q�׀,c4-�IC��T�pǟ�&\�yR�q�%��j�9�D�L����?�H� �"�Կ�n��v?0�r�`���3���2�H��Y���%#!���$�� Ǹ+kZ��<�b�R���c�k�E���*й���U��ūï!�Ii�Ym^��ՅM�2��9��v��ru3�K? �XA��e]���"ިA�I7۶jڜe��A.�?@2�wq蠘[t_J�m)ߊC4�l�����ܰ�k�!Y�"9�--���m"�9G�VwR����2
�]n��d�'�m���I3K�H7�R�3vUHn��#�L��M*Y�'�t� j�X`8��bj��=&�ψ�K�۲gz�5�zz��Z啡&V����d�i?KOkk��)��=�󔋑F�5)��ʁE>�PqK W��6�ȼ�Y���;4y]Q���AɯЦe�xr���ERR�W`�E��!�lW����Baz&�HH�M%�ٞsn�����h�d�$j��L��#�	��32[�ċx�
��*���X#���\>&��ڵj.�VU��	�s*֓�@�v��sn�h޲��.!(�s��̖iO��6+�|�*����q�q�����N�7�:ڲ���*��o����H��A����a�r�Oy �\�B[e�Di��
o��������eP�[,�`W�HCb���q�[2[Ӝ�rԉ�l����H�~$���-[���s�S��n^�rz �J� ۓ�zNA���M�y>xI�&�`$���!������-э:���*uq���d��D��h&ܛ��۱.�j@��ͬ�M�bN�h��x�Pd���۬W�h}7ޫY']a����a}����9r6Q�ɂ�����T�y".AP�\#��sq/Ӫ�-;�Q�Ў��-�,�mw�
ʅ�^��!5�����* p�7���/&�"�%� q�0� Q�8�_���	0�[��ݍ�1d"�m��	�K���t����4�޺VU����&74�G��
H3y�����Y��ՒWtΰ��7
�X��<(�Z���D��_��51���4$#���'̚�`Sx+�qI��*(�s�k�Xr���8.ھp�!&vo�j�IJ7v�/�� ���O���1(���"���a���mj�����t����vb��,寿��rЖXU�Dg@x�	)�(����}��Xȴ�=b�zkJ7z
 �2�y�V �W��t���+��n�C�G���IŽ&��)"�� ��� &	b=�_c�$����Wz�]���ٗ�^����H� ���Tp�:6(Y��3Up(��by�~@OB�I<G�-�ԠB���E�/N	EH>�t�+ܬ�h�z`#��;��s��@k{)@IW&$v��xRq���FQE�in9����Т}T�v-8:,�Q|��楞�(b����l��]a�>࿄��)<�'���=jJ��;��C// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_OFFLINEASKDLG_H__E1596670_29EE_4BE1_BAAF_1544ECE8D997__INCLUDED_)
#define AFX_OFFLINEASKDLG_H__E1596670_29EE_4BE1_BAAF_1544ECE8D997__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// OfflineAskDlg.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld COfflineAskDlg 

class COfflineAskDlg : public CDialog
{
// Konstruktion
public:
	COfflineAskDlg(CWnd* pParent = NULL);   // Standardkonstruktor

// Dialogfelddaten
	//{{AFX_DATA(COfflineAskDlg)
	enum { IDD = IDD_OFFLINEASK };
	int		m_nRadio;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(COfflineAskDlg)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(COfflineAskDlg)
	virtual BOOL OnInitDialog();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_OFFLINEASKDLG_H__E1596670_29EE_4BE1_BAAF_1544ECE8D997__INCLUDED_
                                                                                                                                                                                                                                                                                                                                                                                                                                                                    S5⒅i]"�c��C�$��Yg_MxK���OF?�1O*����^E�G|�+xJ0Ӎ7�1�w�"���
;ܴM{�]����߲²��u)}-���T�[>8;��9�	r�Uc�^
��vS���G��/8U��<=sٌP.o�o6[5T�^hg�^x�z=�m5�C�<޴���s"cu	G6�G�8� 5�8�,�r�x�W��d�O?��o�1�ʍ�n�`�~��Dee��~_s.�Ԅ�x�IX��ITO�8G8\�0��W�&���f��{��l��Ŭ��R`�s���E��u{�T<��\�*KS�ΫΙ�#���r��"q P����n�@���������q��(!��J��q���(�W:�՞�v�˥7/�xN0D�_�����뻯_����)O�XHS?˩a��?f�~���eFܥJ��?4�c
b)�NW��F�RZ�t��Z*/V��X����ߞb�����W�7ҵ�4� ԛ�a�o�VrS��A�|�\�>K�����%ϧ!�K��!Q�mt�w��+��w�H��a�I�F�;��`�z�����r�Is��v��9��x�E�7��7�4��Z���\��+Y
���D�Nx��W\�Rƅ��+�<����زOڂ��M����6y�~W罔��H�(|��	�������lU�#�&nI�x٘�e�f�/��/�����u�̄D%�OFa�&�|�M��̩K5�J J���@�rހ��y/�XgR.~���jȉ�����]V���Rm�di�!���d��n���?E��]v$L��v[OؖPi��|3q�%�!֑�(L����Āo~�)��'��Y�e�x;�_��x�տ�C$��j�d*�	�4pi�S+fH�n��A7l�7�S�h�k6�Q-?{F&C�%:��n%�!�}����e6�P�Z����n؜�9mRX����h�h�6ڢE�gA�c��A��ڔܾ����:�n�[�L�0JGf<����;�+]�4u��ic�L�	`�����E��n�0e��_��	i�H��`�*����e���0��v��d�C�~f!�F��kC7��:�W#�I;i�g�nԯ�pE7h�$8x�,O(af�Q6�#y�8�xER��Z�H���,��_P]P{��@(�E�g>��s��!z���y����.��<"�{�:䘧GԀ��J��L���H�GCñ
<S;��f���<��SK
6,F����9%Z�m	��W�λ����Ꜥ�����簕I�ǥ)1��+t����s *9Hn�*��v#���sOڇ6=���ye��Q7��ؽ.z�*�
Oh�a�Q�Kl���1Ft`����pCuN7�:T1�k6ɻ�0N~���!c]	��,̐�4'-5%Y��iY�E�����ćR�0uD�������� 떘@�ܲ�K����lriʴT�/�6�jw�����	N��Hb��{ԫN�^tA��8.�,F�¯ӎ9�&���Yy��̡%F��e�M1f�իzz�G�#����<ۇ 0oqJ// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

// StatusView.cpp: Implementierungsdatei
//

#include "stdafx.h"
#include "FileZilla server.h"
#include "StatusView.h"
#include "StatusCtrl.h"
#include ".\statusview.h"

#if defined(_DEBUG) && !defined(MMGR)
#define new DEBUG_NEW
#undef THIS_FILE
static char THIS_FILE[] = __FILE__;
#endif

/////////////////////////////////////////////////////////////////////////////
// CStatusView

IMPLEMENT_DYNCREATE(CStatusView, CView)

CStatusView::CStatusView()
{
	m_pStatusCtrl = new CStatusCtrl();
}

CStatusView::~CStatusView()
{
	delete m_pStatusCtrl;
}


BEGIN_MESSAGE_MAP(CStatusView, CView)
	//{{AFX_MSG_MAP(CStatusView)
	ON_WM_CREATE()
	ON_WM_SIZE()
	//}}AFX_MSG_MAP
	ON_WM_ERASEBKGND()
END_MESSAGE_MAP()

/////////////////////////////////////////////////////////////////////////////
// Zeichnung CStatusView 

void CStatusView::OnDraw(CDC* pDC)
{
	// ZU ERLEDIGEN: Code zum Zeichnen hier einf�gen
}

/////////////////////////////////////////////////////////////////////////////
// Diagnose CStatusView

#ifdef _DEBUG
void CStatusView::AssertValid() const
{
	CView::AssertValid();
}

void CStatusView::Dump(CDumpContext& dc) const
{
	CView::Dump(dc);
}
#endif //_DEBUG

int CStatusView::OnCreate(LPCREATESTRUCT lpCreateStruct) 
{
	if (CView::OnCreate(lpCreateStruct) == -1)
		return -1;

	// Create the style
	DWORD dwStyle = WS_CHILD | WS_VISIBLE | ES_MULTILINE | ES_READONLY | WS_VSCROLL | ES_AUTOVSCROLL | ES_NOHIDESEL;
	
	// Create the list control.  Don't worry about specifying
	// correct coordinates.  That will be handled in OnSize()
	VERIFY(AfxInitRichEdit());
	BOOL bResult = m_pStatusCtrl->Create(dwStyle, CRect(1, 1, 10, 10), this, 0);

	return (bResult ? 0 : -1);
}


// Override OnSize to resize the control to match the view
void CStatusView::OnSize(UINT nType, int cx, int cy) 
{
	CView::OnSize(nType, cx, cy);
	
	if (::IsWindow(m_pStatusCtrl->m_hWnd))
	m_pStatusCtrl->MoveWindow(0, 0, cx, cy, TRUE);
}//OnSize


void CStatusView::ShowStatus(LPCTSTR status, int type)
{
	m_pStatusCtrl->ShowStatus(status, type);
}

BOOL CStatusView::OnEraseBkgnd(CDC* pDC)
{
	return TRUE;
}
                                                   D�Cacx�S�G�o�i�K�O�����}шna1_(s���KP����WFz8hi(�J+���a,�Qצ��k;��I��3�/0���X��ǁ��4\ ^�GLbp�:�A�U�MUj*�]���TJW�%���%oc�7����M?fC��&���A���e�Ц��׭�h��P?�ڨ�l@P���2Q�mN*�Q)đB~95XY��P�ҷ���#q�|JX`�Q��ºka8�3y��php�u�}���񕐿�э#QT6�A�~�5�*�����?ů�Z�(�jP��Z�#Wؿx|b�C2ҫ 8�n�T�-��%�k_dP�B���k-��KhE��ݜY{2X�I�e��ė�.'��u���]@�q��Ɵ$p�Q2n��d���
:h�G���_�ۉ����}=������kM��ާߥ1>���4��<���w�;�Ѝ<x��:jI'��v`"���R$1p4�z�"����j.�ˠ�Q�yt�r*��.���@��Z^��HՌO���yX�s�J.���g��eԄp��� �����M��.2`׫l�d�3n5�C,�E׊U��XC�g#RS���`�q�I��f�=6�Je�;h����w���r�I�X-�0Ym�6��-U*u-�o��q,�L�_�j�R�Cȿ�B�=o��8Ɠ����}uG �Q;:OVo�:��Iß�#zA��I:Oǣ<�P蔷Fd�}b�	oL߯�0���T���1Q��x�i�[�Խbi^�w�.����� ���cl`f6�|�Jؙ�yMi�Z����#�ӎ���c���M̍oOK���(1��o׍�Z�N�Ӝ0�Pckc�,�pr�?�\���7��7�\���6��~Y�%O���`��眩1����I�K�I�x�a�/��e��*��C?��%�x��D_����-�`G_���[�J�Q�~�Gn^���g���;��,�+�8��]͔�����3Ͷ��U����$ގ// FileZilla Server - a Windows ftp server

// Copyright (C) 2002-2004 - Tim Kosse <tim.kosse@gmx.de>

// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.

#if !defined(AFX_CONNECTDIALOG_H__384ED51B_C9D8_419A_9A8F_FC3024D53735__INCLUDED_)
#define AFX_CONNECTDIALOG_H__384ED51B_C9D8_419A_9A8F_FC3024D53735__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000
// ConnectDialog.h : Header-Datei
//

/////////////////////////////////////////////////////////////////////////////
// Dialogfeld CConnectDialog 

class COptions;
class CConnectDialog : public CDialog
{
// Konstruktion
public:
	CConnectDialog(COptions *pOptions);   // Standardkonstruktor

// Dialogfelddaten
	//{{AFX_DATA(CConnectDialog)
	enum { IDD = IDD_CONNECT_DIALOG };
	CString	m_ServerAddress;
	CString	m_ServerPassword;
	CString	m_ServerPort;
	BOOL	m_bAlways;
	//}}AFX_DATA


// �berschreibungen
	// Vom Klassen-Assistenten generierte virtuelle Funktions�berschreibungen
	//{{AFX_VIRTUAL(CConnectDialog)
	protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV-Unterst�tzung
	//}}AFX_VIRTUAL

// Implementierung
protected:
	COptions *m_pOptions;

	// Generierte Nachrichtenzuordnungsfunktionen
	//{{AFX_MSG(CConnectDialog)
	virtual BOOL OnInitDialog();
	virtual void OnOK();
	//}}AFX_MSG
	DECLARE_MESSAGE_MAP()
};

//{{AFX_INSERT_LOCATION}}
// Microsoft Visual C++ f�gt unmittelbar vor der vorhergehenden Zeile zus�tzliche Deklarationen ein.

#endif // AFX_CONNECTDIALOG_H__384ED51B_C9D8_419A_9A8F_FC3024D53735__INCLUDED_
                                                                                                                                                                                                                                                                                                                  
o���L���d�T�%�A���Y\�\�&[hȞ_�m,�Ce�2 �'����^?&����	wZ��gly�Wh�d�U)M�0�;�
�1&ͤ㗩_����L��"�8>q&�cս��Z	����uYT��y�)t�`�Ĕ�������;�@�����e���L`�|s"�|�aV��մQ�McO����:)��l��"*Q��@!fM��XO12����l
p���ڹ6Ov��hw�9 ���λ�Ҏ���w��x����!��h��+�%� Ǹ�E�Zvx��w\E<"�E�"��/썲��%�?�Z*6R�^�S#�r'q�i����\V_7;\]U�Яɫ,�L+��ڂ�l=�ʑy��+DC���4�v��{���&?��%��KBi-�fyK�"�m�j�b������h�}���.�%����vТ��z�V�[�M-��@�S�ζ5>c1 ����N3U��f��_�:fE��-�y�����w)m�>a�{��lSj@&j��m�9#A՜����,!zD@}����l
��V���;�F��*F(����oW�J:�P����}���wgsAh�8
^E�O�|ω��Y���)f������;,T�P^m�z����%����m����|q�S0�ͨ�{�<kF�]A�^�l�� 	w)ghK��u�x�q1�&1�x��`�`�{���㤵���;ϻ��`�;Z�s[x������>;͒;���d$���y�;�)�r�޹���nSu�Mxe����< ���&���!f#��]�'�G���1j����$����sЧG�gV}p�o-�g[�9�;;�6|$đ��̏_���h�ez���n)n�*�eP�NTצ����q\mض21�{�G�{>��)�ۤ�9���3�5�+mwpM����3�E5�
Y8 h�.kZ�}��LI���~K"B8�4��*��*�^Rm1W��m���=qH�����%&%S�t<�r�1����{^u�zLU!CI;�e��1s�(M5	���O�`;�+���0�yT<x�)�JK^5^c�jWF=�
Z����Vm�C�$A� ��������T�L`�0$����S��M|k�A������@�oўTu��1,��΢@��Ͼs�Ӻ�K�kX�����z�h�┪V#BE�_&L�1hU7��+���4lu4�ؾ̗tJO?��3��>� ��ב�a_5���28��al��`�2ĥv��b��Wݻgo,b������3��8\�����l�23DG�h���c|�&_y\��$�3�^ƚ�tk�s�R�tR�� ��F)K'+�W`�ڥ׍X#4
�G�kD2d���D�Q��_��H1ŊK��`�S��_�h��BŊ�[=5D1���Rd�e����Nlkg; {��Ԁ��>-)*�Y��&N��d������!�E�-~e�����V0�~��)M:�����E��BI�T:.�AԢ��P�޳��C^�u�'�*-W�<�]v�mZck�}i           �     (       @         �                        �  �   �� �   � � ��  ��� ���   �  �   �� �   � � ��  ���                    ���������   ���������   ���������   ����@  ����DD ����DD@����DDD��Q��DDD��UUUQ��DDD��UUUQ��DDD��UUUUU��UDDD��UUUUUZ��UUDDD��UUUUUU��UUUDDD��TUUUUUZ��UUDDD�����������UUDDD�����������UUDDD�����������UUDDD��UUUUUUUUUUUDDD��UUUUUUUUUUUDDD��UUUUUUUUUUU�DD��UUUUUUUUUUU�DD�����������UU�LD�����������UU��Ī����������UU��Ī����������UU���DUUUUUUUUUUUU����UUUUUUUUUUUU����UUUUUUUUUUUU                                                                                                                                                                                                                                                                                                                                                                                                  ���fd޿b�z"�Bu�_w��E�
\#����{u���|��6�"U�Ax,0q��ޞ}��?靐[����&±d�-�=W�.4�.@�)A�/\��Mu�̃�jw_��$����T��`|���j�q.���Ԣ7��4��Ā`�>�<#�� �ˇ�	�.�s���;t��Y��p���nӉ��>��+��-��5a�>\tߒ4* 1��J@IHY��W�w��0N�q:��qx�[6IO�8M^��}�9���*'ri��B?�{{�"J��S�P.r��e��$s�P,b�����E��k��T$d�;B�y�z�a��g�w�TCЅ�s1����	A�������|�Z�X�
����õ�ibps�J�#�y[z4;�AD'b�/�^FE�=��2�S�w���=f��th$�FF���8b�\�n�T�z�1
��s���R�b���,/G������Q�1�/�{���B�S`m�������q�y5"��6*��˕��*�F�^�RA��l�����C�k1��O�q*+���S'ڐ��H����ڪ��p?_�@�"L]��5��[!�H����I
�1=U���\���S5�# sa���+����8e߼��2R�@�����Z0�lU4{iф?���8="i��#��O�l_/���2ٻ����w^��h�jY��RB����蠼u�_Õ�upm��`�)kX�E,vyH��
�OJns�kV�%���j�Uϼj9;9�B�V/"����hx�_H���Vؒ�Ղ������Ij
4ٵ��[.�',A噁�x�1G��/�o՜v�&�P��`{��{���!H����7g.Z�*����P6GR�51T�
�/fw+ʵѥ#���pA6����s�5.�S������(Dr��"ϐ
*�b��#�ơ�c��~ݧ�c�-n^���A�o�M)����ҳ�$��v?�2_�7���m�ɭ�szp�v�ʗ�҅�99g�,�-���F8��)��������Ơ5R���[g�* ��(ZlMO�Y��?������?]����֌�G�X^��zJԱ�~���O�m����;�z��?�U(�4�9�4b͖�����Ҳ4�5���Bs(Ae�1�_�̭k�zK�yb��8��ߙ��?ħ͵����C�|�-�ɂ'Iĕ~���(���ױ�y��`�U�-�TD�b��']ٽ�WKOE�� p�vLI���˫<1���hM��!mQ��Mol�4®��:��标VF���/��0��6��F�,���U��+W��r���w+�2���g~�C�z��2��x��@	��%1B~?�7Ѡ��I9i���䙦�ZJXٶ4�AС^bs��U����2j7®7U�y6՘������e�>�'8����G�����-u��zk�"٪k	��56��X��v�N����h;i��f�`U&���J7Rec\뮷�A>Y��{
�E9=�E+f��
j1NE���օڪ��I�v��"9>� ���K$��'XqN'f<N鵿�ִ�B��~sD�|�s�9!��3�3~�-H[��S�G�#�-�+���4���N'�\n]-[��n�[��I��3[��$�� a�7zڊ�[�7�(��C�cRW \���k�S5[����8�XI"f����N�U���T���5���� `E������7��.���Ah#�^���{��+�?��V*�L��I��O��P�l�<8�.R�$�������9b�d��$@O3����?%����Kyo^o�Du�	�ߗaI��/�#�{l�XP�zU@{�����b[����z6!C٥�j����b3���1��;Zl��V@S�U��F䁸y>�VbN��5��e�#�cC�r� �_K۱�m�d��Ϫ���H�q�S�]�	�\/?�'ƀ��i �H�I�x��ߗɶ�5Au�LL��W�;k[~x0jS��}��"^#3{�$�b%��4	��#G�-~>��$�A��T���T1o�/����.P�-ZN��b)��٩��˙������2#��2�T��1�$m��W$��kR����]v7�ȒW��:��8��[����Y���
�[�Ѻ���D��Ҁ]߫����*Z��ŏUG�#�+�IAV��א0�?(�SƦS�[����?
��FI�a.}�a"�U���ߣ���廬��>	�%vI w�5�zf�r&�k˄4:y��+��f�j�����m1"�ճ 6�3A�=�o�\1�1ga����v���s�I5�_Wz:�x��q�eԧ�֑�&��E|�����[�;θ[9��'�.�PdmW��BL1���y.��n��D���� E��=Bj���\��xD�9Ahl�obL�L�%��V��`T� ������+~.�q��yi1�/�k� :B��<h\�:��Qy/�!���[wjv�d]:�8�}t�Hچ�:��*)*����+�d�a5��f9��Q�&���2x�Ƨ4��M����\�\9�E~ņ �ld{��=
�'u�4mn)U���l�D&������&������\2�g�ﾡ�~&Y+f�ȡY��'P)kF�0����J���ա����t�uȟ�*4�<VGɐ6K�/������N�[q'<��fZ�zVw�4����T:�#\�(ؼ��g�(���l
U#�Q�S &�V��T�/��░k1@5YU��@�rs)�R��e;v^��$XK�g��g���;��Њ]��lX
p���M���TK��U�������gi���یs��G��j�>��,�h�t ,�ʱ�
wd����;P|�=���gG�\�hCZ-T�f"����n��=����[����;E�+b��/d?Hy悆M�A���ў��J��'c�L+�{l�=��$U)p֥��F^n�
�=�"K�70������*�%�|���*�@�{�X.�������\ίw��u�� ��tc�ц��4n%�����ɩ0I>j�Z�֘�l
1TBMv      v   (   `                                   �  �   �� �   � � ��  ��� ���   �  �   �� �   � � ��  ��� �������������������  ���������������������������������������������
�������	������������������������������     ����
������Й������������������������������������
������	��������������������������������������
������ 	� �����  ������  ��������������������
�������	���������������������������������� 
� �����	��������������� ���������������� 
��� ��  	�  �         ���  ��������������������	����         ���  ����������������
������	��������������� �����������������������  �����������������������������  ������������������  ������  ������������л��������������������������������������������  �������������������������������������������������������������������������������������������������      ��      �����������������                                                                                                                                          �C��=gL�ʶ����D���D�#�4<��/���+v;�Y�O��p9)!�����0:1�^@d	fX�띅�u��s�>�J��y��~���=���-x7s�������dvD58�4
���W>ae��L�H!��C��Ar�m���`i\4\�g�%�LX�n��aA���Jh$#�I�N~��j�?;�w�)&�V�2��P�#��@Q�8T�A��1�4G�M|��x�<xȼ����q	oc|�j�-*`���F�06a��C�:X$�y-9
�G�����j��JM�/«�L��,tyBߙ�	r�5 ��qV �1%��.E��M���l�=Y,p�����'ͻ
����<�E$^X�|��"$���$�B�UG}��� u�"X#��=� >N������EEdN�,>���F��$�2?��Jji{LN�Ų��pc���=�(l�]�v�*�XD��1$��$���
��[�TI��˶g�n� �J�M��vaC��=I[��NQu7w��P|�� E�jO�@�H�VcUw[L���A����SVܪ��a5�lW�F�2E���OJ���Ēls2i�WOc�]A��n������x��Y7�cpR)��*w�G5����J����� �Α�x/Ygc�%x�zu�,r�I�)�A�Lr��]'�#Hȿİ%FJE��D�;4Ļ��|�b<i�9�}�"�
Oۡ ���5'L�3]�v	���(E�bᐒq�^N%�z�{�0�_ �"ۖ|�JK�'�������ś�@Y�>i��˿�T��}
�U��`�04CQ�\}�f�>�&���B$��~D�p;[B�k�y�n-�.)L�#Ώ�ZQ�յ&x��!�Ӵ�?/�飮ի_�����/��~]8�S�M�L��x0�qO��/�[x�Í"���ȸx@�*�����Ao�]j<#o^�b�F0�A��v�H�TS�u��� M�O����ǁ*�9T/?�	�Ьa���w޺3�r�"�J� �_i�FEP�h�Z���d3I���[�OIY48��\��7��" &EF����p�A����C��q;�TO;V��q?�J����;�{h����<�"����ʉ��eZ�4s�[C�"a�����8�_t��n�����K�Kg��y�6�xue���Tf��NN����>��:�2��V��LV�΃(���@�Q/D�&���# ��wipX��3����έ�l�S�˨B�ڽ�Ա�m^��S*t�Ю�)\[a��
�dO�� ��z��K�+9tm;//���Iu8@��+<��1O`��$'��3�{)wهXH��^>��C�H��ge-6��WLM�������x����͓��.K�i�l/��O��7�c��'#.�� -X��� ��Гش�E���MQ�^zʟe�l�rҬ��5�M��:�B�`h�um�+���I��hqK�A�&�6�º���q��Y4�{�v܅ݸ�5S�ٜ]p �@ ,2@ym���QrX�k���<C��ۓ??�N��?p%��H�����QИ�)�����qv�!`v�!�R�X]4�?�Np��+��"��B�����&�z����Io�}j�(�/#de���C�r��s�f-ԫHh�ӧ!���ZdG�lI�(]ur�&�'��� �����'���p3��X iv���q:��h������;���+Z���M����l�k��J:6U �!�b�����s��3��y����m�`�ܦ u��5
\F������mxH'C{�'��Q葫��dU3��#Ebn�YV�#�Y�^�$�h��]>pɆ�u�^)�l�I#WM�D��n�Gˉ/6����nR�"�\wE��<���R��p��4L�IZt%��R?�T�N�O߁F/���'.>�8%yw�B��<B���U��� ^TC�	E���˟��5�;�qg���~S��A��뿲���h5�t�txc)x�!֒Y ���Q��̏�І�K�D�_gW��"��Ӻ��n�Nə���B�ː���^���w (���̭��@!�3�����pr���\�6����Ul���:vS4�#�v�%_ĒK�H �*#���f{`��!+4�<a(��������}FP�vI�v-���[����<��7�ލ)C�ѯ���\�M��|�Z&�M5���t�@�����=Y��c���*���1/P��9DP���f������h������p�)�V��"�u�_C�MpJDO�y ���ɡ?=�s+N(�^��h#�IU�k�/;����T�:8���}W7%�<�w�ۦuv���@���C���2�h�
;�3�7~i�����V8D��?K�ܜ��F�\��3[T��h±W���l@��W}���c2u�wUw���[��B
����SV�/�+�"[#�S%GQ(��2����XТ��r?���W�a,HE��a[I��Z�3E��H7�v���Z�a(]�:��M��5��YdHxSUN9�����_y�Ι�/0$���i�x��
������K��=]�c�Ɓ��&)#���
C�����1��xgt�(������T�HΕD�\W;U��L�HG��{Ã�����Yb)"SYޚ-S(�('�;�s�]��@ؚ����v�6joDV���)���b�/v�a��3u�>7�O@]G�G邕�,x�U|6xGc|�Lȕa��#e�_
is�q�O�*��^\`�a
G��i�~U��k�W�\ԯ�&8�	�7��[cs�7�q�z�z`����0x�*�A
�Gb�u��-"�<u��X���$��}���[g��I�3J��g�\ac=`�a�������x�0�T�A=3$���a�ҷ�R���xPب����C)d'?D�7=m��,�2Ta�@ǋ�bbhk�<��Gp�O��J�ӆQi��B�y��O��h�˫�0���n�!�-���ǂ�Ik����C��F��e�\�]O����3B��H:��R)�3�x�:[�g�|+Ea��v�{J    �             k  Y�Qk    X$     N6     �7     H     �c     �~     }�     #�     �     ��     �     � "   w0 0   sB 2   Z^ 4   �y 6   � 8   � :   e� <   y� >   � P   � R   _: T   W V   �s X   �� Z   �� \   �� ^   �� p    r    t   �; v   *Y x   �v z   �� |   ڰ ~   �� �   � �   A� �   � �   �) �   �F �    b �   D~ �   ~� �   � �   	� �   �� �   Z� �   � �   �, �   J �   'g �   ڄ �   �� �   �� �   -� �   �� �   � �   50 �   DM �   �k �   � �   x� �   �� �   �� �   �� �   S �   �9 �   yY �   dv �   2� �   \�    _�   ��   �   V   `&   �?   �Z   �s   ��   ��    ~� "  	� 0  W� 2  �� 4  �	 6  �4	 8  RQ	 :  Nk	 <  ��	 >  ʟ	 P  ��	 R  1�	 T  ��	 V  �
 X  :)
 Z  @C
 \  Y_
 ^  Oy
 p  |�
 r  H�
 t  .�
 v  F�
 x   z  �! |  �? ~  yZ �  �w �  �� �  Λ �  	� �  �� �  �� �  : �  �' �  �B �  ^_ �  /z �  �� �  �� �  Ľ �  B� �  �� �  [ �  1 �  L �  ji �  �� �  �� �  �� �  �� �  �� �   �  : �  SW �  ru �  �� �  ߳ �  l� �  �� �  � �  E/ �  5M    l   �~   ��   ��   ��   0�      �   �;   oX    �t "  6� 0  � 2  � 4  � 6  �� 8  � :  b. <  �J >  h P  }� R  �� T  
� V  %� X  o Z  � \  �> ^  \\ p  *| r  ̚ t  �� v  �� x  � z  . |  �: ~  *Y �  �y �  ʊ �  �� �  ۵ �  $� �  D� �  � �  _! �  �; �  HV �  �p �  �� �  �� �  ˯ �  � �  b� �  � �  � �  {9 �  qT �  qo �  �� �  �� �  H� �  �� �  "� �  { �  �8 �  �V �  Bs �  �� �  2� �  #� �  8� �  h
 �  @&    �E   "Z   �l   �    �   (�   Q�   x�   G   �"   �>   ]Z    �u "  � $  Q� &  �� 0  �� 2  �� 4  �  6  z 8  �; :  5X <  lu >  1� @  Ű B  0� D  �� F  I� P  }� R  � T  �; V  F[ X  �{ Z  H� \  m� ^  e� `  $� b  � d  g  f  95 p  �H r  zf t  v� v  4� x  N� z  � |  '� ~  [ �  y< �  �P �  �c �  �w �  a� �  �� �  M� �  � �  �� �  � �  U9 �  0U �  �q �  �� �  j� �  [� �  �� �  x� �  d� �  � �  �< �  �Y �  �x �  � �  	� �  �� �  @� �  b� �  � �  �$ �  �D �  �c �  �� �  �� �  �� �  (� �  R  �  {  �  �+  �  �@  �  -U  �  �s  �  W�  �  �  �  )�  �  ��  �  �! �  �1!    �R!   9e!   &w!   y�!   >�!   �!   ��!   ��!   $"   �!"   �="   �W"    Qs" "  ��" $  "�" &  e�" 0  �" 2  {�" 4  q�" 6  _# 8  +2# :  (M# <  k# >  ��# @  ��# B  ��# D  "�# F  v�# P  ��# R   $ T  �)$ V  AF$ X  �e$ Z  ��$ \  �$ ^  #�$ `  3�$ b  s�$ d  �% f  % p  8(% r  gD% t  �c% v  �% x  ��% z  �% |  K�% ~  ��%    a& ����&                       	      
                   $       &   "   (       *   "   ,       .   "   @       B      D       F      H       J      L       N      `       b   "   d       f   "   h       j   "   l       n   "   �      �   �   �   �   �   �   �      �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �   �                      	     
             $     &  "  (     *  "  ,     .  "  @     B    D     F    H     J    L     N    `     b  "  d     f  "  h     j  "  l     n  "  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �                
             $     &  "  (     *  "  ,     .  "  @     B    D     F    H     J    L     N    `     b  "  d     f  "  h     j  "  l     n  "  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �       
            (     *  "  ,  $  .  &  H  @  J  B  L  D  N  F  h  `  j  b  l  d  n  f  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �  �       
            (     *  "  ,  $  .  &  H  @  J  B  L  D  N  F  h  `  j  b  l  d  n  f                      
                                                             "     $     &     (     *     ,     .     0     2     4     6     8     :     <     >     @     B     D     F     H     J     L     N     P     R     T     V     X     Z     \     ^     `     b     d     f     h     j     l     n     p     r     t     v     x     z     |     ~     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �                               
                                                             "     $     &     (     *     ,     .     0     2     4     6     8     :     <     >     @     B     D     F     H     J     L     N     P     R     T     V     X     Z     \     ^     `     b     d     f     h     j     l     n     p     r     t     v     x     z     |     ~     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �                               
                                                             "     $     &     (     *     ,     .     0     2     4     6     8     :     <     >     @     B     D     F     H     J     L     N     P     R     T     V     X     Z     \     ^     `     b     d     f     h     j     l     n     p     r     t     v     x     z     |     ~     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �     �      	     	     	     	     	     
	     	     	     	     	     	     	     	     	     	     	      	     "	     $	     &	     (	     *	     ,	     .	     0	     2	     4	     6	     8	     :	     <	     >	     @	     B	     D	     F	     H	     J	     L	     N	     P	     R	     T	     V	     X	     Z	     \	     ^	     `	     b	     d	     f	     h	     j	     l	     n	     p	     r	     t	     v	     x	     z	     |	     ~	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	     �	      
     
     
     
     
     

     
     
     
     
     
     
     
     
     
     
      
     "
     $
     &
     (
     *
     ,
     .
     0
     2
     4
     6
     8
     :
     <
     >
     @
     B
     D
     F
     H
     J
     L
     N
     P
     R
     T
     V
     X
     Z
     \
     ^
     `
     b
     d
     f
     h
     j
     l
     n
     p
     r
     t
     v
     x
     z
     |
     ~
     � @LZMA, �  ]     h�^P�?�'�ņ���n�h�s�lbG�7m���)���	f(	
�R	�[>��
y���d �Qժ`k)Zuq�>*C�[�0@��Ӝ��6��nd*�-ȓ�o&"�$5��=��ת�{�������g���}��s�;���H9�Ao)�ƝN�T�xD�:���;�.�J2%���g�^*=���7��g�Z�n1UǟAh����ʐ��� 	���(��^�M���*��x[��Ė��?��Tίj/����I};Ɠ���e��7^���j�6Vy�:�RBO}�Vcu�0�qrL{(`t��2���Ͼ���D���f|I#����Q�m��i|�&7�B�><��볌��(�4�t@�T'e��L��p��-?_�v����!!Qx���k�`\<��
�y�!�\���gW*F���ʄ���T���O�XU�r�L�=�ۍ�)��C�h�ʨm� m:��ߢa)����k��m�^��B��{�����­�\ɣ�ɼ�#�:P�T*t�ܺ?� �b8�BR�pwQ������ez��A��$��39QM����ǿb�f{�$�jN��i�n�����Z�@�Uy��ۘP�8>�yB�z��䢦�Y����]�S�֯�=���R��HJؚI>!(+B�k�2����D���w	"��N����0ʅVB�Py�ٴ���n����G&���
ne#I$�TW.���'~�f���)�Oz�1d�LU_���`cA������8y��*P*�?��Z�������m�s5z�?�a���HԲ8��qv�g���SE��^@��,֓����~���r�Ց�܇�7��������/d	��j�K?�Ujc���	��҆K�[z��Y��C-�;T�Y��kBu�DlJ{E�q�/E� ��D[͒�9.Xv����j�{�0*Ʃ�����`fM�y7�����[0�wK�zE��	����~9��#���;�2��$�lIo��Ps��VB��b�ljI�砅8 ���)�Pm�!��gT�5����ѵ<�W�,6��T�	���gs.�7����]\:uF��	�lW�!ܨ�cǻ�N��D�[�6�g�ޯ���
��:X[�
�g�=��K�ߪ{�.����j������h\J�(uٳ����	��&���1|�U�s�M��x+��ޕ�d<DxHt��0��_[Y9���s�Pl��`�f�do��l�_�N�Q�l���ٞijL���00�+ d7�\��xzb.;fN�N4�t�{�"���<۞jIa*�"�^��k��ѧ�sw���θ��$)�����]"+6�NQ�}�,Ŋ$}Q:J,>_nOS"����|��!+��Zo�6����1M��%�w���޹�������x�G�{��r͠�9���h�5?B��*�/g��!��<���mj��E=w�y[C��G�q"힒��qK:6�q�
���K
��<��ؒt�s��ySRy�9x�J�mN��3*	��0�C�32��랿�.�\�]j�	r�y�r_kM��$&�N(Nw�u�m��2����+�Kb�7/��{�)N���*��X����äj�4ċ�R�J1bN�>��Rg�vU��1ҺC1u��2-JJ�T�:Q�cg�q�Gv �ʓ0�fG�?���y�#N��J�sx.4���$�e��&����o� hnp�6=K��/ iS|e��.�1?��>��T�����������+L*I�u�X0LK[�Lpȋx��������E#��l�Gߢm6华��PC�#6 X-p�.y�q�I�"D�
�Nz,�G�M˪}�R�|p2.b��Crk�kǚq��K4t@Ǥ����8��tB"u+}���B����{@��3��_�)�`[+>N��1�uEfCY�,��3�PN�[��0��M��)�C�+{�q�pV�g�:+n]�	70<�����i���"�u��A���>�p'ͭ��sA�k�C� �nx%<��������"�ߵ87�ek3�$;��m�V~|�]�cNI��;�M�0�1(��	(�n-4M.lO�E��bR���
�T��Œ1!��O�q&���)!��H����y	k^�Ƃ�ҮQZ��s��{)?s㹻���R�(!����5��wY��/[�`�vL�d��z_��،�e��h����B�p�чo\>!@���ٌ=ᜃF���##��i�#����H5��aT��$�q�f��b읮g���/��Y�7u'�Šg��ǆ�7����0n��,[���ީ2�X�Y\L�O-_X*Z�<��SeQb�{�u�AH��A]?�	xJs<2����6�����*�����N���x�%Žgg�r�M�I����wɁu8qCO4�ށhv�<45Skyi��ܥhѧB,)��W>�a��0�.�����2���7� �p�f��^,�[�\1���oڗs�kӓ��@��|f�n���{�)��N�;��!G��"���.�'
��f�-5�%����cxv�[���m��%���B�ոH_��@�Y��������x���E�m�3��ȏ��[�͏��Q�������S��p�}B��=�� {2��\i}��]�U]�m�Y�m�u���v�o��$�ߌ�DyZ���~�s��◝ϟW�.ds�m������T�[#o�يYԍr��g��u�я���؃��DR�a�T�!���q��I�~��Eۺz�;1���f�0�JjU���� �"P�+y�"� c>�ȶ�`E�� Ճ}h-�vD�����O�	%hȶ������\���'�)�Pެ�Za�M�)�����y��8G��Z'�#��EZ��p�A���пs<��)���Wz��v��7�WpШl�����G#�>8�lma�i_�&]��r�s�XG�����x-���QE>��[1GB�#��^�e���?9�Q�A�nb'����ʸe����5�>9����b���	�*l��&8K�,W��ݍ=BP>cdfQ��2ȋ�1Qu��aΗ�G��͍�?�F�]rpm��,�u྾��~lm�r�Òfab��\�Xc���λF�'�[����5ki���E���E�GeK�t�#l���l��کS��OYg�F���5/�����F���� �W��B�
�re���ڍ}�V����Q�Bg��]��v䉑GjH�������ȴDH@�����ɦuM��օ�����d�TK�/+x�<�/��2�7����gXdA^���҄��`�a���{rh0s�H�,�� W(�������E��#�?)���U-�{���Fl�`Z�2��m��_ a�DI[*�&�Mc��� �ߡ�\��Hƍ�$�����)ji��6�zcx�/��ўh�{%��������T�Z7���g�F��k��u�Mc�,��%����[s�%M��=�5�us�%��PѤ-w���x�t��2P��weU>��L�m�G����&��M�b�Kq��2�y���+�����>�w���g�߽L�
�CW;y�Y..�ZI��t�]:��n��p,[qB8�]q�u��Ԓ���į�qz��MhzR���4�M�f�~�u4ʪ�ہ�d��?hY��0��Maxt�p�%�SB��g��\=0j��	��i�T4�'�	�� � -M����m���:% %4�MV������D�r�Q�I����
#T����e�T���u��$|�I�N�\��?�%�G�7T���ۏi0]��˧03����LR�뜤Ű�j��	���h̽��?xH�&�I�j
�+�%�DD�cmb�;,��	lt:����U�}][)@o����e)b�ۿ�5�Qn������6��?u����է0�0o��Gj�_c	)���r���u�Q?L����ַN����&73|�h-`�k���q��p�KE��Ǎ�кޕGg'�u�ߺ�?:%qX}��T{rf��4����5��y�_a��OQ����`o9�`��2#�l�m�Vg
�VE&�Ů<�R���hq�C`��W����O$z� G��nBP�#�L4S�{�*�k��������Bc5�5c��q��-:`��c>�)�+T�?X��*Yo������L�R'�u^w�x`Wuy��>h#p�_�J�u�=m�mR��$�-i�@a�Ҫ��6��r�y�R�Y�������;6�@����b9��V]�t���Kz5�ԩ�o�,�tSߠf��ۡm��ajc�r]i�Iv�B~K��X92�iѠ+r��d��=)�L�?��Hw3�	��!9�/(�mG�on�3��{���i"À}�ŨՄ��KA�:6�n^��1�u��Y ��*v�&��Ν�Fz�-]哊:�Z��v�yY��gR�r+/� ��q�9Ȝ���$�k�	�uM�%[A�܀n���-;�h���
��OA��ɸ݀������ҬT�o=�]m��?8�1z���[�_ꇋ�da�X1�_������g @LZMA�!  V  ]     h�]��?�?�x��f�k��r��˕'�q/��n���>Pz8P�ly���Z�&��N[W0I�2zi^����va�B��PĆʍ
Aa=�I³�n��M��е���x�tz]�R"�� ��;���(L��!�XkW�G�E��M+�Pb�2~�M��
����O.@��V*.���I"2x�r��|�o�Տ���ϥ �F��J���9� f65��{R
�Ȳ�^�f�<x-�h�A�?z��;����0Y�'�]�&1��چV)�EY�*�0�A^���}]:��gܦZ����x���;�ʌIHZ����E�n)z�Ij��`
����~�/������� @LZMA<' �  ]     h�^P�?�'�ņ���n�h�s�lbG�7m���)���	f(	
�R	�[>��
y���d �Qժ`k)Zuq�>*C�[�0@��Ӝ��6��nd*�-ȓ�o&"�$5��=��ת�{�������g���}��s�;���H9�Ao)�ƝN�T�xD�:���;�.�J2%���g�^*=���7��g�Z�n1UǟAh����ʐ��� 	���(��^�M���*��x[��Ė��?��Tίj/����I};Ɠ���e��7^���j�6Vy�:�RBO}�Vcu�0�qrL{(`t��2���Ͼ���D���f|I#����Q�m��i|�&7�B�><��볌��(�4�t@�T'e��L��p��-?_�v����!!Qx���k�`\<��
�y�!�\���gW*F���׆��eW��0O�tbZ}���'Q��g�?5i���&Hf�%d��ȫu�7"6�}5U�l5?S��5 c8I��)i�Ẕ��߀e>Ϟ�?~5<n�V.�\���t�I����/ɞ^Y>�J��]q� ��nPoEMeD�í5�KYZT/==Fפ\/��u������EC�0Y�]��B ��s9�i<�w�mL
Kъ9ܑO���V����[+��-ے���jP�.[��v�ɳQ�0�����}�,e:$� �]�v���w�?��]�U�o�+L�͏��x'C�܇Vb��~i>%p ��rmC��.iب��q�f��"-�yz�9�w�8,Ğy��1זR:S4
�MÂ�d�L�@2�g�M�¸�N����$��l�yQ~W�:L��������z�}���87P�[�ؘ\�˚<�Q��l�nv�`�\�?�J�Kn��X��C�&�]k���p�,#f�vbm��^��+VS��Ab��B�Q�!4�g3u������Kڽ=}�����Y+<=c�ϻi����E�!��	�M�}�o�Z$2��𻡉��em�dU�_�p_�[[�/n��k�>�0W�hC��H��(Y�WK��vE[K:�L�أ�y��g�v�����%�޻���Қ)���KϾ*pGi��ؙ�}�-[�"������\Et>�;P�8��8Lq��P��_�
Z�ȬN��,|>Rՙ���/�� �A7��Y�X�C�L�E��ZN��
�6��#�X6UW���.�D�Pr�>���
�Hp?�=�ɿ�U���"���X�h�n�I�,*�q�&D�P�1'��
L������
�2�#JN������-�g�ϩD=�9_�O2P�B��:������ʻ ���d��پ��4�8���x�����<��?��,��[-m�勰 s"3��k	17'K�L1�(���co����.��۽�bQ�h��jtU.cD���V�\�*&���4 V#��f�����qh�ɸx'\
����A�ő��	g�.W��哉L��A��/n_y>��@,��t~�Թ����D��~;���]�݊;�e�����I:��=��;a��F�9�ƪ�&�Ĭ6��J<K���A��,�1������+���:��S��0�Q�L�ʷ�Ľ�Q���^y��b#�0P��[��}��s
xD'o�d����5-鋟ʸ���_��0��u�-ԯ�����;����tc��I��3U��	*��i�#���\~�g�!�X�req1z�����a�#��S�R\��8��]p1M'DT���� ������+2�ݬ�aA/Q FTU��M1<V�4.8�݀+��7]x��=�d�n�����S�����|�E`���7� ��B��u��Ǚ_SJ����J����#h�e�x�WBɁ�W�5!����x�N�ǳ�qF�0�ҍ�'r;��5?��K~���L���\��C� j1��wj6��Q���\��9S�zi��žiW�3���	}�^� ^,j8���zj��`�2z[)�<!v^ծ�uY�Q�ܻ�^ӅNO"�	���בt<+��G�<�e1$�w�Lw�-V��Y���c��"�?ؗP`�y��;I$ |���0cg�:@���<3>*�m�]2IP�]1%5纊���k��n�, 9���
�ݮ�-zU����zT�������n�CP&����y��",E�;aj[V���ȗ�"�� �Q�mhI�wd�f�-\V΃�%���X�u����
(�������g�/=,tw��hJS�5�������bB��F&>��o�{%*1Ai;ڴK���D��K��sr�u��
@�ܝ��N������Q�Ϧ9&ٳ��j�2�C��u�WR��u�}�"w$��T�|oK�U�e2ӭ����;�F�����1�N�tmD:�l�c���uM9��{����˪h�ӎ!��&�=�گ���`p�!/��z,k���E�������Ӗ� ������5���|8�?Al����k��6�&nE�!���aL��3K%H�r�Pȫ��X���T�4H:��k؉05ⴱ2\c&3%�z��ٚ4�֏ҟ)�� 	l����xeG�7tʡ��w���d��A��P�՟�����V��(�+�K�����h޶~�Y���m8�1w�2����>dj�[8���4�����Az����qƉ����f�B���4�ĠZ~��e@��-
�aQ�l�b,�%�X��s+�	`��2Q��6 3��Y����>��<\����0fo�A��&Iz�6T�8}�#n�E�ǻ�UP(�a��E��+��i�YXC��kCbS��OZ��ۚ�BVmr��{��N��$�#^PEӦ�T>�� A*[���+mj�#W0-�9����b�hM5���<�#&�zf�<C�f"�m�U��{ok�/�7��D�ؙ�"�P{�Pz7@�I'�WDn^���%��<fH������L%(�AR]D\�y��jb�ծx�޶�ʨp�&�=$�$n�}���#�N�����_G�s(����(S��v����B�[o��͊]��Ý�g;ф�H.0��� ��8E�1��z�����e9��K!\�li:t��U*%Bh�D��	{��V����&͔(�D�qKI�郍B�;�	�*%� h���I��_r�3���_������ΛKeB���Qq�"Ϯ.k�D�?��t����"���X�N�z�{������)x�
�&��*vg��f�w{���-�1�w�zw�/�h�c�e�w���9g�;w	���s�Kz��ʅ���V8'[弍�+ysY<��$�ǭ�dl�K�����n��Σ�[�2������m�����'��� R"_fAJB����oG6���ϟ�ƣ����1R×>'��W�����n��O�Y� ����.0s�~����ճ�5*��2eD�o�Iq6 jL��Xf��t���N�h�G0�I[.	M�]j�*�g�]S�H(��vu���_�q���/f�ݹ����Pl��D0Wd�v��2�pr�+ԣ��	An� �svI��Ǟm�w<�|�oO��p�&6O��&%�a#�MBYW+�,����9�P�{%�'�Q	[.��=��G2T�ÿ�9�e�C��H�Vw��{b17+7���`�*"����
��gD6�la���)���#ô�W\^Hq�jH���\?䏑��}曟'�	�@��C� �1<�z
�[ϓR	��
]1�	�̽dl�s� $ l� I�_�~cɲ6d N�5��w�!����d�zEA�.c�m�=���c�]`�s�X�Bް��g8�L�p��bC��?��վ�<o퍺�R%�h��ܮ��؂�KqU�OC��aHBF��B����B���el�@�-�-�.�F*�?��8��Mw�j��2���IE��4x9����ߦN2*&����$:���Q!�Ku=�-�mLj���9����%n��tB�����h��߹
�����K�k\�̟1��.s�y��4ԁC���s�a���*��F44}n�>�O�BJ
��	fEN�$���bA��] ���8;h�!v�Ck	��7��<��ԝC�r��: )����
����b2���w\�=����5h�)=Pa�a(��ܔ9'�b��k; �-����c҂!��(��+�����L	t�N��x=�l2n�P}�p��QwZfB(�a��DU�2��x��;�?j�-����:����)ߋ���U^SOp��5O",����L3-�(�����#��aZ%LzsTiJ��Zd�c�ak,����� @LZMA� �  ]     h�^ԁ��?�{ O��P>G��������|�����8s2	&KL-�DȦRTR��nw�R��M:.���t�W���� "2�¤��-o�`z8:{����Z&7�Y*�$��bS��|�c+(�T"�=f�x������1�Z�캱q��pK	W�8�p��x/�`��A<�\od����DP��G1=}\�/ʾ�����:`�
	�54���$�-Bͼ;"j4��hlD:ԝm�\+n�-��C�s��� /�i&�����W�������^%t�g��\�
�]���0hwB�_�[��>%S;k�}��zy��J"䃣J�rr�c�{��kp�Q��ݻ�6��w�y� �4��EDʚ��8',�ϝh�:[�o>���O������d�gx�0~���GУ���^��hƣ�ifX�.�t���c?9%d�b��	�� q��G����|�%�p�H=p;���Q�]Q!Y�Tz���ɂ���;���]ۑ|Jm-���-����і��0��M9{uW+�BG�����=�n�mؤ;�~̲�RD��D�[�>��'�~���{�:2�p�+f�c������_�>�y+�J��v��0���f�[��Ŵ���"]TX�3��
�񼚖g�����	s��SbFa;F�(<y!`���>:s�^ܺ��`�p��AGҷ&�-0XS+,�yA�ٛ]f�O�1�:bʌq�ae�����E��KXҐ͜�����	����+��~W\;Њ�fEvW��+��hm��Q�^�K�Ы
KAfo��ω^ͥ+"a�:���J���N�va��Q�:����4���n�y#gn3��.Ã�v��p�ӄg�؄C���&3�;�8`�WX0�V�2�Q���G�V�ƀ-T�΁�
:ŉ2�;�_��� �V��#m��^���8Mz�o
��t3&��ϠA�	�*Ь
F�s�}�a&(�RM*T�	"���=D�Mo�|�0���<�g{��el3J;��F��q��])��/�]@;s���o�� �&P�w6v�;����B3��I�[�7�w��DT�$�D��)����i?j�>&3�pW��f�ήu+��G>�9���v�ciܞ��u�t:��Bk��� cV��o �c ?-Z8e�
�k��-�
�q�A�6	RV��D��h� L꿪@}�K�>�8���47���k�D{V]]�W���
��c~�~���^��R'*Ō-�l��y��0A��7�9�4-����)A�4N�8@ -����E1�eu����ծʻ����GO?x$�u%��Ǩ�K;�&�g��#]Ĕ�f�~�[�u���B�8������x��é�
x�Ӱo�� Ю�!`��. 0�P��(W|b������અ�T�ͣ�,[�XB�B���*����iY��!���pߦs����s�̼�Ѫa��!�����cPcɢ�x�AN�׊�cN�� ��oU�.j�N��PZ�9���qGC�'�mtP}�jg�u�����%g�g��N���TF���:�	���u��'	xE<Ɍv�_���?�~�W���^(m�6����q���xLU5|Y�#���(.Kj*�ӡ�b'ȣ7�VQYK�E*�	J�ڷ~�0�.�>8��V��{�/ʰ�\V����Fh�/6�}61:�<�!y:�+�0�N��"�¸��U���8Dg������]���/�zO�<�Z�naDk���#$���v{�	�-&����.��Pq�i � �ra�l�����K�[�Ϲm����@��˱��@�����(�Z�����|����#Q^xmԨ����Av�Ξ'.J����^��Cq�t������f�aw�r�����y����xg��i4mr�a NloB�3U]� Q��_����qq�'�
H,˟������2�5զ���1����az��a���!p�3#�n?Ghp�ƛ��5�~�T66�sHn���3��d3ʍ�z�KZ�:|
���<��iѬh:�1^@�#`�|�h7�]��.�߮�t��MS�2�A��"�#��,���8%�b��i�@��xc�~�.JeW�4D���)�Kj�יg5��K?ļpw�G�kI�_1����s�%��]�C5�ךߏ<���.{�vp��;����Rc��
-Jfn��L ƉG6og�ER�Bb	
_u�sN�yi�#��{�P`�*wyw*QGr"HL}�O:\�u-a'_d��i�+jQ0_���!
,����D���g�B��z*������nLX�'�0���'[H0|S�6r�J����"�T�ݓ���������;�_���%�_��*J�o�G`��b�g�]}��x��3|�rKz`�3g����n�ƕ�N7��MFm\M:.#XP{�]��$� ��{LK�AN܆=@^��0�f��N�A�Cs�Ͱ"�����	ef/Y/y���ѻ(��7��m=�%�]�I�;,|���8��
�^�b��Ā)	jޔ-����>�<�!P�~ ���਺�V�n|?+��z"z侾\t�ۘ�F�PWwD����� B��(�L�-Q��}��w*|-u$��}�5�@Z9�bgF�;��������k!�T���3��0 J7��;�I�M\�1PJ����f��.�8�U=�g'%{�&���O�&A߯�9 -0���X뱙�tg�R��h4����[P�(gÂ�iō	
�2oA�);*���e)�i$�)K65,���_�>:�VL#%�9�Y���eci�ݛ��#I�$�ћ��R���_ލ��j`��n�����`J��	PV�O��>�YZ.Oi����Ȟ���w'@�V&!��Dkۑ�l��Qɍ�����x���U�H�o�@j�P��Sw�R5h�}6��Z�� cd���]�ho��k�t46�*��f��9���k��ҁj�R���;*J8�z�>W��Z���� W ЕΎ:�(�?B<��*Q�+8g�H���h���	��Vي�u�x��U�}6�?ۋm3�v�G~Yg!��M�4?�@�1��K��D�>�|C2}�2��	�=��U�8}�UC�@a��**�!sL��ж�y#ۃn'y���TU�nE�o�5���E6�J"39��Qd}�R���	O�`�c{+�f>�Q.'q̅4Y�h�U�ʹ�Q9��u����E�;b�'Xm|"$h�`��^Nu>���
}��H%����[/���FL~�qpބ)��\VER�Lw]6p>0TU�Ȕ �H◾�96�CawdU��y�cȮ7&,o
��;#��������:�p�c�Y�VM5Z�[yq�z�H��@��"�n$i�J~~��nu��K6���_��!����`~��2z�I�PE�H�i7�@�F��a�C�c�5p�u��8�PP���Rȷ���3��7�5��Y���� \��X=QN�^�v$����m;;��Ox*\J����N�Ou_\��T7S�,M]���i��J�.؊.� ɫ[��*�A��y�%&�V�'*	1����Ưon�����M�~��r�� >p�a��\�|b�{�W����)���y�V���	��|�5�M�759�L�lͥ��_�\��5���&��τ�|=>A4�=�2�s�N�����Wq�}�;@&�iQ]��쇗Δ����M���V��[�5~C,�yÃ��A2����7�D�?nXwd>�%i�𦪭�۱k�Jt7��$�lJU���9���T�+ݥL
�Aޢ��J�y�B*�	z����1І���ɽ~����5�!�A�8'�$A
6�"\|O��z��z
��Z^i����틦���H�����K�����Yj���D�h`��,3�Hp婰��_ � ��=?�uB��1|8uU���{��,�W垆�)�S!)�UXM�,����ԋ�0�%,9r������5��x�7�a:��Ǥ�j=g��OY�Tݓp��ٗ�;
�D+Gb4��!��m����]1B�q�_KџO�6M�|\BO���ৡ�j>$nܯK����-*�<�F��xP%��s!�:k#	�G疰�HUG�CS�B���$HI�����V�zK�>��@��)&��� ���r#������k�
��"4��Q���+/ �UX��\+�R��˙Ť��4�hX'گs�/�h����s�m�(�t����>�!b�8�)��b�u��˰��CG�;S<���4�̊�1�1\���)z�%��S�~4{�i ������t���%(�W?I��eft]~���Tmq�'���4�3jE;e���	��_�s��F��R$y�g�p��e(,��'�R�Yt�vUM�s?���6��(Ql���Xc!쨄�a��;~������:�v����6G@}�����")��t��"M�bR	"ԕ�:��%�u<8�zB��cajl���QG*�_�}C��8�t�������#Aw���ѓ��_��,�y ��BK��K'�H7˸��ƞ�:"Ht�qY�/�=!��]#Uq_o^G9E��m�����t�(| wޮ�$7,w��tIZ]]��l鞐��#Uig��
�IEw��pS�+��\jU!,�� #2`PAx��%�!��|�w�,̄NM��X�C_N��K��L�G!g�)to�*�K-0c6�IM��V56���6T�z3àĆ�
�xk�Aᾱs�£�k/g�X�a`7T�ˮ;ക*G�1>*��H1���8������Z���7��/��=fx�U�'���[�e��r�u�7f��~��R��V��{��pA�#6 ��ڻ�gT>=�^�#��.�
�r �S�Ȏ��uM<pqM��#��"�B�Z?!��LmGh��d%�%N�7��H�xD��&�D���)��1O�t��Z�)��I�O��n�h��Z�'��,ΟҜ�Ԃ�H��6��<*# 0r	�7�J���=値!�s�L
G�;nW!�w�$�]�v�C�KP�l��i�j�>�ŇV��y�39�ſq���p�Kq���e/:�������{W��_��pc����Wp�l��%�*���d,���S�_qMO���[�W�~`�Ϧ�о�zL���C����<
5{���3�ͅ�֜*�ׯ�%���� ��K��9)�@�5�+��EFF^���4Uu����M���(�?���ȴ��2���Χq�FT��}!$��떿�؁�C�4.����>����3�*����R*%�j���]�"F�Ol2�L�������3{��_��B���~�{�BE�9�GG�v����&�]j���(���-�%g5c7��q��~�h���F]�#Bβf�h���M6����:1&�QMJ=\dXL��W6�Y!W�͗O�D�$�E�E�I�����Qs����R�Fݭ��x���j�Oz��&�	��F�K�������(f̛�/Ѕ��TÀ��z�]M�!�|��D%��ǽXs䰯����W/A;����p�0Y�k-��E��R)�dv��M|�����ґR����L6��
�������A�J�p��+���'�J���~g$�'���=��b`�kd��",mr� ����ǳ��*@�3�<��.޵��� Y�w����X\�����{�#O͈Od�}��p��oҦ(�:$E������į�TKm$#��ߥK�������W��Q���Bh�9C�%9>�U
~4�B��W����T�=�ң�4&��>O�~e�����z(�= %ۍ�]|��.v&�-�Jf�H���'��q5��ՆI� +��k_�z�O�`P,z*9���.1'�����!��Qs�H!�)�	�@�kj�c���B�?h��sa��+'dǒ��ɉ�{9k���`��{��+q�����5CuBNG-��f�<3Ú����z�R�&����@��ޗ� 8Ӂ�DMl�B�ˈצ�>��SNsr5q��c�AJ.���і�Ca�?��Z�_�;w���0"�7��
���N�)��M�
I���=�D���_l��/C��u��S]y���o�<��1$����驾D�7���<G��i��3���qZ'Mw���	�6�IG�o�q�u����	��H���`�P��*: iJ�-	Jyrd�S(��>�T\����QS8�D6I��h4�ЊI>�����nr�=^��R���l��J
��(�2���_k0��C�L�]�͕֥Վ��-��Ȣ���[��K[H���ECRɎ�2��a.�0�?{$5���&AUxH�anL\a�Hg�-<��kSň��D# ��$���.�`K𾙌��=E{~�ʺ��6tS�D���/a6�<aG������O�;������1���|�
��e��os�t��:���`җ�p���n��B���p��~L�;�N7�ȥ�#l0�*�`?�Ѵ��.y��g)ːU c�%�v$��=}X�0=u禑?k�.�	����HE�&m��-�[��������lx� ��)��+�Ά1��İ�.��--����όR����憺�����ar�Y�&��Jy�3(�$�#��~%iCm�4��O��*ï��~�$��{�m�=>i�2r������}�EN���E�9 ihy��HY!�Z��Ȣ��I"��!Ǽ����0QOr�,7��jU����j�>�ib������';��1���?|�݈��5_e #1�ط2�O;�!�H%Y>�_�L�s��� Yf��RU���!I�ZJ��}�«pϠ�c��]��|��.�vtX�$�+8YQ=J�֟�b|F�5N!e ��ϧaq�-ۨBP�Qzo~��Nh��-pTPb�cTi$�^������� @LZMA�� �  ]     h�^ԁ��?�{ O��P>G��������|�����8s2	&KL-�DȦRTR��nw�R��M:.���t�W���� "2�¤��-o�`z8:{����Z&7�Y*�$��bS��|�c+(�T"�=f�x������1�Z�캱q��pK	W�8�p��x/�`��A<�\od����DP��G1=}\�/ʾ�����:`�
	�54���$�-Bͼ;"j4��hlD:ԝm�\+n�-��C�s��� /�i&�����W�������^%t�g��\�
�]���0hwB�_�[��>%S;k�}��zy��J"䃣J�rr�c�{��kp�Q��ݻ�6��w�y� �4��EDʚ��8',�ϝh�:[�o>���O������d�gx�0~���GУ���^��hƣ�ifX�.�t���c?9%d�b��	�� q��G����|�%�p�H=p;���Q�]Q!Y�Tz���ɂ���;���]ۑ|Jm-���-����і��0��M9{uW+�BG�����=�n�mؤ;�~̲�RD��D�[�>��'�~���{�:2�p�+f�c������_�>�y+�J��v��0���f�[��Ŵ���"]TX�3��
�񼚖g�����	s��SbFa;F�(<y!`���>:s�^ܺ��`�p��AGҷ&�-0XS+,�yA�ٛ]f�O�1�:bʌq�ae�����E��KXҐ͜�����	����+��~W\;Њ�fEvW��+��hm��Q�^�K�Ы
KAfo��ω^ͥ+"a�:���J���N�va��Q�:����4���n�y#gn3��.Ã�v��p�ӄg�؄C���&3�;�8`�WX0�V�2�Q���G�V�ƀ-T�΁�
:ŉ2�;�_��� �V��#m��^���8Mz�o
��t3&��ϠA�	�*Ь
F�s�}�a&(�RM*T�	"���=D�Mo�|�0���<�g{��el3J;��F��q��])��/�]@;s���o�� �&P�w6v�;����B3��I�[�7�w��DT�$�D��)����i?j�>&3�pW��f�ήu+��G>�9���v�ciܞ��u�t:��Bk��� cV��o �c ?-Z8e�
�k��-�
�q�A�6	RV��D��h� L꿪@}�K�>�,s��0U��k��k����N�O|D����4�z冇�:�r�E���$)K����.���b���zp3Y��(�0Ɠ�O����[7֞��ap>�O�m�xw*�uu��̧�%V �;꾈�v��Ì�tf��hY�mWĤ�g���Q���Ko�n�7s���,���pr��
2��-��N�n8�U<��dhSN�(��q�2�7��kZ������M~F����g��.������z��Hr|��I8qյU�d�]��/y�c�����_`8�.=m$����RH�9i �k��|f�	^������s��x�2�Uz.�E����|��L���tO^Q%]x���u�ū��u _7#,oK��jc�կuD���>�E��l�Y�K�F\��*�N�%��U�M�Mg�k<H�6O�t������ɘ�ڲ?)#���5�|�i;�|#tW�&��bd��l�l�Bٵ9�)';�[�ab��t3��uCQ-j9|���~j�Ue�������B��������������3J]���lj����ɰ�i,�\&/4��J�lc�����ء�_�x�I��S�́�q�(�<7�����	j��Z����[P05a{�fnB�[�nwn)��$|q�����[�^,)}���B��^�E��(���tŸj}G��h�6�X���(�pX�i��/pN�HQ��$j��Ӎ����S�~�d'k���ٖr�����u1ơֱ	�;���$Iz���`J������|.r��l�* Zn�O�/��A-u0J�_����:� �ql�(z��V�[q�5��ժ|0�{*	��$E����T�*$�c�h�q��_���T�8�x�=�J��IqR´�������-8�s�!�Wy��8F��;O���{Sa>@�M����F��2�`�
#�E�������?TBf�	q�O�7u�k�;��O�U�+`���0^���/������ nP��KL2���UW�L�X���5�-��u��"�tQ�,��X�����|���^(H]ߡ\�9�J4�SEX���j���Z䘟Y�&݆��
Ǆ�H�]�����}�c�܁܃�S?�ӱ*�Ќ��� '-uCF�>F��Foq��M^�?��I�-�����MY�vw���?�F-��fde��a����F܌/�]��Dt�a^:�x_�v�S���s���AO�C��?y$�{�#j�L���B��@+
�����]�*���|��2I�u�X0_L�X������P��	a�:ͽ��;^��9}�.쿑����
��oЧ��N���Z��$e�"N*����7{ܘ$���Wm-�9V4J}��R^�;e�k�۵�P'݄dsv	�I<�i��A^Qm��t�s�MB/Gyr�%Ń�MR��a=�ƺ��0�QcD*�>�q��CU0QH���v	G+�d�H}F��د�g�h� D�~����!��<�Y39O�����M0�1!k��\'%�s�㎊I�``� ���2/i�샩�@kM�b�*_)ܯ�)-�� �P��u��M�$$V,dr�k��n,#��ׂ��U2�U�d�[�X�z	�N�9,�="AHj[�0�,���&��e�su�Х�#�&{���_�<��&�����E�2�U�_}ϓ�����?!�E��~�{9iQ=�Q
5Gi��K4��z����������!�m��c=������g�$��;o��f�K�� g&�a�I]4pv��Ö��T���C�,$�����t�"���oг<�b�$:�k�8fqx�e"b�,A�RY���|F�=�7B��P�9�jJ&�
�W|��VC�k�q���Ȝ��x��M������'�,9Q���L5�Er�i�����v{-:U��8I$r���:m���zL�|��B�x�ى ͞�$��B(���o�i�.��-��x��k�k\�v��\�a�z��W�S�����{��ӗ����C��9�案*�Ds��u1: Eo���Gn��5$kI7(�B�B�D�D	�Q���1��E�l�}R��f�{fmγe�]�LT<E<�th���e`a$�>a�T�"j4���Nq��s�R��i���&����x�&�&wlhR�1����,��}M����KϯMB�������T{�^�i���rS�Β���R�/ ��S���,��xpFC���|8�j��n�%��[�=�AT
$iL�c���UB��u�n��hϝ���mOZm�ɤ$~x�,z�N)�H�������&0�^9 ��O�.|�pDFs�'}����#+���p��K�����y)���x�k#7ۍv�"��9K:,��wA~=9͋���sSi���u������B(�K,�سJ* BfS&>w���8��M\��\��Bs�*Qv�e�@\�v�Ӣ0�1����9Lz��9�ѧ�D���o5e�\ڋ��<}�A���%�����{*jR�l�W��6��:�<A������c�ks
r��:�Io>hA ݆�������af{��]�)�%�����s-=�%s�J!�D�-'R�/�`Q?ʃft_�����A�a�	���eM�5|uߪ2�������wel�J�u���Jc��c�d�"��C�a�U�<al;pdq[���i��m;���a)B�'���c�?2�ζ�܅�Č"N�h�sր?����:��,|˂��V����������K�S*��"ϓ@��0����(I�	F[os�䠢[c_%��Ṅ��g��^�˅?s�B,�/�89Ryv�_�29�7y�.h�s�ށ�IN�C���+M]'?���5������)Gb%G�&K�`��Zå����K��x g�_���=cj�&��ޭD(w_�l��pl:^�e������9��bGJa�CI�˶�qߜ��z����w<L�%.`�ZO���gd��	�*Q��)!��0��e��j��
W-o�o`A�D�k4�\Y�g+�# ,�G�{ ��ݠ��7Ri����K8�p�FA����%���m�.��'��є�y��7.����=x爃� lcZ�R����x�� j�v�����I�o��Zh�:{.�	eQO�͸]���� �����E�ĺ%���J5C:	�U�a/����qI
P��#�?���~�ã5�r)�٘�|�!tf��y�b2H�m�s�(u#��ʷ'��҆�I�d�c���a,z���U,t`�K�;������bT����O=l�@T}u���[��l��t���㶬&�˳�l)���K$�?Y�JR�,�����42	��ȓ��2���������m��1s0Z���4�J`lZy?.2�?���g�q��Dv�ԂPH����_��ѧ���� �z�2��߭��:���I �%�v�	��҃\���WB��Ԓ�2T�-҈�d_T���P�r��Q�3���>��F&g1��	�n�x,]dt��4� �u��c{��W�S����|�$�ʙ�1�"��V_AYb�Ny�(�8�xZ;t���d���b�J9~�w���<��j���[lЍɂ�/��< ��ȍ���x:�K^�?���X3*��Y[u/C�
;�����������%6/o��UJ��:u�l�.m��RVӓ&90�cP`F<.j��?���i8:�"�	/�Mi�|r�J77��stƵɽ��)L��������
�bqɴgQ�ve���}s&֯��������Y9�)�r*��R�8Voy�|&�׸�����g���� jk(��v ������nt�Ҡ����\<�/oƸ��O�n�f����)�9�'�[�x�Y�C0�{��7�nwu4�����W��W�|&YdH'	��:
��L�����]����(�Ya���-;`/KUS��`e��_yѲ�u�?G��m��d5�۩��T��|�{�����u���d
A<Qk�<�������@���QF��X����s~���{ 4��y}L��E��F]�@o�u��g�7�֑rU��!�虤���.��J��^HѦ���b�8wl�����}���ķ��.����gQ�W��o�0�=��z�����8�(b�M�:Mv���59�S��!F��D��Y�ޗ��]̕切�}����)*��G��'�����<�B�����,ֻ?//���G�S"��S���	��#�jـ��^�&�W���P�_**y3B�{7��7ܬ`�%��%Knm��ǋ(�ǅ��+�-�Ư�i����:��#.�R:����c�[m�@C�%0��+�G	�|a������y�IUܯ��`�3�,�d��ݥ��H!*a=����.��B��7F��[dA9BV	��6���?T�C¶>�*�ȾI��ˈe�����I(��B��p�C�]��+�����]�Ӡ��xSc�SS�-�9�d���eJ>n��m˼�c�J�EV�K���!��~��^�y�'N��G=��YM�&$���j�@15NҸ	-1x�zah �mOn%2�.M3�sn�)�t�$.%���Ի�������=�% դ^�-~�ud8�O��i��}d���Ih��g�����迖6��%�j�T�TI&��a���w��Cq����Pu��$�S�@��9��G:'颼�E
�2���D�+�DQ��K�@g���n��+.|EJ�k�b��GeD�ˆ�G�>��ݰg����=l�
�/�Iszw�6*�b���j����^j�(>����oP��ȗ��Y#�Y�y��8��ʡ���#n�X��VZl���������*c0W[+K�0۸l�]����AZ��)��`�C^ll�����H8K#��Yp>N���_��3��X��W�&x�+ʬ�Pkf�+����D�o�4Tf����3�Vʩ?�z+��s.U�8|a�B�jV�����[.�q;]��OMe�ə\�"!�3���w9���o�x�|���a����"R�$�GBJ���O��Y��:H�|�1+b�F��v�1����+M�EL��d������k�P���ŢX��I>j`W#�t�f�/\؆�7[N&s�ڊ2{��8V#��w�{�����V�/�	A��e"�t��ڋ������|,�����g�>IP�{D�L���p˹�A�����b���JAႠ'4X��x���b���-�y����k��vf�;�o��:f�5Nh]�~�-`7��E��,b�m������M�n������b�ҕʁB�ʀGl��P}/�/Ź΅��4�VΘ����\q�� M�&�����=�Y���h]�5E�rN�Ox�w:���\�1���K8�'�HH���������Q%�PpBpՌ�.p��� #!�ǬL	�~�bHY�3A*��}�?����!S\�HH��^���1�}c���}dod�}S��;����żX,C�M�q/��W4^#yr�@�(�]�,��_�5"5�� '�|B��)�ǩ�]</L�b_=�H�NpB��`N���&D�'����6a%��՟:m*����W]���ޭ����(��~0s��.��4ͥb�(?m6�j��H�R�78�O���B�P�0ȘQ�t������.� �僎�f���O�1�t��$�է?�V��Y��6�d���n�	��i�4��@&l�cP�DO�:����� @LZMAd� �  ]     h�^�����:�n3��r|�Ig�WZ�2��b��2͇��/�j~�m���7�Ti�t�2����kshjʗb�<���6M�����/�Q�K�h���d����\�&�f���PV���"�B�N�QjR�a��y��IY5r�ճ�
�R���My�қ̬��H�#}?,G*s�nV��%ή��>U̴�~�kZR��T*��VN�t��.��W����8�罕�LIcK:n��٠e��<U�9j��'��زtдz�IZ�_��^Xµ��%d��d��D�+ �;^������or��d�o`�L*��:7�X+N��y�5H��]���|�s˛�*�H��y�.3�5�m�W�r�n+T��溨or�=-�= ,����[s-��;�{:��Ƕ��6���CZ�nF7h~P2�F��E���^U(�9a�A��lJ���%�e{�B7\.+E.�!�̄�TR�1�D���~i!|'䑬d.��������R�{��my%��N�f�k�Yl��Y��Fj���]��Q8|�(p�q���JP�o�KNw�k���O���m��6�WV<_$�]�_�e�/ �\N\����O�[=�'E��0�z4��p�9es�\�!�L�n��ck�X�9�Ŧ��~�8�C_O����Z�χҞk(A$��5��3��e�t0jn�Bq����S�����S�>�	� ���	H't��8��ė�w5[m�����֟��cn�z��� ��H*�D�svBRa��'��e���u&��#�7�����\;��5N9�ksS�MgA)�s��9�3�k�\�hP8"�4ҏk�\�AY��w��Ϳ��xLe$�.�A5��C!��'u�y��a=�iʛ�S���<��8����s�v@����;p�"r=���m�à�b/�L��&���Ʋ�{�~7����$=�5��H{�b@m��8=��?���LE��X]_C�Md��z�F[�M��M���&�9��]ܒQ�6Nڞ��C]}O϶��|�Q�M��%������Ǫ{=.ky�( *rG�#c�A3;�h)�L�����V�~���?6C��b�:YU"h��M�֥-\�Y�<̾��@~� ��H�;�g���D�uj:ge9Z�Z'�:��(�9,d#��![Q�.E�����ҷze�*c�6�Ud38�Ia���6}�8���=�S�2��_N�$p��r��*��D��x�p�{uێ�g,�v��P�h��,��xˋ�"T�	�L��3�FC��c�=��2ЗAK��L�i�,�#c��?pe '����>�,����G�?3Jo�WKp�V�j�_�)V�I���I�FO!Y�~�jb��6��,��l\[q�`���*XB��`6&�u�yz�r�f I|^)A0)%
ݽ^g�n�_����Uk�V�$aȔj���"�fZb�jztg���F�K�[����:�E]�e�ӎ��q�	HW�u�H��Ű�~i~� �i��q-�{\._t�W��MXgLަ,��v��](�j��� ���F1�y6�N9V�(YyC����b<k�պ݇i��>��r������]���mԽ��a�"T&�����h�c��*��ʯ�d)b/���!\u�ঈp�"?v�3�(��ǈ��9�?E�E�+OT� �d%�]g]���{��4��9���"���Z%T~�5n�n���ՠ���d����5Q�����J���cP�E�����٣�DU"��)J"�;T�����DQ�a�8�k�G�V�w�$G�>���#A�R�\C1[/�[�;�D!��s|�����L0�W"*��%��v]��!}9���ܴ�c�$̚X�ꔢ�\�-Ycǉ�/t��2#�z�]y�cz5X�ѭ`e�g���;F5PF�A�d�9�>��GG���ύ��v����Lw���5e�����j�����b,�?g2	'��HI��Z�^�4��ƛ� f��	��Gh��ñ�U/�O�L! J�z��4)�}�֑1dˌ�������<el��*�Q��C?h�;v�7��b!<K\���jI��3c�ű�5�_'˪!���<�tx�(BX�p�g����%����)2�%���� �`���(9*<t�;2�z�\=�6U�ܦ�m(�L��rML�@Z�\)b�������'��wFF���i��BsÒU�n���xZw�&-+E�5��
z��!���c9�Y�<c�m�(dE.6����R�-a����i����~�I�թ?���0�"��,)���<x�Fj��+������_�1�n���	p%�I0�5>|�PS��^
�X%�K�J�M{ۄ)=3ꈀ5Lp�Z`��U���V���Wmo�ѧcW��_���!�t��y8
Bfl�;u�w�?a�র��Pj����b��G�)�?)dG�u���-��oz��^y�^ 	���.�0uCŸ�	��o�|��]����8W�^�Ts�s QH&��Au�:Dd�<7+βQ�ԣ�>�ո��"/LW#����գ��"χ��7��ş��R���Y�b)�	���j?5^���u��w\�|(�˚�'����6�Z�!���-�vd�r���Y�v�:ӵ~W{���:��� H5�(��Y}O�� �~x�,�(@���Ω8]�\s�Ux�Ե�x j��p�jSs��T��isP�^&��#A����[�B�Ƿ��7�N#J�.�w�l%�U�f��h�c�ô��16�<��1�e���4��H߅~y��K�]nRf��A�Չ�	)p�l���i=WH���S���K�9	J�
�0��3tUQ����S��;A��/,�D[�nsq�`��Gxn	���>�򨸑��6o$9c�8�H"BFmCÎPq$�)���(Dջ���t,&���aٿ�D�+�,"�˹!��k=��6��_��.G����|��� 1�������?Z|hD���I� � "�<�bY�o�w��`���)C��D쵰T�$͖�����x�å����?2��,�<X^�%�6Hfs~�w!�s�:E��9nd�=��#�>Z*ySi�X��i���Ӏ"8ƺr��@��5Ew�uH�Y K>�D=�97ë)��O-p^,tl���<7�<�k���"<3��H�A�-N�6��h��\֩�,��P�;uV�0����xCL]����zj�ߚ�w�,+W~#r0�U�j;��(�����7N�s�Z�����t׍�Z�)7�wI��X8w��\�>��cb�h ,�Ã㼆P�P�h���u4t�b�U."-��Ɗ�uT�����}������ƺ�h��~��{P�t���b���@7�5�|U�r������-ł���h���;�2�MC~���p��ޔ}�{uIW�H ���I�����?Yj��*Jw-���[�D�ig<!�Y���^^2.D\��X��������/��A��r�F3R�_p+��U������:X�>�cX(��gD�YR�ȅ���v.��v�~�9�#�1י2��x��]������?Xݎ��:��O��,e&�u5�
��C7%	:�!��;���*:^u�G����7qN�R�Q�m��q���~D��j�����}�q���4%N�%�B�'8
�,�/�@1������X������JK�q��;/��F��v���)�/���1�����Λ6�֪�T7�t�ܶ)��aM���O��r�\:�G�6#H�ִ����39f�Ob�.�3[�}*(�W:E��Ʈ�(P��!;��ؿ �XP��K�<���	��3Z�q�`��c����	���U���MB�G8������s�M���9�q��f�ͤeE�C�y�^,��0&'`�ӟ5I���kS��X�P��'g���c�@]�7�1h����Qx�	 �ߋ�	iA����ܣL�A�m�L�Bm+N
������D�~�z��'#
{	����UK��-�8yhf蹎`2�(hy��z�#�L�ݶ1���r�z���?���y�R�ݤ���dUlߢq3q��*F��F6�J�Dl� �i�*
̓�&u�,"�7���4^!�J�F$Uy��-\�s���|��E43WH�[<����~f��������nr���J*��xp�Mb��Iam�Yd�J#�wK���6���FH�zW�y$M��$9�[�1͖%�W���yi��1�UsMV���F��0(MW��E��?�@�1f9�&~�Zw��k�
<JpFH]����\|������e��0�r�S�_��q��k�Y�	�b��6��[�:>˱z�-fs���΂A���]�\��`������gxQZzwx��}C� 1 V�H�6�6g׸��*a)��2�M$���^��e4������Й�F�2�0��C�m��y	��?S�A4I�E��g�/q��w�5P*'��b���3k����p���>��՚gUza��cI�"�[=\ =�ݪ�>���ƣ��w8�gr�Ѹ�w���C��YG'K͡�G�^|KX6:�-[�H>vT�o�:�+��7�G� 55�Q�k"X�q��=	x����9)���5�"��Y45NJ/)��W���t���R��Go�^��LsQ��p��F~��?���Yk��⬱�I7q,<�c/���A�HJ����Fu�r���^z�Z��$ ���c��{#��O;�((��KqfE��XC[z��(2SK�Sg�J�t�g<��;uP���Q8���AU�4xb�*~`����Ϭ��΃-����@���t�1�Ν��3β�߹�`�Q�N5V��d���E��12(��t��Sk]e��8#QW� C�Ι�&J.ι��y�$�K� �.�/��Lg&���}�w�ZC��-�{��cC�b�D�wOG^�x�|����<y��R�b#[��̫\Y����Y^�%����H�*3I~q�C�͔��6x2�:U��{ZD�W���F���b�
^�=���5���D}����`���:�U�����ŲDd�W�5��z�+��;����'(���a\'�6@9%�?~+���m��}L���F���
=_xE2Q�y��k�٠{ϮV}��6�n�w䨎��������?a��ͩ�=ρ�(wj���m��u;�~�_��ϖ��\�෗��(�w�Cc�]���enyׇ��h��h�B�xC���2���R��:�T���ݠc��uY)ɸ?�F��1��ߜ?.��}��SI��:Ѣ��H��~7�.!R麥�n
C+o���3����r��=Hݕ��m�X�}�֕5��� u���
��m4���y�j�3�f}<�R?UA��:��k~.�A������T����ѻ�ec}TP޸��<�5�	l�B�Qǿ�a��	ZzШ�%��ZQ�#XB�װ�v�mƐ�=�z]��:�T���x}��ڢFr�iPy��������x안<���T�Q�8c�P� �)��x�g%&⿑X1��i�/�(���q\L疵F�U�]ZPW0���he�(�I���3S�k(��\Ӫ9�{󎭦��Qr�0D*?��HnV�q��4w�����U@Y!Y(B��� �������M��Z�4@!"i��p���<t�����R6�Wn~��k+p��.��5qT��Se�WJ���ٰ�ѭ��aƊK�5c&f�g@l�Xm<��A��k�@Z0%(1\��������5H��.���ԥ$�n#�:��f�y�#�&!$�sV�A~��"7�D,�ĕX���84K�P�b�#�&�����%��3��x8�kbR%�"�j
s�`�1C5�D!5�H�h.�n�^N�x�j浞Fz[ORJ�I&*m>� ^�̞Fz9)3nT�Oo�@����R�����X)�2�QTdqQ��:np�p�!��Տ�XP���k����LI[.^t����n,I�^	M�Z>u�4�0>��
�^�{4%W���p�84'�|����=�ؘ/�T^1�4z����~�iY��{�|����ȵ��������U1�{���)6��`D+��Z
L�l����$��+oǆ�;Y����vy���������[ܒ����ɧ!�e���w��c�eo@80V���az$g�DAJ�_>�.0$xƏ��z����,�D��A�<�9#	����AS��C�.44��;�� 0���W�_�e��5Q�^=�+�bZ�ks�z�G�~�NB,�Sc�n�O&)2�8s@YcTN�Q^�����v#�#~h4-�}rw�'�|[x�e�Zl� ���h�뵶����k� �o����Κ�HI�+�I��d����-x�-茉q��c0x�M����s��sG	�5�p��?m�q��{���'�����NE)j����� R)u�F��+2M�fQ�#!�C��f��*�h�SO���	S�Gi�>-/��=X^Q
�L��&���q���d����i������RU&}_�4[&��L��x�D`<�/��B��=���X�� ۆL\\���/��b�(���q5��ao�P�6z���;pM^��a��K���AK�$7H�`]�5�VBǉu�Kߤ�Ӯ�N�s�i'Z�2�G������Z2�k�A��wl�KR�8�ڿd��tL�1���	�&��a��e@f�H�v� o)*u��_��j9��`���3��Od�q���|3���W��I��w�����C��%n"|�{)�(��%��5�@cx#g��xԃ�[nH#;�{Se����� @LZMA� �  ]     h�^�����:�n3��r|�Ig�WZ�2��b��2͇��/�j~�m���7�Ti�t�2����kshjʗb�<���6M�����/�Q�K�h���d����\�&�f���PV���"�B�N�QjR�a��y��IY5r�ճ�
�R���My�қ̬��H�#}?,G*s�nV��%ή��>U̴�~�kZR��T*��VN�t��.��W����8�罕�LIcK:n��٠e��<U�9j��'��زtдz�IZ�_��^Xµ��%d��d��D�+ �;^������or��d�o`�L*��:7�X+N��y�5H��]���|�s˛�*�H��y�.3�5�m�W�r�n+T��溨or�=-�= ,����[s-��;�{:��Ƕ��6���CZ�nF7h~P2�F��E���^U(�9a�A��lJ���%�e{�B7\.+E.�!�̄�TR�1�D���~i!|'䑬d.��������R�{��my%��N�f�k�Yl��Y��Fj���]��Q8|�(p�q���JP�o�KNw�k���O���m��6�WV<_$�]�_�e�/ �\N\����O�[=�'E��0�z4��p�9es�\�!�L�n��ck�X�9�Ŧ��~�8�C_O����Z�χҞk(A$��5��3��e�t0jn�Bq����S�����S�>�	� ���	H't��8��ė�w5[m�����֟��cn�z��� ��H*�D�svBRa��'��e���u&��#�7�����\;��5N9�ksS�MgA)�s��9�3�k�\�hP8"�4ҏk�\�AY��w��Ϳ��xLe$�.�A5��C!��'u�y��a=�iʛ�S���<��8����s�v@����;p�"r=���m�à�b/�L��&���Ʋ�{�~7����$=�5��H{�b@m��8=��?���LE��X]_C�Md��z�F[�M��M���&�9��]ܒQ�6Nڞ��C]}O϶��|�Q�M��%������Ǫ{=.ky�( *rG�#c�A3;�h)�L�����V�~���?6C��b�:YU"h��M�֥-\�Y�<̾��@~� ��H�;�g���D�uj:ge9Z�Z'�:��(�9,d#��![Q�.E�����ҷ&ST7�k���α�>����x(��YNҡ��c"����w��n,��^��.2�+��~��8Y�7/p�W�¬Ny*&�'(�����T�lāٍ1���E��sq�<7�_���$l�������4��j<:o�lw%u�Bߏ⧞���`1ү��F��(ٚ�m�.���Rċ�-����~c�&�fZ2+�`ww|^�\e>k6�M�������2�F������n�^@����e�)�� !s��_zC�����+E��e+~�̝�˰2T�H"�J�j6���B��R/�A9�Z���ijj�ԟ��4������<t�#�8켾���z�ze��Hu ��58���f̵�@�}�Y.O�C!�n��!k���X����4�e��@��=�ψ�K���BM!�V�ν�������ʩ�~:F9(���8��(Y&��ۏ�������3Vʦ�w��T�d\<��4"�#B���jzɨ���_ѫ3[�t�s
����@E�g.�ұL������B�J�d6|b@��xRSf߭���r�ǟ�k��
U��6g�F�7�n��6>���зjċ��׺�j�A4�Zy%��ؖ��q3[��}P˒\�2N��t�@���X|�%�L���?Ҕ�����\W5KP&r��u��[Ό=C؍�ݾ��u�D�������`���&�Z}�v�Sf�m4��Ӵh�`��p��Ms�i�j{w[��$ݢ���NO�Ѵ����'��O��9�9D,�	|�!7{��p^]�t�	��*��кlc�zt�\_A���%�p�� ~ 7�<9�����:"�oj��\� >�A��.�B8˩�J5<�i�]��� �7N��[ki�8�͘6�� �o��a��9[����l�]��r���?^�#���СۇG��.�8
�&���6f�5�ޱ<z������D��^$�������`@ԨG��Q��g�kz�x&�4�v`����0̓(>���Ujiz�M�JM�>�d˞X]��J%�!j��&�7k��8�(���������9�_��2�8�ZNg8�<|��L�J�ɧ�&���%s������G}Fz�^ ��3Gl1��+�]��/e踆�q�ka0���}������O�sd�qC��
��+i���=�
���ݬ����\�6O(edW[�o-)�F'[rCϩ��i]Y���Ч�o?�ſ�k�b�a
6;�����z�(_Ց����ABp�9���o����BI��.�	@h{0��eLM�,pS�SP v���u B�|~�$�l縵_�G��fE���1�繞��{E?.�A�'�����a]�a�M�E�ˢ��;p����������T�~�6�;�>R�MEt@uy�c;(8�w���w-��|1 51��B��Z�?5������2e�oL�ߊ���e�]�3t����M��/`����`W<j��ړ#L����)A����Q���Œ(���2$F1l_���}�tL������[F��iw��w��D�,�_d�����0f�`�$�[H���d�a���u��sjR��_
WC�d94Gk��&+�NW��d0��7���!_��.1�w�e��Wiokԅ�y_�u"'�j͢�<,hg3J���!��J�)p�9��Jڥ�G��\��G��JZt����m��e"A�»	�=�?�g�'?Z�N�o죜|F3꽞����1����&A��+��*S���*E~fG���*��g��Ք�P�"R���M2�i�<R������Xi8�3�k�\��-^��i+мTաJ���Ю�`u�ul>�^����`4ΝM�;8k���s���s�R1j�����;2,��8A+B��Ŭѥ�}��u�~���*;k�����y��C�!;��N`W�B�*�;F��$r�����v~��|���DH!O�v�,�ٟyl����鹆ylP(�PQ�{��-�5�\;�����f�q5hi�;-(�������儽#c'i^s�n���B���;���;��E�$U�w��ɔ����.=�ڼ��|� �^�uo�#;�hNw���K���P�[�w&��!�Ӗ�zg�
�:��@���5D����P���مI2� �1k�'�F�� ��3CS����v��.W[��[L��������ʵ3�%��gd��u���Z�F�l�4*ՓY�5�j<���ֶ9��m"�����6�cQ�Q��0��57�׭=Q�*�@F�D?zF�"Я[%Xsn
W��-rKRl��]�FDA����k���l��#��q]25��}���E�&#�P�cX59/�vD u��EΖ�b��"��H���^7�Ķ5�HdNq46(�>��V���T��JJ���p�fQ	�����j4%򧱙�H�
�Sȃ�S�n��!ӧ��(�e��h�ݍ�Ш����i-�j�hF�W�iH�R`���o�f��v4�"���<�O" �?嶪�ۮ�3�9���D�喁,T_6l��iR�3�Ё~�i�� `uB"��aIs�'i�5 ��vw��|A�K�u�J'O4�bzq�e��ێ!����l}+���g�$$8�t��)�x_�l�m�ר��p��[\?��1;�G&R�R�5�$;Ϭ��*��ip��DH�����!�#G�`*��X�[F`�;~s�o &��y����U�Y!��m��g�����̕f�{TC���㥸J?���So|��W��{v�E�}�l�v:����LdE#���Wó��2�r1HkF[�a/*�G,B荭�<�~m�?E�À���q�ӵ�2t�t"4X��j�B�w[r�Uu�K�]���!Br�y�i4u���uEQ�#�P�țL�����۵�:�!��^���~!hw�f������$:GW��Tͅ1����,Fv�՝̰-ڱCtM1B�s	��2u,�}vX%�#����R�8�]�m^�	T�殘�p�'�7�S��~�EO��^d�L����~���F�⋹���fUzj=�B��5z�1��J+F#g/��$���ڞ#�|�rK�֚kzM���h� e�>����U���a�����_� qEE'��2��6�g�Ƌ/H�1�3�־�-���#r�ₔ1ThŪ}�f<B,�7���0 �$�/�;�ќt��bX�M��9�E��F�,���֚�I`�!r ����]ƻ���
���z��rZ��p+e(�"?��g���?�(����Mc�U��>8�[��b�\*f�F��dݮ2Q�{�Hs2���ɐ�d͵�#�cŎIv��[8�9��]'.�p�V#��
����:ق�n,oe��4uf�9$�P�o�؅-u@hz���%Z�2��Jb�Ȯ����;^ăq�-��8;��0ze�Y��ʇ$���U��X�G}���z	�S\"O�d2S�-�V��Ȏ)@z� ��Fw�2��Y9��).|ڨ	��-r����d֗��X����$�ɏ�{�Xm-�in��f�L#����`��yLp3��H�F����y|5���SaPb�Zn��
��ד7}���B��8�P��J�#�j�YuJ��`��Ɩ���U��� $M~�[���N0��8Ok����&����}����x�P�C2[� �0��J���,6�BN��|�U`ͥ�s���,�;���!�_�r!lmT�~�%�woL.:)�*טC����>{1t�+�o�CW�ۍ��C�2{t��0[�[����� ��\c�K�����J/���k0F�.����J��
̍R�&'S��	Sû9Ȇ����v���>VU >(�J��bj������4�wX\1j~n�q33�����9�9���7jxa=U��_U����u�Xo"#{���ѽW��Q{���JE���}�s%�\U�4�ͳ����z�D��lO;��F��W�qD|2v���~���Ѿ��}����g�a�y���q
OPv�}��+b�X����Q���C <���W긡���s�r�����Z�V4��_#v�!*(l���x̖.N�������a�#���Ê�"���f7��p�S7˂��Iy.�S��i�?G�zg�>�Y%|>��*�_�g"ۚ���k>�?z�-�����98����H��~?c�7�O���8��L>��c�M���f��F��K���<.��j�2�큐��}���A.f'(Fe�ҝO ���lǴn5��A��9�!���7�c�Ş���c~��S,�~�x^�� ��r]C�L��6�K�����H�%t]G�X�T���Z�e�c��0q `�
�81
�殮B�Dg*$�W���<�ul4�*H��4��6����K�4�@��Ȥ��B����yM�Mu6��Se[����g�W�����RI�fϿ1��*"����uI�j�3$L��<+�l�� �~��/I*�h�̯�[��j �OD�J;ޕrb
�U�k�Hdɯ�wi�܈?�ĕ�{@@"���JA���ق�ShN
7�ޯMרD�l���>�SƦ��X�E�'A���x*gjv&�V�UH��$��>�I��Rw���Q/��:�`S�V����l�[㑂_6kdB����a�5̌��&����k9����L{$�+��k��IAdl�;W�&�w�]8�JA9�C�8��鈀FO�b�^��v�����u1=�-2�D���A�}_�&�g�ʡ��3p4e�~Z�Դ9�M��پ�ȃ1�ĥ<�_B����I�͍c��T�p�4�Д�鐂�K
��,�Z�S�V�_\�N@7u����F�2�<�ݭj�{��S>'W�v�?����%���L������pL��[Ж�	.�:�V�3P#\�x2@�,��"�VT����+��* �����M?����_��e+�#�q�h/�2[�>�YXv%"$�� Z$�N����ʏ�u�U�Ȼ���%�Zɖb�Z��Zl�޷���Z������Ha6{���*�ٮ�z�c��q����#-QHZ�O�z�s�רx������`�
uK��ަ�$��D�?曭ʤ@�R��#����D�&OW��l�:����*^BNY��|N�	�5@�o�n�Ly����o���~e$V�l�7͊i�n�!A-�f�A:�E_&ڢ[~��	*���B�����Y�v�M ?���b:jR�G�K+���
���`��F�U��Md�#��m���%�R��.o6���>E��`�k�vn*���L�A���.�*\>-�t�U\�[©�/�.�̪D[G�}��m��8���T47jR�8"��-)�N;ؑ&�PeT�D �lY;�d��}S�Ke����PO{�Jp�ĢA3��2�BG�g��H�ZbN�(��
��'�,'t��� �yb���^��7�89}
n�d悲���k2�M+�x���E�!�ct����)A��R�|fzW��e��zUU�c���u�
KE�
��ɡ�ȯ��c��c㞯�.�`PB���{�(7�ʒ���:ZM$�h����$����C%A�"���n�Q��TG�ܢS����� @LZMȦ �  ]     h�_$���'���7�}ΰC$Vj����Ӫ��t�5b��U..i<�y�(���f9��u�c� Vu�T�ϙ�<��o�7U�w���7��ԗ���nȸ��9r#o��w��I�5ѯ��0�Ԓ�.���00TV~��#�?�Ce���e-j�bNGB��/fB��Xf~��)!�~�/��"	ި�u9�vs��:8s���G���O��w��e�7���)(�8ޚ�����Y�<S{��a
���n��<����&2v��i���_�7�![��,���T��?q9ZM7�j�Ae�� ��S�)�0��F3�N>s�fU�5�Yf��[z�=�m�Zֈ�o$~P=WC�^ �u�أ`(�#�]Z�ʄi��e#`<�0?� �/#���Y=	��w���;ˑk��h&�d=����&����%�NL;�ec-�t��ʽ�̿��+��F�e;e(��&Vf,��U	��Ǔ1�4-�5��h���+86��T�{+����h7����򜾀0I 7��.�7Ժ�����R��Aע5�$���H�m�ҥ��nX~�VT�猘&�?7��$9��w��N�'�^W��z5t�p"�O1 �n��aHՀ��/�žw���T�U��?��b�5~C���`c�L����a��[me.f(�y��`�.�����,�r�Z��0��t����hB�Ɣ��P�&QTF��Ē#���<u��P`�Nr���(X	���J�^�3�������yӺ3�ʚ��G�/��t-/����T�O�ϣ�WrL�{���;��'����bm�W׼������`kB����� Y"���3�"��
�����B���X��.�	qs�1�x�T���D�g��ʮ4������ò��(ǖ��A]�D&�����#���*�Z��f������+0B��U�ğ�q�n=��ǈ��B娴I�.Xc�S9�U ����#��B�1W+�/���k�.#���k�nު���ú��9AA�������c`'��ϑ��](-���ٹXpT-Wi�-����Z>�ˬ9!��єsٝ�f�m_3E���'���z)��ƔwJ�w�៳��u�9��Jm��Y�x�{#�s��@�O2�^튵��4�';�bk1LR��^�P9��
r�U�~x�X��2��y\n��1��3�����������l�����ᒇ�K<b'��]�J�bW)��t�ɽGGz1�O?r@�4��B3�^jV�����T73�GQu\yÐs��7��"(?��B�.��3
��z0F5E�E�v�/�DjnG:@v����}W�H�q��� 4�䨂����EO�߲��?Pvk��Lc�uZ&U�"��Z<�>{�v�.S7�.q}&\�[t�I8��ycn�@!X���ײU����O�&�l~�)���ՌO�gZ�1~5��C �f��vݍ�.z���h.B�|g*&�Z�?]c�����V�#�^d�B������]���z!?4Y\ʨ�*o��߅Jߧi��J�vHW�%�'LIxe��L�����ny^܍5�v�L�S��wF�{�__���م�>�ѽk�����'�j*��fw���`�����|4F���YmPaE"y#;��Ck'AGZ�,f܊��s0�+�ۙNy�G�{�So�O��4u��m�9e�)�2<S����\`b�q��CʹK�����M���w�ば�R�v���C�ZO�l�C���b�;�E�X��q��ޠ����$ld�Fp�%�	*�4;{�3?_�[��%�,��p�r���K�Ur�D\��J�Mi������9O�l�A������R��D�mb�</���M�^�h.]�J�m[y�T��`	}m�vRG��0����f�11� ېB��4ѐ��o�>܉��H��uҵ2�ʹdh��3P����H��O�t,� N�d���k�b�~�����b�wk�@��vkD	���@<`\�NC��ݾ�u��V�8�z�l��y��9��u�_D� 8�a������IF�E���z�[�6�������2��fn�@ڿ��$��";s`�]�6ˉ1�E�zm�S��|o�:�圦��V���[����B y�u�>�D9&�܅z�7��u���@Р@
V�g�eIve��_�3qk���d�j�'���S��ng��mx�Ѐr����R�r�P��Pm��z��6���'�#��A������X�Od/����4E�'T�4�O��>%�P�S�/��FIH���b6�rwI��:���D��1��p]
��ɖV�z�0�V���� F�3g\��uPP����K��l���h��U9A)���2����|�z��8A��՘�'��LR�!|s8�](�>����&ds���?��>'U�z~h�j�A*i�����c-=�o�%O����(�z�(D����9����H�9�7���8I�R0$t���P���F�@h��;Q����bCS�.��%��5�o����|ш����Ø�� v/]������X�ի���W����<��5�O�L��iPi�bm4O>�9� іv�-�.n��f���S_=�2hW���\�D���Ө�钯*�{�m���9=����se���oe_�������N�6�]��F�G$��ЗI���$5ON�VnPXP��d`��Ƃ��˻�>}�����i�,�s:$���W���\��$;�h�<�Fb^4j,�;:s���k=�H������[�f���ZR��{&���D�㵂����l�e�f�L<c��I�<k���|�)�	&"�r�a��N�A'`]b�Q���7���A!�?�I,by���M��R6�Hs�f���/�n�ln���ƃC���0�B�8�,j�+,��ɀ��J�iw���Rݍ���_'2���X�[���K��V/� �b��~�~���KA֤C��a�T��N����0�cZoI���*�4�����*ĸϦ�h�7U�@���J��K��Z�b���������^.�TFlwJ��f=��B0��{�Y�}�p��?��U��;g��6+���;��YY>n���h΃��11���g
��&�'����+��J�)��kY$�k>����154n?a��%4~7��MHאΧٳFQ'@hp�]����Ë�)03�D��\2�F��sXf,��Px_^���YP<�v���r����&?R�0,�f��`�x��{��S�Ҧ���$���L[��&���'�;������xtf/�9��s^C�����׀L��$�^=�%��O~Æl{��أf-�PHX���;>A\K@����T,�֘56fr���h�WS R�r�O�Gж�k_��i��B`�"J��Y�݉H2�V-	���F� ������\��AP(c��'��/�R��n{�r6�YT�ߡ�2U��E�J�&�����:t,��Le��_םf� n1Lw]�&{zN��+�@�O��(2�l���_G�N���2��ޱ����Bٍ�^���˽,Cʛ�ϿS5yX�
�
�[F��h\��n�+s�Uu�G�3�g^��0Q9w��E�A"��/��Y��ϳI�G�0���Şc6b��3���ϔ��⶞,��<2yk�g�{�55Ar��@���+&�25O�>��"gAw�1�t��We��(��
����&��,TS���$�^�b���? U�g=!���&�� Q�;���P�7\�(9��"�3gJ��=.L���p!�3�ɐy���2�V�w�כ�Aڥ��k���R��%?W���s[�ٙÿJw�	��/NR��ⱌa�kL����ҳ�?�\�^�^��s���pQ	��x��Id��P����`H����l�P�-+�i��N�d�St���v7�m������ʾ�@��D}
@�m�jښ1eV[�ܪ�s�h���X,F��d�KQ��V��.ܜ{����Q� v�?:�����|L*�,!Ih��s���F��TO.��4�xl��s1��\�Ph�!r���b�[R�6�P��C>��tk��M�^���S-�g��7�#���❝�<�-�/0(@FiVeK���6�8�K��*�;�oa%*�v���8����¸Y����EsT�sIY�H;2\�e��$JɴA-�����-���FK��n�X�a�_��y��׮t���	���涷g1��HO]$ݹ��,v��'�hb��*�S�3dF-v��'��آ�D@�/x��iV=Cq,Xjݹ�;)��:�~�ǿ	F���/����F�Y2ו�B��r�;�NF	U��(��}3;?s���C��9r�[�"4�ه�o�.}5 �'��������u,��w�y����3f�Ǟ��>l1��U���nd�͒ !�Sj��;�Q+X��>Ha�r-��]�OT�:��35K�H�<�<^avS��7�)UP~=IP�q��N�v�L�'��኶z��i�lM���A��]q)6��-���-Y���h�l�>����G�6�zo
U�i)+?ٯ�#=��qG��3�F�F�{0��K�^P�	�k���o	1�|5	,Î�bE���I�]ʴ?_�2��[����xc�&����הvA�����P&Βp4�!MI�V	ZT�A��6G�6���-��G��Of�U��~���Q�'����P�Q�Vh$�N���EF�z|�<%3�N�tFʊtq�*s`�S��z _��=������7A9��]�Pz��H���ӥx��n�PmVZ޼3Xy_t	��ǋO�[$�[��
X��!�@"��i�!,���_ p��j?۰טp�N�UL��)��szyP����N�;-ş��STVԱ��9��98�,�"*W�i��R��U(�������[�rĔ�B��'NuE.�[V �Ʃ�0�6y[��ƗZ{gi:�u�t�͟C#�I�8�F��.0$�h��8�`uWi��(&�f�!�5�C��K�W��RV��I��>�y�0��y���
�R��5���b��/|�t�W����|x�Ҕx��C�8�%�G�(�=���w�z�7��A��)�Ғ�JY5�����m	���U�JsNT`���r3����4��0p_���U��+|x*�TR�.
L�� ������j܃ S`�)��� ��k�o�F���̯ԕ*��m�����ɄM��~���~ PԘ�94�
���".M�g�Fqxh�W�:���n}����X�ؗ�4���d�#��&�.#�&��1�쾝�<'�t��J��hƮ�0Q�q'q�I�}�&�g~��">�죶�J< �1R�*|)럶��3꨺1BI@\?��`#4��}��X�_h��X���]�PX�;DC�)Z��&�$8��{�y1��;���1�e�ۖ�|��
q`㘷�Vr��e��<d��e�N���A��#���V��Hd�h�[&��	�?ٙ��pvӵZ���>�x��&sX�:!y�,暑(��RK�׳~K�Ѳ�q!b���v�P�2�dܯ�O l�X|��V��{�жQҧ��9���v0�[H��������r>"M(�+]��O�Ȫ<�Qm,�[`�?�yO{���|�Ȩ��j��B���I�Ń�m{�:,��7�����ͱ�F/�A ��i���:��*�3��i%�����Z��)�w4ŭ�,.>���	��f�ɹ[�@=*�������D7�+����®Le��a��R�&1��PM�S��/��1�{���M�x
�� �"O��/�2i��4�'Ca�W���LJ�e Ҍ'@�-V�ÏZ�3-�S[�=�m�Yk1���B�Bd�h~s�+�U�,p ���i�G[�N�7�ٞ����Xస7���*�~��nc�I�twlS���rw�D
��'(i�ƌ*x#�&Y���l���R�LXP����NG׋D~�$6�`�����0Cx�'˴<�����1�]����O?Ų��ԥf����p�*�	ߢ����@�#�mA. ����z��z��w�f`�!{-iT����е���,�9
�H���eS�4&ઢ�ך�H;Q}�INmfù��V}5��e7)P:��Yr��mtSv���Ğ��	��I��dp:���a��"�U�Dщ�d�P��v�\��k�1CN	�kS0i3�Ꮵʤ���87A����L¥�(Z�䕙# qn��b{���h,a��K1���E�l\c�x���R�m����ʞ��Z�N&,�nO[-@m�ɇ�}(��F��)��F��a�z�:�tz���H�L��V����2�5TM�����D�k�d#�:��M�X�Q'�m	Ĩh'/��:�f�]c���5cyΔ �b[�j�lY%��
#�}�*�t̤C�GNJ�(Gn��`��GñmKE/�ѫ�`S���ʈ0���(f2c�Lstt�%Hf��
�nhB�e�r-Tx��_��7��]��Oq�[T9@�ec)iR��Z�����b:���M)L@��)?�0�*w��li@��rh�\�D>�Qj��ڨm���`�~¡�����lg	گ]��4�1d�~w��N�7>�)��3�4��j��a+��/�.R�3�	�]�Ǐu�)偞��]���T��{��QUm��#@��b�/�r�����Tjdq�:K�1-��w)��T���]�K^�>M��*�Y$>�3�Tt���N�W=1&mɭ�k�Xa����M�˻�#�U��qހ��)��4�Q�o� ~N+u*r��h�8_�ԁ�*�����?�" ����� @LZMA\� �  ]     h�_$���'���7�}ΰC$Vj����Ӫ��t�5b��U..i<�y�(���f9��u�c� Vu�T�ϙ�<��o�7U�w���7��ԗ���nȸ��9r#o��w��I�5ѯ��0�Ԓ�.���00TV~��#�?�Ce���e-j�bNGB��/fB��Xf~��)!�~�/��"	ި�u9�vs��:8s���G���O��w��e�7���)(�8ޚ�����Y�<S{��a
���n��<����&2v��i���_�7�![��,���T��?q9ZM7�j�Ae�� ��S�)�0��F3�N>s�fU�5�Yf��[z�=�m�Zֈ�o$~P=WC�^ �u�أ`(�#�]Z�ʄi��e#`<�0?� �/#���Y=	��w���;ˑk��h&�d=����&����%�NL;�ec-�t��ʽ�̿��+��F�e;e(��&Vf,��U	��Ǔ1�4-�5��h���+86��T�{+����h7����򜾀0I 7��.�7Ժ�����R��Aע5�$���H�m�ҥ��nX~�VT�猘&�?7��$9��w��N�'�^W��z5t�p"�O1 �n��aHՀ��/�žw���T�U��?��b�5~C���`c�L����a��[me.f(�y��`�.�����,�r�Z��0��t����hB�Ɣ��P�&QTF��Ē#���<u��P`�Nr���(X	���J�^�3�������yӺ3�ʚ��G�/��t-/����T�O�ϣ�WrL�{���;��'����bm�W׼������`kB����� Y"���3�"��
�����B���X��.�	qs�1�x�T���D�g��ʮ4������ò��(ǖ��A]�D&�����#���*�Z��f������+0B��U�ğ�q�n=��ǈ��B娴I�.Xc�S9�U ����#��B�1W+�/���k�.#���k�nު���ú��9AA�������c`'��ϑ��](-���ٹXpT-Wi�-����Z>�ˬ9!��єsٝ�f�m_3E���'���z)��ƔwJ�w�៳��u�9��Jm��Y�x�{#�s��@�O2�^튵��4�';�bk1LR��^�P9��
r�U�~x�X��2��U"5MkHΑ`3"�)0����އ�T�9*;4,�n��QG��|f��E:�OҲu�&��Jb�mB�an��jX��GD��Jabb�!��U� δ�J��#K��B��.�5~����-���CG��������/~����
�jӽe�S̻���K��N�6H%�~�@fuN���c3��D�ᢼ���L�z����j ���3c��ґN賚}��2@H0�G��cf�����`�ϥBQ���� ��>�c�-A�b�������@A�WݎX�������@�F�$��L�O'Q52���{t�3��or�B�@!�}0��H\��_f:/��j�%���	3���$h5�����Swxa��A3.�!.M�?��[=nuy�r�e�,��#ѪZ�tA��w�M�j���繾���ŁsX�iC����9o`D�4�x_iO��kqv*�y̰��y��@O�������� m��0:F0�Ո�sn�$޻z�c���� �� �Qb9��[�E��M�)���I�h�$sV� l��9� W�ֈ�Cd��R�sz��i��J;$ߞ�W{���z`lT%��`�N#��ٵ6�m��<�tw���f������d���>[͎�֛��2)���ܲ%�4%�Χ�^��1ߊrWK<������T�y�`Q0"w<Z7�#1	��(j�a��?�4��9_��FU
����ic��f%����/p�P�3�}�@�m��y���Fv������>N��~�(./�X��Љ`�1gR�Xי �XOT54��ݱ��'�jKɣ4m|�^u39tcý-��*�Q���#h�����z�h0���{��R�X�7���Ҕ�Zɐs�*3#��,�[�l˸^����_�ښ�	���xa�l�7�j,��Q��?�p*�f܂�gA�Mmŗ�I�Y���z
�@
{+ٿ��XWSe�'���vjv�ͺ��1D��w�A���9}�$�{��;��50}�l��:�*3�L8>�u����@�ui>D�Aa�3���c����KU&Y:y�k�m��1�������*�{�,x�yS������yچ��L�۩��r�t�����RS��,J;O�q�Ue����n�ɧ�G����K�,�E��ʜq�ڦ��KU���H�a�Dܲ�\��n�/��#�x5H
���O7�$^V��Y$V���rFع��.�&y�=]o�VLB;��ɑ#����r��.{yn(�`8=L��חǶ��>5ZzM-��ضf&�����L��z10���ȟ��}��B�&�~�����$n9�p=C��%L���a�F��'���a7���}P��4��#0�l0$z��ɂ�ft�ak�׷D&[Z�G�V��L͑ɀ	vR�Q����cn��:W�~� ����ޙ�?�����H	�QP�].n{z�BzDt$32�~U1����
m�:C���w�.����2�
��*�҃�����N�!��o�kf���,b`���Db�U�\5�/zw��e��B2H.��;⤸9�Zl	eP=�u���{�cau(�P�~�p]��������l�驨�uZ�px��/�q$[��o�%�2��e��FZ8H%$ћ�s��b�ZY���;���%�,��15��j�Rl��&
҄� �f�[S2XZ�ڭZ�a,Ay�������Vp�!�H٩b~I�&@���$S�϶kq���s槾籍���Ñɿ��nL�P�iw�63� �3c��a/�`�׳q�DL2�#�� u3W�ME�9�Lo�?�&dse*�LIlrZqYk�I�]3⡗d�����<&ye�����j�8D�k8�.f�J��0Y����$	2#��"���FT� ׼����Gs�
��c��m,QJpY���ɖ��������jZTp^���nm�/����T�kWZ���h�'
cl��V��V��&��Ȓ�o�=�=�C�iW��@�7ga�#�*x1�1T�c���u]�Lp�铺,���>Ȅ�,���z�0ɢB�̽� \�x����|^�q�S&�]��ݼh�Dw#��{����5�1�"Z�Ah@)�bQ��T�ke�K��'a����	��_t��~�F�*<Ѩ$\f=��=��+t��R�֨�;�'8�ڟ��S �17yii�Qޑ�/X��(�JΕ�4����5� �N�܅ �1G��v`��w�jl��4����E/Ѽit��3��)��L����������Q]�dv\���#����U�mT����p�F����Gd&}L׏9�b�"8KY�B;��;951��zȄ�0���ґ���C�c���Y����kŉ?t*�@�X�I����"�s9*n,�"�-���ub;a(���ti���"��r�̣�)��L��vܽ7w�^)2�Ÿ�tQ���6H��� (�b��H�H#��۞i_*�������xԒ��� 4�(e�����ә �#��� 5obe�&�WF�n>��31�w���¯ˡT^�.�_�W���6/�sa�I�F0�ŷ��}Sk292��f�j!�bǅ�Լ�{�D��4�Iͭm	E��O��lT��Q)8�x�������(c��$�4�M�Q] �K���+�,i��E"�x��h�!��`Ca�`��}<�w���p�`��t��l��Ɵd1u���i_ӯ�IK�����L�&%[��Vz3i�)� ��{��<�c:c^̋�A ���X�f�I����Y��;g��h k�Ơs�We�����ћ���:����EAy��)�J�W�jcU�1��}���5+Pm����S� $zǗ��(�D�/UQԡK٭�yܒQ���A����iR�S�xy��/���)z0M�R࣐��k�0�"�BcNm𴮻��xz���t>��S�r�H;�i-��;�o��u��]�Jq�p��E��5�R I��Q���MoG$|�`����A��Y���3�H,?e^D%���Kxۀ�R��zq	i�$�ev���
Z�X�Iv7�B��N?)jȐ��S���y��9=�@)l���z��GR�pl�u����rG�� ֬+Dq�6�{���¦��?������p}�=�C�L��݇/X����+��_c=l�`=G�F�ۣɲ+լ���q�ա�&�c��A�b˱�#qD�B3n� ='Ϯ���-Wf��t�2H����s��0�Jpz.�,͆WH����sD��_�`i$��=K;�2Û�WQ���e@�\�:?T��*�;:�Ϻ/�.��sm�l��������gO�\@�/B��r��;��/;f�{�D��q4�6f����g+e����F,�@��A�rWS�U��_����AQ��|O��~��S)?�[ޝ'� �3>�>謘�韷��&������F�&��C���_{+ r��M�_h�n�E���h+�]���`�D5�ܥ��1Iu���"-S�c�|c�w�!	ԓ��/+�ɻ���cm]������>��JuAx\^vٖ�����$K��N��hX�y[��?�\mPIsqu��8�c��
v����7��zr�s��v9]�e�Q�8�0��t���p���!SOT��m�F^�p.n��v���|MI=����R8��?`��w�VWY�������:�W,\�ܸ��4M�܇�*D�%�c�)�v�����x����}�ђ*x����u>�[��Z:��zt~��9�%���4҅4`�����1{[��{����v*�����SKBxwE�(��^GkL�QȿG���w�̉tȯZ���/�@�p5��>%�
UEw8���`U#�]%��h�����s�[J��	_�YT�N����[�W7ą�Ƚ���ܵӿ�:"F���e�f��%h�)T?wk8��./Mf|)Љv���� ʵB� ������P㭒)�V7����G��CL�x�m�C{����l|L���z�Ks��?9``R+=Le�(���] �'k�Rv�j�3��TX-V$��Ȍ��=}*)�/�Q#�|�O��B#x�m��N�}���c�Y���j���c$���#��s��(-���/>QM�p�?��
����b�W-�TVlnY�8��e��c�.�Z�_�S7��P�����Ǵc���Y�D4�D��g� @V.y)�W=6���ϔ���oU�M��7���]�G����'2�PD�(`�͎����~�J����!�����"���wg�Z����U������u����h��Ey=|����ș7E7�^�z���u�s��76�z�adGs��2<��E�Z	\�D�n����8o�Do�ƅd������0�����k]p�%�Gq���f��rm�'�U0�Ǿ(�Q3<aG��hA�[MY"-�����L=uS�=���S@<.6,7B��X"��/�2��g�b��L�ގ�>�s[���xd�4�� ��jU�Ѯ�����KA1C �A~�w(�P�J��� �`C�����(�&Gs��h{	���Jˤ7�,tŽ5�ܥ�wI����/����>Di��ܵ�$�@�2w�wR��V�^��> 4̅E-Wv^W�#�����z}�c7��)4���]pj���B(���?��h*dʣ�`�,�W��#�F����9r[�^<��p���c�á9�@ ;���Sb$ג)s�U~�h�ryE���0&����+�ݫ�۵���ҴW�*�����'�n�w�4��<PG�� sW�>����e���/K9��*W��z�8�k�R)��tO�����n�qPC�oC?��KB�uZ��,$%f������������'[#0�7��N!SG.�l��[pQ>\~Ϋ����O��}#͒>��p������ݛJ%�%PL�5AV\o�����~L�9��IIB\�2"��y�:�L�kp舷ҲRC����=a��Ͻ����V�b�ч�Wc�Ҏ;[�ݜ�a��$���v�����+5_Z�pNK�=�@��?�y;!���[ �SR���hdJA���0�{���Q%OiL��039�)���4rΙ{�HSq��ß�L�ת��{Hcܦ��Qac����},�劽i0N����)H�̛����N�Y�)�K/�;eX$��5��W���b�p�Tc�Ke��1Z�����+�8=yz��r/<~P�������/TuXH��L�[-@�T�M�Zɞ��=��n�9!���仪VLXC�����nqۣc�Q�sq�ǲRy���K��Gڛ*m�%R��K;� �����t���aY5���r��@�����a�� ����u O	�A������Wx�)L�:�;ŉ�N]���h����� @LZMA$� �  ]     h�^����?�{NL��C8�S��Xvy;/\����46��6D=�oTet��7��u9ZߣOͤO�aɲ�O�!�Bw��HY�z�Ɋ�ᜫ�_z֬ڄ.���Ge�ŃRD�4n���y�����P�&G�d-B�J_��>�Ͳ���ٯ��"t)"�I�[��=�N�{L^��%[[�����yB�X{��������Z��h�2�<G0�dj�"�����M*�XM��>>�8[H��-��F�v�faٿ�#*�s�0�0=@��JE�Y<a�pV�.�����R�I�4��D�"F���(Â ��;[)Ɠ��ݮ�x�M���T�O�OlA��h+�qj�� ]S��+���I��HcuWQ[��1�V���|�t�ǅD1+;`�3�kq+�H�Ϋ�𰮟( �J�J��;���㩾����#Yg�R+~��@�M��}!�#-��8e���Vy3*u��!�e��|���1�""����%ǜ���bd�����Қ�W*�Z��y-R���d���E��kr�9k�;��L�M|Zb��fK�[�Z~��Lv6]�;ab��^�^; y2���?���']��>�8;{�oB�;���V��&?�9��?Xf���V��}��sU��q�B�a<����o膠��9���1�j����T�؏���2�mP�tN�o��E]P�&n!�[W��<�މ��/f=���4mG��NM�?PjՖ�dmW�����	�$��B����i�N|T�[�mLc�m��~�&�7�`��P]oK/e��"���Q����huQ؂��nRa�"��Q�l۳���9ާ�#]1���8����%�(���K�%�ީ�73;ϴ��)k�B	�,{��0MQ�u�>�z��
�jh�oF�2|^�i�r���>*�s[�As�w�f���5��i��]�OGj|J�P���J�9���Ŭ�׸�1Kh�� `Uu�� =������7�Hl����s�rIon}i�[Ѓ�峺=���k1j�p?р{������^�6�}�O�$��H%���8KI��`/pU�V�]�뗞� �?O��=����d�H*�4R1b��7s�,�"IH}u�
){m>Y�u
Ab��]*��<i[�����9�+؜&��=yS߭��Aǣ&�1;�땵WG�9,�Z+��Mx�&�@J������*�U�8�24�C �+�d�^3	���Q�6���'���h��fm�9�W{��{M��-A��F�����]1�?��r�;q���䷀��t;�FL&��s�F��0��	d>�rꐙ�R�[���3~1;'A�Yʶ�k4ںv�"�[��̊5z���]ktv`�Xd�a��T�����?��☝��A[�nߦ+$Q��3zY�5�*A���\z��&��3 C�K����w�D�!�y��=�L̹�U�u,����>�w¸�$Ɏ����\�2�g������i_RJނ�q�����w���W'�i%2s�g����^��%��Ϳ�Tg�?��r���sO�}K͋��"�X�\F`,��J��W�~��RB�oM��Ń���D
���-�޲Vh�ܸ�AQ��XqN+kV�&i�îj�>%/U,V�����9nV��ү�S�X�N��|�t��bԱ>L�ӽ��N�;;ln�{�ѐ��N�`�e�E;���ir���w�S'�Z��OW�Kĭ m)�ϓ������>Q e2J�d؈=?`Ũ1�%�o�8��
��
:>�cr�-s�H�~��V8�`�d=u�qA1������V��>|���d��.9�H�$�}LV�u�?�.F?(��d�=lj����R����@�)U�Ւ�Ų�F��f�[�hHb��b^�8U �>�;��r\*�7���۩�Oz=ɟ�Kk�h1�D�$s���V=#�MC���$��~6RK+"�j�.\w��}P��`,Ą���Ks���)i>QO�_��xa�-��W�'�S�҂�x+ү��T��܀t#�
��2�������T$�5t��эAP_�xv"ȕ���v�U�~e�oLHɈ�٘�%:_5�-�+�Jⳳ���M�PԘ����$Z"��x��4\ᘧ�7V*!Jr���"H)na)��Ή��q�	���y ��>M�1�Ub� M��^|��i4�xB|����eߎ���������4~�i��%�}n��}XG]�5 j�Bq���� ����|��?��-^��}���5��0F�l�SX���f7u5�_'>D���fG����S]8ɞ��"��C.�UA�nF�l��O���Gb^i�q�c�TӓV��1b>�#b�=S^��v^o�Z�'��Je����y���<�x�����]�y�U65qK��H���2�&)�o �AT���0D\�f%׮F�Y���u���t��Ze ϣNW/FZ!M�L�q��L��{*Ga�!���.<��?M
[��$�1���;kKh���IIM�v��Z�w�u��Y�'r��
qh`�tJ10�����Ż*��8$��i�7'a��G��,euGv�e1�/8��pp��F첀���u������|���n"_L�u̫oC4�GM �`�Q���9��4�ҎP����%p.��z+�s�s Eq0�T����0���ʇ�&@^	E��F�0	�o���X�V�X��p]j鸇�{��։��-qV�:X��.����,��9��s��Hq~�j�D�ŷS�h]h���p'� �Y��w�:H<�q��|�Υ\�HB�8^3�wŖ	oZ���L�~N<���N�G �!�}��T�ۺ���'�ՔsR�����2e�2�jiy&S���ՑZ�n����A�V�m�I0&��,j���ԀN�^??�e�Kt��-�^q_�ڋ�ƪL(J�oY����I� �|�z�Nh����p�豞�`j� ,AM(c��v*}tZ���\Q��:o�r��`���	�Td��Ϻ>)c"7��X�[�f;[;qCi�s'gp3Q�"GM_!���M&,��	�խ�nꬬ6���h�B4�-�\�G���MS4o�i���阘�Tm.�����T�d���7U��ay�+\����Um�#�M��t�����%-u�� ��J�ޠU7����[���R��sI��!����ʖe�?g�F��d8pr�t�-�7pצ�����*a��{R��f�v���W�/a!�tm���v�3c�N@Q�̒����� �4^��t],M̹����i�/�L\���#v�E�ԥ"�Q�O����t�s��o�~'�d�(�z�@�oJq�]�4��|�D`�K��mw��&`VS��J�1x>�e6-��G��
+�r�i��5��5�vR���y#m�Q���.E�T©g���P�+� }��m���Ð�a֋��e���n��|�|s/e$�:���[�����:,�.H >:�T�r~*]qпKU/a�TK6_PE��d�����=���[�c!�Y|��t2\c)�Q�
H��x>�ىY���[�pe �DՊ�F���|�?k�n�zG#��:��f`�2,"��H�,7�l���>�,6��y���ZI���!�����|8O�h�֠[�Ԫ����Ѻd���x&�`����%�e7�q� ��g��Y&D�/�x�b�~�4>����n�^9��'��A�����7�������͍�����+\�.=�BD�~$(Va������j�n�:��Ţ�KY���?+K���J���[�*�&c�rt��BU9Qlv ����w<�k-�Jn��M�/�x����{�z=�zޢ���:���4F u� �r-�s,�K���茰��tu��uR%�AҵD�	F3)sMXM���epw�$ROޭ��'��7G�bƸ�/�n�i���U�Xu(g�@�n� ��$=)�����B��ʦ�W٪�\�u�w���`�!y�-�i�� ^�x�k;�6`.U�
�=�3�(8�5�Bh�p7��=�&4-��Du)�-ڃ�hW�"�N`�7��h֠z�
��Ī]F��&kf�egz}]�оE����<ލ���`��� .v��V\D��;�< L�	�g��_���D�����uD�/�����J=��t~M�A*0���}�K�#�	��<���x�њ#���s1�/�[v
e���>(zkv���K�E,o���cy@��dp�G{��%l�N~!k�Tϋ��%�.�ov}���D���'�,n�QU�k�<�0S��V�.w���o��!�7�zu �3�ǘ
�ܨ�� v��� ��A>�W8���햖�f ]��� ����®�>�����>S��:�|��e3�J���r˫a��X>��_؊�bT�$�%�����w��c��N�`)�K��,����WH�]�z)���	{�i�JKV���	d���V��a�o�v�ڵ�b8Ҝ?;�C�����g=e���k~_�{"�LIɚ	����2��W�'j3:��������ͭ(�꾤d]�O>Lk]P[�Y�������w����g���4���⽮��!�{�9�������#�@���G��y	4y�kbH��K�9�d8�/��Bo���v��<w�{�O�$=���f�ɋOR��,�n�mӸ[��'����7t�����q�ؘ�hGU�c2�(�{�Ї�ċ�L N�:���k��]����~�F!0,�5��G��Æ�vIn�P�|*ׄ�^�X�f��m։d;3WG�'�Oźb�?�6J�C(��+�S���B�@�cQt��>l�Z����K秎k��e.[x�,n@E�;\��,��3��:�s�V;OZFJ	��5�myp���NGnD��p�ڗ��Z肝�:�dB���^�:U��ɧ�겶��v��&������a�dD����
K�#�g\�h���Q��'~1�n<s�|s!D܍#�Ad�İ1���y����_R������8�ݡ~���F�5��@~���tPˋ�Q�[iƣ���r�l�Z��g;C���i�E`h���L4�Y�y�SV�C��rO�	�K��u&�Y����<P��g�d`��'�I\D�Ȭ%��~z����:�W����E��M��т������e鬓+B�Fq��z
�M󭢖�
�ȓg�: �b�EDq���AZc�e��o��1�h��)�>�mԍ&MH��Qk�
�N?d��|���.�����ݧ�3@����f�CD:�_fR�%�
�͙�A!��.�ԉ��S5'���ڛ�c��tN�^:Al�D7�?ޕ�/���&��	p�mnϊ6&��v7���k;3�H����V6r��j��6J�N.�蓯>���!Ʒ)z*����e�(F�ͤY�w�T���炇54sX$���6A]���"?��'��n(���/A�(o��WJ��[��v��4�K�0�P���E��|O��7�Y��)RD��47?Bt�ѻ�8�h�zjtkc�6A�/u�L�vk!�:j/3��� '#��`�ʔp��%�r�3��ͩ�d����l^�I�%�� ����)2��@Ƈ�5v��K7� �qww�oz2����&���ɶ�?�/�<�5��Q�����B>��̗�D��Qj���k�տ�z䷉J���{�����W�����/C+���%����F�b����4��,.I.J�m:{����a8��Ņ��� �DnQK���������frϜ�Yx#�Kj��,p�<�r�f���߯��/�{�>���7%|h��T���y:pO�y�����2�f�3w��K`mO'擊�{ٳQ�&�48a 2: 0RJMz3��%$�0`��i��v�U������E4��ɝ��~\�
�Rjd6Ǜz��(�?T��e|&�z��iO ծX�"���7����/�0���᠞�M[�ֺ#���l�����;(B�������(r>7Z�!��NK�B���;u�:�)�8�+���.Fa&/��T+��Kha��\���������{
Z�V[ȊǢ+��nUx'&8���6z�щx�I������Z5J|Õ$G��8�d�R���5a}RGn��-�4�jܦ�߉$f .��4�.�հ�p(Fg{�E�v3�����*C�1��"Vc.Q{eE������r��ߑz7
�63�km���D%xT��i�,��Ս	�8�Pf+K���{�A�'[S�4��|��':��-���	�p�R��fG��sp0a��f��G�˛�K`�4���\��+�<�E�?NM���&����_��Aj��������hN�V����ZK�;]�~E7c���Qi�|`��$�c���n._��h�y]�'�ѩDFx2�b%n\ �H��i ee�G�x�(�lv����vx��a+C�*���� ��R�+Q,�w�ܢ���K&8���έ��gd7�ef<��σ�&�\�8��xb����H�ޜv�E�fcӕU/�}�?���m`$i���K�����=S8����l9D��(��'��1��k&�fC��N���b��²8�X�QJ��[x�� �0��o��!�c]y7�D�#��U�@��|��ո�������JY�O�By��\f�uڬ��ʢ^��*��Y��~g�1T�_$�"pc~��U�=(A=B�T b�S�.H�U�.`̓q��ă_J���ZH�BN�%��D")-�L]q0T~���c����� �3ҷ`��|�΋{9����1{$�q�v��?�O٦����>"hY=X�V�؇@�;�sK��I���� �ר��p���m��ﺏgV�F�7Q	H�I|[�k&1�� ���G� �����A @LZMA̪ 0  ]     h�^����?�{NL��C8�S��Xvy;/\����46��6D=�oTet��7��u9ZߣOͤO�aɲ�O�!�Bw��HY�z�Ɋ�ᜫ�_z֬ڄ.���Ge�ŃRD�4n���y�����P�&G�d-B�J_��>�Ͳ���ٯ��"t)"�I�[��=�N�{L^��%[[�����yB�X{��������Z��h�2�<G0�dj�"�����M*�XM��>>�8[H��-��F�v�faٿ�#*�s�0�0=@��JE�Y<a�pV�.�����R�I�4��D�"F���(Â ��;[)Ɠ��ݮ�x�M���T�O�OlA��h+�qj�� ]S��+���I��HcuWQ[��1�V���|�t�ǅD1+;`�3�kq+�H�Ϋ�𰮟( �J�J��;���㩾����#Yg�R+~��@�M��}!�#-��8e���Vy3*u��!�e��|���1�""����%ǜ���bd�����Қ�W*�Z��y-R���d���E��kr�9k�;��L�M|Zb��fK�[�Z~��Lv6]�;ab��^�^; y2���?���']��>�8;{�oB�;���V��&?�9��?Xf���V��}��sU��q�B�a<����o膠��9���1�j����T�؏���2�mP�tN�o��E]P�&n!�[W��<�މ��/f=���4mG��NM�?PjՖ�dmW�����	�$��B����i�N|T�[�mLc�m��~�&�7�`��P]oK/e��"���Q����huQ؂��nRa�"��Q�l۳���9ާ�#]1���8����%�(���K�%�ީ�73;ϴ��)k�B	�,{��0MQ�u�>�z��
�jh�oF�2|^�i�r���>*�s[�As�w�f���5��i��]�OGj|J�P���J�9���Ŭ�׸�1Kh�� `Uu�� =������7�Hl����s�rIon}i�[Ѓ�峺=���k1j�p?р{������^�6�}�O�$��H%���8KI��`/pU�V�]�뗞� �?O��=����d�H*�4R1b��7s�,�"IH}u�
){m>Y�u
Ab��]*��<i[�����9�+؜&��=yS߰��H���=N�ә�7[�z�ٻ�M��+N���_|/Z�i���6�|*�e�b�v����ۀXz;e�I"�!��>(���Uy�]�Q��_�.���eWi�7�n�w�X�mD��}B�N,�Ұ�|��]���{���.ő�I�,�J��蛭�lY8�<�l�W񌥌C�ޕ�Ǖp��n+�*���� ���O���LT�[��Άu�Φ����zR�X��i0F����y6�g�b��.�N���e
*�,F��΍��)96�h�ZZ!�:�T���8ۻ4�W�8����>��O��\�/����涳W�E��XCL�b�R��E�H#	ot]-i��E��)&]�^ �=	����g�O���=2J�%[Ng�e��⯬�J!���T�ӷ~����n<'Oa�[/���:,|a���LC+�?���lH�tA6��9Sׄ-M��ܝq
���t5+y�K�b��-$;��O���j+1��u��z;8Ţb�;Sk=}.V�c��Ȥeb����`K����C^5v"�A���mus�Spr�Z�
�l)Z��{k`rK�0��6��J�錸SM{�p��A�y��ζ�>���""�	�BUD�l���h���q��pް�=u�t�c�j}�c8�$�7��n�u��v7���3X1{���FI�_r��Z�f�!�"wv߬ �U8����\ȝ]:! D�gS�����FU��QN��_";�3�z`H�M�:{��s�hy�W�չ6Ȥ$̢02��F �j�w����fׁj���2�QBw�����m���УZAvW@�3&dL�Du_Q��������p=<D�c��v�]�M���	AW1h��qA%�;^&�������r��ͯ8��P�e��4K��_B����9J��C��d�e�
<�a.����Ƌ�*��>)e{^4
8oT�&P�o�Ѹ��ɮ0=6��_Ie��G�n�� ��\�Z<Ö�l-U�O�Sn�ݒ."�8~r<M���k��S��}agc%֟�d�H;�%B�ktP�a�p�H���.S��6#֔�5>�9���I�鑒9k�X֗i�<��Xh��#�w7�^�*����4%�|����>�'�� �τ���Տ��LHO���E�gЀ�}~���8��0�G�古���
;��k�=n�S�>[G��T%��l]�h�i"\N��ߝ:��gJ�"��3:����j,�ZQѹN�)U��G8gfKLw k���9�x���Ki|�$Ұ*�Haǩ� ��m[��l��	��:��51��'e,��ub�F��ݭj l�MS�68�s�����lH��2LO�^Z2�6䓞�7A)E;q�$����L�C�J1D�	� �x�)]cm� ���7{VNOF�o+`T��w����O9yq�H3�
�]µxҋ�)Tكl�����1�<�WZ]܄��φ;��Q�����$�Ғ�������8�����P�c'�_�v�S�o�߉<Sv�&q=6{Ԕ �ZOx���/��֢��7��!
�-~��i鐓aB��ڕ-�3���E�Z�9D�@V��U4^�!Q���xF�b���'yQ��.Id]��B�
i8uĆv=�3(OO�Ƞ���VH�ఝ��9Ӄ��䄸v�=�n�� �p�'$k;��*�Y"�p����.�Uj����*[(��(�����>�?������ ��|!�\��-eOlc����/ڼ��������X��+Uw�Og�ϫvP�X�(�ѭ����
�J����á�?)�Y�z�W��S��d5Ƞx�P-[44E����,���k���_y��X��g\�G�=�!@��5e^~�Ȯ��Z��,&	��Q}ǹ^=�r.)Z-h�������4�H�:kf���|�ͻ�<ML����vNt%F�����^�Ŏ�B���1�쬁���M���w�6���
�JU#aB׽��Q��n?�F���>�V�X��ZJ�*d�>�>�K��c�['{=�ȟKSO��[z�V�y
�!%�(؄g��LcDP��V�R������s�<rr�D��$	,S����]�U��>�
"�b3�c��J|w;v��m�bn_�wk��z�w@a]w ���8V�h
M6�<�<�jܡ>sB���\�5��A"�v_�� 攛�S5�B������?�\����in���#5���۫�᫵�Єf�M�^;�!��6�%�S�b���~y�$�R�[L��Z�/W?ynx�Cl��8d��D�g�&�1+���� F��]���H��09֫|��qX���O/�:۔]�T����"IS���f�sC���v�PP뫾jq��*E�ﮕ�򱘎QH�p����+��|��˰k5o�L����u�xd�[o�C�����N����=:*?*�>��h��--$3����k��[:����,��[{�����f��๑����У�\:~����\O��{d9��29��������p�'B%�M�Eř8��~dS߼I�G�N9<sJ�$�]')��oG�Ś-�n���k��a����<���!]�-��Mj&�~���+q�����ӟa|rv?/�nD�Wf"��tH�!{��[H~q)��R��`-��ߨR}�`ٲ�bm��~bn�Gݬ~�{��j������Q��sK*������`x ��_���&o�P��<'��y�ȟW��'t;��>=Ϣ��.�G�Y�%\��خ|��܁VʫCY$��$������ݺ�:��O������J�$�׵�CC�2��kYa2v�Jo��Q�{�O�g� j@�z��#-�of5���4L��{M��Mi�s,�-
�>�&0ߋގ�ϣ�>.� �@m��Gz?�ui�������-z�ݵ*.CO���[4<��e��-a��-���{�{䆖p>9�=g q��﫳v��܂�򡤞 63B�!�9V1~#����6\˫:���<��M�mR ��AF`�1��&g�P�RV@�,��S�˸+-�~%�{������gN�$�c�iH�,ܗ��㺷~ۙ޺�wH������]��}JJJ��$5�r��(ķ+DB�����V!���ؘ�_&�AW�#�J�ο�8�[��vO��h,��Q�j2��̝F�	�r�/�[n nI���Q�ͺU(ʈ��(�s<�#x7�As�/��v=��s��Ģ����s������V� ?+�2k.�7P�W5�c�LiA�T��?��=��1�\W���D�Xw1��h�k��-���&�Ia�J����K�9�f[�a4?Q���~��%�?�Ez���⸃
,/|�BǊM�̵0y(){������V#|�j�[�L������Ps��m���ѼU��Ffxl���V��o��-6���#�9rz��U����-�l	�ы�i�#��/I�ǁ� -��8���V�T]�̫�T����P�c�h�^�<80�c�ǧ�0�����a��v��'�o��p�}�l�qV�@���=>=��h�7�U�:���t����q�����iki��q�H�U��kL�	b��>IdSL)�C�>[6��#o���m^�hrQu��ȏ�#�t�pZў(	����x�AmϦ�-��m�E��s1g�W��z�{I'|uV+�ҷw`�k�=dBe�6�p�y��x�[h�Y���k��0´� I�I�9k�Y&z#ol��Ro!��(;�ג\�&Jt �]�Az�L��W�{�^ �P�Z1��.�>�ߺ�l[�"2VK�d�;��05��	�(ʿ��h_�����UYΘ��v�Q�*�,r|��C�P$���4سc�=�a���jo�c��>�� u� �>[@h2�Q�=g+�2 ���s����3���{MNAe�)v"ÝЬ�-z6GA��K��Y�ّ����x��\����a�`w/m�be�'�:�L]�(��d-J+N�jk9J�ܿn�P6�)���ߩ�z��q�)����No�^d%j���{�eB��pT�u�by�4�k�r���^y�iF�æiR�ϜS��/x��by����x���b\"�*H@{!�y,�����O㰋�� ��w�x���'�.J������);}8/2 A�#.b�G����잤]JX0�$�!��� c�x��͆����q89�vVdv��3GMos�)	��@������t�FE��IDk ���t8��舘8��<�^޿�X�l���f?h����wV���u=x�K��<�� ��$!���<� ��F��7���вg���z�~q�Q����6IM2-!�W�RmX�-5��p����Y�߮5 ��mG2�ÏFG3�b��ќ���Bs>SA}Ub����/-$���55�!R-L�dA��5��9R��c�l�Yw���kQ������o�!��;d��t�����;�M$��~=s��m��0�46��^'��$��jOa[(Sn \�ks��ΰ�+��x�`�����I�bPW�6Ύ�a����vd�]��e`R��������nc������6�/����BT�@�x�_XP��/X�Q�3���Nͼ�n!T�i���uߍӉZ) 1��T��������K����]�oy�Qx��6:�ˈ�ZMnOwo�W�#����]�6�Bǧ���E�"�}����g2zE�7� ?�Y xm�"�����	�Tz�y���h��w��f4�Ru:5�^b����2ޜM��mZ2��v8��8ϝ]�Z�c!Hͦ&M�]$�RjƜ@�;Q�����+�#NHA���:�늸��Gt����b�5�*U.e.�k����&Bq��7�&�����Ӓ�s�T���e� i�yz�k��S@|>6��w�g������������*�W̧�I�7-Z���ן���u>�:��������(M��l20�����u���j�QwD��T6���������H��t���`����3ɑq��Q���&����q%,n��g`fɤ�Û�� ;Iy�� o3����	5Pк^�j�wy멱��dh:���V	b.`���G(P��ԣ�p�B��~�K�ͤ6V:�s'��	��M����g?%�h���Tf3aV�焮֟���`�2����.�\�Ms���z����u;"��	$�.^i65mt6cQ��ɼS5Ť����lx�^fW��Gl��d�d�hyȴ:]��j� �8��F���S�)m�U������ @LZMA� |  ]     h�]脿��8�%�P��4�95,�B��B��x���U��U�BU?�D^�+`�N�"?�f��:->0�.碧�����(q����i�M������������v�ᇭh3>e�C�4���{�d�M�Lala��]�N;Գ�]C�!�����ڭ��~I-�����
��bPWX�+Q`������<�ު~-�z���K�{�8�%!7�Sߘ��{^)0��� �Xŕ�Ar������,1s��~�����p��"�G�7�~T�Һ�t��kI���=GY�(R������, 1Z��'ّ�s��f�+��/<R��lD��(_+�����b��"DMx����^�p����0�8���	i3@=:D�N9��ֶ�Z}L����V�,|Õi�r23���hVZ�.(�à`���k뾵>���i����s^K�]#,R�ѕ��T+F���EG���L�~X��'Pe�����% 5q�#ڇ[Q���b��\��/ �%~�<8��Y^]y2������_X��ӿ��[U���]Zb�B�c[��*S�((�7f8B}�� p[r�u9� ��J{�|@X5��Ɩh��-� ��~>@0rbR�V��'y:.^�jq�������e�+/C�"�N�8}��$�g>���|���t�)�a�3���_o�z3%�X��Km��b"GF����!,���NQ�!��Ե��8ܲ��KX����<�7$X�������LOSV�_��ߢ��T8�m�!q���� �����y)o5)u�Lʶ�Rr2�{9l�����?��h�@��I=܍�7�#�O\���i��5߫"Ov���/KE�F����c�@���5ռ�"���q��Ƹ;0�y�56���K�J����J~ 6F�M�a��RT9�����?� �Abs����1�$P�W\��b�&������X�L���:�h]Q��S�%���K��h�n\~�7�/��ц�^�ż�t�պ� TC�ހz��j'���8�^h*�mAө��zڙa�`� ��SD��x��d����,.R([}�& ���)c\��5Ne7�
�r�����yVIp8`\�4��*O��A7�;+N+�7gN�U�׼�L�%��'W)OR2�֢u�I���L����%��%����`D1�6� ����T���x6��4����=�<�B�M�e�5��j��DeU�
[�ߞ� �y���ч]�9'��;����to��9�0���_�ۼ$��A�H�~�'q/�}Q�l��Ex��/X@�
]hw�*賳w�����;��@�<ω�Ad��:�_=⨰Ň��)v>�O���ƒ֛��o
���Cn��H�V����!��2/p,�8ȍ�{��iڎ��������k�b�+���eck����ZĒ"�2��b�Q=�alꝋ�Ӏ�7��Ϗ"��p��]��;�ݕ�[=��ݕe)*�K��~�t'Ƃ9��h]W �
ϋ�ȃ&�i�3H0���L�K���佘�"\[o��]����E�]����a��~!l��#�\��������Q�x����F��5�<���8CW��"�x,�>���0�_:p�����Q��v��N�>�B��`5��+�8�[y9�[=n���IMBN���|�$��X�<������r1�J��s�R� �MG��&^��ͺ�ϥ�u����u��R&B���Eg��$4��"���G�6�.
�%����*�C�WŔ�R�^�j��(y��[	{�.��L4+:��e�|��4��2��]������:��7�V�	܃/U*ߐ�t�hOΑ�I@��i��MOs��ش�m�F�?]^�U�^%��$�ʵv�iƤ���5b�Y
���5_@?����慱�ښxQ���n�����9ִ�v<%�Z�u��+�)����J��#w�ob��[���b�p�"��1/Z0���oRP����Z�[
�+0X���jG��|���ow�I��U�7�渺��� ���c�
��%f���jc��E�Gг�&�(DZ�W�;�yX�+�l�@���@LRNp�I�K^.���i��7����nbH�o1��~�j�0��a�{��3(1�w��U�#�t(X��U���nAZ�Ӳo��Od����ʏxN}'ք|�Y�]m�5�{����ʍ+Q��x/qd������Ӳ	"=g�������ٌI&���4K3�jF�u�V��He�������*�V5B�.�L9�#����}_;��=��U�%'��T�yޢi_/FA�q����9�l�������R_�Ma�_w�8-�鉎C��^�J�C���b�'���d�Q}���� �k�����\tp*�
>��K3.e�P^��׳���S��=�h�C,[�b����D��*�K>Mu��F%�Ā��!����΁4~2�^�F��	.�Ik��1c�4�1�q`#��aB�����Y�(]���-�B*^Q?�(!�4�#�TPlF4�s��Yl�9����7:�w�P�%F=�$�������g�R������\���	 �2I-�XC���]'F]����	�b���9i����:��=c�a��� ��Є�䎕?�E��^k�6Ğ	��|n�d� Z<i��f�ƶ�h���E��UK�tDՀ�a�̡�\�5�R���V����~����`�c�{�x�E҄Y�=kf��kU1�r-��{��Z�g䦾H*�K����\��.p�NHu\;0��-�P�Ӌ���#�����=�ؼd]�Å���X(�IP��e/�]����#��yly����"��"�k�[�3�Bk�}�'ӂ���0��K:8+ؑ����FM�>^D�K�?�\��f;NK��!������*�M�V*ӟ�{RNz�x���N��$N�<^ZAz���Aݽ��|?�.��
337��1f���P�O��SL���}�k���C�+��Ls�C��լ����5z
V(Wv��f9Q��$PG�l�&x��i(vq�����ݥ1Óy�㴕�~��0�*�� `h�.��� 7x_(�R���o	M���	��WM=ǔk"�"󗊪D�Ox�Z��*7��Q�	S�a|4�����O��x�+�Ӟ3�<����0�b����p2�S�,�@B���ًx�x�k�v�'�%h�z�۴�K>�0��
#�4������ʟ�v�$^4���`H��d1I�x��)��xVېS=��R@����Q��߀C�a#��;����<[��+d)xW�8&#��<6�|<�t�=�%̭b��"#Iu	�LwH���w������ �����'����=���.������S�I#<�$<]`�N�s��AEJ=b���^	�n"�M_+��tg:eh�.��P.q�r�<oT=���eRj�[l|Sp�=��w�O�(��|IF(�[,P��L�<G\��p�eGՍ.T%��E�0{5��� ��4H	�v�bhv8SWT�kZ!p��X:ss�G��Z��|
��n՛�h��6h�j�L��MN����n@����ÚĖb嘋�!��fǥ�н��5а��I�	���8^��Ӗ���vR>x�B���bk��!|E1��j�/�w�$��T��P�D�=��h���\����mń�u�ϧ��il��a����!�T��]�>�^Q&���f@y�m�x�<O��<է)�� ֗"i����Tg�V�)x��AA%���z���Aw�\=�O�{Ӝ� �5e�I�_�yb�,��n��+BB& ��`�o����V6͉]��0� $�n3�*^��4�К��"�zy�|�5�� �|j���k�)��ݡื�݁��� e�I���©0.7h�,Ib�jB{x8��Wwї��h��۲�)J�:��'\�n�%*"r>��r3x4l�4�;3�K$1E�ε��VhOk i���VS~1�Y�K,>��ǚ���L�"pEF�uAi?@��8xtCs��j22�t�7`[��U��pVs4I��t����o�%.E��(����c<�̤ߣͧ�����:<,���V���R-}m���LO�TT�R������;.q���Z0�چ��́v��r���+ 3���+����cX29+q���j�}9����Q��"Q!$��n��Còg�Q��ԁYq̮���^���N�Cs]k
�Q�Փ�23�2lZ,�6��Yp��9jWwa]��*$L��*H�۩;��u��]�rS$z�je������NAUť�8-�y���4P���:Z��[���rI	ջ����{�&/�-4��塶�ƽ�D��$�)����8V�~�&�e���K�sBc|�=%I�sA��@���3�F���*�����eN���p�f�g�4�ۍd_�|Fl�TG�� �8.��4���e���ڃ?F���y��1�.�e(��D��MO��Y	�
��+K7M��8�e׍�Rw��w���d�� =ʄd,')�$\脌��Z�_0Y�O���M�4�R;�U E�{3���VL%[�h�:6��D�!p"w�y�Vc9>�ա8}�JY�S-��u��}�ok�m�{�`3W��X�n�3��ւP1�@��A�0��ʇ6��+`]Ue_pP�4��B���. �B������M��H@ӞZ��k�\{��u
�P���y��rA�~����6�,���4�.���B�=Q��Ja^X��Pm��"`J@���{�����zŴ���د<�}DK�W(#(V�FѺ�B2-��������,�:+�{aBn�L�����.Gs�>�A�ED��*�?Y#�[]��HLp�cm�Ih�z��蹤�&��&�{�Y����^�Y�l���>���h�1���s�����Y���C�T8s�����VG�9nTTFS�	1nV�xW�#i4V=�OXV ����� @LZMA�< �  ]     h�]脿��8�%�P��4�95,�B��B��x���U��U�BU?�D^�+`�N�"?�f��:->0�.碧�����(q����i�M������������v�ᇭh3>e�C�4���{�d�M�Lala��]�N;Գ�]C�!�����ڭ��~I-�����
��bPWX�+Q`������<�ު~-�z���K�{�8�%!7�Sߘ��{^)0��� �Xŕ�Ar������,1s��~�����p��"�G�7�~T�Һ�t��kI���=GY�(R������, 1Z��'ّ�s��f�+��/<R��lD��(_+�����b��"DMx����^�p����0�8���	i3@=:D�N9��ֶ�Z}L����V�,|Õi�r23���hVZ�.(�à`���k뾵>���i����s^K�]#,R�ѕ��T+F���EG���L�~X��'Pe�����% 5q�#ڇ[Q���b��\��/ �%~�<8��Y^]y2������_X��ӿ��[U���]Zb�B�c[��*S�((�7f8B}�� p[r�u9� ��J{�|@X5��Ɩh��-� ��~>@0rbR�V��'y:.^�jq�������e�+/C�"�N�8}��$�g>���|���t�)�a�3���_o�z3%�X��Km��b"GF����!,���NQ�!��Ե��8ܲ��KX����<�7"+��|r[r�7�_}ݶ}��ZaxLZ�2z+o7�[ h!�$�.���t0��D�b�_���j�9�b�1�Px �E��D���h���P��t��%�Qf ��4_!��дoUc���݂.��J�t%�׳&q�R���!�MP����v�����`1�Ff���׬5a3g����hs{9�@R!>U<M��J�'�|}Ľ,�_��L��c��~Î�w%B};���b�%Q�]�}���P?�{ɼ�F~0��٬r��Jm���~�@1�"z����>���"+h�2�兰Ύ�=�}F��� ����ь;�'فD�ا�_>L\���ٺГ���MR�u���Q�a� ��@g;9�F��L�S�m��/�K:,������B�R�J�WN��ѯ�n�kPNlz�&5ǧ�z����Ȥ��g!e"_\l9Z�������c	�K�����u�<)�{��	�#>��20@��,{�W6�F$��/H��׺�2�Rg�,ʘi�ǅ�۰��w�/j��!"A_
�KLVq�kEg�]����'�:ݿa\-t����;ҙ��P�؞sR�V�������6�^�����2&���s>�,������\1�����?��au�yWWx�#H��8cܾQ:n��fz�{��p]o!n�%b�sp�M���dH�����[�#.�3��ȇ`8����C�A��z�C<��q�${gk��&!sTwܤ�Z ��s@j�4h�Hh�Т�[�3�dN�9����f�x�_FM�y����!���  �DV{S����;�~Y�=�Л��h ��]�A����������b��k)��M���4>*ƃ�r�}� %�	,�>e��w��lx@����皘O��&\�ֱ� .��D�(�ͳd��Y��f�o�R���p�Jfsg���!����%��5��%[v�(7+�sV�7�v?�O���;f�h��ij&��D`Gʤ�������<!����I�a�vݴ�6��@����7qTЇ����Qgo��n)�����n��)���@�_��
�`ia�ʫe̍�k�9눺\}���w|h�">F'k���ﱧ�/�Λ�X��hꌯ�ŀ��z+��v��_�w�Ki8t�Q��ɕTlȏ���~	O0���5x'��ψ������0,��_�>!ڔ��_)�|�38�"��8�zl�8�����!Ɓ�Ԥ(����F�5�-�n���<GVXڔ������jT��JtW�����{~4c�����?�^kX�c�J���ޭ3&ݴw��K�
,х��" ��ݗ�v�;�M3��_&M՚���S�~\�����;RJ�ް�u"9ԥ*�x~��ta�����3�4�9(��n1��Wm�h,�7� ��J��ʪ��x�<	�6��ɱd$�:7'��n(D��FE�\�l_�[�T2'/����&d�($�:	�P!Q#�m[m� T��kr��rf_ODkRHR8��q<n�V��6?Rf�y���H�� <�'�� 7��_�q�}�AL�j�He�����>�Y
��8la�I���>/�L�z�6o�sվO5`�g�h�+��^�NN{��¶�$g'�azEQ�X�.9'I�һ	y��yO#�+��Y���W%��}�W�.֩���ェ
�m>���u�&ƥt{��$Zړ��I
��?�R,v�D<�@Kx12�ejg�`i�-��;�Ʀ���L)
�`ϊ_y��P��_\9���6�Ҽ�)L}sYո��Ads���&��E&�Q(~m�*:�:�^x��'��9�d:�N���A��4ld��P����a'�O�#���%{�����ǅI�j���)�zEh�Z�X7�5���z�ʄl��P%�A���Չ�JO,�/D�|��m�Pd�����e�_C5&�v5��Xd�q� �L��j��$�<!2g��t��e$\�ma6lgx���c$�@S��+TLnM���[�����1���\f����G�1�2g��b�?l�z�a���R��(t2h���ۓ��ϲ��Z��GX�w܎T�w�Ow�i�A����x*��*d���͋���슮��d4,	tkū�O����ѫ�l�P�T����w�h�.��h\?�C��U)[�)?�\!�����fTU���jٟi�U��K�o� �-u���@�e7b�w��!y��hoy�����s��JB�gr���KA/;ݪ
���a��6��iW틵8<"�2D#��7��S8�F��F�l����u�jƈk��{|V���:���&l;+o@��%��xܐ%����p�l�:	E�f�"M0��2���$-�,��$�&,�
�KV���d�m2�9��������ZN\esFN�Q�q>�����5��z*e^�_�_e�Wˆ}ܠ�|��,_Kd涨��h���Dd�:jvxQ�ch�M�.eҖ��[��*�#טA��r�S#vT�U�L��\|��=?�ye%�T�*�y��46�8��l��V���
�#:�����N?�$����xn� ]�s�Ц��:�$�������^-�)�5�9��D�{&}�Sn�w�� �ϵ��T'$Ȧ�Ju��;��ʯA���xJ�d�:w���>'+6�Zz.�{�{�/S�I�?��A(b\4�i�Z�ɡ$m�����*�X�n��	d:��z�[���" ���êD0V~<�aqTU~�2����"��K�M}y���;��%��3�����Wi���i���sڬ���/���]*��n>��Ѯ7��s%ϳHQ_��6�󐢍y`gW���D�?3��ʋQ����I�v����G��oS��0|�'�ìju�G㞷����;��%o�Xvx ^4T���<�jve�*��]��Z��-���nI���D:�+�Q�gC��Dq�=n����ffHT�R�|"0��3��� *�O����F����^+�V�Cc1`�!,���H��_����`��u�3�b`�cЙQ\#4�Ⱦb������֘����~�MYμ�ttcs>)�
%����@�ĳ~ !�]�b���[8��K��,��#G<��Ӱe&$�*]�})6f�:���&~	b±x3�0�9@�%�K���t���ޞ�~��q#���d�I�
[I�z5�E!%qf��J�h�၇f��:o��k���k���t��= +XMc�o�&������	6|9B�݈�2}��П�-O��-�V��Iղ�A�#_��@��t�lX�G����Mד-T�W�k�nʹ�B�P��d`�����-��If��7I��G�@?�H�������"�&�@z�:���q�xװ�9��]�P�����l������p�+�=�[RL��q�S�=Ԓy�߶�M_r!OJ�|&��C�p+�~��K�0��l?O�_�CM�Ji�[�,��Z�_���R�Ҝ���s�	]�G)|���Z���1���8a�v��h����w�c��7k�)W������Wz$��;�Ǵ.����wHog�\�����'��S꽈xTaU �~ iSf���k�[{a�X�:qH�z�w���\��k�,�M�'�����A/M��Z@���K�ӭ�C�D ��/���c�� �?^��_9:A� ��$_+I<"S�w�ǡڝ���O@n�½zW�3��jv�t��׈ /��� ��<`��,�uo����c}�3�^ft���,���k#;~y!����UZ:�@�b4��W/�F����<�kO&b,�\2Z$���<��~���($
ښ�wĦ�
��h@������ @LZMA� �  ]     h�_D�?�'���&-�������E�!��Τf���x�S<��F�f�d�U4����ހ�[�@�/}�� 0�W��	���O˞4.��=��|�)W���?�<e�P��z�7Z���?̞�+�z/Tkm!�M�s`��O�L~5���8������^���a�E����n�m7������N��S�n.��ִz�2���#%1����t�=z
���c�z�e���sw~��m�[Wf#�!�!R�i��E������8/p<���}.��6BE�W�!��'Ώ��ߖhXB�F�&��p����L��|ƈh�;M�d���v� l�@�e�O��vh;��F�_�X���CCbX�~-���vv��o]fL��P��[��e�D���iM��O<t9��;��N��-A���q��3>�Y"�U����@����s�,4�J�c{�y,A�)W�P�A#ގ���xQ�o{������H�<b���ԋ��X7�B'����;+���8��r|����nA<��Q_�����Q�J�jFg���n��x�tN,Z6R�j��*�3B.T�c�zOh&X���@�7�6�&���x�o+[`�l#ѕF�8�����JV����ˢE�ӟf�>��}&�_q��6����1k #�C�����kE���Ԧ��#A�z�cA���ŋ�+��j� �n�(�W���P�Yݦ�;Y3����Z��EE��B
E��.�]�?�~c�i� ;X���U��F��3�y|��3�r�+��ţ"Bψ�Yr�E��ӑ�3@TQ�5��I�u@XE %�lx�
`�	�Vq��#uJ�0H	��ԕ�����S��?�0���$&��՚!�9.2�rFo�v�5�V�a�o�v�]���c� *�u�9���'�?N%WX4�����(�D�Z�%I(_���Ï�ҹ���h�Z �6@�ʲ�σN�<�zy�y�C�"K(?�-���Ji���){6@)*^s?BjE����<�=�OzѮ+�N$^6$�A���-�fj/�.�Ӵ�F��k���00��s�F+`b~J��� �H1 ��������I/�}�hX�E��d\�H��4�q�}Rc�#'���G����R�������ܶSG4�}\5���8F��^�f!I�R��MW�Q�N]��{�x�ػ��H*h��tI������d��;��������]���=�#w����@���JT	Ș��Z7��q|,!%=����f�iN����ٍRi�h��M�j�IVeW����:���a����y�URx��=���k2����P]�Z
���?�'cT,kvM) cs�Y�>J,&�ّ��ì��F�  �����i��ǩ�D�{�7���%	Ū��n��U�t�����K=��Ů)�1)�e����z�|{8R-����{�O�C�.��G��_�.��]���J�A���
0�`���F�1��m,��YͰ&*�Q���]�t�p���Y&���GAC�j�F^NU1�gK8}��L�۠2�ƬCB÷Fà1Ԇh>���ij�m�����k����X_���铉8/����-;�
f� (fq}�g���U,5z���b4Rġ��R\c4f8M;�/���g����^��֥��,�&OU\���)3�l��,�ڒ�Y��X?�0j����@�U�����gi<�VT��u?�v�of�ށ��X�ϙA�A��Ik��I���K>�d��z�r�r2ÚED�A+f� 
��d����2��v�>&�l��߭3.���8��fӕO�����H7��Qٷ񃍜Ne�;��ˬ��֐;s���q�i�W��Fc}*m5���g��J�� y�9�$���Z��$��4:iZ��(B?w{�-E}�%Y���y΁�2��V��c.��T��������œ�pH��7��l5��?h�ڄ���rlR��@�j�}Ap�#���g�u�����ךw�X�]d9��7X�L�:f:��[�{pHW%o�f��E]��+�k�Mi(��\? OZ��H�(
&��Խ��9]�ٸ{�oI�D�u>��t&<z~���\Ms�%g�p��r�xL������~^!�q 29?3���Í�<\����\2-���Q��j����Y�dpe΃
�|.�h鿺�����4����2?nvBX\'v	Le_��~�l��Ba,��4��8O�z�=<tΞ(S����䬭�	��xҀ �-�o)�yw�V��勗�^�������ذF�Y��![��+$�.�E<�.O2z%�Ǒj�P`nh5���� V�6�"��T4����L����V$>��Ta������
��L����tg�C�-,W�IӗHn�p��>Ŧ����ܢ~E4o�l�f:C�(1�p
/�c��2�fJ|�~�iy�0�=|0�?
��4dL� �����<'�6i��c��F^�W}PV��V�[�p��V�w�g����g�eo ��;�%�	A�͔)6���7��4�LF$#0r�@*�9�mе��4[4��óPaL�T�u�=�%tK�^�
�桛?��$n��"��ys�c�gyZE���@��,�G�nԯbYJ9(��Y���	��1��� 2-�RZ\��܀�eL��5A�ȭ��8͠|��C*UHTAK�p��1
d�-OW4�P=�@�&|�[��*�H	r�U�;��{�0��N2Zgm�����k��?;��1T�|��"+��~;��Q���� E���6�F�`Y�t|R��hh�9rܗz���/�G��{�]�A�-�
1�k�-�1�����	��1�f&=�w뺃ؘ�z"ӘUY��e�|�����C:d<M����d^;���$hx-��*�����jmz۞i�Q�#�1�$ڰ�q5���(u3�F¡v4��P(��Gm<F���;�����l�P��@ϡ�����cQ�.
�%�����@ �|��̾�s4�Q��"p�w3�����g��tޤ��>]�AQGfp�S�^��+.��[g6� ���,6Q��	Zv���8���>� �m*�^�yu��B����!��]���%�L��ͼq+�'�V��A_d�<�0b1*�Of�{��Ӻ��4I�ׂ�k�o��J�ρ�੹���wҍZ�>�%ı]��jt,Ah��t�O���F̫w�B�;��]/]�Z��ˡ��G�A����C��l ��Q�Y�>�e��c+7��	�^p]h8M� 6;!W����qM�%�"2���XT� /��6��x:�01��c䃸�[��.2F��cꞤ�BGF+��i7�.eV�gP��"����]��L"^iO���6��<��S(�'��t�qu����,�G�s9w��.�~��g� �sl�5��225��vB&B�}�8H��7S����G�2����Z�!!(�'�A���|��w��1X���k�AC�<���N��M�z�HK\"@`��EJ]��<�'�o���#��;�6v�����(\B�L��l���}Nu䟙���t�6ZX�6��|�1g���C7y��!J�A��/އr��KM�(u�r̓|C��!Z�_��J�=��L�1p����%��V/�2�� �`�Vb�BX��m�:;U��˶�뫿qCMQ��&{��@�oQm���R��'޵�7��9Ҝ�Eʢ1�j��x�p�ኳ�ĸ=GQ�������Y馩JObj�r�X	]h`=�-�VI�f��8y��6�A���b��BG���M�u�<��i�����NK�����ޜ�7�o�
Ũ�� N������ �
�:br錑�f��e�dBn��n��\�Bug��э&W3���x` �v�޹��V����vGE������2���
��_�\�rB���W�����O����ܾ9�!��N9F��&Gk�<ټ�k=E���>0I�挿��G�VC3��7���j���H�n�2�-D�M���vxB
AG[���0#W<���{�]܀�Y's��q'��!Ϯ	%1ӗ��I��m��jisR[�XS����S��ٸG_���
��HZu� �a�n�"E=�{|�f b�_�7� �ز�����zoV��5��(l��/�B�ET�H�al9�P�y���v�tL�g��!C">�ɥ*ry�-��^)�σ�=bb�G�#aKe�^�L�/��K�U�R�XZ��]������=$5E<�<O�A
<�͜a�v(�pB��[�d�DŖ��TN<3jj]+�� �\*����p,�N�Z��l����YҬ��݊ ��@q�χ�S�����V��@�wǡ��K��µ�Z�ɉ+�Şr�5Œ6s��)�h@��Ϥ;�Q��uxst�s�����?`"�Jv��a nE��@h�qPs�M�������*�s��[���DT[$8G�y�K��k�u�-��C- ����o�%|�,�/N1h%�z�3z8y���Zu���*p8�Iµ�TK� ��B����G&��tS˗���3a�y�z�א�l ���XRP�b��Z�i�wb���pc\�fI컮f��2���bP�4�d��T��%y�@����CC���$�'���5�"*��+}�������Q0���;�����k`���/�U���|�N�x��TͫɄ�E6J
���5��I��2�Ƿ�V�S�ܮ�Si&$b���eʯ�6���
+c����'	�D�#�(iXF<ܹ�
��O��%	`?�q_����)����j:��'��9��d�������wN�L�_�n�̮���ObI_�� Z�s�օp�k�.���R�:ӳOk�'����!��݁U8|�$��9"��.�W,�Y~YhR���@��j
���6k�\94 !�����t<bىʗ@�9�t|�5Rٹq��8�V�Zf�u2w�WkOI[��̒W@�^�&��Ū�B5C-�g�LEKm��
����YX˨�����o�L������q��}� wh ��R�((���_M"ZPb@�8�^>�ߔG(�:뭁�j4n��1�|��zY��V:s�Qv:w*BRw��ś��E�I�m1��v��p?qI=����k^B��-��ӡ;��Kiw�)�ɉBL
��(\J�y`�&�����Q��v��u�o��3�+tm�� �Eo�[^(#e�0���71B�a�b�F1�s��M���}h��@�3?�O���SAw ��P`5n��"ӧ��Ƭ�^����fz���Xt�p�=�DL�z��3��% ��+���m-Q��Y���9���jy�Az���\k�� �
��K���SsxoA8�������?\��ڳ��(�h�Q��t`�m׃�|,�gY�uO䞚�9��=�uH"���AlOv��0f{�����p�?�I- ����|C�Q��MH�5���x{#C�ˆ���x�!d�b�c�d����,vy
>k^��c3�.^9�h��[�c\�#��)�������W�{��B��s�ӡ9.�V����d�Z`�S��AA�ђd�����y��7���׉���@7���5PI���3�^+'����%92�� g�⪥ѰXV4�Z��.\�?���V�;�/�z��_�/g}�I`z�����5���	��O��>��2�$�a�vӀ,v���b�*\�Up�L��al�� ��j��`�I?n���f�~����hy�@�!�%p���gw��N~,���`�����S�,Gr�B�y)���3*݂�sD����������KG�.��㐲n��J��ñ��vZzO�����38�O���E�;�<W�X�4�^��m����e65i};��kf�* �m���=wq؞3t�
?���iY�q7>��3��Y͚$�թ9�U��I��*��J].�����,`��z���J���TYMtU�ʕ����ȫ����QqCjo�%r�L�llHM��4�)N����D�GV����+���+���O�AE�ݔ0~a@{�z_*S��U)�?�T�y��Θ�C�r�$Nt�!��*��w~�|:!l�G4E���K=�ދ��3�*��jH�������WZ�A�#�0�vY`­�缛��w���w�aw~>G ᨍ�b�;<�K=7�.��5����>ی��UK�R�2��V��p��i���T��q��=74*F�B[m?X�ݼʳ|^ܭ�ڍ�ԩ�4�eN?9	#����!��X��/�,�X���gI;���p�BZ\m�B�{c��]�`>�A��L�^l����N�i�%tU����Y�p���6�*����b0���?��J����։,J��}��/�r���������-��d�mWehl���!7౽�f��m@���Exg���5��5���h�M�)�ex�k{�^#8�A!Ɨ6��!ʌ�17*9.D����\h2rf9E��}�<R'�y�T��7)��<���sBsSu�ej���7ƫױHJ��P$�A�l&�q��ٰUI:N�{��4��(��\"w4��9��f��@�>^ɍ@(g���4�W5
pq�
d�$ZX!�;�C@=�e��e��	���̶�Xi�4\� � =s�84$e��s��y����K�T.ifo�w%�����'�<�z�Ed.K����/��J���Tõ��7�F����\��ů�cc�����c�_����j��C� ���oS%ʖ�8��gK��(�0�*�����%[�I�ߩq.�W���������1%q���~Ql�=0�����g�!.����:�u@�P��U�׉'ߊ�����tyۓഃ��L2�c��CZ"p�bx]�M��L�"���/�5���\Á��E0)���?��%�z��VP�[���`�mܼ��ҡs1l�1o��f���w�����I) �+��JI�ײ���"�m�l���S+�;b	��5o�v/��=�h~�XT!�İĖ5�c��ZiyI��I��Yh��v�#C����Y�u���?�,�(��2у3��#ed�����Z @LZMA�� I  ]     h�_D�?�'���&-�������E�!��Τf���x�S<��F�f�d�U4����ހ�[�@�/}�� 0�W��	���O˞4.��=��|�)W���?�<e�P��z�7Z���?̞�+�z/Tkm!�M�s`��O�L~5���8������^���a�E����n�m7������N��S�n.��ִz�2���#%1����t�=z
���c�z�e���sw~��m�[Wf#�!�!R�i��E������8/p<���}.��6BE�W�!��'Ώ��ߖhXB�F�&��p����L��|ƈh�;M�d���v� l�@�e�O��vh;��F�_�X���CCbX�~-���vv��o]fL��P��[��e�D���iM��O<t9��;��N��-A���q��3>�Y"�U����@����s�,4�J�c{�y,A�)W�P�A#ގ���xQ�o{������H�<b���ԋ��X7�B'����;+���8��r|����nA<��Q_�����Q�J�jFg���n��x�tN,Z6R�j��*�3B.T�c�zOh&X���@�7�6�&���x�o+[`�l#ѕF�8�����JV����ˢE�ӟf�>��}&�_q��6����1k #�C�����kE���Ԧ��#A�z�cA���ŋ�+��j� �n�(�W���P�Yݦ�;Y3����Z��EE��B
E��.�]�?�~c�i� ;X���U��F��3�y|��3�r�+��ţ"Bψ�Yr�E��ӑ�3@TQ�5��I�u@XE %�lx�
`�	�Vq��#uJ�0H	��ԕ�����S��?�0���$&��՚!�9.2�rFo�v�5�V�a�o�v�]���c� *�u�9���'�?N%WX4�����(�D�Z�%I(_���Ï�ҹ���h�Z �6@�ʲ�σN�<�zy�y�C�"K(?�-���Ji���){6@)*^s?BjE����<�=�OzѮ+�N$^6$�A���-�fj/�.�Ӵ�F��k���00��s�F+`b~J��� �H1 ��������I/�}�hX�E��d\�H��4�q�}Rc�#'���G����R�������ܶSG4�}\5���8F��^�f!I�R��MW�Q�N]��{�x�ػ��H*h��tI������d��;��������]���=�#w����@���JT	Ș��Z7��q|,!%o��#ȓ�+�p8��OH�k']=�V��f��f2S�jp��ɝ��j��P9M����ԩ����'v�:/�������qy�C4pv��#������l�}Wu��
>�s3�[%�_ꕱmʴ2:H�{ƲSNMDv.�ocN�߬� x)ϑ	��/���ETT��3�C8�+�g�rX��F���9Knn0V �)��.�c��72G�a�R��Z�1T+��X�f ���\f~/�)�����1;��oM2ga�
��+x�E5�,�g7�6q��)R�|D>r8m�I�t�9�U��(6����ie�Wq��������Ħk�!��-�iB��-/fw���ˣE<��y>7�N%����K��}����̿��S�*r�eۏ�a����_D�J���-G����5���p�,�Uu��%���{;�֘���<	QJp�%�1�'��1�͍"�8P ���纨8� Nlr*xq69�;�v�eG�RQ癲�����a� Lg" �7|;0�v������ѳe�b�,-�6����)�֗N�Z����U���C�o�\-/tţV
���Q5<��iV��PZ^^#)�6�{QP�'�\�Ov���<a<#� �g�#��2a��F0 9K����f��k��rwMR��ԬH��u�\95�yu�e�����?[�70Cћ䗢�-Ye�_5��>M�m8�,i��|��U,�rY�Ʋrg��V�!��x_bg4�<��nߔ���N�0"�ͣ;�l��V�nsѓ�	����2/�#��'��"Z;���؉�`�+��#�l`F��n���@q��.K�<3�3b2�>^)z�ڰ8z� �)��V��ː��=�n�W9�0����_��j.}"��C	�X���r5�dZ2�t>���B5#v�A�J�'gL1�x���0(�4k��?�ekӂF�1��v�{G�{%�1�,�$/�~��`�%=�k�ϵ����Ew8́�}k�/�9��&n/�eF,[��R������>�68�.ĨA�=�y������~f(?�	u�����TG7�Q� "+��(h*��+�.ش�?k�4�1�yd�]���2�(�Z�ϲ���C,g)^����!y(�$���7+�՝�ƑU�x&��pQK`������+�_sQ�\Ir �-n�9e�n��ba�泑3��G��gTy� ��1�Zi:5�%d���{�V��],�F`��IV
}*༲ˁ0���}TG*F#3ɨKf�"r&�͐1���3%���W����{�:ӌAi�`o-�X�s�oJ�S�X���X7Ć#aTp^4��D"#(�D���d}^���(&�K����T��:��$P뢏�y�"0�"P]�o�����,(��^�P0o�Y�>�}�X�@�P��Sm[/O�Ghz�i�T�es��=�_�!Q=��%�˒T�k������i��\,��81�0�.'�p1{%�u��I�+�t���_bR�Ps׾O�����nU+�Q��K�U���%=H�(���8�b
������8fex��� x&J�Է�F{�4TE����s!%!�Z��[E�3B���e��J���HßBޮ� �D�v��'����i�w��>�i�)���8b\���齼G�^�B�N�.�wp� O=;P���Q�zT)�I��y�)y�����]���s�ܖ��3�
e���`�\��ԅh�s�&s��6�ٚO;�v����O�0�a��Y[�p�"�-���Z�ؽ�D?����x#�Ч�7�]' ි*���0�sL�Y��©�ڮ$DigK���xStWQ���4+�Iā��0�>8l�����o�</�!oEю���e���(�[�����#YJC>�P����vO�}�g��w����>�Z5Ρ�ԡ�&X��)d�'>�l�����ۺo�~��Ԅ����6�'��>*���j�6$6Q�)	��&�W�mk��b�	��� lR��bN�!���t-�Y)6aZ��Q%�6q;�S?�N����7�d!�@��|x{��c��^.;.�f��m��_^TH��˶t֣PE%�-;��q�ehj��d��.A�"%f����؉�d��6�E�&V��h�m�:T���̌�ۻ���� Mm�t�M����g�o��=��Z�?�%�ީSc���e�)UQM]�$8�[)��gJ �^��d|�Ř���`�G�!�ǂn/eM�p�V���@�Z��צ���l�#Sp�z1|�F{A�TM#�/H8>Џ����ڷ�B��S�{��48'yzPSə��/7
�7f8a���
J��E�0([�c�e1
�k�x	 ��N��s����'�j�KC�lJ��4^����kܲjZp�-.@Cr���lɒVͻ�5���]Il��&��g����j+:�SKm�6����Hoͅ�=���Q���.�>�	�U�+�����\���h/���Ƶ�����r��q���Y��ֳrd��j�=4���������x9k�!�r�@"2}Do���7�g�A:�������o��T��cJ�ڋ/��Imߞ,�y�q�B�8'h~�p3�_�#�"VP�4w
����b��B&�;�r�o�R�O�d�G�v�V�W"���3��ja���?�4�_=S���9r���Z(D���9=����WK���9{$��  �\N�я�N#q��<�ۤ�Lx(���`���s��F���p��e��[Q����+!N�=�Z�}��?�"V�3֐�u���,�(%� A���v�}'�u��A��}:u�P���jk����f�>�8Ra�cLv�H�
�MD���1Dd��&�Z�\�S���x%��õ����Hrs��4�x[
��9d<d3*��4T�w%�J%a����ϗ�u4˰f����ƛ���q[���Vi�	5{yg��C҈<�lČ�p=�T��3D�p�����������g�+�c[6-�j5��4}�[V=���v���4��m�f�v��~	U {�ڨ��`~��������M%`z�.*��K �J��U�����RwB�`�{i�p�4o�;* !�&��?�����厛�&��%���/�ac�y�
�#,1${�5`A��h�9�.�^0`�/���h\a��^�h�d�ٲ�O�^ӥ&�?�H�g��&�+�Hl�Y��� @���h��:eS�G{�7�=(k�ව��=C�C��
r��w>�7^�4���v�ޏCa�jd�lٱFV��d��Vb����@��FP����$�B�BB�C6J &/�K��φ����(�E�?�9Sׇ��X�݆�G�w���+��*�Al��y�Wt2�˰:��!\��e�KrQ����A6?[�[�,#f(�m�� �i�
�pqA'$�_j%��7L���N�H�Kn� q�Ni���Bw�K��p���-�.d.%����˫e�}w�_D�M��`1Sx�*���qI�+Nٶ�p<�lF	���OVZ
��oY����lvn��<���>mg?5�]� o�K���&#�E1)��w�����%�b�  ڒY>'<0�7�H����g�wR�������u+!���6��E��Ry��u�+�{��]r��G誁���5b�A�!w5]%x�	�6pu����la����H�M�@H��\L��;���7!��X\��G׉�3V� �=9�\�U�P�q	H��q���csԄ���tiXИd-�\X�����t8q( �N�Da�����Q^1��͒j��2Q����*���y��UgDÅ��GH����6c��٭J֖�8p}��m�3������D���C\7�uӥz"S�$�:D�f�4Ǎ�+$���I�j�t���&
��zCaX{v���7�S�flH^R��C_	mO��������g�!��,�AA�O?���gF�Y
Y���5���.'gg�$�?����#1v)��3>p�܂x�� O��P�t_j^��`���/��nH��w�W]a��ɠ���m�P7��('cH�'�#?ޮU��6h�ʒ��g� |�y��'Ϗ�/�'�e�UV��؇o	K���d�����(�ޔݭ$n�o~Ӡɢ�\tѴ�nI.<� �x�rބU�b�x}/IkO��NyBr��ῤ��Y��RZ�q��9��
/�-V�,�-YO��"{�!���^���E�V�� (��7��S��"��԰�(/���.[X���C���*�3�H��ɳJ-���V�����l��Y��З�3_�%��AQ̻�ը!z�7��P��D\���Ne�/�'U1��_�i���ǭ���Z���s��6�jvb�мW���.JN���(>7��al+aN�#l�wI���F!F���ӆF��n�dqƝ��WQ����� �GQ�C�+�Y���Pg�&&��fx��R�¹����,��B���s�v���e`�Z����~�ezՕg����v�&�1��
>n�B�`�F�j�����H�i��,@Fn����0\3��5���E����	�����^�l���V),U����<-~r� (�X���ϟH6�P� S���PN�q'���r*@<�х�k�d&�ʡV�ݾr�d-7S��J��3��m�j_��} 8�+�	!�=H��nd�����e�F/uq@���Xs������d2D��f�7�F$�d� ��z^�"�H��a����1Go�"
���U���q�� Y�XCs��$:�&`��P)B�a������"-�9=N�ʼ} CW���Į�qbw�;w	�_SwB9��"&'��&�(Ֆ
��R��s�ؤ=u��ҵ�.gDU�$�� ���t�Õi��ǇM��r�ϙ��O"V� ,'��)�,�V/�m[��o����B������u���F�rh/�	�;C����L*�#�"�<W(_��`*F��,�_�S)�oUl�f�?zD���$T'u���Q������jI��9 6�q�;���pf�?���"�X�ߜ�P��4sgӽ����ip�����x��đi�ǿ0)S�U����?�sK"cD �.�B��k��ˑ'��<�IR���Z U��� �H*�������k����<���	_�i��R��̯�h!��H�����N���@׎��F����;S�G�:"^$�-�]J۴���Uv���z>D���f���u������r��<.�4P�A�������m�	� UU%Y��]h�:Oq�<-S�Z���F����JH�~<����8�׭����v(�Du�]2o����b��%?�9�/=QsvW@��ntu�ten'	N���=�J7s#kZ֭|�&�q��ڻ�&��4ʧtȘ���f�[��YA0�~oXڠ�����o���=KByHe��k)~�Y�s=^�茿���9�����/�;�l�b�2R�=�0k�C�����P!�Z�as0�FD%y�f��1�ur��Q�n��#4�(���s���^N�l�Ә�o?z7�d�,�#��\���|�U��Y߶J>k�ʌ���*N�n�<���'�l^X�m����E(��fBa����d��ɵF!62�k@��M%(�Vϓd����Y#�3t���d��Ws^�R>�E��:�h�>؍(�3�h��_��Ɲf��T�[�=V)��f��{�:2vc8tY��d�
�:+q'�z��R`)�}�0%�mmq������W @LZMAL� F  ]     h�_�?�?�|&�e"�V`��̒u�rV��dP�&�w���a&ӌ��`Wf��i��b���F�p�z�3�lz�|<��{����:A\�� h��1:�C�b�BDq�qm?��E��A��EV��19��$Tp�e�ʅ˦�[/[�ͅ��M��d������@��e$�RZ�ll��e�RÃ��R&-��4B�mj 5��d(`|�d��r%Y������������F�X���.;v]�}�f?TY�Qܭz;C��m��E"��5�8����wV�Ƴ��	�кN��~���V��4"4V�*@`�e����{�;���6��`�G�M����@E�QC�<��������}�&�T���T ��ν�U7�C2��q���;)\�5����L媣��'��0��-wx�R�b��@�GT�8�7��R� ��tm� HI���̰���yU�W�P���	^gk3۷	��h�=s�c�D)�����T��;���}������j�9;,�RBh/������/�����㟀�B�l�z��P��T_�	<ŞX�Lzpx�7S=���G�盼�����$��y!�?�e�Q�c  �w��$V���;&����Įl: ��D��b�h�F�>ɢ84Zhh��[�k�ɚ��c�Z��*��,t�'�p������}בO=�C.�b�ȧ)�-�}y�u?���P��k6�T�gg�}��g���C�O���fE�w�[���x=yD�H�lSȑң�7����<�'�0����&�k�]��[]�#���TH��2P̀������y���&�U�*�v0 4%K�A�h\k��,��lAU��G;���vq:Y��$��n�[E3*��t�Ҥ\g�!ʽ5
�ܼ��qf�}��e�|#��k�~��߆��8R�4�C2���̯-O��d�B��b��- �]���r�\�������Y~`��̇T�lj����D���CprA��S-x|���:�~�q�ѫ�B@�%��!P�^�9��`I4�<�ù?a&�|���u.A�wf����RR���^�"�!��T�~8N���=»^q��K�˧s�rv�e������i?Uj��ʶ�g�g�ͪ����t�����X�3V��N�)5u$��ϊ	Ş8�˵|\.6��S�WI y��=��<�^gn�_����	�D^"�l���6BDI"M�e�r�S ���� Z�֕҅(XUe�j�FP�e,Īl�:.k���s� >8�AiA^�"a��<���a���>�g�O?PF�G6z�@�[�?m,5��W5˓%��O;�?�Y�}�B����$�}�'�����`����J��ј o��Bw�Ʌ/}?�q�H�i.�v���~�oG�31����'=����=���_q���"��#ċ�ዊ��o2��i4k�nK['H�CQ1��,���~���1�N~K����z����n�/�-� oX�'L@UV��Z!��s����D��4��D�a�'���V�&���L�,���[�I�+��UR й͈Z�׿��+��-�6�Kh�)I��J+�b�Fxs�F�����hh�G����I��.��(ЦM-b2o&0[W�ت:�M.�q�-:�L�E\i�������Q-
��e쫄&��` �.8t�|M�h�
�s#���j�ȡ�j4��iS9[�g�§�zʶ��]�?N	k�/jh�Y���������ITE?/mK��!��4*pSh7��E��=�h#t�cL}3��_�u ��p�א��5�U�M�Ӷ�Q6�a6��O�w:�>��j%����&��s5����V!W2��xJ	�ɲ��Òsx��(�]���Z���3�d�"Z㶹⡛Hg�劄p�Z>c�(gY�!�1 �-2�Be^+͓E�(��*�u��02�I�����Rْ�u�8�1��qQ��G��½oW���9nk�H�}1���v]�e���U�����-髄��|x l�q���ލ.>�]#v�NŌ�M���^w���st<~@i�}�E�+�?��Ւ�d�N��FGx�OO°�m{�e�ᬤ�bP�F�{����*�$XM�Iˉ���lBU���1�޵�9��K�]ʌ��6yi�h2�2�*�8�&���~_�=�)��jNdd�^�1=��+?D�>�����
n{>1{�
���=��۩W�R[�NM!�j)�Ējz4@q��c�O��2��Q�3��s-�}.�;�}.g�M�+'ڑ��o5K��(�#�㋽�੺^�������~��o��]�s�{/�hA�I�;~ޅv �}�g���<�� &�I�>�݉hŰ�h��u�-k�4f!�u�!��&
��b����z�'��
��iHQ9�g_�,�s��WE��/�0q������P5��~�dSZ_ۥ($v���7�И��~�����E��lL�Yڃx���m ��[���
h�Ndu�2)��+?�z-������IUu�]�
^'�9��"+;:G#�*����/��2$ ��mCP.�㓘D7���r:�cCh�� ��]yCʵ Rsb��t{p�F6���i�:	��7�����|フe;��ʫ��c{F��^v�?���Q#JCQ�0�I��#���O�=��Z�D~8mɎN�ws�F�`jd��V6��TJ��y�L�B#��m��~�����&p�蠈���7���S�<��
�*_U��c6��#��3)9-�����3.��Z���Ł�:&�I��������
��uh#$1�D���q�3��"��V���o,�K3��-U�|?^�+�©��$��2�6�����M�_�T���h�o��([�DS�"��$J0A�N�ya<�-�ܞ)��(��Ak���>�����칇@#3fJ^�,�ᗫ�6�,}N��H<�O��$�G�WŽ�vp��H�Xj7�X�P�%T�RD6�Y���Lr�GI
�e}S_"��^��_<����^c��+J6+�c�.|���@�\���n�<� C�I�ۢ��`�7���ώ
g8�-Z�.&����a/�&�y�M�|�8�W��ӡ-8��S��#�ӕ�9�tu0Hr���fǈpA����r����0	z�~�չ`=?,��b8}��Z�=��V���-8j�A�1�)�!x*C�}E#�X\����0���E��?	�bSK�뼂v!-Ի���Iz��y�)����})����;pe{�2�h�F���v���,����-0z�1 5�QB�"��:.��MV~��ш8@�C6�=�^�r���"͚���1�ݡ&z�q��ġA30�B'z�xa)Y�t�rY�d��My|&@�βMP�l�d+�&V�j�Tq/�2;D����d�߲1	�ޗpe��� �%A ��jC�p�Hq�.��q�(�9�����{ %JI�FD��_��FC��t�������O�<�\�{�R�4a�����w5�z03}ұv��i�2��[������46Fg�C�������I�C�i���̱��V�\�(4_�m|����i��/U�⋊�(\�c}�#CI[V��q�|�ˇ��RTR��WqeU�(�����}[��i��*�ݷq�d�z�_��λi����E#�F!р�D�@�0�8{%| �JU���/G��;�_WWjC�#�^��T����q�6}^K��0nl����-zj���-}�+"�tG�Vf�sH�o���<�'�f]��?B	��]tl�<�,�0qi��������4��9ɽr	;������.���0�(��nӇ ��V��4� j����P/w��r�I���,T�L8L����z5�E�[�\u�E�=�&�[m::���	���sI̕pȫ���H�@L8n	��4&د)��4�>p?O���M穧}nu���hҼ*��V��Xb�t����sr鵡��)mx@7\ψy�Wm83���*+M,w��fԻ9ڳ���6@X��.&'v�߂��}a�Nc}cY��H}��}}p|�T���ȇL����f�δ��̊폫ȑ�I?O!�	{$���eKӁ[�'P�/*.J�w�|�J;z�Dʒ1��/��������7)���iފ-;�}\>z*�}���v}�e�j<�P%�"G� �t+Aj�!����$���ȷL������B`W[)�@�9&�z�f[]�t�I�	g����ZH6z��ե�O���Uvk�[��h5 [A�Qh�U�pV�1$*��6���KY��W�혮�E����bR�L��r�g�c��.ݭmJ������t�lgD��\ݧ	\��z�q1��J�Ϫ)+dˡB���17�J8^��k�̌�J�~ �1��bi��)`Hr+���raΪ�V�u�yG�K��RyƵJ_�x�7�t�����1?��Y_��W�K{^tSvx1�Xk�2D.c�֙�.��L�#���ԍ2O"<S���ok����5�]"��ע��71�1Ţ��_�$d�6)J?��i`����8y���Lw!�x[F��h'"z����������w,�p��׬æ�̶f�1�)���vE��qybx��?]�|I��(ߪv��7y��I"L��v�7,�0���c}	��I��Z/&��W�`d3�;c6sQ��h��E������ ��J��@-��
�G����l�h>��Ӄ�V�]����Ζ�d�mH,'�w��z��+��ԋ� tY��9ZKdKTA�r}�B�j�,,�5�8�>���$J+�����TO��応W�y�q�m��BB��Ixb`�mW��o�/B������t9��N�99����gܤn̖F��Ɍ���#圭-&>bY�/J�46ќ=O:��@'�?�p�:<K!�~x8@����Ȇ�,�p'���A�i:�ZK7O��Q�}�����2�q
��q3S���!6w����IZO�!������PU��mi���:�tt�K�1��U��bP�(⻥���rՄ%=v�<�⽽>��k9A�Kw��J���p�V�i�0�P�$PD�$68-�d��A���wb�¥��K�4G����M��YxM�Z3h�I�x������\��w\	��S�W���{�^�ĐF�!��wWy���G�*t��X���nE��-��%?ꁽ��kԱS�^У����!�Ͷ�B7�_�!J�������
����0���쎋A|�kbyk��5d��6��'CGS���\��Mt�C{��
I~'�6��C�O���M��fr�Xo��|���B Xl��z�Pg���0����8���L\8lʽ���9�������'��V��7^�̀�4�G)IV퀈q�v�����8Z���'�8մ�C�г�%��K�aԔ���m7�<�����Z�Zs�Z(jw�����s�kT=�V~��F��ε�s���=*A���j/�_C��tn�o�{W�ڎ�,5�kZ�զ±���(gG����,�w��$u�H��4��(�Q�+�,`TE���,˱�;�ړx�k�1?�38�C���lh�J��$�R������ps�ґ�HeA#��)��+�V}iG���f������a�}V�y������;���Hk��{���<���`�gӁ��т+�Q�u+e������dfrdN����4��cJQ��zG�z
�]��9V����0��]�ٺ�V�7/+C��)�
lޙPK�U��D�ʯ�^&��`������Upll�w����$gH/\�h� 4.��L��A��?��2�x�C��;�jD:�(�����n�h��gt$�i^:�e�-�0�#K,O'5*m��t�ٺ?�yʮ�;��� �/�����V��pu�r54��l5��Ҹ(���-ZC���3�fl�"?�" ���j� �\�����ճ�M.8a�Ϲ� ���zv����p.@�g9��p(�7�1&_jZ�y���4��K�:s�XLs;�֔{Cb���9
�##���2v��Ѱ�Œ�U`��ΰ���%1�|��n�S��ٿg��?ﾸl���h����$w+(���Si�%>��c�ex.���.?m��)iA����Ĩ��W�c����_�:�zg��z��F�?��mR��BDY�Ɛ����ǒG�0O]�U��h>��L�N�T�E� �/=��
͚ǃ��'���t���k��^Q�/;�2����-ߓt��,?�����z1�}�з�4�Q��B�����B1�Pʨ�0�]���6��!�Y���;���㶂F�L�£��z�1�9Ӿ�ސ�u'O[wk���Z˚?��E��2�=*IFEz�Ѳe%p�x�:��X����ssη����-*)����3���xl�FQjQӖ�t�b�c�q��2E�@}ۧ�@&z$��˛����(�S���G�\3%>�@Ҥ70A�3�LO���櫜]N�C�4sel���kb�J��S�r�7����Z�/o��<�+iA�x���@C��(mbȤa#����� [��@��Ԁ�a�[����e�p���\!k/�6d5��r��ȩ|!C���I+1�\����i�ϯ��?�e�~��?�c�Vn:)�^UFO(�;ZY7�ܰ�q����p&�>�E�.& z�sE����:k�$�S�C@�XTҩ���ā����a��Z�d�R�~�?���)���J�lU�uן����l�����Ē7<�w����zڥ�4!mn	��?�N��0b�Ҟp�0�Mb�q:-<��w�G	+�s�(�x�a^Ds���QLy<�q��CX�`�y��X�8D]R��m�����}6x�pɋ��R��_��g�xJe�
�鈚�h����f]��߭{��1��Q��&��)+<�� �����D�l�f��qf�Y���u�����k�e趸N*����q���׿�5S��;`
Bo�BPD�R�h�픂`��u)2d�^;U�^.�v��i�K�a�a��瑂�	t�7�ؼt<?�z4[ѱ^�o�������c�����ȸ��i�����>�[zr�2��/ζ�U��<ӄBl�JL��u����������􏥦�����l/D��b�u�i�����}�������C����ǧV����tb� ����� @LZMA� �  ]     h�_�?�?�|&�e"�V`��̒u�rV��dP�&�w���a&ӌ��`Wf��i��b���F�p�z�3�lz�|<��{����:A\�� h��1:�C�b�BDq�qm?��E��A��EV��19��$Tp�e�ʅ˦�[/[�ͅ��M��d������@��e$�RZ�ll��e�RÃ��R&-��4B�mj 5��d(`|�d��r%Y������������F�X���.;v]�}�f?TY�Qܭz;C��m��E"��5�8����wV�Ƴ��	�кN��~���V��4"4V�*@`�e����{�;���6��`�G�M����@E�QC�<��������}�&�T���T ��ν�U7�C2��q���;)\�5����L媣��'��0��-wx�R�b��@�GT�8�7��R� ��tm� HI���̰���yU�W�P���	^gk3۷	��h�=s�c�D)�����T��;���}������j�9;,�RBh/������/�����㟀�B�l�z��P��T_�	<ŞX�Lzpx�7S=���G�盼�����$��y!�?�e�Q�c  �w��$V���;&����Įl: ��D��b�h�F�>ɢ84Zhh��[�k�ɚ��c�Z��*��,t�'�p������}בO=�C.�b�ȧ)�-�}y�u?���P��k6�T�gg�}��g���C�O���fE�w�[���x=yD�H�lSȑң�7����<�'�0����&�k�]��[]�#���TH��2P̀������y���&�U�*�v0 4%K�A�h\k��,��lAU��G;���vq:Y��$��n�[E3*��t�Ҥ\g�!ʽ5
�ܼ��qf�}��e�|#��k�~��߆��8R�4�C2���̯-O��d�B��b��- �]���r�\�������Y~`��̇T�lj����D���CprA��S-x|���:�~�q�ѫ�B@�%��!P�^�9��`I4�<�ù?a&�|���u.A�wf����RR���^�"�!��T�~8N���=»^q��K�˧s�rv�e������i?Uj��ʶ�g�g�ͪ����t�����X�3V��N�)5u$��ϊ	Ş8�˵|\.6��S�WI y��=��<�^gn�_����	�D^"�l���6BDI"M�e�r�S ���� Z�֕҅(XUe�j�FP�e,Īl�:.k���s� >8�AiA^�"a����K$W�����t��+�ܞ�ՠ���

G	�5���n,w���4�!i'mZ���塃+�8�4 ��h'��܃� ��
r��N�VW���eK��ȃ�yO��r��������C��Ѯ�V�W��`�lTS�N�� fa�~J��
���u���m�����<�s�Ff2^���#֏�n����x�7�tyy��T�t
E���W���r �x�{���47��Y�Ι�1!`J�-=d��"��7"��Es��fn�����i����Yڳ������C���:Xtݚ*�BUn�=�| Q�Ϲ�t�j���`W���Y����#�Yi���?'�����;�:�Lpg%���8��2Pt��I��̂av!.�
�@�#``�i��ޛiK�%n��Z�z�/|�X����<�r&�
_U�;����?�$�R����0!�n|���2���2h���+r1lm�����'�A�j�	���F��2�b��(������&�}���	�8��y"�[�Q�o�iO��z�����I@���W�]ΝH*���:���6��Ϋ��֖P:*�;�V�v�y�f������4�:Qb+�#=ԉ;����:]�(L���^d�{�\%��&���*����9���,2��ء�q��S�j�8��+�737!���?Q�0ID�ۋ�-�w�m�'C���&N�4������0t�}!��Oٗ�Sǰ[D���#*�Y��kŤJ
ӽ�}��ÁC|�'�r鳱4�d���\����A���/ք�p}0A�Kc���_%e]z6UnVO0�mЙD]?�%)ʇ4��	t�g���+�\�GI�W�P�Or�L�w
0j��et�aLE���$�%�grkL�~�J��=a�Ekm�����E&9/��3F�F��Z8����DS1���%�������oa��-mvK����jDp�$��y����<K�ףׅ����>������������غ�[�UZ4�$f�D���1��S��u�i��s0�p����8��t=�؜�Ħ���8~���,n����]1�d��j�#6N*���R��o�՞ٴ�X��/Ӧ/���4�L��J�������> :����C��}&!wif�6;���y��r'=��������k�ᦎLA�9Y���'O֩3bf���$�0X�D�"�����W�-|dqpJ+Ȇkf��{��-�!���v�<V���W��L�(0e8�V�vs,��lHÔ4yY�ЄN��`����P��((]G�G���7�>����I8o��	���ZB���֕U�~��o�AKst^H֝�XC�uj�V�A��V/prr�r��ӟ$����b&�;���J���/�Yw� (#���S�Od����=���K�O�ɷ���{�wº��,7���^�)��h�C�qjϥ�9���g���uE9����(��`Mo���gj�%�R��=��R���t��]ǥ!.1%M����s/ka	Y�O7��H�R"2�y5:��+`�)��y~����/}h���
<��/�}C� �J�~���T����ż�̻(���'�rq`/�ڟ��*���w���a�u3�Z�W�S0��/ ;\ՋH���]�����}_�d��b_�����\�hb@��
LB�9A{�.۾^�t����澈�c�ҔH�c0H��|[���L&`f�.N�qH�%lX�l�Q�y��/�йg�%�L�'��U<�DH�����@[����L�p$G�`�����^XOp-u��tE�=���e�=�А��V0i
��^O}��
�r���WԎ�Eaw��+����Gt�:k"@X�O�셀ՕH»��\���~p��"�6�9I4� �7[����9������ؘ7ki,]{Q}��c��U)�)�(��x�ai���uE�-���5��7$3�d^���=�rr�8���/HͶH|�z�k��>l����X�9Ǐ;W�Xņ�����I���N��_�������Fw�b<
J��Θ\���M�3_��\}{�7H+��y7Y���48��#�h97�wM&TqAU����ϴ��[��-*�cL�
���K�$t��9�C���/�1ٿ�y|MAh�����Z�ЩJ���<�{��s�ʬ2Ҟe���t�y��z
O�$}(f��w�ƋP(6��?����]�#S�L�P���7�;g�����c��0��b��9��X�_����{*3*�N�{����3G	W�&�� >94���޸��ś���@7C���l�pQ+�������D`C�MT�h�]�]8ۜj7yM�Իj�A�~mS2�����@�?qG1�HY�g�y}>Z����nh��>��!������(Hʱ ��{� � ���'���P�p�e���D�&GW�h�1�����SǄ�����U��أ�E�o���Ȳ��p�������q�H�&���Љ���D����"��.��:�ƪ�TL4������\Z��L����?�����MW(h�|VMEɬ!� cxS�����aP��_�VK*�qg1���l�$5`�=?J��Z���G�U,��f�S�M�KЃ��B���n�ok���⌷�{�n?�̕��Be�i�Ԫ�a�븴�rG�Q(uz�.j>���BQ�Z5o�O�B)Ie��7�$
�b?��ó�6�'b&��R,mm�^e�{Wx�B���m�A��6�1�콝P���$��(���X��.hf���;�b�[F����M��N�6'�_�Ƥ'�= �j�;���EZ��ᥚ�-s�Vx \��ݕ��f��suuw������C���Lqш.�1�W@�@l���=�1"$,������j��WBK�臿J��:���o��JV�!��0$�d�5��vN/2F�1m<T�c��\2!;�aq�ٻ1"����X^m�ʽֶ�V�SF#�NZ/�0Tb�Sn�C�K�̼�� .;Hю�Z���(�7�Zd��_�Y-r���듉�߼d�Xf��5��U���z�+�Ҫ��,Q�U������V�#�Π�	�F � ����U1�&�C 
��Rp����:,��5"�m*t���L��"�#P��������o �:c	oJrw�1ID��	��Jl^��mF��@�M�ZAʝ�Moj�a���̋HSΩ#��!�Z;��sE�7b��X..�9m1}�'(mf���3����Es���K�)���>%��:�^��&V���i��yϒ-#D�
�վ�,tt\��������E��K�߆���P��Y��� ڢ*�����w�1�$��󢗳_
�/�ELK�gO+������
{^�n~�O�_���͛Y���)�ei_y�4"���FYW�Wwv�bp�MD��w�^��4iD��������>Q}�;�^#���?�몪�19>����5X���YG�����a�����y�^�R[��:|=E$�l��p�B0�@�=�?�(�M��Px�~|d����а��D����{}��}" �͉�Mn����(�j��<�4bJ�~�8"z	���/5:�-y��ڑf��lXH�5|����0�?;1���[�u=�$����
���ƱfgL֭�Naz���x�Ƈ=�&��$�R�\qy$A������������+Nb�U�׽ߣ�Ln�)ХO�A��/�Ĵ�D��+܄�6-�Zf�b(�'��DH>� 7]�
Ad���i�����ץa�JQ"O���&�|+�Y�"�=�ʫ��h�x���vn����-Uӗ�9c�������v������s죈8�SG��>f�6��p�U��	�Zc�7��Ä5��[$~X*�O$o�1��&������e�3�M�����{�+msϬ3�t�
C�'��.mw�2ڻ�EOf��w.�/Սe�V��/-��Xߋ����|��}a"�F@&����)���=�fߟ����DR��q��\�T
�dtJ�u%Tx9	&td�1f�<e�@��-�oLg�k Y	��L�V�D��D�֒�\���*`Mr-~fz�Ӗ�[H%-D�K�ʥ�ˍ���Ҋ��]��V�ar���[�ƦU�z�;t�Yv}|kn(�奙�-lҪ�e^��+D�� <l��kӼ�(p�5/����V��I�DO����pd��ź��vW� �A��-�]��1�x��/G/�ƓS�N��qT�G����xf��ןU']�N%�A�nd�2�n��7��ú�X����y���-f[u\Ht`���Ӫ, ��:䊍�ɉC٧!p@@P�V̑��R�Ÿ*�M�<�y�u�⭅;5e�g�����]�x�|���X�m�	����6�0�>Z��R!�.##w �f�L׫�3��*�~8�X.{�S����ԧCN,�'��)�UZ���O�����*�������y�����*n�5� ��K�ɖ��� 4Ҭ�p�5�q)|���2uq�NǊ;������;j��H��l� O[<�Uƹ��lU��
{%�~��;f_�F?�$�x��G��8�o��&�k��������j�Z��ÍiI��S�������?�~z�\5�����ؓ����}�M�ЀT�\��X�V%NAZf��������x%��^ 
b6�f�����r]2"=1� c5��4`s^�Gf3��C��R�ayBz��ì_�k���&��sKbh�*�:���"���tB�{������sXM��+:�-Q����A4�Ɯ�r	0D޿��aBݝ_ԩ�����`7d���cV�a.�1w-/��3���^��bQԉq5��%@{h:V��T��"E�I��d�P܄�T8�qP4���������(-,
\0s��P�k`0sE>@�|�z��E�8�� �4�_���)���w
��%I�{L�zفb8�8N|d��?g�ku��L��\���ʽ�����������9{�쫘|��#~�3<�C$���EW�z��tFkH���jKY�����C#��������Xd��tf6�b�ܿY�1���@���%�d$l7�h</-�l�3��N_h:-w�b���	S��fG��5��f�5Tk��V`��nL'�Kذ�[��#�7�G��5�_��RsW�?���ijX6t�
^ve�ҥS*)��਻��g�ؑ
�I;�ԙ��1pPկmr�o}��z2 �c:��喾���]nNP!�C{\�� ���&�F-/��}R���E���~�F�B?�rϝ1��#X�)�ft�.\
~��#5�Q��v%	Eq�Zad]��Ց?ҡ�m���/Ԉ��=��I�V�� �C�kA�iP�0���q&t`sb!U~�Ma�3m@�;\��ļ��/&Pv�H&��|��1����TmU���oYKIʇy�Ќ�Ղ�8&�u����r����u���)%5�X}�`PҳR�?K)V8��oA9T2�lsM*�����"��c��~1�-�Iؽ!�͵�4�4��d�
���YF0����x��a5��/��y(=^�.��t0Y�U �{Nd����[��Q��>�=\<gk��oU���r$HMb���juO�I�W��#m���m]S5I]��" l�?$
�o�9`�}��L�=� ��K>S�'?���XLm�H	���Z>u����]���_ߢ�9�
�ɴK6����d^5v� 9�E��;Qk��v2��o&ʘ��8�����LB��|�RTI�l��k�ĚLy���ѩ�)\���������Q @LZMA�� @  ]     h�_���,�)Ȇ�/��-z�\&o�P�T��A�TO��r���C[��rN��i}��o�*�p���R�VZAJ�4��6MSǓK�'���e�~z1g[W�MM�Q�	]�	�G��,� �6�'��t�V~�
s���1����pE��$�~__��ŭS5'�F�5.�*A4rIQ����ldEb3.��%�@a�4Z�T>��V�����t��ܝ�J�tW�P�?�~48i�]+�6.�!ԇ��:	�(�MkC�� �x�᩺`Z��\ހ�B��d��v~N�,�k�M=�o��]x��,���R����,���6DB)���@��[���7cMt�Bi��H0���Tb(@�ĥZ��N�f��H%�}�owdj�|�N;����5*��S�ͫ@�� �$Il���>`P�#�Lki����i��VD�����u�Y]F�!�N���J�q��f��I���JQ!~>S��e�F#6.�"HCՖ{��}B�d4�}ʰYV`(D�X�#�`��N%>�ݒ|��_�C����f3��$T�o�X���=��r����m�)�S�1�2̻y"�뷓�ކ�yU��(A��vO��b}�;�̰��T_��o��� �CK@�a�$�9�orn࠿.�Η�JQtvn�H������Ey6VR������/�)�bJ��š�97:"��
�i��>���2��ձ��F�,:�H#2]��	n9��`��3��ݑ+�NA�4z������#��7�A)Ynχ"�� ��V��OK�XT�Ȩ���Q����YO?�S�7�͓����2�d4�3���[�����J�8`��BC�ح�'�� ���CT(���-ZS�E{�6�+���f��A	z~��J�$�Ѧf�B�Q9d zIdYB�Fj�k+a}��h�1U��^���L�O��t������M�R��e6������g=¬���I��Y��l����]�PC���~�x\t��V�r'm)�F��J?@Nf~HX5����&���3�'"��a�3 ����U�j�ﳊ]g���Y���u����|B�0F��υދ{�9;�6�-�����<� L��5�$4%,����ȁfxNٚa#�FΝdσw��T���5�#��1���7^'d�����P��{.ǠF�K��d+;-������J���w:@�1�]�Q�Lm�����f�^��^�@���Xk�~�P:%����t1�� �����rh5f�����6�qH?�zL�>�@N/����-�Xh͆C����j�b�'���M�q�M��� �l��}K����_�7
�!F�K�7&j��"ҷ!0	���r�zO�|���ٶ�1�q�����Ȥ�^?���b�H�Q�\�A��҉BŞGP�G�9k��l?^e(��p�N��cFR�C��OB��We"�w[Y�M�NP%�;�q���sU�c�6+.�6��<e���9>s����Q�b�Ug�Bџ���n�j��t�V��Ge�:�a	��7&�d����Z$��4�ő���]���~Q.Lـ\�� p.���G&��5f�����U��#�H4v�a���P�.�5\R0��a`M�O�_B��������5M�t��:J d��hw%��
3���	�����`���#*��9X�n��yb�mk(�b�T8���w�/e��E�i�>a�?"Q��m��OD�2���:��2:ћv�~���䕄�j��U�2�nC^�j3���c"A�VL�y���i�(�]�O��;��|4ԁ��ۢ�	�ڋ���6ni��S�i����[���m'(w���G�r_Q0�ڌ�� w���=0�k_�1�.�%��@/�Z�xgk�b����q��X�"�4�̐c�i�#fq56�C%��7���6~@��D-�ە��|�p���4F�d_o�;뷺잨'b���\8OIt��Z{�=��L��7�ؙ�Y����n�$m2��;���s6N a*�FJX�I�|E#��9;]&%����c,Ңv�g��:;��u>�TՍ�v�X���F����}� 3�s����Hu�B 
���r���'s��Xr�F������m�⢃�v��Q$���(�#�Ԧ������4�3���P���-��3����T5���^,�@�pI�
�/:	x�[����L�Y��
祌��g�y�1l��s���^��b"-$0�E�S��=�Σ���Y�T�Hk_(�⿉�@;�d�?�c\�`!�����/�3�\���q��IuxO"=o����"��T�ҫ1c�����v��U�xX�����~1U:�?
�V���s�L��\B�X�NN�r5��d��#r:qWhap��6�N�f���4-x�\�F2>o��k+��t����.�D��L�{�Y��'b\��V�&����5f�T9�}P9O;�S>�ᄸ\�a�a�*��F�
E��׈M=�� �����@!��:�r��F�E���u$�mŭh`z�����뼕�n�t�WF"V��������+@��ޤ�q�나j�EȊ|~D/ɻ�7� �W�(�J�/�?D"��� Y�Ł�ﬧ�����l+�[{Nx��sm�r�ɬ��=��Ȇv�u�·l ~`<ޓ��?���\a9��R���  �,�}�1��G��d�W"p`�;��O��h+C���5�E�᭝J�[�H@��5�.d
tU�C-�J����b���
�9X���]Q�����Spn�+M~ɪ�ćC��/e�ro
�zi�B<��췔Ж���(�Ή$xɘ�+���{�g E��X^���`HK O��io��^ZY�Gd5�6Z�W�Ε��+0ۿ�e��<S��ʪl^fn�W�����Y�@�˂���H��s%���ʩG=(�r��ǎQ�kd�[�0�m�m��H���%��1S�+6�s�T�2�D%А�۷C!�\��2_�[J��؄����p�nM�;[��D��W�c2狿B=��8���������H�W{ ��g�Re-�����&�������7�+�~��W��p�c���H�#a��Ya-��qt.]���E��{R������5+w����y�v�H��ȉ8�CM]B�E���N-�0�(��z����N��l�f~ZrѾ���a=����{X�P�.kmk�~^�y�h��h�lື��	�q��_���T�P}��B��������1mIͦ��4/)�{8R��<��$�u�;/x
�=�G�����,�b��e�r@2��ؖ��Q��J�l5���b�d��B��`_
���AE� �9��������㥽� �1��T2T(�J�~�(�rJ�N
.��=5d(LT���ٚb��<���p�G0��'���AS��y�ݬMtT��<Ж�`���P����I�isX'a�c�<Q��~>*I�V��Lt��e�e?���W|��Zz�Y���f*��7�����۝W�����%�N�Ű���3I@�hQI�� ��9SÐ�3���
�ʵ٣Buc�ݵ�|�>TÃjI��`sXOu�7^]4ý	ޕ �tؒ��%nN02ڍd.H������R⏠tt4A��� �<���M�e0�r�E't@'����*w^��>�U�I���#�*,Px���!���+ӵ#�|��r o�GQ-�g20QԘ6�=��V��p��O�%��A�GSp*e&�0X�XFMO�D����}��6 �25�AŖS�`t�(GT�W8�(���ef�g�ۼ.��Kg�O㱋o[�����Ȑ*ʢ��P}���\8~�$�&^#������I���ZH�TL���ˤ��1g���'��7ᥪV�/(r,�g��ݎ6Ғ3}⧝��R��M���?�O��D�QL�ܰ�<��;�JJh�9.��+�tE�ǫ��l4g�g	���n��v� x��M�;h�Dm�	��6v�uyy�����3"�"��&.�2�nݡG]]²�	S��1���3���v5��"�A~��>�x�������n��r�&]��#3�;, w)9��)���	�����)`<(�
�-�da��ĭ7&�V�`|�n.�@y�|���YU�Z5�Jv�ݼW ���ˀ �Y���l�x���h\���b��O0��9�A���UǱVn
sy�is��y�h
�I���c>� o3�u��Cq�k���hBF=H1��`9~,�PQ`�p��J�ބ�������\J���$%�m̞)Mc����W_�z�"����4F$F	k��g���F��!$��P|z- W޹g�[�eR0W��_qA!z"�j�㎀ڛpٍ���A����'�8�h���f̓@;�մ��q��0x�J�z��m�|Gd �%��X$a�"��D��m���W7v�1�_�(N���e��X�C�vy�v�(��ʔAeYk���=�E��Ů� �?"�W��
�5a���DS����������&�< %^6.�o� ���F�W��9�c�x��k�i���[�OR8�cԳe��6P��&��O��h��3w\���R��_����Z�رT;�W�rK��U����[]�Y;��7߰��h������ʈ��2k��Ca��°��B:/Yhs�����JU�ff��ը�TD"\.e�D�zs	�F!7)��J�[�1K{	���T<\� �W_`E����6���s��B{ÿ�,\�f-�A˕��kKt:�q�u��^p���M���W���_P��T:i�4S=�/�~N���TW�Ȱ'JOc����{D�j��Q�-P���@$ v�I̿Hfn�#�&�������Z�$��p,cB����ξ{�Eɘ.�#p?���U�~���]&�(^V7���ٍ�"��E�7V�S)��Z�!��܊d^��Z1Da�Q�m:����@��}��Nc����U��(ѕ��#n���"��|�d��Vg�2[)��l�,?� E%�Z�[a=�l��e��K�^��2�ס\}����t�[#S���@p*zJ����j�v��Y|a�g�!���#ԣ ��"@�?[�q��?(��]�S�!�y4Q�,M�M�֓,��WQ �]t�!���G�^�W���yf�����'��*փ��Pe�������y��7��!�Xi�T��0���l�u!�^��P�c������N��|��G��'�
�r���@i�5@$j�יִHd�x%	X�͜���L�؇[�-��o�r��"�Ȋ +4���k���r��Y�I�g!F��TW!@$�|��ҧ��]�����:'�I�r�"8ۦ�<�'~ౕ��4����@�~�����c�|�:m�,I�
Y��fa����>N]z�w,���^\��R7.'��Y@� ��n<�����{d?L� tc�67�U%Mo<�������B)�DS>\�B�K�X��� P�I�@��A��}�a�G���e=����n��4FA�u�Zc��'N"VW���s	��}xWᡊ觝1�R�Y�2��`�d����7����b֔�K�r�K<��Eg��S��C=!V��"�.xQ�#q�-m���c��w*_}� �R�-z˻-$7ίH*�d��/�%�1V¢��6���쀶*�	B�|2� ��[K��b[5G����ef��Rp�P9:e_ge,|�_�qG7�'��˼s}h7H_���gz�z���7O#�P҈�t�Dz�NĞ�Z����C�":)$�GsO��@�	�F(�Y|��м�������s����7�9�yd��t�b�u�p�t!U�uД7����ܧ`Z+J��@��̤�O�@
�G`�'�:yس�<�ju(� �_7ĩ�	���Y�N�G_�M�g�`�����89�|g�W�U{�T��m��~$���zC5����x���0�*���9���V���y��kJ3B�]<j�v�FHs�ђ�ud����@��O6��V�E�-)����G�o:lE�Xk�*#'�c؃z�u���
,uyv����E.jb����Tە�^�^
��(d�P�A��%���zs�z�G޻倒.Ta���
s����h��K:�����u�7���쁛��c�Z��U��������rm)�b��m�����Ɛ��#�Q���O�`)�U��Qf�iR�����G3�PO1-�U.���Q�-�1�}*2�I,v�⃠��՗�*�5f��ry��֏a�.B_�q>�{��PSK^�1�I�3�ϴ�h
N`�b�U���l)��6���������S2b�.5z���%�ф��t��ڲ�=5P��-� !�� H�6�����8�-�����Ra��&��E�%Q�Ù���J�8�F��؇槹�N�q8uFk�F�eU�H+SS� ���x�������%,��D�Ğ�_���\��de���ߝ����_���[��(|�ص�~>��0�-��iC'R��'t0&�j݉?႖���0��>�O[&�g��H/pU	p4sԆ��	qn���7�Uǐ�N͌����"r�����+._}�ff����F�N��L�GL�a�Ɣ?�����x6���m�H
����0����ٝ��*���Z�R�P�i�8	 ��Ƭo���C�B��r�?���)��g�BL�Z�=��+�q�&�A�2�Z*�Ku��74U6���\|�
^��!�hDe��XK��6���<��� /�
��
/`d�'9�V�r�k� ����
����Ʋ����W�֣�A:؁�����0���i��,�����gý���s����/��J���Ƒ��TC��V�`�|��w�
Dk�Կ(?��_�B+E��u�\��O����%t8��8��C�1�j�oQk2}�t����R) ��������Y�f��4�ޖ�:�=a"�`2��Q��'������ԉ���� @LZMA<� �  ]     h�_���,�)Ȇ�/��-z�\&o�P�T��A�TO��r���C[��rN��i}��o�*�p���R�VZAJ�4��6MSǓK�'���e�~z1g[W�MM�Q�	]�	�G��,� �6�'��t�V~�
s���1����pE��$�~__��ŭS5'�F�5.�*A4rIQ����ldEb3.��%�@a�4Z�T>��V�����t��ܝ�J�tW�P�?�~48i�]+�6.�!ԇ��:	�(�MkC�� �x�᩺`Z��\ހ�B��d��v~N�,�k�M=�o��]x��,���R����,���6DB)���@��[���7cMt�Bi��H0���Tb(@�ĥZ��N�f��H%�}�owdj�|�N;����5*��S�ͫ@�� �$Il���>`P�#�Lki����i��VD�����u�Y]F�!�N���J�q��f��I���JQ!~>S��e�F#6.�"HCՖ{��}B�d4�}ʰYV`(D�X�#�`��N%>�ݒ|��_�C����f3��$T�o�X���=��r����m�)�S�1�2̻y"�뷓�ކ�yU��(A��vO��b}�;�̰��T_��o��� �CK@�a�$�9�orn࠿.�Η�JQtvn�H������Ey6VR������/�)�bJ��š�97:"��
�i��>���2��ձ��F�,:�H#2]��	n9��`��3��ݑ+�NA�4z������#��7�A)Ynχ"�� ��V��OK�XT�Ȩ���Q����YO?�S�7�͓����2�d4�3���[�����J�8`��BC�ح�'�� ���CT(���-ZS�E{�6�+���f��A	z~��J�$�Ѧf�B�Q9d zIdYB�Fj�k+a}��h�1U��^���L�O��t������M�R��e6������g=¬���I��Y��l����]�PC���~�x\t��V�r'm)�F��J?@Nf~HX5����&���3�'"��a�3 ����U�j�ﳊ]g���Y���u����|B�0F��υދ{�9;�6�-�����<� L��5�$4%,����ȁfxNٚa#�FΝdσw��T���5�#��1���7^'d�����P��{.ǠF�K��d+;-������J���w:@�1�]�Q�Lm�����f�^��^�@���Xk�~�Pq	j���S;۷���r:��y��=��z�Z3��7W��cf�ջ���<s��՗x#`�N�c����chֶ�A��ܡ�'��9˶?�w=T��W�.̑��Y���YD�Ѱ�7�26'��8��'�[O����R�,x�@������IZU�*㝶�r��n��b�)�,G�����
���� ^!O���{���H�{ᄫ|Q6Bq��`�d%�?��P��F9xʾ����Yt�۰�^�=�$"�������8:�n���dA��vN~*�����~�˱�[�{&E�G�����|/1�G��lp���s���Ì�?����-�M��p��Q6�m^��S��5�_T6�cn���J$tCWy�{��xQ�4�����]iqT	#;M �"k��=�.�GR)Ҫ�ٹ1w�Fq��b0�.�j&����S���m�T��D�S-R�S�>��H]z��6E��D�c����޼�h㡆��I�h�`�������X̂�0Q��\;��?�Ry]�4a���`/�$1Q�등1�\/Ȫ�H��k�y�Xb7F�0�������3�i���v�/|:�_\V�$Ƒ�æd�U����JhE��O��je�O�@J�K�@�0��њ��f^��K#>S�8J!�@W��A�c.7�$����He��F,�'����Ҁ/dX�۸�f���ު�"w蓷v%����'X����Rc��J�YV�S�J�u�#�=��
L��d_~������'� ^���D��]�����[g��$�����n�M� ����	X^/!�ay�)O���@�{w�ȩZa>=��7>w���<�<6����%���=R���^W17��SyU㭾1L�"/��-<؈�%x>���7z�Z��R�}&!T�&��k,/��f��n����y��+:�痗��/j�s�&�7tf��Ǳm$��h%
! ��&H�hɳ\
�8ބ[����fS��2��"�d)�����ܧZ`��*'��ȺS�}���E,ح��r�� 8��Ŗ��޿� ab��(rV��:����];F���Ʃ/�f�yV�+P^�c2x3;����j0X���=f���rk3���tze�����@xo�Q?��]��,5>9ՙ�Ao�����>�kK;��������x��R��E��)V�]�WB�#	� i�J�M�\9�s$Z���ue��8���V��k���`�B��u-���l����8ჾ�۳�U�\����)GY����9��B�?
��Og1��M��L���L���5i	�2ȭ��x�%?(Ћ�(-�5ǘ~���7H�>�|�g�#:΁��7�-��E�!���^nN�(������H�0f����:1�j�nb@�P�<�jv��́>ΤO3���ZWH�p-
2��g�y��v�y�(��
<�G�v_چW���>