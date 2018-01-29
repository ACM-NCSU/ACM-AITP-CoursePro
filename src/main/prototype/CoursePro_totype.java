package main.prototype;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

import java.awt.Color;
import javax.swing.JLabel;
import javax.swing.JTabbedPane;
import javax.swing.SwingConstants;

public class CoursePro_totype extends JFrame {

	private static final long serialVersionUID = 1L;

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					CoursePro_totype frame = new CoursePro_totype();
					frame.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the frame.
	 */
	public CoursePro_totype() {
		
		this.setSize(700, 375);
		this.setTitle("ACM-AITP CoursePro");
		this.setBackground(Color.RED);
		
		
		// Right side
		JPanel panel_2 = new JPanel();
		// Used html only so to add break <br>
		JLabel main_page = new JLabel("<html><p>The main page for the <br>CoursePro management system</p></html>");
		main_page.setHorizontalAlignment(SwingConstants.CENTER);
		main_page.setVerticalAlignment(JLabel.CENTER);
		panel_2.add(main_page);
		getContentPane().add(panel_2, BorderLayout.EAST);
		
		JTabbedPane tabbedPane = new JTabbedPane(JTabbedPane.TOP);
		getContentPane().add(tabbedPane, BorderLayout.WEST);
		
		JPanel coursePanel = new JPanel();
		coursePanel.setSize(MAXIMIZED_HORIZ, MAXIMIZED_VERT);
		tabbedPane.addTab("Courses", null, coursePanel, null);
		
		JButton course1 = new JButton("CSC 116");
		course1.setSize(150, 25);
		coursePanel.add(course1);
		
		JPanel tagPanel = new JPanel();
		tagPanel.setSize(MAXIMIZED_HORIZ, MAXIMIZED_VERT);
		tabbedPane.addTab("Tags", null, tagPanel, null);
		
		JButton tag1 = new JButton("#Readings");
		tag1.setSize(150, 25);
		tagPanel.add(tag1);
		}

}

