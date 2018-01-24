package main.prototype;

import java.awt.BorderLayout;
import java.awt.EventQueue;

import javax.swing.BoxLayout;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

import java.awt.Color;
import javax.swing.JLabel;

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
		
		this.setSize(400, 200);
		this.setTitle("ACM-AITP CoursePro");
		this.setBackground(Color.RED);
		
		JPanel panel = new JPanel();
		getContentPane().add(panel, BorderLayout.NORTH);
		
		// Left side
		JPanel panel_1 = new JPanel();
		panel_1.setLayout(new BoxLayout(panel_1, BoxLayout.Y_AXIS));
		getContentPane().add(panel_1, BorderLayout.WEST);
		
		JButton button = new JButton("CSC 116");
		JButton button2 = new JButton("CSC 216");
		JButton button3 = new JButton("CSC 316");
		panel_1.add(button);
		panel_1.add(button2);
		panel_1.add(button3);
		
		
		// Right side
		JPanel panel_2 = new JPanel();
		// Used html only so to add break <br>
		JLabel main_page = new JLabel("<html><p>The main page for the <br>CoursePro management system</p></html>");
		main_page.setHorizontalAlignment(JLabel.CENTER);
		main_page.setVerticalAlignment(JLabel.CENTER);
		panel_2.add(main_page);
		
		
		getContentPane().add(panel_2, BorderLayout.EAST);

	}
}

